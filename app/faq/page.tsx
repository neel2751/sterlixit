import type { Metadata } from "next";
import { FaqPageContent } from "@/components/ui/faq-page-content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to the most common questions about Sterlixit's services, pricing, timelines, and delivery process across branding, web development, and digital marketing.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions | Sterlixit",
    description:
      "Answers to the most common questions about Sterlixit's services, pricing, timelines, and delivery process across branding, web development, and digital marketing.",
    url: "https://sterlixit.co.uk/faq",
  },
};

export default function FAQPage() {
  return <FaqPageContent />;
}
