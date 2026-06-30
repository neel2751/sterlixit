import type { Metadata } from "next";
import { BlogPageContent } from "@/components/ui/blog-page-content";

export const metadata: Metadata = {
  title: "Digital Marketing, Web Design & SaaS Blog UK | Sterlixit Insights",
  description:
    "Practical playbooks on branding, web design, digital marketing, and SaaS growth — written by the Sterlixit UK agency team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog & Insights | Sterlixit",
    description:
      "Practical playbooks on branding, web design, digital marketing, and SaaS growth written by the Sterlixit strategy team.",
    url: "https://www.sterlixit.co.uk/blog",
  },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
