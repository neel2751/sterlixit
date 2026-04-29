import type { Metadata } from "next";
import { BlogPageContent } from "@/components/ui/blog-page-content";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Practical playbooks on branding, web design, digital marketing, and SaaS growth written by the Sterlixit strategy team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog & Insights | Sterlixit",
    description:
      "Practical playbooks on branding, web design, digital marketing, and SaaS growth written by the Sterlixit strategy team.",
    url: "https://sterlixit.com/blog",
  },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
