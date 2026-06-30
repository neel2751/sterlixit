import type { Metadata } from "next";
import { PartnersTechnologiesPageContent } from "@/components/ui/partners-technologies-page-content";

export const metadata: Metadata = {
  title:
    "Tech Stack & Partner Ecosystem | Next.js, Shopify, AWS & More | Sterlixit ",
  description:
    "Explore the tech stack Sterlixit uses to build scalable websites, SaaS products, and growth systems — covering React, Next.js, Shopify, AWS, and more.",
  alternates: { canonical: "/partners-technologies" },
  openGraph: {
    title: "Partners & Technologies | Sterlixit",
    description:
      "Explore the platforms, technologies, and partner ecosystems Sterlixit uses to build scalable websites, products, and growth systems.",
    url: "https://www.sterlixit.co.uk/partners-technologies",
  },
};

export default function PartnersTechnologiesPage() {
  return <PartnersTechnologiesPageContent />;
}
