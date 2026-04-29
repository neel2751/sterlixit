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

    await subscribeToNewsletter({
      email,
      source: source ?? "website_newsletter",
      tags: Array.isArray(tags) ? tags : [],
    });

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
