import type { Metadata } from "next";
import { TestimonialsPageContent } from "@/components/ui/testimonials-page-content";
import { JsonLd } from "@/components/json-ld";
import { organizationReviewsSchema } from "@/lib/structured-data";
import { testimonials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews | Digital Agency London | Sterlixit ",
  description:
    "Read what clients say about working with Sterlixit, a London digital agency. Real feedback from founders, operators, and growth teams across web design, SaaS, and marketing.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Client Testimonials | Sterlixit",
    description:
      "Read what clients say about working with Sterlixit. Real feedback from businesses that grew through our design, development, and growth marketing services.",
    url: "https://www.sterlixit.co.uk/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Review + AggregateRating built from the same reviews rendered below. */}
      <JsonLd data={organizationReviewsSchema(testimonials)} />
      <TestimonialsPageContent />
    </>
  );
}
