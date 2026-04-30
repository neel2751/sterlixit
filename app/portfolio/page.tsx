import type { Metadata } from "next";
import { CaseStudiesPageContent } from "@/components/ui/case-studies-page-content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore Sterlixit case studies across SaaS, real estate, e-commerce, healthcare, and logistics with measurable outcomes.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Case Studies | Sterlixit",
    description:
      "Explore Sterlixit case studies across SaaS, real estate, e-commerce, healthcare, and logistics with measurable outcomes.",
    url: "https://sterlixit.co.uk/portfolio",
  },
};

export default function PortfolioPage() {
  return <CaseStudiesPageContent />;
}
