"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Repeat,
  Rocket,
  ShieldCheck,
  Sparkles,
  Timer,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HomeSitelinksSchema } from "@/components/breadcrumb-schema";
import { JsonLd } from "@/components/json-ld";
import {
  faqPageSchemaFromQuestions,
  localBusinessSchema,
} from "@/lib/structured-data";
import {
  AnimatedReveal,
  ExitIntentDialog,
  HomeHeroMotion,
  LiveChatButton,
  SiteContainer,
  SiteFooter,
  SiteHeader,
  SnapSection,
} from "@/components/site-shell";
import { GlassmorphismPortfolioBlock } from "@/components/ui/glassmorphism-portfolio-block-shadcnui";
import { Testimonial as CleanTestimonial } from "@/components/ui/clean-testimonial";
import {
  coreServices,
  differentiators,
  industries,
  portfolioItems,
  processSteps,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";
import Image from "next/image";

/**
 * Interactive bento tile: gradient border-glow + hover lift (via global
 * utilities) plus a cursor-tracking spotlight. Reused by the metrics and
 * services grids to keep the premium treatment consistent.
 */
function BentoCard({
  className,
  children,
  spotlight = true,
  href,
  linkLabel,
}: {
  className?: string;
  children: ReactNode;
  spotlight?: boolean;
  href?: string;
  linkLabel?: string;
}) {
  const handleMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      onMouseMove={spotlight ? handleMove : undefined}
      className={cn(
        "glow-border lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-6 shadow-sm backdrop-blur-xl md:p-7",
        className,
      )}
    >
      {spotlight ? (
        <div
          aria-hidden="true"
          className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      ) : null}
      <div className="relative z-10 flex h-full flex-col">{children}</div>
      {href ? (
        <Link
          href={href}
          aria-label={linkLabel}
          className="absolute inset-0 z-20 rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="sr-only">{linkLabel}</span>
        </Link>
      ) : null}
    </div>
  );
}

const metrics = [
  {
    label: "Avg. Conversion Lift",
    value: "+37%",
    delta: "+12% QoQ",
    description: "More qualified leads from the same traffic.",
    icon: TrendingUp,
  },
  {
    label: "Projects Delivered",
    value: "10+",
    delta: "On time",
    description: "Shipped across property, SaaS, and growth.",
    icon: Rocket,
  },
  {
    label: "Retention Uplift",
    value: "+28%",
    delta: "+9 NPS",
    description: "Customers who stay and expand post-launch.",
    icon: Repeat,
  },
  {
    label: "Time to Launch",
    value: "6–10 wks",
    delta: "40% faster",
    description: "From kickoff to a production-ready build.",
    icon: Timer,
  },
];

const trustLogos = [
  { src: "/client/cdc.svg", alt: "CDC", sizeClass: "h-8 max-w-33" },
  {
    src: "/client/cdcDevelopment.svg",
    alt: "CDC Development",
    sizeClass: "h-8 max-w-34",
  },
  {
    src: "/client/cdcpropertymanagement.svg",
    alt: "CDC Property Management",
    sizeClass: "h-9 max-w-44",
  },
  {
    src: "/client/cdcwastemanagement.svg",
    alt: "CDC Waste Management",
    sizeClass: "h-8 max-w-39",
  },
  {
    src: "/client/Lomashwood.svg",
    alt: "Lomashwood",
    sizeClass: "h-8 max-w-34",
  },
  {
    src: "/client/interiorstudio.svg",
    alt: "Interior Studio",
    sizeClass: "h-8 max-w-34",
  },
  {
    src: "/client/cdchousing.webp",
    alt: "CDC Housing",
    sizeClass: "h-8 max-w-33",
  },
];

const homeSitelinks = [
  { name: "Features", href: "/services" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/portfolio" },
  { name: "Industries", href: "/industries" },
  { name: "Contact Us", href: "/contact" },
];

const storyChapters = [
  {
    id: "services",
    chapter: "Chapter 01",
    title: "Capabilities",
    summary: "See the full service stack across product, platform, and growth.",
    href: "/services",
  },
  {
    id: "why-choose-us",
    chapter: "Chapter 02",
    title: "Why Sterlixit",
    summary: "Understand the operating model that drives predictable outcomes.",
    href: "/about",
  },
  {
    id: "industries",
    chapter: "Chapter 03",
    title: "Industries",
    summary:
      "Discover sector-specific solutions tailored to your market reality.",
    href: "/industries",
  },
  {
    id: "process",
    chapter: "Chapter 04",
    title: "Execution",
    summary: "Review the framework used to move from plan to launch.",
    href: "/book-free-strategy-call",
  },
  {
    id: "proof",
    chapter: "Chapter 05",
    title: "Proof & Results",
    summary: "Explore case study outcomes and client confidence signals.",
    href: "/portfolio",
  },
];

const jumpSections = [
  { id: "hero", label: "Hero" },
  { id: "trust-bar", label: "Trust" },
  { id: "impact", label: "Our Clients" },
  { id: "services", label: "Services" },
  { id: "why-choose-us", label: "Why Us" },
  { id: "process", label: "Process" },
  { id: "industries", label: "Industries" },
  { id: "case-studies", label: "Case Studies" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  //   { id: "final-cta", label: "Get Started" },
];

const homeFaqs = [
  {
    question: "How long is onboarding?",
    answer:
      "Most engagements start with a 1-2 week discovery and onboarding sprint, then move into execution with clear milestones.",
  },
  {
    question: "Do you offer 24/5 support?",
    answer:
      "Yes, support coverage can include extended-hours or critical-system response, but the SLA model is scoped case by case around your platform, business-critical workflows, and escalation needs.",
  },
  {
    question: "Are we locked into a long-term contract?",
    answer:
      "We offer flexible engagement models: project-based, monthly retainers, and longer-term growth partnerships based on your needs.",
  },
  {
    question: "Can you integrate with our existing tools?",
    answer:
      "Yes, we specialize in integrating with a wide range of platforms and tools to ensure seamless workflows and data consistency.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We have experience across SaaS, e-commerce, healthtech, and more. Our approach is adaptable to meet the unique challenges of different sectors.",
  },
];

const explorePages = [
  {
    title: "Services",
    description: "All capabilities and specialist pages",
    href: "/services",
  },
  {
    title: "Case Studies",
    description: "Case studies and measurable outcomes",
    href: "/portfolio",
  },
  {
    title: "Industries",
    description: "Sector-specific approaches and playbooks",
    href: "/industries",
  },
  {
    title: "About",
    description: "Team, values, and operating model",
    href: "/about",
  },
  {
    title: "Pricing",
    description: "Transparent plans and engagement models",
    href: "/pricing",
  },
  {
    title: "Blog",
    description: "Growth insights and practical guides",
    href: "/blog",
  },
  {
    title: "Resources",
    description: "Free audits, templates, and assets",
    href: "/resources",
  },
  {
    title: "Testimonials",
    description: "Client stories and social proof",
    href: "/testimonials",
  },
  {
    title: "FAQ",
    description: "Common questions answered clearly",
    href: "/faq",
  },
  {
    title: "Careers",
    description: "Open roles and culture details",
    href: "/careers",
  },
  {
    title: "Contact",
    description: "Talk to our team about your goals",
    href: "/contact",
  },
  {
    title: "Book Strategy Call",
    description: "Start with a focused growth conversation",
    href: "/book-free-strategy-call",
  },
];

export default function HomePage() {
  const [isJumpDockHidden, setIsJumpDockHidden] = useState(false);
  const [activeJumpId, setActiveJumpId] = useState("hero");
  const mainRef = useRef<HTMLElement>(null);
  const footerSentinelRef = useRef<HTMLDivElement>(null);

  const [featuredMetric, ...secondaryMetrics] = metrics;
  const FeaturedMetricIcon = featuredMetric.icon;

  useEffect(() => {
    const syncJumpDock = () => {
      const footerSentinel = footerSentinelRef.current;
      if (footerSentinel) {
        const sentinelTop = footerSentinel.getBoundingClientRect().top;
        setIsJumpDockHidden(sentinelTop <= window.innerHeight - 90);
      }

      const focusLine = window.innerHeight * 0.38;
      let nextActive = jumpSections[0].id;

      for (const section of jumpSections) {
        const node = document.getElementById(section.id);
        if (!node) {
          continue;
        }

        const rect = node.getBoundingClientRect();
        if (rect.top <= focusLine && rect.bottom >= focusLine) {
          nextActive = section.id;
        }
      }

      setActiveJumpId(nextActive);
    };

    const mainNode = mainRef.current;
    syncJumpDock();

    mainNode?.addEventListener("scroll", syncJumpDock, { passive: true });
    window.addEventListener("scroll", syncJumpDock, { passive: true });
    window.addEventListener("resize", syncJumpDock);

    return () => {
      mainNode?.removeEventListener("scroll", syncJumpDock);
      window.removeEventListener("scroll", syncJumpDock);
      window.removeEventListener("resize", syncJumpDock);
    };
  }, []);

  return (
    <main
      ref={mainRef}
      className="min-h-screen overflow-x-clip bg-background md:h-screen md:snap-y md:snap-proximity md:overflow-y-auto md:scroll-smooth md:scroll-pt-20"
    >
      <HomeSitelinksSchema items={homeSitelinks} />
      <JsonLd data={localBusinessSchema} />
      {/* FAQPage schema mirrors the visible homepage FAQ accordion (D-02). */}
      <JsonLd data={faqPageSchemaFromQuestions(homeFaqs)} />
      <SiteHeader />

      <div id="main-content" tabIndex={-1} className="outline-none">
        <SnapSection className="md:block md:py-8">
          <div id="hero" className="w-full">
            <HomeHeroMotion />
          </div>
        </SnapSection>

      <section
        id="trust-bar"
        className="relative overflow-hidden py-10 md:py-14"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_60%)]" />
        <SiteContainer>
          <AnimatedReveal>
            <div className="flex items-center justify-center">
              <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                <span className="h-px w-8 bg-linear-to-r from-transparent to-border md:w-12" />
                The clients we design, build &amp; grow with
                <span className="h-px w-8 bg-linear-to-l from-transparent to-border md:w-12" />
              </span>
            </div>

            <div className="mt-9 grid grid-cols-2 items-center gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-7">
              {trustLogos.map((logo) => (
                <div
                  key={logo.src}
                  className="group flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={52}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 160px"
                    className={`w-full object-contain opacity-70 grayscale transition duration-300 ease-out group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0 ${logo.sizeClass}`}
                  />
                </div>
              ))}
            </div>
          </AnimatedReveal>
        </SiteContainer>
      </section>

      <section
        id="impact"
        aria-labelledby="impact-heading"
        className="section-y relative scroll-mt-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_70%)]"
        />
        <SiteContainer>
          <div className="grid grid-cols-2 items-stretch gap-4 sm:gap-5 lg:grid-cols-4">
            {/* Anchor tile — heading + CTA */}
            <div className="col-span-2 flex flex-col justify-between gap-8 rounded-3xl border border-border/60 bg-linear-to-br from-primary/12 via-card to-card p-6 shadow-md md:p-8 lg:col-span-2">
              <div className="space-y-4">
                <span className="eyebrow">Results Snapshot</span>
                <h2
                  id="impact-heading"
                  className="text-balance text-3xl font-semibold tracking-tight md:text-4xl"
                >
                  Outcomes our clients can measure
                </h2>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                  A snapshot of the impact we deliver — measurable gains in
                  conversion, retention, and speed to launch.
                </p>
              </div>
              <Button asChild size="lg" className="group w-fit rounded-full">
                <Link href="/book-free-strategy-call">
                  Book a strategy review
                  <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>

            {/* Featured metric — wide */}
            <BentoCard className="col-span-2">
              <div className="flex items-start justify-between gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                  <FeaturedMetricIcon className="size-5" />
                </span>
                <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                  {featuredMetric.delta}
                </span>
              </div>
              <div className="mt-auto pt-10">
                <p className="text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
                  {featuredMetric.value}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {featuredMetric.label}
                </p>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  {featuredMetric.description}
                </p>
              </div>
            </BentoCard>

            {/* Secondary metrics — two compact tiles + one wide */}
            {secondaryMetrics.map((metric, index) => {
              const Icon = metric.icon;
              const wide = index === secondaryMetrics.length - 1;

              return (
                <BentoCard
                  key={metric.label}
                  className={cn(wide ? "col-span-2" : "col-span-1")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                      {metric.delta}
                    </span>
                  </div>
                  <div className="mt-auto pt-6">
                    <p className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      {metric.label}
                    </p>
                    {wide ? (
                      <p className="mt-2 max-w-md text-sm text-muted-foreground">
                        {metric.description}
                      </p>
                    ) : null}
                  </div>
                </BentoCard>
              );
            })}
          </div>
        </SiteContainer>
      </section>

      {/* <section
        className="relative overflow-hidden py-10 md:py-14"
        id="story-sequence"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-65 [background:radial-gradient(circle_at_20%_0%,rgba(99,102,241,0.1),transparent_45%)]" />
        <SiteContainer>
          <div className="mb-6 flex flex-col gap-3 md:mb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary">
                Storytelling Sequence
              </p>
              <h2 className="mt-2 max-w-3xl text-2xl font-semibold tracking-tight md:text-4xl">
                Follow the path from capability to conversion.
              </h2>
            </div>
            <Button asChild variant="outline" className="w-fit">
              <Link href="#explore-pages">Explore All Pages</Link>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {storyChapters.map((chapter, index) => (
              <AnimatedReveal key={chapter.id} delay={index * 0.05}>
                <article className="rounded-2xl border border-border/60 bg-background/75 p-4 shadow-[0_12px_32px_rgba(15,23,42,0.05)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-primary/35">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-primary/85">
                    {chapter.chapter}
                  </p>
                  <h3 className="mt-2 text-base font-semibold">
                    {chapter.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {chapter.summary}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <Link
                      href={`#${chapter.id}`}
                      className="text-primary hover:underline"
                    >
                      Jump Section
                    </Link>
                    <Link
                      href={chapter.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Open Page
                    </Link>
                  </div>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </SiteContainer>
      </section> */}

      {/* <VercepFeaturesSection /> */}

      <section
        id="services"
        aria-labelledby="services-heading"
        className="section-y relative scroll-mt-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(50%_40%_at_15%_0%,color-mix(in_oklab,var(--primary)_9%,transparent),transparent_60%)]"
        />
        <SiteContainer>
          {/* Asymmetric header: weighted left, CTA pinned right */}
          <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="eyebrow">Service Stack</span>
              <h2
                id="services-heading"
                className="text-balance text-3xl font-semibold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl"
              >
                One partner for product, platform, and performance.
              </h2>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                Instead of hiring fragmented vendors, you get one integrated
                team delivering brand, web, product, and growth execution
                against clear revenue goals.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group w-fit shrink-0 rounded-full"
            >
              <Link href="/services">
                Explore capability map
                <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          {/* Interactive bento: featured service spans wide, the rest tile out */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => {
              const featured = index === 0;

              return (
                <BentoCard
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  linkLabel={`View details for ${service.title}`}
                  className={cn(
                    "min-h-60",
                    featured && "md:col-span-2 lg:col-span-2 lg:min-h-64",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-sm font-semibold tabular-nums text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <div className="mt-auto pt-10">
                    <h3
                      className={cn(
                        "font-semibold tracking-tight",
                        featured ? "text-2xl md:text-3xl" : "text-xl",
                      )}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 text-sm leading-relaxed text-muted-foreground",
                        featured && "md:max-w-lg md:text-base",
                      )}
                    >
                      {service.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      View details
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </BentoCard>
              );
            })}
          </div>
        </SiteContainer>
      </section>

      {/* <section
        id="industries"
        className="relative overflow-hidden section-y scroll-mt-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_10%_10%,rgba(99,102,241,0.1),transparent_42%),radial-gradient(circle_at_90%_80%,rgba(99,102,241,0.08),transparent_45%)]" />
        <SiteContainer>
          <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary">
                Industries We Serve
              </p>
              <h2 className="mt-3 max-w-2xl text-[1.75rem] font-semibold tracking-tight leading-[1.1] sm:text-4xl md:text-5xl">
                Tailored digital systems for high-stakes sectors.
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
                Every industry has different pressure points. We adapt strategy,
                UX, engineering, and growth channels to match your operating
                reality.
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="w-fit">
              <Link href="/industries">
                View All Industries
                <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => (
              <AnimatedReveal key={industry.slug} delay={index * 0.05}>
                <article className="lift glow-border group relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-5 shadow-sm backdrop-blur-sm md:p-6">
                  <div aria-hidden="true" className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/8 blur-2xl transition group-hover:bg-primary/14" />
                  <div className="relative z-10">
                    <p className="text-xs uppercase tracking-[0.16em] text-primary/80">
                      Sector {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">
                      {industry.title}
                    </h3>

                    <div className="mt-4 space-y-2">
                      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        Top Challenges
                      </p>
                      <ul className="space-y-1">
                        {industry.challenges.slice(0, 2).map((challenge) => (
                          <li
                            key={challenge}
                            className="text-sm text-muted-foreground"
                          >
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {industry.caseStudies.length} case stud
                        {industry.caseStudies.length > 1 ? "ies" : "y"}
                      </p>
                      <Button
                        asChild
                        size="sm"
                        variant="ghost"
                        className="h-auto p-0 text-primary hover:bg-transparent"
                      >
                        <Link href={`/industries/${industry.slug}`}>
                          Explore
                          <ArrowUpRight className="ml-1 size-4 transition group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </SiteContainer>
      </section>
      */}

      <section
        id="why-choose-us"
        className="relative overflow-hidden section-y scroll-mt-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_15%_10%,rgba(99,102,241,0.1),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(99,102,241,0.08),transparent_45%)]" />
        <SiteContainer>
          <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary">
                Why Choose Sterlixit
              </p>
              <h2 className="mt-3 max-w-2xl text-[1.75rem] font-semibold tracking-tight leading-[1.1] sm:text-4xl md:text-5xl">
                One accountable partner from strategy to scale.
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-4 py-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <ShieldCheck className="size-4" /> Fintech-grade execution
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <AnimatedReveal>
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-linear-to-br from-primary/15 via-card to-card p-6 shadow-md md:p-8">
                <div aria-hidden="true" className="absolute -right-10 -top-12 h-36 w-36 rounded-full bg-primary/12 blur-2xl" />
                <p className="text-xs uppercase tracking-[0.2em] text-primary/80">
                  Partnership Advantage
                </p>
                <h3 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight md:text-3xl">
                  We combine strategic thinking with hands-on delivery.
                </h3>
                <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
                  You get senior guidance, production-ready execution, and a
                  clear operating rhythm that keeps projects moving without
                  guesswork.
                </p>

                <div className="mt-6 space-y-3">
                  {portfolioItems.slice(0, 2).map((item) => (
                    <div
                      key={item.slug}
                      className="rounded-2xl border border-border/55 bg-card/80 p-4"
                    >
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        Proven in {item.category}
                      </p>
                      <p className="mt-1 text-sm font-semibold">{item.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {item.solution}
                      </p>
                    </div>
                  ))}
                </div>

                <Button asChild className="mt-6" size="lg">
                  <Link href="/contact">
                    Talk to Our Team <ArrowUpRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((item, index) => (
                <AnimatedReveal key={item.title} delay={index * 0.06}>
                  <div className="lift glow-border rounded-2xl border border-border/60 bg-card/70 p-5 shadow-sm backdrop-blur-sm">
                    <div className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-primary">
                      <Sparkles className="size-3.5" />
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-base font-semibold leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section
        id="process"
        className="relative overflow-hidden section-y scroll-mt-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background:radial-gradient(circle_at_30%_0%,rgba(110,120,255,0.12),transparent_40%),radial-gradient(circle_at_70%_100%,rgba(70,70,70,0.08),transparent_45%)]" />
        <SiteContainer>
          <AnimatedReveal>
            <div>
              <div className="mb-10 flex flex-col items-start justify-between gap-5 md:mb-12 md:flex-row md:items-center md:gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">
                    Proven Framework
                  </p>
                  <h2 className="mt-2 max-w-md text-[1.85rem] font-bold tracking-tight leading-[1.1] sm:text-4xl md:text-4xl">
                    How We Execute
                  </h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-4 py-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  <ShieldCheck className="size-4" /> Structured Delivery
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-6 lg:grid-cols-5">
                <AnimatedReveal delay={0}>
                  <motion.div
                    className="group relative col-span-1 h-full rounded-3xl border border-border/55 bg-linear-to-br from-primary/12 to-background/60 p-6 shadow-sm md:col-span-2 md:p-8"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  >
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-linear-to-br from-primary/20 to-primary/5 text-xl font-bold text-primary group-hover:border-primary/60">
                          1
                        </div>
                        <h3 className="mt-4 text-2xl font-bold tracking-tight transition group-hover:text-primary md:text-3xl">
                          {processSteps[0]}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Deep dive into your business, market, and audience to
                        build a comprehensive foundation.
                      </p>
                    </div>
                  </motion.div>
                </AnimatedReveal>

                <AnimatedReveal delay={0.08}>
                  <motion.div
                    className="group relative col-span-1 rounded-3xl border border-border/55 bg-linear-to-br from-primary/10 to-background/65 p-6 shadow-sm md:col-span-2 md:p-8"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  >
                    <div className="flex h-full flex-col justify-between">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-linear-to-br from-primary/20 to-primary/5 text-xl font-bold text-primary group-hover:border-primary/60">
                        2
                      </div>
                      <div>
                        <h3 className="mt-4 text-xl font-bold tracking-tight transition group-hover:text-primary md:text-2xl">
                          {processSteps[1]}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          Develop data-driven strategies tailored to your unique
                          value proposition.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedReveal>

                <AnimatedReveal delay={0.16}>
                  <motion.div
                    className="group relative col-span-1 rounded-3xl border border-border/55 bg-linear-to-br from-primary/8 to-background/65 p-6 shadow-sm md:col-span-1"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-linear-to-br from-primary/20 to-primary/5 text-xl font-bold text-primary group-hover:border-primary/60">
                      3
                    </div>
                    <h3 className="mt-3 text-lg font-bold tracking-tight transition group-hover:text-primary">
                      {processSteps[2]}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      High-performance solutions using cutting-edge tech.
                    </p>
                  </motion.div>
                </AnimatedReveal>

                <AnimatedReveal delay={0.24}>
                  <motion.div
                    className="group relative col-span-1 rounded-3xl border border-border/55 bg-linear-to-br from-primary/9 to-background/65 p-6 shadow-sm md:col-span-2 md:p-8"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-linear-to-br from-primary/20 to-primary/5 text-xl font-bold text-primary group-hover:border-primary/60">
                      4
                    </div>
                    <h3 className="mt-3 text-xl font-bold tracking-tight transition group-hover:text-primary">
                      {processSteps[3]}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Execute a flawless go-to-market with precision timing.
                    </p>
                  </motion.div>
                </AnimatedReveal>

                <AnimatedReveal delay={0.32}>
                  <motion.div
                    className="group relative col-span-1 h-full rounded-3xl border border-border/55 bg-linear-to-br from-primary/10 to-background/65 p-6 shadow-sm md:col-span-1 md:p-8"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  >
                    <div className="flex h-full flex-col justify-between">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-linear-to-br from-primary/20 to-primary/5 text-xl font-bold text-primary group-hover:border-primary/60">
                        5
                      </div>
                      <div>
                        <h3 className="mt-3 text-lg font-bold tracking-tight transition group-hover:text-primary">
                          {processSteps[4]}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          Continuous monitoring, optimisation & support.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedReveal>
              </div>
            </div>
          </AnimatedReveal>
        </SiteContainer>
      </section>

      {/* <section className="py-16 md:py-20 lg:py-24">
        <SiteContainer>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <AnimatedReveal>
              <div className="rounded-3xl border border-border/60 bg-[linear-gradient(140deg,rgba(99,102,241,0.12),rgba(255,255,255,0)_55%)] p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">
                  Client Voice
                </p>
                <p className="mt-4 text-2xl font-medium leading-relaxed md:text-3xl">
                  "{testimonials[0].quote}"
                </p>
                <div className="mt-6 flex items-center gap-1">
                  {Array.from({ length: testimonials[0].rating }).map(
                    (_, i) => (
                      <Star
                        key={`main-star-${i}`}
                        className="size-4 fill-primary text-primary"
                      />
                    ),
                  )}
                </div>
                <p className="mt-4 text-sm font-semibold">
                  {testimonials[0].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[0].role}
                </p>
              </div>
            </AnimatedReveal>

            <div className="space-y-4">
              {testimonials.slice(1, 4).map((item, index) => (
                <AnimatedReveal key={item.name} delay={index * 0.08}>
                  <div className="rounded-2xl border border-border/60 bg-background/70 p-5">
                    <p className="text-sm text-muted-foreground">
                      "{item.quote}"
                    </p>
                    <p className="mt-3 text-sm font-semibold">{item.name}</p>
                  </div>
                </AnimatedReveal>
              ))}
              <Button asChild variant="outline" className="w-full md:w-auto">
                <Link href="/testimonials">See All Client Stories</Link>
              </Button>
            </div>
          </div>
        </SiteContainer>
      </section> */}

      <section
        id="industries"
        className="relative overflow-hidden section-y scroll-mt-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_10%_10%,rgba(99,102,241,0.1),transparent_42%),radial-gradient(circle_at_90%_80%,rgba(99,102,241,0.08),transparent_45%)]" />
        <SiteContainer>
          <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary">
                Industries We Serve
              </p>
              <h2 className="mt-3 max-w-2xl text-[1.75rem] font-semibold tracking-tight leading-[1.1] sm:text-4xl md:text-5xl">
                Specialised expertise for sector-specific growth challenges.
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
                From compliance-heavy environments to high-velocity markets, we
                adapt strategy and delivery to your industry context.
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="w-fit">
              <Link href="/industries">
                View All Industries
                <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => (
              <AnimatedReveal key={industry.slug} delay={index * 0.05}>
                <article className="lift glow-border group relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-5 shadow-sm backdrop-blur-sm md:p-6">
                  <div aria-hidden="true" className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/8 blur-2xl transition group-hover:bg-primary/14" />
                  <div className="relative z-10">
                    <p className="text-xs uppercase tracking-[0.16em] text-primary/80">
                      Sector {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">
                      {industry.title}
                    </h3>
                    <div className="mt-4 space-y-2">
                      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        Top Challenges
                      </p>
                      <ul className="space-y-1">
                        {industry.challenges.slice(0, 2).map((challenge) => (
                          <li
                            key={challenge}
                            className="text-sm text-muted-foreground"
                          >
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {industry.caseStudies.length} case stud
                        {industry.caseStudies.length > 1 ? "ies" : "y"}
                      </p>
                      <Button
                        asChild
                        size="sm"
                        variant="ghost"
                        className="h-auto p-0 text-primary hover:bg-transparent"
                      >
                        <Link href={`/industries/${industry.slug}`}>
                          Explore
                          <ArrowUpRight className="ml-1 size-4 transition group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section
        id="case-studies"
        className="relative overflow-hidden py-8 md:py-12"
      >
        <SiteContainer>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary">
                Case Studies
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                Before and after outcomes across real client projects.
              </h2>
            </div>
            <Button asChild variant="outline" className="hidden md:inline-flex">
              <Link href="/portfolio">View Case Studies</Link>
            </Button>
          </div>
        </SiteContainer>
        <GlassmorphismPortfolioBlock />
      </section>

      <section
        id="testimonials"
        className="relative overflow-hidden py-8 md:py-12"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_50%_10%,rgba(99,102,241,0.08),transparent_55%)]" />
        <SiteContainer>
          <div className="rounded-3xl border border-border/60 bg-card/60 shadow-md backdrop-blur-xl">
            <CleanTestimonial />
          </div>
        </SiteContainer>
      </section>

      {/* <section className="py-16 md:py-20 lg:py-24">
        <SiteContainer>
          <AnimatedReveal>
            <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-secondary/30 to-background p-6 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">
                    Growth Engine
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                    Let's Design Your Next Revenue Chapter.
                  </h2>
                  <p className="mt-4 max-w-xl text-muted-foreground">
                    Start with a practical strategy workshop. You will get a
                    focused roadmap covering design, product, and go-to-market
                    execution.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild size="lg">
                      <Link href="/book-free-strategy-call">
                        Book Strategy Session
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/request-proposal">Request Proposal</Link>
                    </Button>
                  </div>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/85 p-4 md:p-6">
                  <NewsletterSignup />
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </SiteContainer>
      </section> */}

      {/* <MarketingFeatureStack /> */}

      <section id="faq" className="relative overflow-hidden py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-75 [background:radial-gradient(circle_at_15%_0%,rgba(99,102,241,0.14),transparent_48%),radial-gradient(circle_at_85%_20%,rgba(99,102,241,0.09),transparent_45%)]" />
        <SiteContainer>
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <AnimatedReveal>
                <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-linear-to-br from-primary/15 via-card to-card p-6 shadow-md md:p-8">
                  <div aria-hidden="true" className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/14 blur-3xl" />
                  <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
                    <Sparkles className="size-3.5" /> FAQ
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
                    Straight answers before your team commits.
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground md:text-base">
                    We remove uncertainty around onboarding, support, and
                    engagement terms so you can move forward with confidence.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full border border-border/60 bg-card/80 px-3 py-1 text-xs text-muted-foreground">
                      Onboarding clarity
                    </span>
                    <span className="rounded-full border border-border/60 bg-card/80 px-3 py-1 text-xs text-muted-foreground">
                      Scoped SLA models
                    </span>
                    <span className="rounded-full border border-border/60 bg-card/80 px-3 py-1 text-xs text-muted-foreground">
                      Flexible contracts
                    </span>
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="outline" className="rounded-full">
                      <Link href="/contact">
                        Ask a specific question
                        <ArrowUpRight className="ml-1 size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedReveal>

              <AnimatedReveal delay={0.06}>
                <Accordion type="single" collapsible className="space-y-3">
                  {homeFaqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`home-faq-${index}`}
                      className="overflow-hidden rounded-2xl border border-border/60 bg-card/70 px-4 shadow-sm backdrop-blur-sm transition-colors hover:border-primary/35"
                    >
                      <AccordionTrigger className="py-4 text-left text-base font-semibold tracking-tight hover:no-underline">
                        <span className="inline-flex items-center gap-3">
                          <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-primary/35 bg-primary/10 px-2 text-[11px] font-semibold text-primary">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{faq.question}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pl-9 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedReveal>
            </div>
          </div>
        </SiteContainer>
      </section>

      {/* <section
        id="final-cta"
        className="relative overflow-hidden py-12 md:py-16"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.14),transparent_55%)]" />
        <SiteContainer>
          <div className="mx-auto max-w-6xl rounded-3xl border border-border/60 bg-gradient-to-br from-primary/12 via-background to-background p-6 shadow-[0_24px_72px_rgba(79,70,229,0.12)] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary">
                  Final CTA
                </p>
                <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight md:text-5xl">
                  Ready to secure your next growth chapter?
                </h2>
                <p className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
                  Start with a strategy call. We map your priorities, identify
                  execution gaps, and give you a practical next-step plan.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-full px-6">
                    <Link href="/book-free-strategy-call">
                      Schedule a Discovery Call
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full px-6"
                  >
                    <Link href="/request-proposal">Get a Quote</Link>
                  </Button>
                </div>
              </div>

              <form
                className="space-y-3 rounded-2xl border border-border/60 bg-background/78 p-5"
                onSubmit={async (event) => {
                  event.preventDefault();
                  setNewsletterState("loading");

                  const response = await fetch("/api/newsletter", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      email: newsletterEmail,
                      source: "homepage_final_cta_newsletter",
                      tags: ["homepage", "threat-report"],
                    }),
                  });

                  if (response.ok) {
                    setNewsletterState("done");
                    setNewsletterEmail("");
                    return;
                  }

                  setNewsletterState("error");
                }}
              >
                <p className="text-xs uppercase tracking-[0.16em] text-primary/80">
                  Monthly Threat Report
                </p>
                <h3 className="text-xl font-semibold">
                  Get the monthly cybersecurity and growth risk brief.
                </h3>
                <Input
                  type="email"
                  placeholder="Work email"
                  required
                  value={newsletterEmail}
                  onChange={(event) => setNewsletterEmail(event.target.value)}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={newsletterState === "loading"}
                >
                  {newsletterState === "loading"
                    ? "Subscribing..."
                    : "Get Monthly Report"}
                </Button>
                {newsletterState === "done" ? (
                  <p className="text-sm text-emerald-600">
                    Subscribed. Your next report will land in your inbox.
                  </p>
                ) : null}
                {newsletterState === "error" ? (
                  <p className="text-sm text-destructive">
                    Could not subscribe right now. Please retry.
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </SiteContainer>
      </section> */}

      {/* <section
        id="explore-pages"
        className="relative overflow-hidden py-14 md:py-20"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.09),transparent_55%)]" />
        <SiteContainer>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">
              Explore the Full Website
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
              Navigate every key page in one place.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              If you are evaluating Sterlixit, this map gives you direct access
              to services, proof, pricing, resources, and contact paths.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {explorePages.map((page, index) => (
              <AnimatedReveal key={page.href} delay={index * 0.03}>
                <Link
                  href={page.href}
                  className="group block rounded-2xl border border-border/60 bg-card/80 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_14px_34px_rgba(79,70,229,0.1)]"
                >
                  <p className="text-base font-semibold">{page.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {page.description}
                  </p>
                  <div className="mt-4 inline-flex items-center text-sm text-primary">
                    Open page
                    <ArrowUpRight className="ml-1 size-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              </AnimatedReveal>
            ))}
          </div>
        </SiteContainer>
      </section> */}

      {!isJumpDockHidden ? (
        <div className="fixed inset-x-0 bottom-4 z-40 px-3 md:bottom-5 md:px-6">
          <nav
            aria-label="Page sections"
            className="glass relative mx-auto w-full max-w-max overflow-x-auto rounded-full p-2 shadow-lg"
          >
            <div className="relative mx-auto flex w-max items-center gap-2 px-0.5">
              {jumpSections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                    activeJumpId === section.id
                      ? "border-primary/45 bg-primary/16 text-foreground shadow-[0_6px_18px_rgba(79,70,229,0.2)]"
                      : "border-border/60 bg-secondary/30 text-muted-foreground hover:border-primary/35 hover:bg-background/90 hover:text-foreground"
                  }`}
                >
                  {section.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      ) : null}

      </div>

      <div ref={footerSentinelRef} aria-hidden />
      <SiteFooter />
      <ExitIntentDialog />
      <LiveChatButton />
    </main>
  );
}
