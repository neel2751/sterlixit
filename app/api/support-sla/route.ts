import { NextResponse } from "next/server";
import { submitContactToCrm } from "@/lib/integrations";

function toTag(value: string | undefined, fallback: string) {
  const normalized = value?.trim().toLowerCase();
  if (!normalized) {
    return fallback;
  }

  return normalized.replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      phone,
      company,
      systemType,
      hostingEnvironment,
      coverageWindow,
      preferredContact,
      currentPainPoint,
    } = await request.json();

    if (!name || !email || !phone || !systemType || !hostingEnvironment) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const message = [
      `System type: ${systemType}`,
      `Hosting environment: ${hostingEnvironment}`,
      `Desired coverage window: ${coverageWindow || "Not specified"}`,
      `Preferred follow-up: ${preferredContact || "Not specified"}`,
      "",
      "Current support need:",
      currentPainPoint || "Not specified",
    ].join("\n");

    await submitContactToCrm({
      name,
      email,
      phone,
      company,
      service: "support-maintenance",
      budget: coverageWindow,
      message,
      source: "support_sla_enquiry",
      tags: [
        "support_sla",
        `system_${toTag(systemType, "system_unspecified")}`,
        `hosting_${toTag(hostingEnvironment, "hosting_unspecified")}`,
        `coverage_${toTag(coverageWindow, "coverage_unspecified")}`,
        `followup_${toTag(preferredContact, "followup_unspecified")}`,
      ],
    });

    return NextResponse.json(
      { success: true, message: "SLA enquiry received" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Support SLA API error", error);
    return NextResponse.json(
      { error: "Failed to process SLA enquiry" },
      { status: 500 },
    );
  }
}
