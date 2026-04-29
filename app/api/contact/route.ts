import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { submitContactToCrm } from "@/lib/integrations";

const liveChatRateWindowMs = 1000 * 60 * 10;
const liveChatMaxRequestsPerWindow = 5;
const liveChatRateTracker = new Map<string, number[]>();

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for") ?? "";
  const realIp = request.headers.get("x-real-ip") ?? "";
  const firstForwardedIp = forwarded
    .split(",")
    .map((part) => part.trim())
    .find(Boolean);

  return firstForwardedIp || realIp || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowStart = now - liveChatRateWindowMs;
  const previousAttempts = liveChatRateTracker.get(ip) ?? [];
  const recentAttempts = previousAttempts.filter(
    (timestamp) => timestamp > windowStart,
  );

  if (recentAttempts.length >= liveChatMaxRequestsPerWindow) {
    liveChatRateTracker.set(ip, recentAttempts);
    return true;
  }

  recentAttempts.push(now);
  liveChatRateTracker.set(ip, recentAttempts);
  return false;
}

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      phone,
      company,
      heardAboutUs,
      service,
      budget,
      message,
      source,
      website,
    } = await request.json();

    const normalizedSource = String(source ?? "website_contact_form");

    // Honeypot anti-spam check (bots often fill hidden fields)
    if (typeof website === "string" && website.trim().length > 0) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Apply simple IP rate limiting only to smart chatbot submissions
    if (normalizedSource === "live_chatbot") {
      const clientIp = getClientIp(request);
      if (isRateLimited(clientIp)) {
        return NextResponse.json(
          { error: "Too many requests. Please try again shortly." },
          { status: 429 },
        );
      }
    }

    const formattedService = String(service)
      .split("-")
      .map((part: string) =>
        part.length > 0 ? part[0].toUpperCase() + part.slice(1) : part,
      )
      .join(" ");
    const formattedSource = normalizedSource
      .split("_")
      .map((part: string) =>
        part.length > 0 ? part[0].toUpperCase() + part.slice(1) : part,
      )
      .join(" ");

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Create transporter with SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Sterlixit Contact Form - ${formattedService} inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #6366f1; }
              .value { margin-top: 5px; }
              .footer { margin-top: 20px; padding-top: 15px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">New Contact Submission</h1>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Sterlixit Website Contact</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Full Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email Address</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Contact Number</div>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                <div class="field">
                  <div class="label">Service Interested In</div>
                  <div class="value">${formattedService}</div>
                </div>
                <div class="field">
                  <div class="label">Lead Source</div>
                  <div class="value">${formattedSource}</div>
                </div>
                ${
                  company
                    ? `
                <div class="field">
                  <div class="label">Company</div>
                  <div class="value">${company}</div>
                </div>
                `
                    : ""
                }
                ${
                  heardAboutUs
                    ? `
                <div class="field">
                  <div class="label">How did you hear about us?</div>
                  <div class="value">${heardAboutUs}</div>
                </div>
                `
                    : ""
                }
                ${
                  budget
                    ? `
                <div class="field">
                  <div class="label">Budget Range</div>
                  <div class="value">${budget}</div>
                </div>
                `
                    : ""
                }
                ${
                  message
                    ? `
                <div class="field">
                  <div class="label">Message</div>
                  <div class="value">${message}</div>
                </div>
                `
                    : ""
                }
                <div class="footer">
                  <p>This email was sent from the Sterlixit website contact form.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Submission - Sterlixit Website

Full Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${formattedService}
Source: ${formattedSource}
${company ? `Company: ${company}` : ""}
${heardAboutUs ? `How did you hear about us?: ${heardAboutUs}` : ""}
${budget ? `Budget: ${budget}` : ""}
${message ? `Message: ${message}` : ""}

---
This email was sent from the Sterlixit website contact form.
      `.trim(),
    };

    const emailPromise = transporter.sendMail(mailOptions).catch((error) => {
      console.warn("Email delivery failed for contact submission", error);
      return null;
    });

    await submitContactToCrm({
      name,
      email,
      phone,
      company,
      heardAboutUs,
      service,
      budget,
      message,
      source: normalizedSource,
    });

    await emailPromise;

    return NextResponse.json(
      { success: true, message: "Contact received" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing contact:", error);
    return NextResponse.json(
      { error: "Failed to process contact" },
      { status: 500 },
    );
  }
}
