import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import {
  AnimatedReveal,
  ExitIntentDialog,
  LiveChatButton,
  SiteContainer,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { industries } from "@/lib/site-data";

type IndustryTheme = {
  heroGlow: string;
  heroWash: string;
  badge: string;
  chip: string;
  icon: string;
  cta: string;
};

const industryThemes: Record<string, IndustryTheme> = {
  startups: {
    heroGlow:
      "bg-[radial-gradient(circle_at_12%_8%,rgba(245,158,11,0.18),transparent_42%),radial-gradient(circle_at_88%_14%,rgba(249,115,22,0.11),transparent_40%)]",
    heroWash: "bg-linear-to-b from-amber-500/8 via-transparent to-transparent",
    badge:
      "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300",
    chip: "border-amber-500/25",
    icon: "text-amber-600 dark:text-amber-300",
    cta: "border-amber-500/45 bg-linear-to-r from-amber-500 to-orange-500 text-white shadow-[0_10px_26px_rgba(245,158,11,0.32)]",
  },
  "e-commerce": {
    heroGlow:
      "bg-[radial-gradient(circle_at_12%_8%,rgba(16,185,129,0.18),transparent_42%),radial-gradient(circle_at_88%_14%,rgba(34,197,94,0.11),transparent_40%)]",
    heroWash:
      "bg-linear-to-b from-emerald-500/8 via-transparent to-transparent",
    badge:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    chip: "border-emerald-500/25",
    icon: "text-emerald-600 dark:text-emerald-300",
    cta: "border-emerald-500/45 bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-[0_10px_26px_rgba(16,185,129,0.32)]",
  },
  healthcare: {
    heroGlow:
      "bg-[radial-gradient(circle_at_12%_8%,rgba(6,182,212,0.18),transparent_42%),radial-gradient(circle_at_88%_14%,rgba(14,165,233,0.11),transparent_40%)]",
    heroWash: "bg-linear-to-b from-cyan-500/8 via-transparent to-transparent",
    badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
    chip: "border-cyan-500/25",
    icon: "text-cyan-600 dark:text-cyan-300",
    cta: "border-cyan-500/45 bg-linear-to-r from-cyan-500 to-sky-500 text-white shadow-[0_10px_26px_rgba(6,182,212,0.32)]",
  },
  "real-estate": {
    heroGlow:
      "bg-[radial-gradient(circle_at_12%_8%,rgba(99,102,241,0.18),transparent_42%),radial-gradient(circle_at_88%_14%,rgba(59,130,246,0.11),transparent_40%)]",
    heroWash: "bg-linear-to-b from-indigo-500/8 via-transparent to-transparent",
    badge:
      "border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
    chip: "border-indigo-500/25",
    icon: "text-indigo-600 dark:text-indigo-300",
    cta: "border-indigo-500/45 bg-linear-to-r from-indigo-500 to-blue-500 text-white shadow-[0_10px_26px_rgba(99,102,241,0.32)]",
  },
  education: {
    heroGlow:
      "bg-[radial-gradient(circle_at_12%_8%,rgba(236,72,153,0.18),transparent_42%),radial-gradient(circle_at_88%_14%,rgba(168,85,247,0.11),transparent_40%)]",
    heroWash: "bg-linear-to-b from-pink-500/8 via-transparent to-transparent",
    badge: "border-pink-500/30 bg-pink-500/10 text-pink-700 dark:text-pink-300",
    chip: "border-pink-500/25",
    icon: "text-pink-600 dark:text-pink-300",
    cta: "border-pink-500/45 bg-linear-to-r from-pink-500 to-fuchsia-500 text-white shadow-[0_10px_26px_rgba(236,72,153,0.32)]",
  },
  "saas-companies": {
    heroGlow:
      "bg-[radial-gradient(circle_at_12%_8%,rgba(168,85,247,0.2),transparent_42%),radial-gradient(circle_at_88%_14%,rgba(99,102,241,0.12),transparent_40%)]",
    heroWash: "bg-linear-to-b from-violet-500/9 via-transparent to-transparent",
    badge:
      "border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-300",
    chip: "border-violet-500/25",
    icon: "text-violet-600 dark:text-violet-300",
    cta: "border-violet-500/45 bg-linear-to-r from-violet-500 to-indigo-500 text-white shadow-[0_10px_26px_rgba(168,85,247,0.32)]",
  },
};

const defaultTheme: IndustryTheme = {
  heroGlow:
    "bg-[radial-gradient(circle_at_12%_8%,rgba(79,70,229,0.16),transparent_42%),radial-gradient(circle_at_88%_14%,rgba(99,102,241,0.11),transparent_40%)]",
  heroWash: "bg-linear-to-b from-primary/7 via-transparent to-transparent",
  badge: "border-primary/25 bg-primary/8 text-primary",
  chip: "border-primary/25",
  icon: "text-primary",
  cta: "border-primary/45 bg-linear-to-r from-primary to-primary/80 text-primary-foreground shadow-[0_10px_26px_rgba(79,70,229,0.35)]",
};

type IndustryAccent = {
  sectionTint: string;
  panelBorder: string;
  hoverBorder: string;
  ctaPanel: string;
  dot: string;
};

const industryAccents: Record<string, IndustryAccent> = {
  startups: {
    sectionTint: "bg-amber-500/4",
    panelBorder: "border-amber-500/25",
    hoverBorder: "hover:border-amber-500/40",
    ctaPanel: "border-amber-500/25 from-amber-500/14 via-amber-500/7",
    dot: "bg-amber-500/75",
  },
  "e-commerce": {
    sectionTint: "bg-emerald-500/4",
    panelBorder: "border-emerald-500/25",
    hoverBorder: "hover:border-emerald-500/40",
    ctaPanel: "border-emerald-500/25 from-emerald-500/14 via-emerald-500/7",
    dot: "bg-emerald-500/75",
  },
  healthcare: {
    sectionTint: "bg-cyan-500/4",
    panelBorder: "border-cyan-500/25",
    hoverBorder: "hover:border-cyan-500/40",
    ctaPanel: "border-cyan-500/25 from-cyan-500/14 via-cyan-500/7",
    dot: "bg-cyan-500/75",
  },
  "real-estate": {
    sectionTint: "bg-indigo-500/4",
    panelBorder: "border-indigo-500/25",
    hoverBorder: "hover:border-indigo-500/40",
    ctaPanel: "border-indigo-500/25 from-indigo-500/14 via-indigo-500/7",
    dot: "bg-indigo-500/75",
  },
  education: {
    sectionTint: "bg-pink-500/4",
    panelBorder: "border-pink-500/25",
    hoverBorder: "hover:border-pink-500/40",
    ctaPanel: "border-pink-500/25 from-pink-500/14 via-pink-500/7",
    dot: "bg-pink-500/75",
  },
  "saas-companies": {
    sectionTint: "bg-violet-500/4",
    panelBorder: "border-violet-500/25",
    hoverBorder: "hover:border-violet-500/40",
    ctaPanel: "border-violet-500/25 from-violet-500/14 via-violet-500/7",
    dot: "bg-violet-500/75",
  },
};

const defaultAccent: IndustryAccent = {
  sectionTint: "bg-primary/3",
  panelBorder: "border-primary/25",
  hoverBorder: "hover:border-primary/30",
  ctaPanel: "border-primary/25 from-primary/14 via-primary/7",
  dot: "bg-primary/70",
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  return {
    title: industry
      ? `${industry.title} Industry Solutions`
      : "Industry Solutions",
    description: industry
      ? `Sterlixit delivers tailored digital strategy and execution for the ${industry.title.toLowerCase()} sector.`
      : "Industry-specific digital strategies and execution from Sterlixit.",
    alternates: { canonical: `/industries/${slug}` },
    openGraph: {
      title: industry
        ? `${industry.title} Industry Solutions | Sterlixit`
        : "Industry Solutions | Sterlixit",
      description: industry
        ? `Sterlixit delivers tailored digital strategy and execution for the ${industry.title.toLowerCase()} sector.`
        : "Industry-specific digital strategies and execution from Sterlixit.",
      url: `https://sterlixit.com/industries/${slug}`,
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();

  const theme = industryThemes[industry.slug] ?? defaultTheme;
  const accent = industryAccents[industry.slug] ?? defaultAccent;

  const relatedIndustries = industries
    .filter((item) => item.slug !== industry.slug)
    .slice(0, 3);

  return (
    <main className="relative min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: industry.title, href: `/industries/${industry.slug}` },
        ]}
      />

      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/70 py-18 md:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className={`absolute inset-0 ${theme.heroGlow}`} />
          <div className={`absolute inset-0 ${theme.heroWash}`} />
        </div>

        <SiteContainer>
          <div className="mx-auto max-w-5xl space-y-5">
            <AnimatedReveal>
              <Link
                href="/industries"
                className="inline-flex text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
              >
                Back to industries
              </Link>
            </AnimatedReveal>

            <AnimatedReveal delay={0.06}>
              <p
                className={`inline-flex items-center rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${theme.badge}`}
              >
                <Sparkles className={`mr-2 size-3.5 ${theme.icon}`} />
                {industry.title} Intelligence
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.12}>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.04]">
                {industry.title} Digital Systems Built for Real Operational
                Pressure
              </h1>
            </AnimatedReveal>

            <AnimatedReveal delay={0.18}>
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Sterlixit aligns design, engineering, and growth execution to
                the way {industry.title.toLowerCase()} businesses actually run,
                so your stack improves speed, trust, and measurable outcomes.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.24}>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {industry.challenges.slice(0, 3).map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-2.5 py-1 ${theme.chip}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  asChild
                  size="lg"
                  className={`rounded-full px-7 ${theme.cta}`}
                >
                  <Link href="/book-free-strategy-call">
                    Book Strategy Call
                    <ArrowUpRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-7"
                >
                  <Link href="/request-proposal">Request Proposal</Link>
                </Button>
              </div>
            </AnimatedReveal>
          </div>
        </SiteContainer>
      </section>

      <section className="py-12 md:py-16">
        <SiteContainer>
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4">
              <AnimatedReveal>
                <Card className={`bg-background/85 ${accent.panelBorder}`}>
                  <CardHeader>
                    <CardTitle className="text-2xl tracking-tight">
                      Core Challenges
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                      {industry.challenges.map((point) => (
                        <li key={point} className="flex gap-2.5">
                          <span
                            className={`mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedReveal>

              <AnimatedReveal delay={0.06}>
                <Card className={`bg-background/85 ${accent.panelBorder}`}>
                  <CardHeader>
                    <CardTitle className="text-2xl tracking-tight">
                      How We Help
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                      {industry.howWeHelp.map((point) => (
                        <li key={point} className="flex gap-2.5">
                          <CheckCircle2
                            className={`mt-0.5 size-4 shrink-0 ${theme.icon}`}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedReveal>
            </div>

            <div className="space-y-4">
              <AnimatedReveal delay={0.08}>
                <Card className={`bg-secondary/30 ${accent.panelBorder}`}>
                  <CardHeader>
                    <CardTitle className="text-xl tracking-tight">
                      Relevant Case Study Signals
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    {industry.caseStudies.map((item) => (
                      <div
                        key={item}
                        className={`rounded-2xl border bg-background/80 px-4 py-3 ${accent.panelBorder}`}
                      >
                        {item}
                      </div>
                    ))}
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/portfolio">
                        View Full Case Studies
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedReveal>

              <AnimatedReveal delay={0.12}>
                <Card className={`bg-background/85 ${accent.panelBorder}`}>
                  <CardHeader>
                    <CardTitle className="text-xl tracking-tight">
                      Delivery Blueprint
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    {[
                      "Workflow and data flow audit",
                      "Architecture and conversion plan",
                      "Phased implementation",
                      "Performance and optimisation loop",
                    ].map((step, index) => (
                      <div key={step} className="flex items-start gap-3">
                        <span
                          className={`inline-flex size-6 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold ${theme.badge}`}
                        >
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </AnimatedReveal>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className={`${accent.sectionTint} py-16 md:py-20`}>
        <SiteContainer>
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <AnimatedReveal>
              <div
                className={`rounded-4xl border bg-background/85 p-7 md:p-8 ${accent.panelBorder}`}
              >
                <div
                  className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${theme.badge}`}
                >
                  <ShieldCheck className={`size-3.5 ${theme.icon}`} />
                  Why This Works
                </div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Industry Context + Execution Discipline
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                  Most digital projects fail because teams apply generic
                  blueprints to specialized industries. We anchor architecture,
                  journey design, and growth mechanics to your specific
                  operating reality.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Business-model-aware architecture",
                    "Compliance-minded workflows",
                    "Cross-functional execution",
                    "Outcome-driven optimisation",
                  ].map((point) => (
                    <div
                      key={point}
                      className={`rounded-2xl border bg-background/75 px-4 py-3 text-sm text-muted-foreground ${accent.panelBorder}`}
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.08}>
              <div
                className={`rounded-4xl border bg-background/85 p-7 md:p-8 ${accent.panelBorder}`}
              >
                <div
                  className={`mb-3 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${theme.badge}`}
                >
                  <Workflow className={`size-3.5 ${theme.icon}`} />
                  Explore Next
                </div>
                <h3 className="text-xl font-semibold tracking-tight">
                  Related Industry Playbooks
                </h3>
                <div className="mt-5 space-y-2">
                  {relatedIndustries.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/industries/${item.slug}`}
                      className={`group flex items-center justify-between rounded-2xl border px-4 py-3 text-sm text-muted-foreground transition hover:text-foreground ${accent.panelBorder} ${accent.hoverBorder}`}
                    >
                      <span>{item.title}</span>
                      <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </SiteContainer>
      </section>

      <section className="pb-16 pt-12 md:pb-24 md:pt-16">
        <SiteContainer>
          <AnimatedReveal>
            <div
              className={`mx-auto max-w-5xl rounded-4xl border bg-linear-to-r to-transparent p-8 text-center shadow-[0_20px_56px_rgba(79,70,229,0.1)] md:p-10 ${accent.ctaPanel}`}
            >
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Build a {industry.title} Growth System That Actually Performs
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                Let us map your workflow, architecture, and growth priorities
                into one execution plan tailored to your industry.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className={`rounded-full px-8 ${theme.cta}`}
                >
                  <Link href="/contact">
                    Consult an Industry Expert
                    <ArrowUpRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                >
                  <Link href="/services/custom-saas-it-solutions">
                    Explore SaaS Solutions
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedReveal>
        </SiteContainer>
      </section>

      <SiteFooter />
      <ExitIntentDialog />
      <LiveChatButton />
    </main>
  );
}
