import { NextResponse } from "next/server";
import { serverIntegrationConfig, submitLeadToCrm } from "@/lib/integrations";

export async function POST(request: Request) {
  try {
    const { resource, email, source, name, company, message } =
      await request.json();

    if (!resource || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    console.info("Lead magnet request", {
      resource,
      email,
      source: source ?? "resources_page",
      crmProvider: process.env.CRM_PROVIDER ?? "not-configured",
    });

    // The CRM (or webhook backstop) is the only destination for this lead, so
    // only report success if the lead actually reached one of them — otherwise
    // the visitor sees "captured" while the lead is silently lost.
    const delivered = await submitLeadToCrm({
      resource,
      email,
      source: source ?? "resources_page",
      name,
      company,
      message,
    }).then(
      (result) => result.delivered,
      (error) => {
        console.error("Lead CRM integration failed", error);
        return false;
      },
    );

    if (!delivered) {
      console.error(
        "Lead: submission reached no destination — no CRM provider configured and no LEAD_WEBHOOK_URL set.",
      );
      return NextResponse.json(
        { error: "We couldn't capture your request. Please try again shortly." },
        { status: 502 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Lead captured",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Lead API error", error);
    return NextResponse.json(
      { error: "Failed to capture lead" },
      { status: 500 },
    );
  }
}
