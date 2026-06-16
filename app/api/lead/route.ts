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

    await submitLeadToCrm({
      resource,
      email,
      source: source ?? "resources_page",
      name,
      company,
      message,
    }).catch((error) => {
      console.warn("Lead CRM integration failed", error);
    });

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
