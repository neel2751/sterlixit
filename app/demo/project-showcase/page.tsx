import type { Metadata } from "next";
import { ProjectShowcase } from "@/components/ui/project-showcase";

export const metadata: Metadata = {
  title: "Project Showcase Demo",
  description: "Internal demo route for the project showcase component.",
  alternates: { canonical: "/demo/project-showcase" },
  robots: { index: false, follow: false },
};

export default function ProjectShowcaseDemoPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <ProjectShowcase />
    </main>
  );
}
