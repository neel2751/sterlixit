import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteContainer, SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Support SLA Request Received",
  description:
    "Your support SLA enquiry has been received by Sterlixit. Our team will review the request and follow up shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function SupportSlaThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; company?: string }>;
}) {
  const { name, company } = await searchParams;
  const greeting = name?.trim() || "your team";

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/60 bg-background py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.12)_0%,transparent_66%)]" />
        <SiteContainer>
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/8">
              <CheckCircle2 className="size-8 text-primary" />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Request Received
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Thanks, {greeting}.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              Your support SLA enquiry has been sent to the Sterlixit team.
              {company?.trim()
                ? ` We will review the request for ${company.trim()} and follow up with the right next step.`
                : " We will review the request and follow up with the right next step."}
            </p>
          </div>
        </SiteContainer>
      </section>

      <section className="bg-background py-12 md:py-14">
        <SiteContainer>
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Coverage review",
                copy: "We assess the system, risk level, and support gaps before recommending any SLA model.",
              },
              {
                icon: Mail,
                title: "Follow-up by email or call",
                copy: "Our team responds in the format that best fits the complexity and urgency of the request.",
              },
              {
                icon: CheckCircle2,
                title: "Clear next step",
                copy: "You will get either a scoped reply, a call invitation, or a deeper technical review recommendation.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/60 bg-card p-6"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/8">
                    <Icon className="size-4 text-primary" />
                  </div>
                  <p className="mt-4 text-base font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl border border-border/60 bg-card md:grid md:grid-cols-[1fr_auto]">
            <div className="p-7 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                While You Wait
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Explore the broader support and product capability.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                If your support needs also involve platform cleanup, performance
                optimisation, or product expansion, you can review the relevant
                service areas now.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-full px-6 font-semibold">
                  <Link href="/services/support-maintenance">
                    Back to Support Service
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-6 font-semibold"
                >
                  <Link href="/services/custom-saas-it-solutions">
                    Explore Product Services
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden items-center justify-center border-l border-border/60 bg-primary/5 px-10 md:flex">
              <div className="text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10">
                  <ShieldCheck className="size-8 text-primary" />
                </div>
                <p className="mt-3 text-sm font-semibold text-foreground">
                  Support review queued
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Scoped, not generic
                </p>
              </div>
            </div>
          </div>
        </SiteContainer>
      </section>

      <SiteFooter />
    </main>
  );
}
