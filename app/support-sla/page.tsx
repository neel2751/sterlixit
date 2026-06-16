import type { Metadata } from "next";
import { SupportSlaPageContent } from "@/components/ui/support-sla-page-content";

export const metadata: Metadata = {
  title: "Support SLA Enquiry",
  description:
    "Request a scoped support and maintenance SLA review from Sterlixit. Share your platform details and our team will follow up by email or call.",
  alternates: { canonical: "/support-sla" },
  openGraph: {
    title: "Support SLA Enquiry | Sterlixit",
    description:
      "Request a scoped support and maintenance SLA review from Sterlixit. Share your platform details and our team will follow up by email or call.",
    url: "https://sterlixit.co.uk/support-sla",
  },
};

export default function SupportSlaPage() {
  return <SupportSlaPageContent />;
}
