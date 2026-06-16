import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CareerApplicationForm } from "@/components/career-application-form";
import {
  ExitIntentDialog,
  LiveChatButton,
  SiteContainer,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";
import { careerRoles, getCareerRoleBySlug } from "@/lib/careers-data";

export function generateStaticParams() {
  return careerRoles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = getCareerRoleBySlug(slug);

  if (!role) {
    return {
      title: "Career Role Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${role.title} Careers`,
    description: `${role.title} role at Sterlixit. ${role.summary}`,
    alternates: { canonical: `/careers/${role.slug}` },
    openGraph: {
      title: `${role.title} | Careers | Sterlixit`,
      description: `${role.title} role at Sterlixit. ${role.summary}`,
      url: `https://sterlixit.co.uk/careers/${role.slug}`,
    },
  };
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = getCareerRoleBySlug(slug);

  if (!role) {
    notFound();
  }

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: role.summary,
    employmentType: role.type,
    jobLocationType:
      role.mode.toUpperCase() === "REMOTE" ? "TELECOMMUTE" : "ON_SITE",
    hiringOrganization: {
      "@type": "Organization",
      name: "Sterlixit",
      sameAs: "https://sterlixit.co.uk",
      logo: "https://sterlixit.co.uk/sterlixit.svg",
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "India",
    },
    url: `https://sterlixit.co.uk/careers/${role.slug}`,
    datePosted: "2026-04-06",
    validThrough: "2026-12-31",
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/70 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_0%,rgba(79,70,229,0.12),transparent_45%),radial-gradient(circle_at_92%_14%,rgba(99,102,241,0.08),transparent_38%)]" />
        <SiteContainer>
          <div className="relative mx-auto max-w-5xl space-y-5">
            <Link
              href="/careers"
              className="inline-flex text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
            >
              Back to careers
            </Link>

            <p className="inline-flex items-center rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              {role.team}
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.04]">
              {role.title}
            </h1>

            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {role.intro}
            </p>

            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              <span className="rounded-full border border-border/70 px-2.5 py-1">
                {role.mode}
              </span>
              <span className="rounded-full border border-border/70 px-2.5 py-1">
                {role.type}
              </span>
              <span className="rounded-full border border-border/70 px-2.5 py-1">
                {role.location}
              </span>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="py-12 md:py-16">
        <SiteContainer>
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4">
              <Card className="border-border/60 bg-background/85">
                <CardHeader>
                  <CardTitle className="text-2xl tracking-tight">
                    Role Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                    {role.impact.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-background/85">
                <CardHeader>
                  <CardTitle className="text-2xl tracking-tight">
                    Responsibilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                    {role.responsibilities.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-background/85">
                <CardHeader>
                  <CardTitle className="text-2xl tracking-tight">
                    Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                    {role.requirements.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="border-border/60 bg-secondary/30">
                <CardHeader>
                  <CardTitle className="text-xl tracking-tight">
                    Nice To Have
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                    {role.niceToHave.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-background/85">
                <CardHeader>
                  <CardTitle className="text-xl tracking-tight">
                    Stack & Tooling
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {role.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/70 px-2.5 py-1 text-xs uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-background/85">
                <CardHeader>
                  <CardTitle className="text-xl tracking-tight">
                    Apply For This Role
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>{role.summary}</p>
                  <CareerApplicationForm
                    roleTitle={role.title}
                    roleSlug={role.slug}
                  />
                  <Button asChild variant="outline">
                    <Link href="mailto:hello@sterlixit.co.uk">
                      Email Your CV
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </SiteContainer>
      </section>

      <SiteFooter />
      <ExitIntentDialog />
      <LiveChatButton />
    </main>
  );
}
