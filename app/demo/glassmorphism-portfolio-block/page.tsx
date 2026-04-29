import type { Metadata } from "next";
import { GlassmorphismPortfolioBlock } from "@/components/ui/glassmorphism-portfolio-block-shadcnui";

export const metadata: Metadata = {
  title: "Glassmorphism Portfolio Demo",
  description: "Internal demo route for the glassmorphism portfolio block.",
  alternates: { canonical: "/demo/glassmorphism-portfolio-block" },
  robots: { index: false, follow: false },
};

export default function GlassmorphismPortfolioBlockDemoPage() {
  return (
    <main className="min-h-screen bg-background p-8">
      <GlassmorphismPortfolioBlock />
    </main>
  );
}
