import { NextResponse } from "next/server";
import { submitContactToCrm } from "@/lib/integrations";

function normaliseIntent(intent: unknown) {
  const raw = String(intent ?? "request_demo")
    .trim()
    .toLowerCase();
  if (raw === "start_trial") return "start_trial";
  return "request_demo";
}

function getTeamSizeBand(value: unknown) {
  const raw = String(value ?? "").trim();
  const match = raw.match(/\d+/);
  if (!match) return "team_size_unknown";

  const size = Number(match[0]);
  if (size <= 25) return "team_size_1_25";
  if (size <= 100) return "team_size_26_100";
  if (size <= 250) return "team_size_101_250";
  return "team_size_251_plus";
}

export async function POST(request: Request) {
  try {
    const { name, email, company, phone, teamSize, message, intent } =
      await request.json();

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const leadIntent = normaliseIntent(intent);
    const teamSizeBand = getTeamSizeBand(teamSize);

    const leadMessage = [
      "Product: Sterlix HR",
      `Intent: ${leadIntent === "start_trial" ? "Start Trial" : "Request Demo"}`,
      `Team size: ${teamSize || "Not provided"}`,
      "",
      "Notes:",
      message || "No additional notes provided.",
      "",
      "Mobile companion app status: in development phase",
    ].join("\n");

    await submitContactToCrm({
      name: String(name),
      email: String(email),
      phone: String(phone || "Not provided"),
      company: String(company),
      service: "hr-management-platform",
      budget: teamSize ? String(teamSize) : undefined,
      message: leadMessage,
      source: "hr_management_landing",
      tags: [
        "hr_product",
        "sales_team_hr",
        teamSizeBand,
        leadIntent === "start_trial"
          ? "intent_start_trial"
          : "intent_request_demo",
      ],
    });

    return NextResponse.json(
      { success: true, message: "HR lead captured" },
      { status: 200 },
    );
  } catch (error) {
    console.error("HR lead API error", error);
    return NextResponse.json(
      { error: "Failed to capture HR lead" },
      { status: 500 },
    );
  }
}
