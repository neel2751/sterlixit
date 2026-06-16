import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CareerApplicationForm } from "@/components/career-application-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ExitIntentDialog,
  LiveChatButton,
  SiteContainer,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";
import { careerRoles } from "@/lib/careers-data";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Sterlixit team. We are a remote-friendly, outcome-oriented digital agency looking for designers, developers, marketers, and strategists with a growth mindset.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers | Sterlixit",
    description:
      "Join the Sterlixit team. We are a remote-friendly, outcome-oriented digital agency looking for designers, developers, marketers, and strategists with a growth mindset.",
    url: "https://sterlixit.co.uk/careers",
  },
};

const values = [
  {
    title: "Outcome Before Optics",
    description:
      "We care about measurable business movement, not vanity output. Every sprint ties back to client value.",
  },
  {
    title: "High Ownership Culture",
    description:
      "You are trusted to make calls, own results, and raise the standard of delivery with clear accountability.",
  },
  {
    title: "Remote-First Collaboration",
    description:
      "Deep work and clear communication win here. We operate asynchronously with strong handoff discipline.",
  },
];

const processSteps = [
  "Application review and fit assessment",
  "Initial conversation with talent lead",
  "Role-specific practical challenge",
  "Final panel and offer decision",
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/70 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_0%,rgba(79,70,229,0.12),transparent_45%),radial-gradient(circle_at_92%_14%,rgba(99,102,241,0.08),transparent_38%)]" />
        <SiteContainer>
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="inline-flex items-center rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Join Sterlixit
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.04]">
              Build Work That Moves
              <span className="block text-primary">Real Business Metrics</span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              We are a remote-first team of builders, designers, and growth
              operators helping brands scale with strategy-led execution. If you
              thrive in high-ownership environments, we would like to hear from
              you.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <a href="#open-roles">View Open Roles</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#apply-now">Apply Now</a>
              </Button>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="py-12 md:py-16">
        <SiteContainer>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((item) => (
              <Card
                key={item.title}
                className="border-border/60 bg-background/85"
              >
                <CardHeader>
                  <CardTitle className="text-xl tracking-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section
        id="open-roles"
        className="border-t border-border/70 py-12 md:py-16"
      >
        <SiteContainer>
          <div className="mb-6 max-w-2xl space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Open Positions
            </h2>
            <p className="text-sm text-muted-foreground md:text-base">
              Current opportunities across product, engineering, and growth.
            </p>
          </div>
          <div className="grid gap-4">
            {careerRoles.map((role) => (
              <Card
                key={role.title}
                className="border-border/60 bg-background/85 transition hover:border-primary/35"
              >
                <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {role.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {role.summary}
                    </p>
                    <div className="flex gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      <span className="rounded-full border border-border/70 px-2.5 py-1">
                        {role.mode}
                      </span>
                      <span className="rounded-full border border-border/70 px-2.5 py-1">
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/careers/${role.slug}`}>
                      View Role Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="border-t border-border/70 py-12 md:py-16">
        <SiteContainer>
          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
            <Card className="border-border/60 bg-secondary/30">
              <CardHeader>
                <CardTitle className="text-2xl tracking-tight">
                  Hiring Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  {processSteps.map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/35 text-xs font-semibold text-primary">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card id="apply-now" className="border-border/60 bg-background/85">
              <CardHeader>
                <CardTitle className="text-2xl tracking-tight">
                  Apply Now
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <CareerApplicationForm
                  roleTitle="General Careers Application"
                  roleSlug="general"
                />
                <p className="mt-3 text-xs text-muted-foreground">
                  Submit once and our hiring team will map your profile to the
                  most relevant open role.
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Prefer email? Send CV and portfolio to{" "}
                  <Link
                    href="mailto:hello@sterlixit.co.uk"
                    className="text-primary"
                  >
                    hello@sterlixit.co.uk
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </SiteContainer>
      </section>

      <SiteFooter />
      <ExitIntentDialog />
      <LiveChatButton />
    </main>
  );
}
