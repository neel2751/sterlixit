import type { Metadata } from "next";
import { TestimonialsPageContent } from "@/components/ui/testimonials-page-content";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Read what clients say about working with Sterlixit. Real feedback from businesses that grew through our design, development, and growth marketing services.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Client Testimonials | Sterlixit",
    description:
      "Read what clients say about working with Sterlixit. Real feedback from businesses that grew through our design, development, and growth marketing services.",
    url: "https://sterlixit.com/testimonials",
  },
};

export default function TestimonialsPage() {
  return <TestimonialsPageContent />;
}
