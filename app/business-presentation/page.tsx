import { BusinessPresentationPageContent } from "@/components/ui/business-presentation-page-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Presentation | Sterlixit",
  description:
    "Executive business presentation: who we are, leadership, mission, vision, services, solutions, security capabilities, and case studies.",
  alternates: { canonical: "/business-presentation" },
  openGraph: {
    title: "Sterlixit Business Presentation",
    description:
      "A presentation-ready overview of Sterlixit capabilities, leadership, and delivery outcomes.",
    url: "https://sterlixit.com/business-presentation",
  },
};

export default function BusinessPresentationPage() {
  return <BusinessPresentationPageContent />;
}
