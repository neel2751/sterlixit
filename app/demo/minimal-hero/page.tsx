import type { Metadata } from "next";
import MinimalHeroSection from "@/components/ui/minimal-hero-section";

export const metadata: Metadata = {
  title: "Minimal Hero Demo",
  description: "Internal demo route for the minimal hero component.",
  alternates: { canonical: "/demo/minimal-hero" },
  robots: { index: false, follow: false },
};

export default function MinimalHeroDemoPage() {
  return (
    <main className="min-h-screen bg-background">
      <MinimalHeroSection
        kicker="Minimal Hero"
        title="Monochrome launchpad for focused products."
        subtitle="A single statement, a clear entry point, and a premium visual that carries the story."
        primaryCta={{ label: "Begin Project", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
        trustItems={["2 Week Ramp", "Curated Assets", "Premium Delivery"]}
        imageUrl="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Premium monochrome interior mood reference"
      />
    </main>
  );
}
