import type { Metadata } from "next";
import { Testimonial } from "@/components/ui/clean-testimonial";

export const metadata: Metadata = {
  title: "Clean Testimonial Demo",
  description: "Internal demo route for testimonial UI component.",
  alternates: { canonical: "/demo/clean-testimonial" },
  robots: { index: false, follow: false },
};

export default function CleanTestimonialDemoPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background">
      <Testimonial />
    </main>
  );
}
