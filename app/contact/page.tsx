import type { Metadata } from "next";
import { ContactPageContent } from "@/components/ui/contact-page-content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Sterlixit team. Share your goals and we will map a practical, milestone-based plan around your timeline and budget.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Sterlixit",
    description:
      "Get in touch with the Sterlixit team. Share your goals and we will map a practical, milestone-based plan around your timeline and budget.",
    url: "https://sterlixit.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
