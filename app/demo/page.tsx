import type { Metadata } from "next";
import { GlassmorphismMinimalMetricsBlock } from "@/components/ui/glassmorphism-minimal-metrics-block-shadcnui";
import { Component as VercepFeatureOne } from "@/components/ui/vercep-feature-1";
import { VercepFeaturesSection } from "@/components/ui/vercep-features-section";

export const metadata: Metadata = {
  title: "UI Demo Library",
  description: "Internal UI demo components for Sterlixit.",
  alternates: { canonical: "/demo" },
  robots: { index: false, follow: false },
};

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="p-6 md:p-8">
        <GlassmorphismMinimalMetricsBlock />
      </div>
      <VercepFeaturesSection />
      <div className="mx-auto max-w-2xl p-6 md:p-8">
        <VercepFeatureOne />
      </div>
    </main>
  );
}
