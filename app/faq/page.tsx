import type { Metadata } from "next";
import { FaqPageContent } from "@/components/ui/faq-page-content";

export const metadata: Metadata = {
  title: "FAQ | Web Design, Branding & SaaS Pricing Questions UK | Sterlixit ",
  description:
    "Answers to common questions about Sterlixit's pricing, timelines, and process for web design, branding, and custom SaaS development in the UK.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions | Sterlixit",
    description:
      "Answers to the most common questions about Sterlixit's services, pricing, timelines, and delivery process across branding, web development, and digital marketing.",
    url: "https://www.sterlixit.co.uk/faq",
  },
};

export default function FAQPage() {
  return <FaqPageContent />;
}
