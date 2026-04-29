import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

import { portfolioItems } from "@/lib/site-data";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolioItems.find((project) => project.slug === slug);
  return {
    title: item ? `${item.title} Case Study` : "Case Study",
    description:
      item?.solution ??
      "Browse Sterlixit case studies showcasing measurable outcomes in web, branding, marketing, and SaaS.",
    alternates: { canonical: `/portfolio/${slug}` },
    openGraph: {
      title: item
        ? `${item.title} Case Study | Sterlixit`
        : "Case Study | Sterlixit",
      description:
        item?.solution ??
        "Browse Sterlixit case studies showcasing measurable outcomes in web, branding, marketing, and SaaS.",
      url: `https://sterlixit.com/portfolio/${slug}`,
    },
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = portfolioItems.find((project) => project.slug === slug);
  if (!item) notFound();

  const detailsBySlug: Record<
    string,
    {
      heroHeadline: string;
      heroSubheadline: string;
      challenge: string;
      edge: string;
      solution: string;
      features: string[];
      stackProof: string;
      roi: string[];
      quickStats: [string, string][];
      techStack: Array<{ label: string; logoSrc: string }>;
    }
  > = {
    "cdc-construction": {
      heroHeadline:
        "CDC Construction: Website, Marketing, and Custom Software in One Delivery System",
      heroSubheadline:
        "How we built a connected digital stack for CDC that aligned brand presence, lead generation, and operational workflows.",
      challenge:
        "CDC had strong delivery capability but needed tighter digital alignment: a clearer website journey, stronger marketing conversion flow, and software workflows that reduced operational drag.",
      edge: "Using our decade of experience, we identified that the problem was not the software. The real bottleneck was interoperability between legacy systems and field workflows.",
      solution:
        "We delivered a three-track execution model: (1) website architecture and conversion UX, (2) marketing analytics and lead qualification systems, and (3) custom software workflows for operational visibility.",
      features: [
        "Conversion-focused website and service-page architecture",
        "Marketing measurement stack with lead quality visibility",
        "Custom operations workflows for project and team coordination",
      ],
      stackProof:
        "We implemented a modern web stack with measurable funnel instrumentation and custom workflow components so CDC could scale both customer acquisition and internal execution.",
      roi: [
        "A unified digital foundation spanning website, growth, and operations",
        "Higher-quality enquiries through clearer service positioning",
        "Faster handoff across marketing and delivery teams",
      ],
      quickStats: [
        ["Industry", "Construction"],
        ["Delivery Scope", "Website + Marketing + Custom Software"],
        ["Partnership", "Long-term Execution Partner"],
      ],
      techStack: [
        { label: "React", logoSrc: "https://cdn.simpleicons.org/react/61DAFB" },
        {
          label: "Node.js",
          logoSrc: "https://cdn.simpleicons.org/nodedotjs/339933",
        },
        {
          label: "AWS",
          logoSrc: "https://cdn.simpleicons.org/amazonaws/232F3E",
        },
        {
          label: "PostgreSQL",
          logoSrc: "https://cdn.simpleicons.org/postgresql/4169E1",
        },
      ],
    },
    "cdc-property": {
      heroHeadline:
        "CDC Property Management: Real-Time Property Operations, Tenant Journeys, and Growth in One Platform",
      heroSubheadline:
        "How we connected website experience, lettings growth systems, and custom operational workflows for CDC Property Management.",
      challenge:
        "CDC Property Management needed a clearer buy-to-let digital journey while also improving operational visibility across documents, rent flows, and tenant communications.",
      edge: "Using our decade of experience, we identified that growth and operations had to be designed together. Better acquisition without operational clarity would not scale sustainably.",
      solution:
        "We delivered a three-track solution: a conversion-focused website flow, measurable growth funnel instrumentation, and custom portal workflows for payments, document signing, and real-time updates.",
      features: [
        "Secure document review and e-sign workflow",
        "Real-time rent and payment tracking visibility",
        "Live alerts for listings, offers, and property activity",
      ],
      stackProof:
        "We implemented a modern, performance-first web stack with custom operational workflow modules so CDC Property Management could scale both service quality and lead continuity.",
      roi: [
        "Clearer tenant and landlord transparency across key actions",
        "Faster operations with real-time status visibility",
        "Higher-quality acquisition through better conversion journeys",
      ],
      quickStats: [
        ["Industry", "Property Management"],
        ["Delivery Scope", "Website + Marketing + Custom Workflows"],
        ["Partnership", "Long-term Execution Partner"],
      ],
      techStack: [
        { label: "React", logoSrc: "https://cdn.simpleicons.org/react/61DAFB" },
        {
          label: "Node.js",
          logoSrc: "https://cdn.simpleicons.org/nodedotjs/339933",
        },
        {
          label: "AWS",
          logoSrc: "https://cdn.simpleicons.org/amazonaws/232F3E",
        },
        {
          label: "PostgreSQL",
          logoSrc: "https://cdn.simpleicons.org/postgresql/4169E1",
        },
      ],
    },
    "cdc-development": {
      heroHeadline:
        "CDC Development: Positioning, Pipeline, and Delivery Clarity for Modern Property Investment",
      heroSubheadline:
        "How we transformed CDC Development's digital presence into a structured growth and delivery platform.",
      challenge:
        "CDC Development needed stronger communication of its integrated residential-commercial capability, plus a clearer lead pathway from awareness to project enquiry.",
      edge: "Using our decade of experience, we identified that information architecture and conversion flow were the main growth bottlenecks, not visual design alone.",
      solution:
        "We delivered a strategic website and growth architecture aligned to the full development lifecycle: planning, design, procurement, construction, and marketing.",
      features: [
        "Service-led content architecture for mixed-use development",
        "Clear enquiry pathways for investors and project owners",
        "Custom publishing workflows for consistent growth execution",
      ],
      stackProof:
        "We built a modern web and content delivery system designed for authority, conversion clarity, and consistent iteration across the development marketing lifecycle.",
      roi: [
        "Sharper service differentiation across residential and commercial offerings",
        "Higher-intent enquiries from better-qualified audiences",
        "Improved operational alignment between growth and delivery teams",
      ],
      quickStats: [
        ["Industry", "Property Development"],
        ["Delivery Scope", "Website + Positioning + Growth System"],
        ["Partnership", "Long-term Execution Partner"],
      ],
      techStack: [
        { label: "React", logoSrc: "https://cdn.simpleicons.org/react/61DAFB" },
        {
          label: "Node.js",
          logoSrc: "https://cdn.simpleicons.org/nodedotjs/339933",
        },
        {
          label: "AWS",
          logoSrc: "https://cdn.simpleicons.org/amazonaws/232F3E",
        },
        {
          label: "PostgreSQL",
          logoSrc: "https://cdn.simpleicons.org/postgresql/4169E1",
        },
      ],
    },
    "interior-studio": {
      heroHeadline:
        "Interior Studio: Premium Interior Storytelling with a High-Conversion Digital Journey",
      heroSubheadline:
        "How we transformed Interior Studio's online presence into a clearer, stronger pathway from inspiration to consultation.",
      challenge:
        "Interior Studio had strong creative output but needed a tighter digital narrative to communicate value quickly, showcase projects effectively, and convert visitors into qualified consultations.",
      edge: "Using our decade of experience, we identified that the key gap was not visual quality but journey structure: visitors needed clearer progression from mission to projects to service action.",
      solution:
        "We delivered a premium website and growth architecture that aligned brand messaging, project visibility, and consultation pathways around one cohesive user experience.",
      features: [
        "Project-first visual hierarchy with cleaner discovery paths",
        "Consultation-focused page flow with clearer conversion moments",
        "Content and publishing workflows for consistent brand updates",
      ],
      stackProof:
        "We implemented a modern performance-first stack with measurable engagement tracking so Interior Studio can iterate content and conversion decisions with confidence.",
      roi: [
        "Sharper premium positioning across core pages",
        "Higher consultation intent from improved UX clarity",
        "Better project engagement through stronger visual storytelling",
      ],
      quickStats: [
        ["Industry", "Interior Design"],
        ["Delivery Scope", "Website + Positioning + Growth System"],
        ["Partnership", "Design-led digital execution"],
      ],
      techStack: [
        {
          label: "Next.js",
          logoSrc: "https://cdn.simpleicons.org/nextdotjs/000000",
        },
        {
          label: "GA4",
          logoSrc: "https://cdn.simpleicons.org/googleanalytics/E37400",
        },
        { label: "SEO", logoSrc: "https://cdn.simpleicons.org/google/4285F4" },
        {
          label: "Node.js",
          logoSrc: "https://cdn.simpleicons.org/nodedotjs/339933",
        },
      ],
    },
    lomashwood: {
      heroHeadline:
        "Lomash Wood: From Zero to Launch with Full-Spectrum Digital Delivery",
      heroSubheadline:
        "How we planned, designed, built, and continue to support Lomash Wood as a long-term digital commerce and growth partner.",
      challenge:
        "Lomash Wood required a complete digital foundation built from scratch, including product discovery journeys, consultation pathways, and a scalable structure for ongoing expansion.",
      edge: "Using our decade of experience, we treated strategy, delivery, and support as one continuous system so launch quality and long-term maintainability were aligned from day one.",
      solution:
        "We delivered end-to-end execution across planning, UX architecture, development, and launch operations, then transitioned into a lifetime maintenance and support model to keep performance, reliability, and growth momentum strong.",
      features: [
        "Custom journey architecture for kitchen and bedroom discovery",
        "Consultation and conversion pathways aligned to real buyer intent",
        "Continuous maintenance, fixes, and optimisation as an ongoing service",
      ],
      stackProof:
        "We implemented a modern web stack with structured content workflows and analytics visibility so the platform could scale without compromising speed, usability, or operational control.",
      roi: [
        "A fully operational branded platform delivered from the ground up",
        "Clearer customer pathways from product exploration to consultation",
        "Long-term confidence through dedicated lifetime maintenance and support",
      ],
      quickStats: [
        ["Industry", "Home Interiors and Commerce"],
        ["Delivery Scope", "Planning + Build + Launch + Lifetime Support"],
        ["Partnership", "Long-term Maintenance Partner"],
      ],
      techStack: [
        {
          label: "Next.js",
          logoSrc: "https://cdn.simpleicons.org/nextdotjs/000000",
        },
        {
          label: "TypeScript",
          logoSrc: "https://cdn.simpleicons.org/typescript/3178C6",
        },
        {
          label: "Node.js",
          logoSrc: "https://cdn.simpleicons.org/nodedotjs/339933",
        },
        {
          label: "GA4",
          logoSrc: "https://cdn.simpleicons.org/googleanalytics/E37400",
        },
      ],
    },
    "cdc-housing": {
      heroHeadline:
        "CDC Housing: WordPress Platform and Full Digital Marketing Delivery",
      heroSubheadline:
        "How we built CDC Housing's website and growth engine to strengthen trust, visibility, and enquiry performance.",
      challenge:
        "CDC Housing needed a stronger online foundation to present project quality, service credibility, and development value with clearer pathways from interest to enquiry.",
      edge: "Using our decade of experience, we designed the website and marketing systems together so brand messaging, acquisition channels, and conversion flow worked as one connected programme.",
      solution:
        "We delivered a full WordPress website and digital marketing execution model, including information architecture, conversion-focused page journeys, tracking setup, and campaign structure for continuous optimisation.",
      features: [
        "WordPress architecture tailored to construction and housing storytelling",
        "Structured conversion pathways from content engagement to contact",
        "Digital marketing operations with ongoing performance optimisation",
      ],
      stackProof:
        "We implemented a performance-aware WordPress foundation and marketing measurement stack so CDC Housing could scale visibility and lead quality with consistent reporting confidence.",
      roi: [
        "Clearer communication of project and delivery strengths",
        "Improved lead journey clarity across website and campaign touchpoints",
        "Stronger digital consistency through integrated growth operations",
      ],
      quickStats: [
        ["Industry", "Housing and Construction"],
        ["Delivery Scope", "WordPress Website + Full Digital Marketing"],
        ["Partnership", "Long-term Growth Execution"],
      ],
      techStack: [
        {
          label: "WordPress",
          logoSrc: "https://cdn.simpleicons.org/wordpress/21759B",
        },
        {
          label: "GA4",
          logoSrc: "https://cdn.simpleicons.org/googleanalytics/E37400",
        },
        {
          label: "Meta Ads",
          logoSrc: "https://cdn.simpleicons.org/meta/0467DF",
        },
        {
          label: "SEO",
          logoSrc: "https://cdn.simpleicons.org/google/4285F4",
        },
      ],
    },
  };

  const detail = detailsBySlug[item.slug] ?? {
    heroHeadline: `Revolutionizing Operations: A Scalable Ecosystem for ${item.client}`,
    heroSubheadline:
      "How we integrated custom product logic with high-performance web architecture to eliminate delivery friction and improve outcomes.",
    challenge: item.problem,
    edge: "Using our decade of experience, we identified architecture and interoperability bottlenecks before implementation began.",
    solution: item.solution,
    features: [
      "Real-time workflow visibility",
      "Automated stakeholder portals",
      "Secure enterprise-ready data controls",
    ],
    stackProof:
      "We build custom systems with modern frameworks, resilient cloud infrastructure, and secure data architecture to support long-term scale.",
    roi: item.results,
    quickStats: [
      ["Industry", item.category],
      ["Tech Stack", item.technologies.slice(0, 3).join(", ")],
      ["Timeline", "MVP to long-term optimisation partnership"],
    ],
    techStack: [
      { label: "React", logoSrc: "https://cdn.simpleicons.org/react/61DAFB" },
      {
        label: "Node.js",
        logoSrc: "https://cdn.simpleicons.org/nodedotjs/339933",
      },
      { label: "AWS", logoSrc: "https://cdn.simpleicons.org/amazonaws/232F3E" },
      {
        label: "PostgreSQL",
        logoSrc: "https://cdn.simpleicons.org/postgresql/4169E1",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden bg-background py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.12)_0%,transparent_66%)]" />
        <div className="relative mx-auto w-full max-w-305 px-6 md:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            <Sparkles className="size-3" />
            Case Study Detail
          </div>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {detail.heroHeadline}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
            {detail.heroSubheadline}
          </p>

          <div className="mt-8 grid gap-3 rounded-2xl border border-border/60 bg-card p-4 shadow-[0_12px_36px_rgba(15,23,42,0.08)] md:grid-cols-3">
            {detail.quickStats.map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-border/50 bg-background p-4"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {label}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-border/60 bg-card p-6 shadow-[0_12px_34px_rgba(15,23,42,0.06)]">
              <h2 className="text-xl font-semibold text-foreground">
                The Challenge
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {detail.challenge}
              </p>
            </article>
            <article className="rounded-2xl border border-primary/20 bg-primary/6 p-6 shadow-[0_12px_34px_rgba(79,70,229,0.12)]">
              <h2 className="text-xl font-semibold text-foreground">
                The 10-Year Edge
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {detail.edge}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-305 gap-6 px-6 md:grid-cols-[1.1fr_0.9fr] md:px-10">
          <article className="rounded-2xl border border-border/60 bg-card p-6">
            <h2 className="text-xl font-semibold text-foreground">
              The Solution
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {detail.solution}
            </p>
            <div className="mt-5 grid gap-2">
              {detail.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <CheckCircle2 className="mt-0.5 size-4 text-primary" />
                  {feature}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-border/60 bg-card p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Delivery Momentum
            </h2>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Clock3 className="size-4 text-primary" /> MVP in focused
                sprints
              </p>
              <p className="flex items-center gap-2">
                <Workflow className="size-4 text-primary" /> Continuous roadmap
                iterations
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary" /> Security-first
                deployment cycles
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <div className="mb-6 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              The Tech Stack
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {detail.stackProof}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {detail.techStack.map(({ label, logoSrc }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-xl border border-border/60 bg-card p-4"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-primary/8">
                  <img
                    src={logoSrc}
                    alt={`${label} logo`}
                    className="h-4 w-4"
                    loading="lazy"
                  />
                </span>
                <span className="text-sm font-medium text-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <div className="rounded-2xl border border-primary/20 bg-primary/6 p-6 md:p-7">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              The ROI
            </h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {detail.roi.map((metric) => (
                <div
                  key={metric}
                  className="rounded-xl border border-primary/18 bg-background p-4 text-sm font-medium text-foreground"
                >
                  {metric}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <div className="mb-6 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              We are the long-term technology partner for the UK&apos;s premier
              construction and property management firms.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-border/60 bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">
                CDC Group Ecosystem
              </h3>
              <div className="mt-4 space-y-2 text-sm text-foreground">
                <p>CDC Construction (Infrastructure and Build)</p>
                <p>CDC Property Management (Operational Tech)</p>
                <p>CDC Development (Strategic Growth)</p>
              </div>
            </article>
            <article className="rounded-2xl border border-border/60 bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Specialized Design and Materials
              </h3>
              <div className="mt-4 space-y-2 text-sm text-foreground">
                <p>Interior Studio Ltd (High-end Visuals)</p>
                <p>Lomash Wood (Supply Chain and Logistics)</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <div className="rounded-2xl border border-border/60 bg-card p-7 shadow-[0_14px_36px_rgba(15,23,42,0.06)] md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Product Studio Anchor
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Built on Our Own Proven Technology
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
              The success of our clients is powered by the same core engines
              that run our proprietary software.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                "BrickJourney: The gold standard for journey and logistics management.",
                "HR Management Core: Enterprise-grade employee lifecycle tracking.",
                "Property Management Suite: The unified portal for modern real estate.",
              ].map((entry) => (
                <div
                  key={entry}
                  className="rounded-xl border border-border/60 bg-background p-4 text-sm text-foreground"
                >
                  {entry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background pb-22 md:pb-24">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-7">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Need a similar architecture for your business?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              We can map your current systems, define integration priorities,
              and design a scalable execution roadmap in one strategy call.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full px-6 font-semibold"
              >
                <Link href="/book-free-strategy-call">Book Strategy Call</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-6 font-semibold"
              >
                <Link href="/portfolio">
                  Back to Case Studies
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
