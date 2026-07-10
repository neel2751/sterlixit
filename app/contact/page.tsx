import type { Metadata } from "next";
import { ContactPageContent } from "@/components/ui/contact-page-content";
import { JsonLd } from "@/components/json-ld";
import { contactPageSchema, localBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title:
    "Contact Sterlixit | Digital Agency London | Book a Free Strategy Call ",
  description:
    "Contact Sterlixit, a London digital agency. Share your goals and we will map a practical, milestone-based plan around your timeline and budget.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Sterlixit",
    description:
      "Get in touch with the Sterlixit team. Share your goals and we will map a practical, milestone-based plan around your timeline and budget.",
    url: "https://www.sterlixit.co.uk/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      {/* ContactPage.about references the LocalBusiness node above by @id. */}
      <JsonLd data={contactPageSchema} />
      <ContactPageContent />
    </>
  );
}
