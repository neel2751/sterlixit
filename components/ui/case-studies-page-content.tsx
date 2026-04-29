"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cpu,
  Database,
  Globe,
  Layers3,
  Lock,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { HeroPreviewWalls } from "@/components/ui/hero-preview-walls";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { cn } from "@/lib/utils";

type CaseStudyItem = {
  slug: string;
  title: string;
  industry:
    | "SaaS & MVP"
    | "Real Estate"
    | "E-commerce"
    | "Healthcare"
    | "Logistics";
  challenge: string;
  result: string;
  stack: string[];
  href: string;
  detailHref?: string;
  detailAvailable?: boolean;
  isExternal?: boolean;
  comingSoon?: boolean;
  imageSrc?: string;
  imageObjectPosition?: string;
};

const filterOptions = [
  "All",
  "SaaS & MVP",
  "Real Estate",
  "E-commerce",
  "Logistics",
] as const;

const caseStudies: CaseStudyItem[] = [
  {
    slug: "brickjourney-logistics",
    title: "BrickJourney Platform",
    industry: "Logistics",
    imageSrc: "/case-studies/brickjourney/brickjourney.png",
    imageObjectPosition: "50% 50%",
    challenge:
      "This is our in-house logistics product and the public case study is not yet published.",
    result:
      "Full technical case study will be released soon once publication review is completed.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    href: "#",
    detailAvailable: false,
    comingSoon: true,
  },
  {
    slug: "cdc-construction",
    title: "CDC Construction",
    industry: "Real Estate",
    imageObjectPosition: "50% 22%",
    challenge:
      "Website, marketing, and project operations were running as disconnected systems.",
    result:
      "A unified delivery stack improved lead quality, messaging clarity, and operational handoff.",
    stack: ["Next.js", "Marketing Analytics", "Custom Workflows", "GA4"],
    href: "https://cdc.construction/",
    detailHref: "/portfolio/cdc-construction",
    detailAvailable: true,
    isExternal: true,
    imageSrc: "/case-studies/cdc-construction/cdc-construction.png",
  },
  {
    slug: "lomashwood",
    title: "Lomash Wood",
    industry: "E-commerce",
    imageObjectPosition: "50% 45%",
    challenge:
      "Needed a full digital platform built from scratch, with clearer product discovery and consultation pathways.",
    result:
      "Delivered an end-to-end branded platform and now maintain it through ongoing lifetime support.",
    stack: ["Next.js", "TypeScript", "Analytics", "Support Ops"],
    href: "https://www.lomashwood.com/",
    detailHref: "/portfolio/lomashwood",
    detailAvailable: true,
    isExternal: true,
  },
  {
    slug: "cdc-property",
    title: "CDC Property Management",
    industry: "Real Estate",
    imageObjectPosition: "50% 40%",
    challenge:
      "Leads, lettings updates, and tenancy operations were fragmented across systems.",
    result:
      "A connected web and workflow stack improved visibility and service continuity.",
    stack: ["Next.js", "GA4", "Custom Portal Workflows", "Node.js"],
    href: "https://cdcproperty.management/",
    detailHref: "/portfolio/cdc-property",
    detailAvailable: true,
    isExternal: true,
  },
  {
    slug: "interior-studio",
    title: "Interior Studio",
    industry: "Real Estate",
    imageObjectPosition: "50% 35%",
    challenge:
      "Premium design capability was not being communicated clearly across digital touchpoints.",
    result:
      "A structured visual journey improved trust, project discovery, and consultation intent.",
    stack: ["Next.js", "SEO Framework", "GA4", "Content Workflows"],
    href: "https://www.interiorstudioltd.com/",
    detailHref: "/portfolio/interior-studio",
    detailAvailable: true,
    isExternal: true,
  },
  {
    slug: "cdc-development",
    title: "CDC Development",
    industry: "Real Estate",
    imageObjectPosition: "50% 32%",
    challenge:
      "A broad service model needed clearer positioning and enquiry pathways.",
    result:
      "Structured messaging and journey design improved trust and lead intent.",
    stack: ["Next.js", "SEO Framework", "GA4", "Content Workflows"],
    href: "https://www.cdcdevelopment.co.uk/",
    detailHref: "/portfolio/cdc-development",
    detailAvailable: true,
    isExternal: true,
  },
  {
    slug: "cdc-housing",
    title: "CDC Housing",
    industry: "Real Estate",
    imageObjectPosition: "50% 38%",
    challenge:
      "Needed a stronger digital foundation to communicate delivery credibility and convert project interest into qualified enquiries.",
    result:
      "A WordPress platform and full digital marketing system improved visibility, trust, and lead flow continuity.",
    stack: ["WordPress", "Digital Marketing", "SEO", "GA4"],
    href: "https://cdchousing.com/",
    detailHref: "/portfolio/cdc-housing",
    detailAvailable: true,
    isExternal: true,
  },
  {
    slug: "hr-management",
    title: "HR Management Software",
    industry: "SaaS & MVP",
    imageObjectPosition: "50% 50%",
    challenge:
      "This is our in-house product and the full implementation case study is currently in preparation.",
    result: "A detailed launch and architecture story will be published soon.",
    stack: ["React", "Node.js", "PostgreSQL", "RBAC"],
    href: "#",
    detailAvailable: false,
    comingSoon: true,
  },
  {
    slug: "property-suite",
    title: "Property Management Suite",
    industry: "Real Estate",
    imageObjectPosition: "50% 48%",
    challenge:
      "This is our proprietary platform and we are finalising the public-facing case study narrative.",
    result: "The complete case study and rollout details are coming soon.",
    stack: ["Next.js", "Node.js", "AWS", "Realtime APIs"],
    href: "#",
    detailAvailable: false,
    comingSoon: true,
  },
];

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry || !entry.isIntersecting || started) return;
        started = true;

        const duration = 900;
        const startAt = performance.now();

        const tick = (time: number) => {
          const progress = Math.min((time - startAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(target * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

function CoverMediaImage({
  src,
  alt,
  sizes,
  objectPosition,
}: {
  src?: string;
  alt: string;
  sizes: string;
  objectPosition?: string;
}) {
  const [isBroken, setIsBroken] = useState(false);

  if (!src || isBroken) {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className="object-cover"
      style={{ objectPosition: objectPosition ?? "50% 50%" }}
      onError={() => setIsBroken(true)}
    />
  );
}

function FeaturedPlatforms() {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto w-full max-w-305 px-6 md:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Product Innovation Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Proprietary SaaS Platforms Built for Real Operations
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
            Explore our in-house software platforms engineered for HR,
            logistics, and property operations. Each product demonstrates our
            approach to scalable architecture, workflow automation, and
            measurable business outcomes.
          </p>
        </div>

        <div className="grid gap-5">
          {[
            {
              name: "HR Management Software",
              summary:
                "Centralised HR dashboard for streamlined hiring, workforce management, and reporting.",
              tech: ["React", "Node.js", "PostgreSQL", "RBAC"],
              imageSrc: "/products/HR.png",
              imageObjectPosition: "50% 24%",
              link: "/hr-management",
            },
            {
              name: "BrickJourney",
              summary:
                "A logistics-first SaaS platform for planning, tracking, and high-speed operational orchestration.",
              tech: ["React", "AWS", "AI Integration"],
              imageSrc: "/products/BrickJourney.png",
              imageObjectPosition: "50% 50%",
              link: "/services/custom-saas-it-solutions",
            },
            {
              name: "Property Management Suite",
              summary:
                "Enterprise-ready operations suite for portfolio oversight, tenant flows, and lifecycle automation.",
              tech: ["Next.js", "PostgreSQL", "Workflow Automation"],
              imageSrc: "/products/PropertyManagement.png",
              imageObjectPosition: "50% 72%",
              link: "/services/custom-saas-it-solutions",
            },
          ].map((product, idx) => (
            <div
              key={product.name}
              className="grid items-stretch overflow-hidden rounded-2xl border border-border/60 bg-card md:grid-cols-2"
            >
              <div
                className={cn(
                  "relative min-h-64 overflow-hidden p-6 md:min-h-72",
                  idx === 0
                    ? "bg-[linear-gradient(145deg,rgba(79,70,229,0.2),rgba(22,28,46,0.1),rgba(59,130,246,0.16))]"
                    : "bg-[linear-gradient(145deg,rgba(79,70,229,0.16),rgba(22,28,46,0.1),rgba(30,64,175,0.16))]",
                )}
              >
                <CoverMediaImage
                  src={product.imageSrc}
                  alt={`${product.name} platform preview`}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  objectPosition={product.imageObjectPosition}
                />
                <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(15,23,42,0.52),rgba(15,23,42,0.15),rgba(79,70,229,0.35))]" />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.07)_0px,rgba(255,255,255,0.07)_1px,transparent_1px,transparent_20px),repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_28px)]" />
                <div className="relative z-10">
                  <p className="inline-flex rounded-full border border-white/25 bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                    Dashboard Preview
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-5 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {product.summary}
                  </p>
                  <div className="mt-4 space-y-2">
                    {product.tech.map((t) => (
                      <div
                        key={t}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <CheckCircle2 className="size-4 text-primary" />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-fit rounded-full"
                >
                  <Link
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Full Product Breakdown
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoSvg({
  variant,
}: {
  variant: "engine" | "stack" | "outcomes" | "global" | "iteration";
}) {
  const common =
    "pointer-events-none mt-4 w-full rounded-xl border border-border/60 bg-background/80 p-2";

  if (variant === "engine") {
    return (
      <div className={common}>
        <svg viewBox="0 0 360 150" className="h-24 w-full" aria-hidden="true">
          <defs>
            <linearGradient id="engine-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgb(79 70 229 / 0.34)" />
              <stop offset="100%" stopColor="rgb(59 130 246 / 0.2)" />
            </linearGradient>
          </defs>
          <rect
            x="8"
            y="18"
            width="92"
            height="36"
            rx="8"
            fill="url(#engine-grad)"
          />
          <rect
            x="132"
            y="18"
            width="92"
            height="36"
            rx="8"
            fill="url(#engine-grad)"
          />
          <rect
            x="256"
            y="18"
            width="92"
            height="36"
            rx="8"
            fill="url(#engine-grad)"
          />
          <rect
            x="70"
            y="94"
            width="92"
            height="36"
            rx="8"
            fill="url(#engine-grad)"
          />
          <rect
            x="194"
            y="94"
            width="92"
            height="36"
            rx="8"
            fill="url(#engine-grad)"
          />
          <path
            d="M100 36 H132"
            stroke="rgb(99 102 241 / 0.5)"
            strokeWidth="2"
          />
          <path
            d="M224 36 H256"
            stroke="rgb(99 102 241 / 0.5)"
            strokeWidth="2"
          />
          <path
            d="M54 54 L96 94"
            stroke="rgb(99 102 241 / 0.38)"
            strokeWidth="2"
          />
          <path
            d="M308 54 L266 94"
            stroke="rgb(99 102 241 / 0.38)"
            strokeWidth="2"
          />
        </svg>
      </div>
    );
  }

  if (variant === "stack") {
    return (
      <div className={common}>
        <svg viewBox="0 0 360 150" className="h-24 w-full" aria-hidden="true">
          <rect
            x="20"
            y="20"
            width="320"
            height="24"
            rx="10"
            fill="rgb(79 70 229 / 0.24)"
          />
          <rect
            x="20"
            y="54"
            width="270"
            height="24"
            rx="10"
            fill="rgb(59 130 246 / 0.24)"
          />
          <rect
            x="20"
            y="88"
            width="220"
            height="24"
            rx="10"
            fill="rgb(99 102 241 / 0.2)"
          />
          <circle cx="304" cy="68" r="30" fill="rgb(79 70 229 / 0.16)" />
          <circle cx="316" cy="68" r="16" fill="rgb(59 130 246 / 0.2)" />
        </svg>
      </div>
    );
  }

  if (variant === "outcomes") {
    return (
      <div className={common}>
        <svg viewBox="0 0 360 150" className="h-24 w-full" aria-hidden="true">
          <path
            d="M24 118 C76 82, 126 102, 170 70 C220 32, 266 48, 336 20"
            fill="none"
            stroke="rgb(79 70 229 / 0.55)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="24" cy="118" r="5" fill="rgb(79 70 229 / 0.8)" />
          <circle cx="170" cy="70" r="5" fill="rgb(79 70 229 / 0.8)" />
          <circle cx="336" cy="20" r="5" fill="rgb(79 70 229 / 0.8)" />
          <rect
            x="20"
            y="12"
            width="112"
            height="18"
            rx="9"
            fill="rgb(59 130 246 / 0.16)"
          />
        </svg>
      </div>
    );
  }

  if (variant === "global") {
    return (
      <div className={common}>
        <svg viewBox="0 0 360 150" className="h-24 w-full" aria-hidden="true">
          <circle cx="180" cy="75" r="46" fill="rgb(79 70 229 / 0.16)" />
          <ellipse
            cx="180"
            cy="75"
            rx="46"
            ry="18"
            fill="none"
            stroke="rgb(79 70 229 / 0.5)"
            strokeWidth="2"
          />
          <ellipse
            cx="180"
            cy="75"
            rx="24"
            ry="46"
            fill="none"
            stroke="rgb(79 70 229 / 0.5)"
            strokeWidth="2"
          />
          <path
            d="M134 75 H226"
            stroke="rgb(79 70 229 / 0.5)"
            strokeWidth="2"
          />
          <circle cx="94" cy="46" r="8" fill="rgb(59 130 246 / 0.34)" />
          <circle cx="278" cy="94" r="8" fill="rgb(59 130 246 / 0.34)" />
          <path
            d="M102 50 L152 66"
            stroke="rgb(99 102 241 / 0.38)"
            strokeWidth="2"
          />
          <path
            d="M270 90 L214 82"
            stroke="rgb(99 102 241 / 0.38)"
            strokeWidth="2"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={common}>
      <svg viewBox="0 0 360 150" className="h-24 w-full" aria-hidden="true">
        <rect
          x="20"
          y="20"
          width="72"
          height="112"
          rx="10"
          fill="rgb(79 70 229 / 0.18)"
        />
        <rect
          x="106"
          y="36"
          width="72"
          height="96"
          rx="10"
          fill="rgb(59 130 246 / 0.2)"
        />
        <rect
          x="192"
          y="52"
          width="72"
          height="80"
          rx="10"
          fill="rgb(99 102 241 / 0.2)"
        />
        <rect
          x="278"
          y="68"
          width="62"
          height="64"
          rx="10"
          fill="rgb(79 70 229 / 0.24)"
        />
        <path d="M58 20 V8" stroke="rgb(79 70 229 / 0.5)" strokeWidth="2" />
        <path d="M144 36 V20" stroke="rgb(79 70 229 / 0.5)" strokeWidth="2" />
        <path d="M230 52 V34" stroke="rgb(79 70 229 / 0.5)" strokeWidth="2" />
      </svg>
    </div>
  );
}

export function CaseStudiesPageContent() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] =
    useState<(typeof filterOptions)[number]>("All");
  const [notifyOpen, setNotifyOpen] = useState(false);
  const [notifyCase, setNotifyCase] = useState<CaseStudyItem | null>(null);
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifyState, setNotifyState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [notifyMessage, setNotifyMessage] = useState("");

  const openComingSoonDialog = (item: CaseStudyItem) => {
    setNotifyCase(item);
    setNotifyEmail("");
    setNotifyState("idle");
    setNotifyMessage("");
    setNotifyOpen(true);
  };

  const submitNotifyRequest = async (
    event: React.SyntheticEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    if (!notifyCase || !notifyEmail.trim()) return;

    setNotifyState("submitting");
    setNotifyMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: notifyEmail.trim(),
          source: "case_study_waitlist",
          tags: [notifyCase.slug, "case-study-notify"],
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setNotifyState("success");
      setNotifyMessage(
        "Thanks. We will notify you as soon as this case study is published.",
      );
      setNotifyEmail("");
    } catch {
      setNotifyState("error");
      setNotifyMessage(
        "We could not save your request right now. Please try again in a moment.",
      );
    }
  };

  const capabilityCards = [
    {
      title: "Execution Engine",
      subtitle: "From scope to launch",
      icon: Workflow,
      note: "A repeatable framework that keeps delivery fast and predictable.",
      imageSrc: "/case-studies/capability/c1.svg",
      tone: "from-indigo-500/16 via-indigo-500/8 to-sky-500/14",
    },
    {
      title: "Tech Stack",
      subtitle: "Modern architecture",
      icon: Cpu,
      note: "Scalable systems designed for stability, speed, and maintainability.",
      imageSrc: "/case-studies/capability/c2.svg",
      tone: "from-blue-500/16 via-blue-500/8 to-cyan-500/14",
    },
    {
      title: "Data Core",
      subtitle: "Reliable foundations",
      icon: Database,
      note: "Structured data models that support secure growth and reporting.",
      imageSrc: "/case-studies/capability/c3.svg",
      tone: "from-emerald-500/15 via-emerald-500/8 to-teal-500/14",
    },
    {
      title: "Outcome Tracking",
      subtitle: "Visible performance",
      icon: BarChart3,
      note: "Every release is tied to clear KPIs and business-level outcomes.",
      imageSrc: "/case-studies/capability/c4.svg",
      tone: "from-violet-500/16 via-fuchsia-500/8 to-indigo-500/14",
    },
    {
      title: "Global Delivery",
      subtitle: "Cross-market ready",
      icon: Globe,
      note: "Production-ready systems built for regional complexity and scale.",
      imageSrc: "/case-studies/capability/c5.svg",
      tone: "from-sky-500/16 via-cyan-500/8 to-indigo-500/14",
    },
    {
      title: "Rapid Iteration",
      subtitle: "Faster learning loops",
      icon: Zap,
      note: "Short, high-signal release cycles accelerate product evolution.",
      imageSrc: "/case-studies/capability/c6.svg",
      tone: "from-amber-500/16 via-orange-500/8 to-rose-500/14",
    },
    {
      title: "Security Layer",
      subtitle: "Trust by design",
      icon: ShieldCheck,
      note: "Security controls embedded into architecture, code, and operations.",
      imageSrc: "/case-studies/capability/c7.svg",
      tone: "from-indigo-500/16 via-slate-500/8 to-blue-500/14",
    },
    {
      title: "Infrastructure",
      subtitle: "Cloud resilience",
      icon: Server,
      note: "Stable deployment pipelines and infrastructure prepared for uptime.",
      imageSrc: "/case-studies/capability/c8.svg",
      tone: "from-slate-500/16 via-indigo-500/8 to-sky-500/14",
    },
    {
      title: "Launch Velocity",
      subtitle: "Move without friction",
      icon: Rocket,
      note: "Operational clarity that helps teams ship with confidence.",
      imageSrc: "/case-studies/capability/c9.svg",
      tone: "from-indigo-500/16 via-blue-500/8 to-violet-500/14",
    },
  ] as const;

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return caseStudies;
    return caseStudies.filter((item) => item.industry === activeFilter);
  }, [activeFilter]);

  const heroCards = useMemo(() => {
    const imageBySlug: Record<string, string> = {
      "brickjourney-logistics":
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2670&auto=format&fit=crop",
      "cdc-construction":
        "https://cdc.construction/images/projects/Comm/Regent_House/1.jpg",
      lomashwood:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2670&auto=format&fit=crop",
      "cdc-property":
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2670&auto=format&fit=crop",
      "interior-studio":
        "https://www.interiorstudioltd.com/images/slider/slider1.jpg",
      "cdc-housing":
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop",
      "hr-management":
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
      "property-suite":
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2670&auto=format&fit=crop",
    };

    return filteredItems.slice(0, 3).map((item, index) => ({
      id: index,
      name: item.title,
      designation: `${item.industry} Case Study`,
      content: (
        <p>
          <span className="font-semibold text-foreground">Challenge:</span>{" "}
          {item.challenge}{" "}
          <span className="font-semibold text-foreground">Result:</span>{" "}
          {item.result}
        </p>
      ),
      image:
        imageBySlug[item.slug] ??
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2670&auto=format&fit=crop",
    }));
  }, [filteredItems]);

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <HeroPreviewWalls
        badgeText="Proof of Performance"
        title="Proven Solutions. Engineered for Excellence."
        description="We don't just build apps; we solve complex business bottlenecks. Explore how our 10-year veteran team has transformed operations for 10+ permanent partners and launched global SaaS platforms."
        primaryCtaText="Explore Case Studies"
        secondaryCtaText="Book a Strategy Call"
        cards={heroCards}
        onPrimaryClick={() => {
          document
            .getElementById("case-study-grid")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        onSecondaryClick={() => {
          window.location.href = "/book-free-strategy-call";
        }}
      />

      <FeaturedPlatforms />

      <section className="bg-background pb-7">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <div className="rounded-2xl border border-border/60 bg-card/85 p-3 shadow-[0_10px_36px_rgba(79,70,229,0.1)] backdrop-blur-sm">
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    activeFilter === filter
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/70 bg-background text-foreground hover:border-primary/45 hover:text-primary",
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="case-study-grid" className="bg-background pb-20 md:pb-24">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <div className="mb-8 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Client Case Studies and Delivery Outcomes
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                Review how Sterlixit delivers measurable growth through
                conversion-focused websites, integrated marketing systems, and
                SaaS product engineering across property, e-commerce, logistics,
                and MVP delivery.
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Showing {filteredItems.length} project
              {filteredItems.length > 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, idx) => {
              const cardHref = item.href;
              const hasTechnicalHover = item.slug === "cdc-construction";
              const hasInteriorStudioHover = item.slug === "interior-studio";
              const hasLomashHover = item.slug === "lomashwood";
              const openCardHref = () => {
                if (item.comingSoon) {
                  openComingSoonDialog(item);
                  return;
                }

                if (item.isExternal) {
                  window.open(cardHref, "_blank", "noopener,noreferrer");
                  return;
                }

                router.push(cardHref);
              };

              return (
                <div
                  key={item.slug}
                  role="link"
                  tabIndex={0}
                  onClick={openCardHref}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openCardHref();
                    }
                  }}
                  className="block h-full cursor-pointer rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <article className="group relative h-full overflow-hidden rounded-xl border border-border/60 bg-card">
                    <div
                      className={cn(
                        "relative h-64 md:h-76 lg:h-80",
                        hasLomashHover &&
                          "bg-[linear-gradient(145deg,rgba(120,53,15,0.18),rgba(41,37,36,0.1),rgba(163,230,53,0.12))]",
                        hasInteriorStudioHover &&
                          "bg-[linear-gradient(145deg,rgba(245,158,11,0.14),rgba(120,53,15,0.08),rgba(34,197,94,0.12))]",
                        !hasInteriorStudioHover &&
                          !hasLomashHover &&
                          idx % 3 === 0 &&
                          "bg-[linear-gradient(145deg,rgba(79,70,229,0.18),rgba(17,24,39,0.08),rgba(59,130,246,0.15))]",
                        !hasInteriorStudioHover &&
                          !hasLomashHover &&
                          idx % 3 === 1 &&
                          "bg-[linear-gradient(145deg,rgba(30,64,175,0.16),rgba(15,23,42,0.1),rgba(79,70,229,0.16))]",
                        !hasInteriorStudioHover &&
                          !hasLomashHover &&
                          idx % 3 === 2 &&
                          "bg-[linear-gradient(145deg,rgba(67,56,202,0.16),rgba(17,24,39,0.1),rgba(37,99,235,0.16))]",
                      )}
                    >
                      <CoverMediaImage
                        src={item.imageSrc}
                        alt={`${item.title} case study preview`}
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        objectPosition={item.imageObjectPosition}
                      />
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.04)_0px,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_18px),repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_24px)]" />
                      {hasLomashHover && (
                        <>
                          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,rgba(255,255,255,0.15),transparent_45%),radial-gradient(ellipse_at_80%_85%,rgba(255,255,255,0.1),transparent_50%)]" />
                          <div className="pointer-events-none absolute inset-x-3 top-3 rounded-md border border-white/30 bg-black/30 px-2 py-1 text-[10px] leading-4 text-amber-100 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            Craft | Install | Support
                          </div>
                        </>
                      )}
                      {hasInteriorStudioHover && (
                        <>
                          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(255,255,255,0.18),transparent_42%),radial-gradient(ellipse_at_85%_85%,rgba(255,255,255,0.14),transparent_45%)]" />
                          <div className="pointer-events-none absolute inset-x-3 top-3 rounded-md border border-white/30 bg-black/30 px-2 py-1 text-[10px] leading-4 text-amber-100 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            Light | Material | Flow
                          </div>
                        </>
                      )}
                      {hasTechnicalHover && (
                        <>
                          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.14)_0px,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_14px),repeating-linear-gradient(90deg,rgba(255,255,255,0.1)_0px,rgba(255,255,255,0.1)_1px,transparent_1px,transparent_20px)]" />
                          <div className="pointer-events-none absolute inset-x-3 top-3 rounded-md border border-white/30 bg-black/40 px-2 py-1 font-mono text-[10px] leading-4 text-emerald-200 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            system.map("site", "portal", "ops");
                          </div>
                        </>
                      )}
                      <div
                        className={cn(
                          "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                          hasLomashHover
                            ? "bg-[linear-gradient(0deg,rgba(68,64,60,0.42),rgba(68,64,60,0.06))]"
                            : hasInteriorStudioHover
                              ? "bg-[linear-gradient(0deg,rgba(120,53,15,0.38),rgba(120,53,15,0.05))]"
                              : "bg-[linear-gradient(0deg,rgba(15,23,42,0.42),rgba(15,23,42,0.08))]",
                        )}
                      />
                      <div className="absolute inset-x-3 bottom-3 translate-y-2 rounded-md border border-white/20 bg-black/40 px-2.5 py-1.5 text-[11px] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {item.stack.join(" | ")}
                      </div>
                    </div>

                    <div className="space-y-3 p-4">
                      <div className="space-y-2">
                        <span className="inline-flex rounded-full border border-primary/20 bg-primary/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
                          {item.industry}
                        </span>
                        {[
                          "cdc-construction",
                          "lomashwood",
                          "cdc-property",
                          "cdc-development",
                          "cdc-housing",
                          "interior-studio",
                        ].includes(item.slug) ? (
                          <Image
                            src={
                              item.slug === "lomashwood"
                                ? "/client/Lomashwood.svg"
                                : item.slug === "cdc-housing"
                                  ? "/client/cdchousing.webp"
                                  : item.slug === "cdc-property"
                                    ? "/client/cdcpropertymanagement.svg"
                                    : item.slug === "cdc-development"
                                      ? "/client/cdcDevelopment.svg"
                                      : item.slug === "interior-studio"
                                        ? "/client/interiorstudio.svg"
                                        : "/client/cdc.svg"
                            }
                            alt={item.title}
                            width={128}
                            height={28}
                            className={cn(
                              "w-auto object-contain",
                              item.slug === "cdc-property"
                                ? "h-6"
                                : item.slug === "lomashwood"
                                  ? "h-6"
                                  : item.slug === "cdc-housing"
                                    ? "h-6"
                                    : item.slug === "interior-studio"
                                      ? "h-6"
                                      : "h-5",
                            )}
                          />
                        ) : null}
                        <h3 className="text-lg font-semibold leading-snug text-foreground">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-sm leading-6 text-muted-foreground">
                        The Challenge: {item.challenge} The Result:{" "}
                        {item.result}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="inline-flex items-center text-sm font-medium text-primary">
                          {item.comingSoon
                            ? "Case Study Coming Soon"
                            : item.slug === "interior-studio"
                              ? "View Design Story"
                              : item.slug === "lomashwood"
                                ? "View Build Story"
                                : item.slug === "cdc-housing"
                                  ? "View Marketing Story"
                                  : "Open Case Study"}{" "}
                          <ArrowRight className="ml-1.5 size-4" />
                        </span>

                        {item.detailAvailable && item.detailHref ? (
                          <Link
                            href={item.detailHref}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/12"
                          >
                            {item.slug === "interior-studio"
                              ? "View Interior Case Study"
                              : item.slug === "lomashwood"
                                ? "View Full Delivery Case Study"
                                : item.slug === "cdc-housing"
                                  ? "View Housing Case Study"
                                  : "View Detailed Case Study"}
                          </Link>
                        ) : (
                          <span className="inline-flex items-center rounded-full border border-border/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                            {item.comingSoon
                              ? "Notify Me When Live"
                              : "Detailed Case Study (Soon)"}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-background py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.08)_0%,transparent_66%)]" />
        <div className="relative mx-auto mb-6 w-full max-w-305 px-6 md:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            <Sparkles className="size-3" />
            10-Year Authority Ribbon
          </div>
        </div>
        <div className="relative mx-auto grid w-full max-w-305 gap-4 px-6 md:grid-cols-4 md:px-10">
          {[
            {
              icon: Rocket,
              value: 10,
              suffix: "+",
              label: "Years in Industry",
            },
            {
              icon: Lock,
              value: 100,
              suffix: "%",
              label: "Data Security Record",
            },
            {
              icon: ShieldCheck,
              value: 10,
              suffix: "",
              label: "Permanent Partners",
            },
            {
              icon: Server,
              value: 3,
              suffix: "",
              label: "In-house SaaS Products",
            },
          ].map(({ icon: Icon, value, suffix, label }) => (
            <div
              key={label}
              className="group rounded-xl border border-border/60 bg-card p-5 text-center shadow-[0_12px_34px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mx-auto mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/8 transition-transform duration-300 group-hover:scale-110">
                <Icon className="size-4 text-primary" />
              </div>
              <p className="text-3xl font-bold tracking-tight text-foreground">
                <Counter target={value} suffix={suffix} />
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-18 md:py-22">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.1)_0%,transparent_64%)]" />
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <div className="mb-8 max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Capability Snapshot
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Product, Platform, and Growth In One Studio
            </h2>
          </div>

          <div className="rounded-[28px] border border-slate-200/70 bg-slate-100/75 p-4 shadow-[0_24px_64px_rgba(15,23,42,0.08)] md:p-5">
            <div className="grid gap-3 md:grid-cols-3">
              {capabilityCards.map((card) => {
                const Icon = card.icon;
                const hasImage = Boolean(card.imageSrc.trim());

                return (
                  <article
                    key={card.title}
                    className="group relative min-h-64 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                  >
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-0 bg-linear-to-br opacity-90",
                        card.tone,
                      )}
                    />
                    <div className="relative">
                      <Dialog open={notifyOpen} onOpenChange={setNotifyOpen}>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Case Study Coming Soon</DialogTitle>
                            <DialogDescription>
                              {notifyCase
                                ? `${notifyCase.title} is currently being prepared. Enter your email and we will notify you when it is published.`
                                : "Enter your email and we will notify you when this case study is published."}
                            </DialogDescription>
                          </DialogHeader>

                          <form
                            onSubmit={submitNotifyRequest}
                            className="space-y-4"
                          >
                            <div className="space-y-2">
                              <Label htmlFor="case-study-email">
                                Work Email
                              </Label>
                              <Input
                                id="case-study-email"
                                type="email"
                                autoComplete="email"
                                value={notifyEmail}
                                onChange={(event) =>
                                  setNotifyEmail(event.target.value)
                                }
                                placeholder="you@company.co.uk"
                                required
                              />
                            </div>

                            {notifyMessage ? (
                              <p
                                className={cn(
                                  "text-sm",
                                  notifyState === "success"
                                    ? "text-emerald-600"
                                    : "text-destructive",
                                )}
                              >
                                {notifyMessage}
                              </p>
                            ) : null}

                            <DialogFooter>
                              <Button
                                type="submit"
                                disabled={notifyState === "submitting"}
                                className="rounded-full"
                              >
                                {notifyState === "submitting"
                                  ? "Submitting..."
                                  : "Notify Me"}
                              </Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                            {card.subtitle}
                          </p>
                          <h3 className="text-base font-semibold text-slate-900">
                            {card.title}
                          </h3>
                        </div>
                      </div>

                      <div className="mt-3 flex h-28 items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-white">
                        {hasImage ? (
                          <div
                            className="h-full w-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${card.imageSrc})` }}
                          />
                        ) : (
                          <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-[linear-gradient(135deg,rgba(148,163,184,0.16),rgba(99,102,241,0.08))] text-slate-500">
                            <Icon className="size-10 text-slate-600" />
                            {/* <p className="text-[11px] font-medium">
                              Image slot
                            </p> */}
                          </div>
                        )}
                      </div>

                      <p className="mt-3 text-sm leading-5 text-slate-700">
                        {card.note}
                      </p>

                      <div className="mt-3 flex items-center justify-between">
                        {/* <span className="rounded-full border border-slate-300/90 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700">
                        </span> */}
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300/90 bg-white">
                          <Icon className="size-4 text-slate-700" />
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background pb-20 md:pb-24">
        <div className="mx-auto w-full max-w-305 px-6 md:px-10">
          <div className="mb-7 max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Common Questions Before You Start
            </h2>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-[0_14px_38px_rgba(15,23,42,0.06)] md:p-6">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Do you only work with SaaS companies?",
                  a: "No. We actively deliver for real estate, e-commerce, healthcare, logistics, and other operationally complex sectors.",
                },
                {
                  q: "Can we start with a roadmap before full delivery?",
                  a: "Yes. Most engagements begin with discovery and architecture planning so stakeholders can validate scope, cost, and timeline.",
                },
                {
                  q: "How quickly can we launch an MVP?",
                  a: "Depending on complexity, focused MVPs typically launch in 6-12 weeks with phased rollout and measurable milestones.",
                },
                {
                  q: "Do you provide ongoing support after launch?",
                  a: "Yes. We provide maintenance, optimisation, and scoped support models to keep your platform stable and growing. SLA expectations are defined around the actual system and operational risk rather than sold as a fixed package.",
                },
              ].map((faq, index) => (
                <AccordionItem key={faq.q} value={`faq-${index}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-18 md:py-22">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.12)_0%,transparent_66%)]" />
        <div className="relative mx-auto w-full max-w-305 px-6 md:px-10">
          <div className="overflow-hidden rounded-4xl border border-primary/20 bg-[linear-gradient(145deg,rgba(79,70,229,0.18)_0%,rgba(79,70,229,0.05)_36%,rgba(255,255,255,0.96)_100%)] shadow-[0_28px_72px_rgba(79,70,229,0.16)]">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative p-7 md:p-10">
                <div className="pointer-events-none absolute -right-16 -top-14 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.24)_0%,transparent_70%)]" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    Strategic Next Step
                  </div>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    Ready to scale your digital product with a proven UK
                    delivery partner?
                  </h2>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
                    Start with a focused strategy consultation to align your
                    product roadmap, platform architecture, SEO foundations, and
                    growth priorities. We help ambitious teams launch faster,
                    improve conversion performance, and build resilient systems
                    for long-term growth.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Senior-led discovery call",
                      "Roadmap clarity within 24 hours",
                      "SEO and conversion focus",
                      "NDA-ready process",
                    ].map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-primary/25 bg-background/80 px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-primary/15 bg-background/78 p-7 lg:border-l lg:border-t-0 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Book Your Consultation
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Share your goals and timelines. We will recommend the right
                  execution path for your website, product, or growth platform.
                </p>

                <div className="mt-6 space-y-3">
                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-full px-7 font-semibold shadow-lg shadow-primary/20"
                  >
                    <Link href="/book-free-strategy-call">
                      Book Your Free Strategy Call
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full rounded-full"
                  >
                    <Link href="/request-proposal">
                      Request a Project Proposal
                    </Link>
                  </Button>
                </div>

                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Typical response time: within one business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
