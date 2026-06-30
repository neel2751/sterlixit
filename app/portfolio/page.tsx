import type { Metadata } from "next";
import { CaseStudiesPageContent } from "@/components/ui/case-studies-page-content";

export const metadata: Metadata = {
  title: "UK Web Design, SaaS & Branding Case Studies | Sterlixit Portfolio",
  description:
    "Explore Sterlixit's UK agency case studies across web design, SaaS development, branding, and growth marketing. Real outcomes for real businesses. ",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Case Studies | Sterlixit",
    description:
      "Explore Sterlixit case studies across SaaS, real estate, e-commerce, healthcare, and logistics with measurable outcomes.",
    url: "https://www.sterlixit.co.uk/portfolio",
  },
};

export default function PortfolioPage() {
  return <CaseStudiesPageContent />;
}
