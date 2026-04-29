import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StandardPageLayout } from "@/components/page-primitives";
import { SiteSection } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Coming Soon",
  description:
    "This section is currently in development. Contact Sterlixit for early access and launch updates.",
  alternates: { canonical: "/coming-soon" },
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return (
    <StandardPageLayout
      title="Coming Soon"
      subtitle="This page is currently in production and will be available soon."
    >
      <SiteSection title="Stay Updated">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Use our contact page to request early access or discuss the feature
            directly.
          </p>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </SiteSection>
    </StandardPageLayout>
  );
}
