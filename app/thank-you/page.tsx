import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StandardPageLayout } from "@/components/page-primitives";
import { SiteSection } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thank you for contacting Sterlixit. We have received your request and our team will follow up shortly.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <StandardPageLayout
      title="Thank You"
      subtitle="Your request has been received. Our team will contact you shortly."
    >
      <SiteSection title="What Happens Next">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            You’ll receive a confirmation email followed by a discovery
            follow-up within one business day.
          </p>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </SiteSection>
    </StandardPageLayout>
  );
}
