import { NextResponse } from "next/server";
import { submitLeadToCrm, subscribeToNewsletter } from "@/lib/integrations";

const ACCOUNT_TYPES = ["Landlord", "Agency", "Enterprise Firm"] as const;
type AccountType = (typeof ACCOUNT_TYPES)[number];

// Fixed routing for the PropManage launch campaign.
const TERRITORY = "Sterlix IT Ltd";
const PRODUCT = "PropManage";
const SOURCE = "propmanage_early_access";
const TAGS = ["Early Access", PRODUCT];

function asString(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: unknown;
      email?: unknown;
      accountType?: unknown;
      portfolioSize?: unknown;
      branches?: unknown;
      utm?: {
        utm_source?: unknown;
        utm_medium?: unknown;
        utm_campaign?: unknown;
      };
    };

    const email = asString(body.email, "");
    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email is required" },
        { status: 400 },
      );
    }

    // Full name or company name — captured for marketing personalisation.
    const name = asString(body.name, "");

    const candidate = asString(body.accountType, "Landlord");
    const accountType: AccountType = (
      ACCOUNT_TYPES as readonly string[]
    ).includes(candidate)
      ? (candidate as AccountType)
      : "Landlord";

    const portfolioSize = asString(body.portfolioSize, "Not specified");
    const branches = asString(body.branches, "n/a");

    const utm = {
      utm_source: asString(body.utm?.utm_source, "direct"),
      utm_medium: asString(body.utm?.utm_medium, "none"),
      utm_campaign: asString(body.utm?.utm_campaign, "none"),
    };

    const crmMessage = [
      `Account type: ${accountType}`,
      `Portfolio size: ${portfolioSize}`,
      `Branches: ${branches}`,
      `Territory: ${TERRITORY}`,
      `Product: ${PRODUCT}`,
      `UTM source: ${utm.utm_source}`,
      `UTM medium: ${utm.utm_medium}`,
      `UTM campaign: ${utm.utm_campaign}`,
    ].join("\n");

    // Mailchimp (tagged "Early Access" + "PropManage") and Zoho CRM (Company =
    // "Sterlix IT Ltd", Service = "PropManage") run independently — a failure in
    // one must not drop the lead from the other.
    const results = await Promise.allSettled([
      subscribeToNewsletter({ email, name, source: SOURCE, tags: TAGS }),
      submitLeadToCrm({
        resource: "PropManage Early Access",
        email,
        name,
        source: SOURCE,
        company: TERRITORY,
        service: PRODUCT,
        tags: TAGS,
        message: crmMessage,
      }),
    ]);

    const failures = results.filter((result) => result.status === "rejected");

    if (failures.length === results.length) {
      console.error(
        "Early access: all integrations failed",
        failures.map((failure) => (failure as PromiseRejectedResult).reason),
      );
      return NextResponse.json(
        { error: "Failed to register early access" },
        { status: 502 },
      );
    }

    if (failures.length > 0) {
      console.warn(
        "Early access: partial integration failure",
        failures.map((failure) => (failure as PromiseRejectedResult).reason),
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Early access API error", error);
    return NextResponse.json(
      { error: "Failed to register early access" },
      { status: 500 },
    );
  }
}
