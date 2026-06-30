import type { Metadata } from "next";
import { ResourcesPageContent } from "@/components/ui/resources-page-content";

export const metadata: Metadata = {
  title: "Free SEO, Website Audit & Growth Templates UK | Sterlixit ",
  description:
    "Free website audits, SEO checklists, and growth playbooks from Sterlixit. Practical tools for UK founders and marketing teams to diagnose and accelerate results. ",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Free Resources & Audits | Sterlixit",
    description:
      "Download free growth audits, website diagnostics, and conversion playbooks from Sterlixit. Practical tools to help teams diagnose bottlenecks and accelerate results.",
    url: "https://www.sterlixit.co.uk/resources",
  },
};

export default function ResourcesPage() {
  return <ResourcesPageContent />;
}
