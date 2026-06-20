import { NextResponse } from "next/server";
import {
  serverIntegrationConfig,
  subscribeToNewsletter,
} from "@/lib/integrations";

export async function POST(request: Request) {
  try {
    const { email, source, tags } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const { provider, delivered } = await subscribeToNewsletter({
      email,
      source: source ?? "website_newsletter",
      tags: Array.isArray(tags) ? tags : [],
    });

    if (!delivered) {
      console.error(
        `Newsletter: subscription reached no destination — the "${provider}" provider is not configured ` +
          "(set NEWSLETTER_PROVIDER=mailchimp + MAILCHIMP_API_KEY with its -usXX suffix + MAILCHIMP_AUDIENCE_ID) and no NEWSLETTER_WEBHOOK_URL is set.",
      );
      return NextResponse.json(
        { error: "Subscription is not available right now. Please try again shortly." },
        { status: 502 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Subscription received",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Newsletter API error", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 502 });
  }
}
