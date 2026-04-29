import type { Metadata } from "next";
import {
  IntegrationShowcase,
  type Integration,
} from "@/components/ui/integration-showcase";

export const metadata: Metadata = {
  title: "Integration Showcase Demo",
  description: "Internal demo route for integration showcase components.",
  alternates: { canonical: "/demo/integration-showcase" },
  robots: { index: false, follow: false },
};

const integrationsData: Integration[] = [
  {
    name: "Notion",
    description: "Sync campaign notes and playbooks.",
    iconSrc: "https://cdn.worldvectorlogo.com/logos/notion-2.svg",
  },
  {
    name: "Google Sheets",
    description: "Push lead and KPI data to reporting sheets.",
    iconSrc:
      "https://cdn.worldvectorlogo.com/logos/google-sheets-logo-icon.svg",
  },
  {
    name: "Airtable",
    description: "Track delivery and growth experiments.",
    iconSrc: "https://cdn.worldvectorlogo.com/logos/airtable.svg",
  },
  {
    name: "Webhooks",
    description: "Send events to backend workflows.",
    iconSrc: "https://cdn.worldvectorlogo.com/logos/webhooks.svg",
  },
  {
    name: "Slack",
    description: "Get real-time lead and launch alerts.",
    iconSrc: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
  },
  {
    name: "Google Analytics",
    description: "Measure sessions, conversion paths, and retention.",
    iconSrc: "https://cdn.worldvectorlogo.com/logos/google-analytics-3.svg",
  },
  {
    name: "Meta Pixel",
    description: "Optimize paid campaigns and audiences.",
    iconSrc: "https://cdn.worldvectorlogo.com/logos/meta-3.svg",
  },
  {
    name: "Zapier",
    description: "Automate ops across your stack.",
    iconSrc: "https://cdn.worldvectorlogo.com/logos/zapier.svg",
  },
];

export default function IntegrationShowcaseDemoPage() {
  return (
    <main className="w-full bg-background">
      <IntegrationShowcase
        title="Connect your ~favorite~ tools"
        subtitle="Save time by connecting Sterlixit growth systems with your existing workflow stack."
        illustrationSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
        illustrationAlt="Growth stack integration planning"
        integrations={integrationsData}
      />
    </main>
  );
}
