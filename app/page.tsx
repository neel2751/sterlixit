"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HomeSitelinksSchema } from "@/components/breadcrumb-schema";
import {
  AnimatedReveal,
  AnimatedTextRail,
  ExitIntentDialog,
  HomeHeroMotion,
  LiveChatButton,
  MarketingFeatureStack,
  SiteContainer,
  SiteFooter,
  SiteHeader,
  SnapSection,
} from "@/components/site-shell";
import { GlassmorphismMinimalMetricsBlock } from "@/components/ui/glassmorphism-minimal-metrics-block-shadcnui";
import { GlassmorphismPortfolioBlock } from "@/components/ui/glassmorphism-portfolio-block-shadcnui";
import { Testimonial as CleanTestimonial } from "@/components/ui/clean-testimonial";
import { VercepFeaturesSection } from "@/components/ui/vercep-features-section";
import { Input } from "@/components/ui/input";
import {
  coreServices,
  differentiators,
  industries,
  portfolioItems,
  processSteps,
} from "@/lib/site-data";
import Image from "next/image";

const metrics = [
  { label: "Avg. Conversion Lift", value: "+37%" },
  { label: "Projects Delivered", value: "10+" },
  { label: "Retention Uplift", value: "+28%" },
  { label: "Time to Launch", value: "6-10 wks" },
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

const servicePreviewImages = [
  "/services/branding.mp4",
  "/services/web.mp4",
  "/services/digital.mp4",
  "/services/saas.mp4",
  "/services/support.mp4",
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
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState<number | null>(
    null,
  );
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterState, setNewsletterState] = useState<
    "idle" | "loading" | "done" | "error"
  >("idle");
  const [isJumpDockHidden, setIsJumpDockHidden] = useState(false);
  const [activeJumpId, setActiveJumpId] = useState("hero");
  const mainRef = useRef<HTMLElement>(null);
  const footerSentinelRef = useRef<HTMLDivElement>(null);
  const servicePreviewRef = useRef<HTMLDivElement>(null);
  const servicePreviewVideoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const previewX = useMotionValue(0);
  const previewY = useMotionValue(0);
  const smoothPreviewX = useSpring(previewX, { stiffness: 180, damping: 24 });
  const smoothPreviewY = useSpring(previewY, { stiffness: 180, damping: 24 });

  const handleServiceMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!servicePreviewRef.current) {
      return;
    }

    const rect = servicePreviewRef.current.getBoundingClientRect();
    previewX.set(event.clientX - rect.left + 24);
    previewY.set(event.clientY - rect.top - 120);
  };

  useEffect(() => {
    servicePreviewVideoRefs.current.forEach((video, index) => {
      if (!video) {
        return;
      }

      if (hoveredServiceIndex === index) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
        return;
      }

      video.pause();
      video.currentTime = 0;
    });
  }, [hoveredServiceIndex]);

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
      <SiteHeader />

      <SnapSection className="md:block md:py-8">
        <div className="w-full">
          <div id="hero">
            <HomeHeroMotion />
          </div>
          <AnimatedTextRail
            items={[
              "Design velocity",
              "Revenue systems",
              "Growth compounding",
              "Operational clarity",
              "Market leadership",
            ]}
          />
        </div>
      </SnapSection>

      <section
        id="trust-bar"
        className="relative overflow-hidden py-7 md:py-10"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_55%)]" />
        <SiteContainer>
          <div className="rounded-2xl border border-border/60 bg-background/70 px-4 py-4 backdrop-blur-sm md:px-6 md:py-5">
            <p className="text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground md:text-left">
              Trusted by Our Clients Across Property, Development, and Growth
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-7">
              {trustLogos.map((logo) => (
                <div
                  key={logo.src}
                  className="group flex h-14 items-center justify-center rounded-xl border border-border/55 bg-secondary/25 px-3 transition"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={52}
                    className={`w-full object-contain opacity-95 transition duration-300 group-hover:opacity-100 ${logo.sizeClass}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section id="impact">
        <GlassmorphismMinimalMetricsBlock
          badgeText="Growth Snapshot"
          heading="A clean readout of the numbers that move your pipeline"
          description="Your existing performance metrics, redesigned into a glassmorphism block that feels premium without adding noise."
          metrics={metrics}
          footerLabel="strategy desk"
          footerDescription="Weekly performance briefs keep leadership focused on what to improve next."
          ctaText="Book a strategy review"
        />
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
        className="relative overflow-hidden py-14 md:py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_20%_0%,rgba(99,102,241,0.1),transparent_45%)]" />
        <SiteContainer>
          <div className="grid gap-7 md:gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <AnimatedReveal className="space-y-6 lg:sticky lg:top-28">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">
                Service Stack
              </p>
              <h2 className="max-w-xl text-[1.85rem] font-semibold tracking-tight leading-[1.1] sm:text-4xl md:text-5xl md:leading-[1.08]">
                One Partner for Product, Platform, and Performance.
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
                Instead of hiring fragmented vendors, you get one integrated
                team delivering brand, web, product, and growth execution
                against clear revenue goals.
              </p>
              <Button asChild size="lg">
                <Link href="/services">Explore Full Capability Map</Link>
              </Button>
            </AnimatedReveal>

            <div
              ref={servicePreviewRef}
              onMouseMove={handleServiceMouseMove}
              onMouseLeave={() => setHoveredServiceIndex(null)}
              className="relative space-y-4"
            >
              <motion.div
                aria-hidden
                style={{ x: smoothPreviewX, y: smoothPreviewY }}
                animate={{
                  opacity: hoveredServiceIndex === null ? 0 : 1,
                  scale: hoveredServiceIndex === null ? 0.9 : 1,
                }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="pointer-events-none absolute left-0 top-0 z-20 hidden w-72 overflow-hidden rounded-2xl border border-primary/25 bg-background/80 shadow-[0_22px_70px_rgba(79,70,229,0.22)] backdrop-blur-lg lg:block"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  {coreServices.map((service, index) => (
                    // <Image
                    //   key={`service-preview-${service.slug}`}
                    //   src={
                    //     servicePreviewImages[
                    //       index % servicePreviewImages.length
                    //     ]
                    //   }
                    //   height={176}
                    //   width={288}
                    //   alt={`${service.title} service preview by Sterlixit`}
                    //   title={`Sterlixit ${service.title} service preview`}
                    //   className="absolute inset-0 h-full w-full object-cover transition-all duration-400 ease-out"
                    //   style={{
                    //     opacity: hoveredServiceIndex === index ? 1 : 0,
                    //     transform:
                    //       hoveredServiceIndex === index
                    //         ? "scale(1)"
                    //         : "scale(1.08)",
                    //   }}
                    // />
                    <video
                      key={`service-preview-${service.slug}`}
                      ref={(element) => {
                        servicePreviewVideoRefs.current[index] = element;
                      }}
                      src={
                        servicePreviewImages[
                          index % servicePreviewImages.length
                        ]
                      }
                      className="absolute inset-0 h-full w-full object-cover transition-all duration-400 ease-out"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      style={{
                        opacity: hoveredServiceIndex === index ? 1 : 0,
                        transform:
                          hoveredServiceIndex === index
                            ? "scale(1)"
                            : "scale(1.08)",
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-linear-to-t from-background/30 to-transparent" />
                </div>
              </motion.div>

              {coreServices.map((service, index) => (
                <AnimatedReveal key={service.slug} delay={index * 0.07}>
                  <article
                    onMouseEnter={() => setHoveredServiceIndex(index)}
                    className="group relative overflow-hidden rounded-3xl border border-border/60 bg-linear-to-r from-secondary/45 to-background/95 p-5 shadow-[0_16px_44px_rgba(15,23,42,0.08)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_20px_56px_rgba(79,70,229,0.14)] md:p-6"
                  >
                    <div
                      className={`absolute inset-0 bg-primary/6 transition duration-300 ${
                        hoveredServiceIndex === index
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                    <div className="grid gap-4 md:grid-cols-[64px_minmax(0,1fr)_auto] md:items-center">
                      <div className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-sm font-semibold text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-lg font-semibold">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                      <Button
                        asChild
                        variant="ghost"
                        className="relative z-10 h-auto w-fit p-0 text-primary hover:bg-transparent"
                      >
                        <Link href={`/services/${service.slug}`}>
                          Details{" "}
                          <ArrowUpRight className="ml-1 size-4 transition group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </article>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      {/* <section
        id="industries"
        className="relative overflow-hidden py-14 md:py-20 lg:py-24"
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
                <article className="group relative overflow-hidden rounded-3xl border border-border/60 bg-background/75 p-5 shadow-[0_14px_38px_rgba(15,23,42,0.06)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_20px_56px_rgba(79,70,229,0.12)] md:p-6">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/8 blur-2xl transition group-hover:bg-primary/14" />
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
                        {industry.caseStudies.length} case study
                        {industry.caseStudies.length > 1 ? "ies" : ""}
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
        className="relative overflow-hidden py-14 md:py-20 lg:py-24"
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
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <ShieldCheck className="size-4" /> Fintech-grade execution
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <AnimatedReveal>
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-linear-to-br from-primary/15 via-background to-background p-6 shadow-[0_22px_64px_rgba(79,70,229,0.12)] md:p-8">
                <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full bg-primary/12 blur-2xl" />
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
                      className="rounded-2xl border border-border/55 bg-background/80 p-4"
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
                  <div className="rounded-2xl border border-border/60 bg-background/75 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.04)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_14px_34px_rgba(79,70,229,0.09)]">
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
        className="relative overflow-hidden py-14 md:py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background:radial-gradient(circle_at_30%_0%,rgba(110,120,255,0.12),transparent_40%),radial-gradient(circle_at_70%_100%,rgba(70,70,70,0.08),transparent_45%)]" />
        <SiteContainer>
          <AnimatedReveal>
            <div>
              <div className="mb-10 flex flex-col items-start justify-between gap-5 md:mb-12 md:flex-row md:items-center md:gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary/70">
                    Proven Framework
                  </p>
                  <h2 className="mt-2 max-w-md text-[1.85rem] font-bold tracking-tight leading-[1.1] sm:text-4xl md:text-4xl">
                    How We Execute
                  </h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  <ShieldCheck className="size-4" /> Structured Delivery
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-6 lg:grid-cols-5">
                <AnimatedReveal delay={0}>
                  <motion.div
                    className="group relative col-span-1 h-full rounded-3xl border border-border/55 bg-linear-to-br from-primary/12 to-background/60 p-6 shadow-[0_14px_38px_rgba(15,23,42,0.06)] md:col-span-2 md:p-8"
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
                    className="group relative col-span-1 rounded-3xl border border-border/55 bg-linear-to-br from-primary/10 to-background/65 p-6 shadow-[0_14px_38px_rgba(15,23,42,0.06)] md:col-span-2 md:p-8"
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
                    className="group relative col-span-1 rounded-3xl border border-border/55 bg-linear-to-br from-primary/8 to-background/65 p-6 shadow-[0_14px_38px_rgba(15,23,42,0.06)] md:col-span-1"
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
                    className="group relative col-span-1 rounded-3xl border border-border/55 bg-linear-to-br from-primary/9 to-background/65 p-6 shadow-[0_14px_38px_rgba(15,23,42,0.06)] md:col-span-2 md:p-8"
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
                    className="group relative col-span-1 h-full rounded-3xl border border-border/55 bg-linear-to-br from-primary/10 to-background/65 p-6 shadow-[0_14px_38px_rgba(15,23,42,0.06)] md:col-span-1 md:p-8"
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
        className="relative overflow-hidden py-14 md:py-20 lg:py-24"
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
                <article className="group relative overflow-hidden rounded-3xl border border-border/60 bg-background/75 p-5 shadow-[0_14px_38px_rgba(15,23,42,0.06)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_20px_56px_rgba(79,70,229,0.12)] md:p-6">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/8 blur-2xl transition group-hover:bg-primary/14" />
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
                        {industry.caseStudies.length} case study
                        {industry.caseStudies.length > 1 ? "ies" : ""}
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
              <p className="text-xs uppercase tracking-[0.2em] text-primary/80">
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
          <div className="rounded-3xl border border-border/60 bg-background/70 shadow-[0_18px_54px_rgba(79,70,229,0.08)] backdrop-blur">
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
                <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-linear-to-br from-primary/15 via-background to-background p-6 shadow-[0_18px_48px_rgba(79,70,229,0.12)] md:p-8">
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/14 blur-3xl" />
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
                    <span className="rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs text-muted-foreground">
                      Onboarding clarity
                    </span>
                    <span className="rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs text-muted-foreground">
                      Scoped SLA models
                    </span>
                    <span className="rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs text-muted-foreground">
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
                      className="overflow-hidden rounded-2xl border border-border/60 bg-background/82 px-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm transition hover:border-primary/35"
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
                  className="group block rounded-2xl border border-border/60 bg-background/80 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_14px_34px_rgba(79,70,229,0.1)]"
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
          <div className="mx-auto w-full max-w-max overflow-x-auto rounded-full border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.06))] p-3 shadow-[0_18px_44px_rgba(15,23,42,0.26)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_15%_0%,rgba(255,255,255,0.24),transparent_42%)]" />
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
          </div>
        </div>
      ) : null}

      <div ref={footerSentinelRef} aria-hidden />
      <SiteFooter />
      <ExitIntentDialog />
      <LiveChatButton />
    </main>
  );
}
