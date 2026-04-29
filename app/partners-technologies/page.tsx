import type { Metadata } from "next";
import { PartnersTechnologiesPageContent } from "@/components/ui/partners-technologies-page-content";

export const metadata: Metadata = {
  title: "Partners & Technologies",
  description:
    "Explore the platforms, technologies, and partner ecosystems Sterlixit uses to build scalable websites, products, and growth systems.",
  alternates: { canonical: "/partners-technologies" },
  openGraph: {
    title: "Partners & Technologies | Sterlixit",
    description:
      "Explore the platforms, technologies, and partner ecosystems Sterlixit uses to build scalable websites, products, and growth systems.",
    url: "https://sterlixit.com/partners-technologies",
  },
};

export default function PartnersTechnologiesPage() {
  return <PartnersTechnologiesPageContent />;
}
