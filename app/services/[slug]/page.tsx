import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Code2,
  LayoutGrid,
  Megaphone,
  Palette,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { FloatingServiceSpecialtiesBar } from "@/components/floating-service-specialties-bar";
import { ScrollParallaxWrap } from "@/components/scroll-parallax-wrap";
import { ServiceDetailScrollRail } from "@/components/service-detail-scroll-rail";
import {
  AnimatedReveal,
  ExitIntentDialog,
  LiveChatButton,
  SiteContainer,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { allServicePages } from "@/lib/site-data";

type FeatureBenefit = { feature: string; benefit: string };
type Tool = { name: string; category: string };

type ServiceBlueprint = {
  seoTitle: string;
  seoDescription: string;
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    primaryCtaText?: string;
    primaryCtaHref?: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
  };
  painPoints: { title: string; intro: string; items: string[] };
  solution: {
    title: string;
    intro: string;
    items: { title: string; detail: string }[];
  };
  veteranEdge: { title: string; body: string; stat: string; statLabel: string };
  featureBenefits: { title: string; intro: string; items: FeatureBenefit[] };
  process: { title: string; steps: string[] };
  saasProof: { title: string; body: string; bullets: string[] };
  techStack: { title: string; tagline: string; tools: Tool[] };
  faqs: { q: string; a: string }[];
  dynamicSuggestion: {
    teaser: string;
    body: string;
    links: { label: string; href: string }[];
  };
  finalCta: { title: string; body: string; ctaText: string; ctaHref: string };
  consultationSteps?: string[];
  consultationNote?: string;
};

const coreBlueprints: Record<string, ServiceBlueprint> = {
  "graphics-branding": {
    seoTitle:
      "Graphics & Branding Services | Visual Identities Built for Market Authority",
    seoDescription:
      "Sterlixit Graphics & Branding services help startups and growth companies build premium visual identity systems, investor-ready collateral, and scalable brand assets.",
    hero: {
      kicker: "Graphics & Branding",
      title: "Visual Identities Built for Market Authority.",
      subtitle:
        "We do not just design logos. We build strategic brand systems that scale across web, decks, social, and sales touchpoints.",
    },
    painPoints: {
      title: "Why Most Branding Projects Fail.",
      intro:
        "Most branding initiatives fail because they optimise for appearance over business utility.",
      items: [
        "No brand positioning clarity, so visuals look nice but communicate nothing.",
        "Missing asset system, leaving teams unable to execute consistently after handoff.",
        "Design files delivered without usage rules, causing fast brand drift.",
        "Social and sales collateral ignored, so the identity breaks where trust is built.",
      ],
    },
    solution: {
      title: "The Core 4 Sub-Services",
      intro:
        "A complete visual stack built for consistency, clarity, and conversion.",
      items: [
        {
          title: "Logo & Visual Identity",
          detail: "Scalable logos, variants, and practical guidelines.",
        },
        {
          title: "UI/UX Design",
          detail:
            "User-first wireframes and interface design for web and mobile.",
        },
        {
          title: "Pitch Decks",
          detail:
            "Investor-ready narrative decks that present value with precision.",
        },
        {
          title: "Social Asset Kits",
          detail: "Ready-to-publish templates for LinkedIn, Meta, and X.",
        },
      ],
    },
    veteranEdge: {
      title: "The 10-Year Difference.",
      body: "Freelancers deliver files. Veteran teams deliver systems. Our decade of cross-industry branding work means your identity is engineered for operation, not only presentation.",
      stat: "10+",
      statLabel: "Years Building Production-Ready Brand Systems",
    },
    featureBenefits: {
      title: "Feature vs. Benefit",
      intro:
        "Every deliverable maps directly to a measurable business advantage.",
      items: [
        {
          feature: "Brand Positioning Framework",
          benefit:
            "Your sales narrative becomes clear and defensible in competitive conversations.",
        },
        {
          feature: "Multi-Context Logo Suite",
          benefit:
            "Your brand looks premium everywhere, from favicon to investor PDF.",
        },
        {
          feature: "Template-Based Social Kit",
          benefit:
            "Your team can publish consistently without waiting for design support.",
        },
        {
          feature: "Deck Story Architecture",
          benefit:
            "Investors and stakeholders understand value faster and with less friction.",
        },
      ],
    },
    process: {
      title: "The Brand Blueprint",
      steps: [
        "Discovery",
        "Moodboarding",
        "Design Iteration",
        "Final Handover",
      ],
    },
    saasProof: {
      title: "SaaS Proof in Practice",
      body: "The same team that branded BrickJourney and our internal product ecosystem applies those quality standards to your brand system.",
      bullets: [
        "Brand standards tested on live SaaS products",
        "Documentation optimised for cross-team execution",
        "Assets structured for long-term scalability",
      ],
    },
    techStack: {
      title: "Our Production Stack.",
      tagline:
        "We use the same enterprise creative tooling for your business that we used to build BrickJourney assets.",
      tools: [
        { name: "Figma", category: "Interface & Systems" },
        { name: "Adobe Creative Cloud", category: "Design Production" },
        { name: "Midjourney", category: "Ideation" },
        { name: "Canva", category: "Client Handoffs" },
      ],
    },
    faqs: [
      {
        q: "How long does the discovery phase take?",
        a: "Typically 3 to 5 working days depending on stakeholder availability.",
      },
      {
        q: "Will I own raw design files?",
        a: "Yes. You receive full editable source files and exported assets.",
      },
      {
        q: "How do we communicate during the project?",
        a: "Weekly syncs plus async updates through a shared project channel.",
      },
      {
        q: "Can you work with our existing brand?",
        a: "Yes. We can refresh or evolve existing systems without full replacement.",
      },
      {
        q: "Do you provide training after handoff?",
        a: "Yes. We include practical walkthroughs for your team.",
      },
      {
        q: "Can this scale across social and sales ops?",
        a: "Yes. We design for day-to-day usage in both teams.",
      },
    ],
    dynamicSuggestion: {
      teaser: "Building a launch-ready brand? You need more than visuals.",
      body: "After identity, the next leverage points are website conversion and traffic acquisition.",
      links: [
        {
          label: "Go to Web Development →",
          href: "/services/web-design-development",
        },
        { label: "Go to Marketing →", href: "/services/digital-marketing" },
      ],
    },
    finalCta: {
      title: "Ready to Build a Brand That Compounds Trust?",
      body: "Book an executive branding session and get a practical roadmap for rollout and scale.",
      ctaText: "Book a Branding Consultation",
      ctaHref: "/contact",
    },
  },
  "web-design-development": {
    seoTitle:
      "Web Design & Development Services | High-Performance Web Ecosystems",
    seoDescription:
      "Sterlixit builds scalable web ecosystems with React, Shopify, and WordPress for performance, conversion, and long-term maintainability.",
    hero: {
      kicker: "Web Design & Development",
      title: "High-Performance Web Ecosystems That Scale.",
      subtitle:
        "React, Shopify, or WordPress - we choose the stack that supports your next five years of growth, not just this quarter.",
    },
    painPoints: {
      title: "Why Most Web Projects Fail.",
      intro:
        "Most sites fail after launch due to technical debt built into version one.",
      items: [
        "Slow load times cause drop-offs before users see your offer.",
        "Poor mobile responsiveness destroys conversion on primary traffic channels.",
        "Black-box code leaves teams unable to update content without developers.",
        "Architecture built for demos collapses under real traffic spikes.",
      ],
    },
    solution: {
      title: "Technologies We Master",
      intro:
        "Framework expertise matched to your business model and operating workflow.",
      items: [
        {
          title: "React / Next.js",
          detail: "Fast, scalable web apps and modern product frontends.",
        },
        {
          title: "Shopify",
          detail:
            "Conversion-optimised commerce experiences for predictable revenue growth.",
        },
        {
          title: "WordPress",
          detail:
            "Flexible content systems with custom-coded performance foundations.",
        },
      ],
    },
    veteranEdge: {
      title: "The 10-Year Difference.",
      body: "We have managed infrastructure for a decade. That means we design for reliability, maintainability, and scale before we write the first component.",
      stat: "99.9%",
      statLabel: "Uptime Standards Across Managed Properties",
    },
    featureBenefits: {
      title: "Feature vs. Benefit",
      intro:
        "Technical implementation only matters if it improves business outcomes.",
      items: [
        {
          feature: "Performance Budgeting",
          benefit:
            "Lower bounce rate and stronger conversion from first click.",
        },
        {
          feature: "Mobile-First Build",
          benefit: "Consistent purchase and lead flow across devices.",
        },
        {
          feature: "CMS Control Layer",
          benefit:
            "Your team can update key pages without developer bottlenecks.",
        },
        {
          feature: "Technical SEO Foundation",
          benefit: "Faster indexing and stronger discoverability post-launch.",
        },
      ],
    },
    process: {
      title: "Delivery Workflow",
      steps: [
        "Architecture Planning",
        "UI Build",
        "Performance QA",
        "Launch + Support",
      ],
    },
    saasProof: {
      title: "SaaS Proof in Practice",
      body: "The same engineering discipline used for BrickJourney and internal SaaS products powers client web builds.",
      bullets: [
        "Production-first architecture decisions",
        "Release pipelines built for stability",
        "Post-launch optimisation routines included",
      ],
    },
    techStack: {
      title: "Our Production Stack.",
      tagline:
        "Enterprise-grade web tooling deployed with practical business intent.",
      tools: [
        { name: "React / Next.js", category: "Frontend" },
        { name: "TypeScript", category: "Language" },
        { name: "Shopify", category: "E-commerce" },
        { name: "WordPress", category: "CMS" },
        { name: "AWS / Vercel", category: "Cloud" },
        { name: "GA4", category: "Analytics" },
      ],
    },
    faqs: [
      {
        q: "How long does discovery take?",
        a: "Usually 1 week including scope validation and stack recommendation.",
      },
      {
        q: "Will we own the source code?",
        a: "Yes. You retain full ownership of code, infra config, and assets.",
      },
      {
        q: "How do we communicate during build?",
        a: "Weekly milestones and async progress updates in a shared workspace.",
      },
      {
        q: "Do you provide post-launch support?",
        a: "Yes. We provide optimisation, monitoring, and maintenance options.",
      },
      {
        q: "Can you train our team on CMS usage?",
        a: "Yes. CMS training is included in handoff.",
      },
      {
        q: "Can this scale to 10k+ users?",
        a: "Yes. We architect for growth thresholds from day one.",
      },
    ],
    dynamicSuggestion: {
      teaser: "Building the backend is only one layer.",
      body: "To launch effectively, pair your platform with strong branding and demand generation.",
      links: [
        {
          label: "Go to Graphics & Branding →",
          href: "/services/graphics-branding",
        },
        { label: "Go to Marketing →", href: "/services/digital-marketing" },
      ],
    },
    finalCta: {
      title: "Need a Website That Performs Under Growth Pressure?",
      body: "Get a technical roadmap covering architecture, launch risks, and conversion priorities.",
      ctaText: "Book a Web Strategy Call",
      ctaHref: "/contact",
    },
  },
  "digital-marketing": {
    seoTitle:
      "Digital Marketing Services | Data-Driven Growth. Zero Guesswork.",
    seoDescription:
      "Sterlixit digital marketing combines SEO, PPC, and conversion strategy to turn traffic into revenue with full attribution clarity.",
    hero: {
      kicker: "Digital Marketing",
      title: "Data-Driven Growth. Zero Guesswork.",
      subtitle:
        "We optimise for one thing: profitable growth. Every channel decision is tied to measurable business outcomes.",
    },
    painPoints: {
      title: "Why Most Marketing Campaigns Fail.",
      intro:
        "Campaigns fail when they are optimised for activity, not outcomes.",
      items: [
        "Vanity metrics are reported while lead quality declines.",
        "Ads run without funnel alignment, causing budget leakage.",
        "SEO is delayed, missing compounding organic growth windows.",
        "Reporting lacks attribution clarity, so budget decisions stay blind.",
      ],
    },
    solution: {
      title: "Growth Pillars",
      intro:
        "Balanced strategy for immediate demand and long-term market dominance.",
      items: [
        {
          title: "SEO",
          detail:
            "Technical, content, and authority strategy for durable organic growth.",
        },
        {
          title: "PPC (Google / Meta)",
          detail: "Revenue-focused paid campaigns tuned for profitability.",
        },
        {
          title: "Content Strategy",
          detail: "Thought leadership systems that build trust and demand.",
        },
      ],
    },
    veteranEdge: {
      title: "The 10-Year Difference.",
      body: "After a decade of algorithm shifts and cross-industry campaigns, we know how to adapt quickly while maintaining ROI discipline.",
      stat: "Weekly",
      statLabel: "Optimization Cycles for Active Campaigns",
    },
    featureBenefits: {
      title: "Feature vs. Benefit",
      intro: "Every optimisation step is tied to measurable commercial value.",
      items: [
        {
          feature: "Comprehensive SEO Audit",
          benefit:
            "Reveal technical blockers suppressing search visibility and lead flow.",
        },
        {
          feature: "High-Conversion Ad Copy",
          benefit: "Reduce wasted clicks and improve lead intent quality.",
        },
        {
          feature: "Attribution Dashboard",
          benefit: "Track spend-to-revenue path with channel-level visibility.",
        },
        {
          feature: "Funnel Experimentation",
          benefit:
            "Improve conversion rates with structured A/B testing loops.",
        },
      ],
    },
    process: {
      title: "Operating Framework",
      steps: [
        "Audience Mapping",
        "Campaign Architecture",
        "Weekly Optimization",
        "Monthly Reallocation",
      ],
    },
    saasProof: {
      title: "SaaS Proof in Practice",
      body: "We apply the same growth discipline used in our own product ecosystem to every client acquisition system.",
      bullets: [
        "Attribution-led decision model",
        "Conversion-first campaign structure",
        "Performance reporting with zero vanity noise",
      ],
    },
    techStack: {
      title: "Our Production Stack.",
      tagline: "Tools selected for attribution clarity and campaign velocity.",
      tools: [
        { name: "Google Ads", category: "Paid Search" },
        { name: "Meta Ads", category: "Paid Social" },
        { name: "GA4", category: "Analytics" },
        { name: "Search Console", category: "SEO" },
        { name: "Ahrefs", category: "SEO Research" },
        { name: "Looker Studio", category: "Reporting" },
      ],
    },
    faqs: [
      {
        q: "How long does discovery take?",
        a: "Usually 5 to 10 days depending on account complexity.",
      },
      {
        q: "Will we own ad accounts and data?",
        a: "Yes. Ownership remains with your business.",
      },
      {
        q: "How often do we communicate?",
        a: "Weekly performance updates and monthly strategic reviews.",
      },
      {
        q: "Do you optimise active campaigns weekly?",
        a: "Yes. Weekly optimisation loops are standard.",
      },
      {
        q: "Do you support both SEO and PPC together?",
        a: "Yes. We run integrated organic and paid strategies.",
      },
      {
        q: "Can you train our team post-engagement?",
        a: "Yes. We provide reporting and operational handover sessions.",
      },
    ],
    dynamicSuggestion: {
      teaser: "Marketing brings users in. Experience converts them.",
      body: "Strengthen conversion with faster web performance and clearer brand positioning.",
      links: [
        {
          label: "Go to Web Development →",
          href: "/services/web-design-development",
        },
        {
          label: "Go to Graphics & Branding →",
          href: "/services/graphics-branding",
        },
      ],
    },
    finalCta: {
      title: "Ready to Turn Marketing Into a Revenue Engine?",
      body: "Get a channel-level roadmap built around profitability, not activity metrics.",
      ctaText: "Book a Growth Consultation",
      ctaHref: "/contact",
    },
  },
  "custom-saas-it-solutions": {
    seoTitle:
      "Custom SaaS & IT Solutions | Engineering the Future of Industry Software",
    seoDescription:
      "Sterlixit builds scalable SaaS and IT systems with MVP delivery, cloud architecture, legacy modernization, and product-grade engineering discipline.",
    hero: {
      kicker: "Custom SaaS / IT Solutions",
      title: "Engineering the Future of Industry Software.",
      subtitle:
        "We build client platforms with the same team and standards used for our own products, including BrickJourney.",
    },
    painPoints: {
      title: "Why Most SaaS Projects Fail.",
      intro:
        "Most failures are strategic and architectural, not coding speed issues.",
      items: [
        "Scope expansion delays launches and burns budget.",
        "Architecture decisions fail under production scale.",
        "No source ownership creates long-term dependency risk.",
        "Security and reliability are treated as launch-week tasks.",
      ],
    },
    solution: {
      title: "Engineering Expertise",
      intro: "Build the right product foundation before scaling complexity.",
      items: [
        {
          title: "MVP Development",
          detail: "Launch market-validated products in weeks, not years.",
        },
        {
          title: "API & Cloud (AWS)",
          detail: "Integration-ready systems with scalable cloud architecture.",
        },
        {
          title: "Legacy Migration",
          detail: "Modernize outdated systems without operational disruption.",
        },
      ],
    },
    veteranEdge: {
      title: "The 10-Year Difference.",
      body: "Our engineers have operated production systems for a decade and built in-house SaaS. We design with operational reality in mind, not prototype assumptions.",
      stat: "3",
      statLabel: "In-House SaaS Platforms Built by the Same Team",
    },
    featureBenefits: {
      title: "Feature vs. Benefit",
      intro:
        "Engineering decisions are mapped to business resilience and growth velocity.",
      items: [
        {
          feature: "MVP Scope Discipline",
          benefit: "Ship fast with focus, validate demand before major spend.",
        },
        {
          feature: "Cloud-Native Architecture",
          benefit: "Scale reliably as usage grows without full rewrites.",
        },
        {
          feature: "API-First Design",
          benefit: "Integrate quickly with future tools and partner systems.",
        },
        {
          feature: "Security Baseline",
          benefit: "Reduce breach risk and compliance exposure from day one.",
        },
      ],
    },
    process: {
      title: "Product Delivery Loop",
      steps: ["Discovery", "Architecture", "Iterative Build", "Launch + Scale"],
    },
    saasProof: {
      title: "The SaaS Lab",
      body: "BrickJourney and our property/HR systems are built by the same core engineering team you get on client projects.",
      bullets: [
        "Production-tested patterns applied to client builds",
        "Feature prioritization informed by real product operations",
        "Architecture choices validated beyond one-off projects",
      ],
    },
    techStack: {
      title: "Our Production Stack.",
      tagline:
        "We use the same enterprise tools for your business that we used to build BrickJourney.",
      tools: [
        { name: "AWS", category: "Cloud" },
        { name: "Node.js", category: "Backend" },
        { name: "React", category: "Frontend" },
        { name: "Docker", category: "Containers" },
        { name: "Kubernetes", category: "Orchestration" },
        { name: "PostgreSQL", category: "Data" },
      ],
    },
    faqs: [
      {
        q: "How long does discovery take?",
        a: "Typically 1 to 2 weeks depending on domain complexity.",
      },
      {
        q: "Will we own the source code and infra?",
        a: "Yes. Full ownership and access are standard.",
      },
      {
        q: "How do we communicate during build?",
        a: "Weekly demos, sprint updates, and async engineering notes.",
      },
      {
        q: "Can you train our team after launch?",
        a: "Yes. We include architecture and operational handover sessions.",
      },
      {
        q: "Do you support post-launch scaling?",
        a: "Yes. We provide scaling, monitoring, and optimisation engagements.",
      },
      {
        q: "Can you migrate legacy systems safely?",
        a: "Yes. We plan staged migration with rollback safety and data validation.",
      },
    ],
    dynamicSuggestion: {
      teaser: "Building a SaaS? You'll need more than just code.",
      body: "Pair engineering with launch-ready branding and acquisition strategy for successful go-to-market.",
      links: [
        {
          label: "Go to Graphics & Branding →",
          href: "/services/graphics-branding",
        },
        { label: "Go to Marketing →", href: "/services/digital-marketing" },
      ],
    },
    finalCta: {
      title: "Planning a Product or Platform Transformation?",
      body: "Get a practical roadmap for architecture, milestones, and launch execution.",
      ctaText: "Book a SaaS Strategy Call",
      ctaHref: "/contact",
    },
  },
  "support-maintenance": {
    seoTitle: "Support & Maintenance Services | Scoped SLA Support",
    seoDescription:
      "Sterlixit support and maintenance services include monitoring, security, incident response, and scoped SLA models tailored to each system's operational risk.",
    hero: {
      kicker: "Support & Maintenance",
      title: "Support Systems Built Around Your Real SLA Needs.",
      subtitle:
        "We design support coverage around your stack, business-critical workflows, and escalation requirements. No one-size-fits-all pricing table. No generic SLA promises.",
      primaryCtaText: "Request SLA Review",
      primaryCtaHref: "/support-sla",
      secondaryCtaText: "Book Maintenance Call",
      secondaryCtaHref: "/contact",
    },
    painPoints: {
      title: "Why Generic Maintenance Retainers Break Down.",
      intro:
        "Support fails when coverage, response expectations, and ownership are sold before anyone understands the actual system risk.",
      items: [
        "Support is scoped like a commodity, even when the platform has revenue-critical dependencies.",
        "Escalation paths are vague, so teams do not know who owns incidents or how updates are communicated.",
        "Backups and monitoring exist on paper, but restoration, alerting, and reporting have never been pressure-tested.",
        "Maintenance is treated separately from reliability and performance, so the same issues return every month.",
      ],
    },
    solution: {
      title: "How We Structure Support Engagements",
      intro:
        "We start by understanding the system, then define the right support model, communication path, and SLA expectations around real operational needs.",
      items: [
        {
          title: "System Audit & Risk Mapping",
          detail:
            "We review hosting, deployment, integrations, failure points, and business-critical workflows before proposing any SLA coverage.",
        },
        {
          title: "Scoped Monitoring & Incident Response",
          detail:
            "Alerting, escalation ownership, communication channels, and response targets are defined around your system's real risk profile.",
        },
        {
          title: "Maintenance & Reliability Workstreams",
          detail:
            "Ongoing patching, dependency updates, backup validation, performance checks, and preventive fixes are bundled into a sustainable operating rhythm.",
        },
        {
          title: "Reporting & Review Cadence",
          detail:
            "You get documented visibility through email updates, review calls, and incident summaries so support stays measurable and accountable.",
        },
      ],
    },
    veteranEdge: {
      title: "The 10-Year Difference.",
      body: "After a decade of supporting production systems across multiple industries, we bias toward prevention, clarity, and operational discipline instead of selling aggressive SLA promises that the environment cannot realistically support.",
      stat: "10+",
      statLabel: "Years Supporting Production-Critical Systems",
    },
    featureBenefits: {
      title: "Feature vs. Benefit",
      intro:
        "Every support mechanism should reduce risk, improve visibility, and protect the business from avoidable downtime.",
      items: [
        {
          feature: "Scoped Monitoring Coverage",
          benefit:
            "Alerts are aligned to the systems that actually matter, reducing blind spots and noisy escalation.",
        },
        {
          feature: "Recovery-Tested Backups",
          benefit:
            "Restoration is credible because recovery workflows are validated, not assumed.",
        },
        {
          feature: "Security & Dependency Maintenance",
          benefit:
            "Your attack surface stays lower and technical debt does not quietly compound.",
        },
        {
          feature: "Incident Reporting & Review",
          benefit:
            "Your team gets visibility into what happened, how it was handled, and what is changing to prevent repeat issues.",
        },
      ],
    },
    process: {
      title: "SLA Onboarding Workflow",
      steps: [
        "Audit Current Environment",
        "Define Coverage + Escalation",
        "Implement Monitoring + Reporting",
        "Review, Refine, and Prevent",
      ],
    },
    saasProof: {
      title: "Operational Support in Practice",
      body: "We bring the same discipline we use on production products and client platforms: documented ownership, measurable communication, and support that improves systems over time instead of just reacting to tickets.",
      bullets: [
        "Case-by-case SLA and escalation design",
        "Documentation-first incident handling",
        "Maintenance paired with reliability improvement",
      ],
    },
    techStack: {
      title: "Our Production Stack.",
      tagline:
        "Operational tooling selected for visibility, response speed, and resilience.",
      tools: [
        { name: "Datadog", category: "Monitoring" },
        { name: "Sentry", category: "Errors" },
        { name: "CloudWatch", category: "Cloud Metrics" },
        { name: "Cloudflare", category: "Security" },
        { name: "PagerDuty", category: "Incident Response" },
        { name: "GitHub Actions", category: "Automation" },
      ],
    },
    faqs: [
      {
        q: "How long does onboarding take?",
        a: "It depends on the size of the stack, access requirements, and how much monitoring or process setup is needed. A smaller environment can be onboarded quickly, while a more complex platform needs a structured transition period.",
      },
      {
        q: "Will we have SLA visibility?",
        a: "Yes. SLA expectations, escalation pathways, and reporting cadence are documented as part of the engagement, but the exact model is scoped case by case rather than sold as a fixed public package.",
      },
      {
        q: "How do we communicate during incidents?",
        a: "Communication can be handled through email, shared channels, scheduled review calls, or live incident calls depending on the severity and the support model we agree. The communication path is defined upfront so there is no ambiguity during an issue.",
      },
      {
        q: "Do you provide post-incident reports?",
        a: "Yes. Root-cause analysis and prevention actions are included.",
      },
      {
        q: "Do you publish fixed SLA pricing?",
        a: "No. Support scope depends on system complexity, business criticality, coverage window, and communication requirements. We review your environment first, then recommend the right SLA and operating model.",
      },
      {
        q: "Can support plans include optimisation work?",
        a: "Yes. Many engagements combine maintenance with performance tuning, reliability improvements, security hardening, and platform cleanup work.",
      },
      {
        q: "Do you support feature expansion too?",
        a: "Yes. You can route new feature work to our product engineering team.",
      },
    ],
    dynamicSuggestion: {
      teaser: "Support protects the platform. Product work expands it.",
      body: "Once coverage and reliability are solved, the next step is often platform improvement, workflow automation, or capability expansion through custom development.",
      links: [
        {
          label: "Go to Custom SaaS →",
          href: "/services/custom-saas-it-solutions",
        },
        { label: "Go to Marketing →", href: "/services/digital-marketing" },
      ],
    },
    finalCta: {
      title: "Need Support Coverage Built Around Your Actual Risk?",
      body: "Email us about your platform, current pain points, and required response expectations. Our sales or maintenance team will reply with the right next step, whether that is a scoped proposal, a review call, or a technical walkthrough.",
      ctaText: "Request SLA Review",
      ctaHref: "/support-sla",
    },
    consultationSteps: [
      "Review your platform, hosting, and integrations",
      "Understand business-critical workflows and failure risk",
      "Recommend the right SLA, coverage window, and communication path",
      "Follow up by email or call with the proposed support model",
    ],
    consultationNote:
      "SLA expectations are scoped after reviewing system complexity, business criticality, and coverage needs.",
  },
  "mvp-development": {
    seoTitle: "MVP Development Services | Launch Your Product in 6-12 Weeks",
    seoDescription:
      "Build market-validated products with Sterlixit's MVP development services. From concept to launch, we deliver focused MVPs in 6-12 weeks using proven engineering practices and production-ready architecture.",
    hero: {
      kicker: "MVP Development",
      title: "Launch Your Product in Weeks, Not Years.",
      subtitle:
        "We build market-validated MVPs with the same production standards used for our own SaaS platforms. Focused scope, disciplined engineering, and operational clarity from day one.",
      primaryCtaText: "Discuss Your MVP",
      primaryCtaHref: "/contact",
      secondaryCtaText: "View Case Studies",
      secondaryCtaHref: "/portfolio",
    },
    painPoints: {
      title: "Why Most MVP Projects Stall or Fail.",
      intro:
        "MVP projects fail not because of code speed, but because of scope confusion, architectural corner-cutting, and misaligned expectations.",
      items: [
        "Scope expands weekly, pushing launch from 8 weeks to 6 months whilst budget burns.",
        "Architectural shortcuts taken for early speed cause technical debt that blocks scaling.",
        "The team does not own the codebase, creating permanent dependency on the original builder.",
        "Security, reliability, and performance are treated as post-launch tasks, not foundational.",
        "No clear success metric defined, so nobody knows when the MVP is genuinely validated.",
      ],
    },
    solution: {
      title: "How We Approach MVP Delivery",
      intro:
        "We treat your MVP like our own product. Disciplined scope, production-ready architecture, and clear operating rhythm deliver validated products in 6-12 weeks.",
      items: [
        {
          title: "Discovery & Scope Discipline",
          detail:
            "We identify the core job-to-be-done and build only what proves demand. One feature, one activation metric, one clear success threshold.",
        },
        {
          title: "Production-Ready Architecture",
          detail:
            "Scalable database design, API-first structure, security baselines, and monitoring from day one—not bolted on later.",
        },
        {
          title: "Iterative Build with Validation",
          detail:
            "Weekly demos, user feedback loops, and measurable progress so course corrections happen early, not after launch.",
        },
        {
          title: "Full Ownership & Documentation",
          detail:
            "You own 100% of the code, infrastructure, and documentation. No vendor lock-in. Smooth handoff to your team or future developers.",
        },
      ],
    },
    veteranEdge: {
      title: "The 10-Year Difference.",
      body: "We have launched 3 SaaS MVPs with the same team you are hiring. BrickJourney, our property-tech platform, and internal HR systems validate that we understand product rhythms, architectural tradeoffs, and the cost of premature optimisation. Your MVP benefits from patterns tested in production, not just theory.",
      stat: "3",
      statLabel: "In-House SaaS Platforms Built & Operated",
    },
    featureBenefits: {
      title: "Feature vs. Benefit",
      intro:
        "Every engineering decision should reduce time-to-insight and enable fast validation without creating future scaling pain.",
      items: [
        {
          feature: "Scope-Disciplined Discovery",
          benefit:
            "You launch with 1 core feature that proves market fit, not 10 half-features that confuse the narrative.",
        },
        {
          feature: "Scalable Database & API Architecture",
          benefit:
            "Your MVP handles 10x user growth without a costly rebuild. Early-stage profitability never hits an architecture ceiling.",
        },
        {
          feature: "Security & Compliance Baseline",
          benefit:
            "You reduce liability risk and enterprise sales friction from day one, not after an emergency audit.",
        },
        {
          feature: "Weekly Demos & Validation Loops",
          benefit:
            "Product direction stays grounded in user feedback. Build confidence before major milestones.",
        },
        {
          feature: "Complete Code Ownership",
          benefit:
            "You can hire your own team, make changes freely, or switch partners without losing intellectual property.",
        },
      ],
    },
    process: {
      title: "MVP Delivery Rhythm.",
      steps: [
        "Discovery Sprint (1-2 weeks): Define scope, success metrics, and architecture roadmap.",
        "Architecture Review (1 week): Finalise database design, API structure, and tech choices.",
        "Iterative Build (4-8 weeks): Weekly demos, user feedback, and disciplined scope adherence.",
        "Pre-Launch Validation (1-2 weeks): Security review, performance testing, and operational readiness.",
        "Launch & Monitoring (Ongoing): Deploy, monitor early user cohorts, and support scaling decisions.",
      ],
    },
    saasProof: {
      title: "Proven on Our Own Products.",
      body: "BrickJourney and internal platforms are built, maintained, and scaled by the team you are hiring. Your MVP benefits from production-grade patterns, not just project experience.",
      bullets: [
        "Production-tested service patterns applied to your product architecture",
        "Scaling and database design informed by real operational load",
        "Security and monitoring frameworks used internally adapted for your needs",
      ],
    },
    techStack: {
      title: "Production-Grade Technology.",
      tagline:
        "We use the same stack for your MVP that we use to build our own SaaS platforms.",
      tools: [
        { name: "Node.js", category: "Backend" },
        { name: "React / Next.js", category: "Frontend" },
        { name: "PostgreSQL", category: "Database" },
        { name: "AWS", category: "Infrastructure" },
        { name: "Docker", category: "Containerisation" },
        { name: "Git / GitHub", category: "Version Control" },
        { name: "Stripe", category: "Payments" },
        { name: "Vercel", category: "Deployment" },
      ],
    },
    faqs: [
      {
        q: "How long does an MVP take to launch?",
        a: "Typically 6-12 weeks for a focused, market-validated product. Timeline depends on complexity, team availability for feedback, and scope discipline.",
      },
      {
        q: "What is actually included in an MVP?",
        a: "One core job-to-be-done, working end-to-end, with user authentication, payment integration (if relevant), and operational monitoring. Not 'nice-to-haves'. Not half-features.",
      },
      {
        q: "Will we own the source code and infrastructure?",
        a: "Yes. 100% ownership. You get all source code, documentation, and infrastructure configuration. No vendor lock-in.",
      },
      {
        q: "How do we communicate during build?",
        a: "Weekly demos, sprint updates, and async engineering notes. You direct product decisions. We validate technical tradeoffs.",
      },
      {
        q: "What happens after launch?",
        a: "You operate the product independently, or we can provide support, scaling, and feature development ongoing.",
      },
      {
        q: "What if scope needs to change mid-project?",
        a: "We have a clear scope agreement upfront. Changes are documented, re-scoped, and timeline/cost adjusted—not absorbed silently.",
      },
      {
        q: "Can you integrate with our existing tools?",
        a: "Yes. APIs, webhooks, and third-party integrations (Stripe, Zapier, Slack, etc.) are standard.",
      },
      {
        q: "What about security and compliance?",
        a: "Security baselines, data encryption, and compliance frameworks are built in. For GDPR, HIPAA, or SOC2, we scope requirements upfront.",
      },
    ],
    dynamicSuggestion: {
      teaser: "Building a product is one challenge. Launching it is another.",
      body: "Once your MVP is built, pair engineering with brand clarity and customer acquisition strategy to ensure your launch reaches the right audience.",
      links: [
        {
          label: "Go to Graphics & Branding →",
          href: "/services/graphics-branding",
        },
        {
          label: "Go to Digital Marketing →",
          href: "/services/digital-marketing",
        },
      ],
    },
    finalCta: {
      title: "Ready to Launch Your Next Product?",
      body: "Get a scoped roadmap covering architecture decisions, milestone sequencing, and realistic timelines. We'll review your concept, ask clarifying questions, and map the path from discovery to launch.",
      ctaText: "Book an MVP Strategy Session",
      ctaHref: "/contact",
    },
    consultationSteps: [
      "Understand your product vision and target customer",
      "Define the core job-to-be-done and success metric",
      "Scope architecture, tech choices, and phased milestones",
      "Agree on timeline, cost, and engagement model",
    ],
    consultationNote:
      "Average first response: within 4 business hours. Most strategy calls are 45-60 minutes.",
  },
  "e-commerce-solutions": {
    seoTitle: "E-Commerce Solutions | Build High-Converting Online Stores",
    seoDescription:
      "Sterlixit e-commerce solutions combine strategic design, conversion optimisation, and seamless integrations. From Shopify to custom platforms, we build stores that drive revenue and scale reliably.",
    hero: {
      kicker: "E-Commerce Solutions",
      title: "E-Commerce Built for Revenue, Not Just Browsing.",
      subtitle:
        "We design and build online stores that convert visitors into customers. Strategic product experience, payment integration, inventory systems, and customer analytics—all working together from day one.",
      primaryCtaText: "Discuss Your Store",
      primaryCtaHref: "/contact",
      secondaryCtaText: "View Case Studies",
      secondaryCtaHref: "/portfolio",
    },
    painPoints: {
      title: "Why Most E-Commerce Projects Underperform.",
      intro:
        "E-commerce failure is rarely a technology problem. It is a strategy, design, and integration problem.",
      items: [
        "Poor product discovery and navigation cause visitors to bounce before exploring.",
        "Checkout friction—shipping costs, unexpected fees, account requirements—kills conversion mid-funnel.",
        "Inventory, order, and customer data are fragmented across separate tools, creating operational chaos.",
        "Mobile experience is treated as an afterthought, even though 60%+ of traffic comes from phones.",
        "No post-purchase strategy, so customers buy once and disappear instead of becoming repeat buyers.",
        "Site speed, SEO, and payment security are bolted on late instead of designed in from the start.",
      ],
    },
    solution: {
      title: "The E-Commerce Delivery Framework",
      intro:
        "We build stores optimised for conversion, operations, and scale. Strategic design meets technical reliability.",
      items: [
        {
          title: "Conversion-Focused Design",
          detail:
            "Product pages, checkout flows, and customer journey designed around real buyer behaviour and friction testing.",
        },
        {
          title: "Platform Selection & Setup",
          detail:
            "Shopify, WooCommerce, BigCommerce, or custom builds—matched to your scale, budget, and feature requirements.",
        },
        {
          title: "Payment & Logistics Integration",
          detail:
            "Stripe, PayPal, Apple Pay, shipping APIs, inventory sync. All payment flows tested for reliability.",
        },
        {
          title: "Performance & SEO",
          detail:
            "Fast load times, mobile optimisation, structured data, and SEO architecture so customers find you organically.",
        },
        {
          title: "Analytics & Reporting",
          detail:
            "Revenue tracking, funnel analysis, customer segmentation, and A/B testing so optimisation is data-driven.",
        },
        {
          title: "Ongoing Optimisation",
          detail:
            "Post-launch support, conversion testing, platform maintenance, and feature expansion as your business grows.",
        },
      ],
    },
    veteranEdge: {
      title: "The 10-Year Difference.",
      body: "We have run our own e-commerce operations and built platforms serving thousands of SKUs across multiple verticals—property, construction, lifestyle, and digital products. Your store benefits from operational experience, not just ecommerce templates.",
      stat: "10+",
      statLabel: "Years Building Revenue-Focused Online Experiences",
    },
    featureBenefits: {
      title: "Feature vs. Benefit",
      intro:
        "Every design, integration, and feature should reduce friction and accelerate the path from browse to purchase.",
      items: [
        {
          feature: "Mobile-First, Conversion-Focused Design",
          benefit:
            "80% of your visitors browse on mobile. If checkout works flawlessly, you capture sales you would otherwise lose.",
        },
        {
          feature: "Integrated Inventory & Order Management",
          benefit:
            "Your team spends less time juggling spreadsheets and spreadsheet hacks. Operations move faster.",
        },
        {
          feature: "Optimised Checkout Experience",
          benefit:
            "You reduce cart abandonment by 10-15% through clearer pricing, guest checkout options, and trusted payment methods.",
        },
        {
          feature: "SEO-Optimised Architecture",
          benefit:
            "More organic traffic means lower acquisition cost and sustainable, scalable growth.",
        },
        {
          feature: "Real-Time Analytics & Revenue Tracking",
          benefit:
            "You know which products sell, which funnel steps leak, and which customer cohorts are most valuable—instantly.",
        },
        {
          feature: "Email & Loyalty Integrations",
          benefit:
            "Repeat purchase rates improve because customers are reminded and rewarded for coming back.",
        },
      ],
    },
    process: {
      title: "E-Commerce Delivery Process",
      steps: [
        "Discovery & Strategy (1-2 weeks): Product audit, customer persona mapping, revenue model clarity.",
        "Platform & Architecture (1 week): Shopify vs. custom build decision, integrations roadmap, SEO structure.",
        "Design & Prototyping (2-3 weeks): Wireframes, high-fidelity mockups, checkout flow testing.",
        "Build & Integration (4-6 weeks): Platform setup, product import, payment/shipping/inventory integrations.",
        "Testing & Optimisation (1-2 weeks): Conversion testing, mobile validation, security review, performance tuning.",
        "Launch & Support (Ongoing): Soft launch, customer feedback, refinement, post-launch monitoring.",
      ],
    },
    saasProof: {
      title: "Proof Through Operational Experience.",
      body: "We have managed e-commerce operations, served customers at scale, and built integrations across multiple platforms. We know the pain points because we have lived them.",
      bullets: [
        "Payment flow and checkout optimisation tested against real user behaviour",
        "Inventory and order management systems designed for operational scale",
        "Customer service workflows and retention strategies grounded in real commerce",
      ],
    },
    techStack: {
      title: "Proven E-Commerce Technology",
      tagline:
        "We use production-grade platforms and integrations that scale from startup to enterprise scale.",
      tools: [
        { name: "Shopify", category: "Platform" },
        { name: "WooCommerce", category: "Platform" },
        { name: "Next.js", category: "Frontend" },
        { name: "Stripe", category: "Payments" },
        { name: "PayPal Commerce", category: "Payments" },
        { name: "ShipStation", category: "Shipping" },
        { name: "Klaviyo", category: "Email & CRM" },
        { name: "PostgreSQL", category: "Database" },
        { name: "Vercel", category: "Hosting" },
        { name: "CloudFlare", category: "Performance" },
      ],
    },
    faqs: [
      {
        q: "Should we use Shopify or build custom?",
        a: "Shopify is ideal for fast launch and straightforward product catalogues. Custom builds work better if you need unique business logic, complex integrations, or want to avoid platform fees at scale. We recommend based on your specific model.",
      },
      {
        q: "How long does an e-commerce store take to launch?",
        a: "Typically 8-14 weeks depending on product count, integrations, and customisation. Shopify builds are faster (6-10 weeks). Complex custom builds may take 14-20 weeks.",
      },
      {
        q: "What about inventory and order management?",
        a: "We integrate your inventory system (ERP, warehouse software, etc.) so stock updates in real-time across your store. Order data flows back to fulfilment so operations stay synchronised.",
      },
      {
        q: "Can you integrate with our existing tools?",
        a: "Yes. Accounting (Xero, QuickBooks), CRM (HubSpot, Salesforce), email (Klaviyo, Mailchimp), customer service (Zendesk, Freshdesk)—all integrated.",
      },
      {
        q: "How do you ensure secure payments?",
        a: "PCI DSS compliance, SSL encryption, and tokenised payment handling. We never store credit card data. All payments go through trusted gateways (Stripe, PayPal).",
      },
      {
        q: "Can we customise the design to match our brand?",
        a: "Yes. Complete custom design using your brand guidelines, colour palette, and visual language. Not templates.",
      },
      {
        q: "What about ongoing maintenance and support?",
        a: "We offer retainer support covering updates, security patches, performance monitoring, and minor feature additions. Growth projects are scoped separately.",
      },
      {
        q: "How do we measure store performance?",
        a: "We implement analytics dashboards tracking conversion rate, average order value, customer lifetime value, inventory health, and revenue channels. Real-time reporting keeps you informed.",
      },
    ],
    dynamicSuggestion: {
      teaser: "A great store drives traffic. Marketing fills it.",
      body: "Build a conversion-optimised store first, then pair it with SEO, paid media, and email campaigns to ensure consistent customer acquisition.",
      links: [
        {
          label: "Go to Digital Marketing →",
          href: "/services/digital-marketing",
        },
        {
          label: "Go to Graphics & Branding →",
          href: "/services/graphics-branding",
        },
      ],
    },
    finalCta: {
      title: "Ready to Build an E-Commerce Store That Converts?",
      body: "Let's review your product mix, customer model, and revenue goals. We'll recommend the right platform, technical approach, and timeline for your store.",
      ctaText: "Book an E-Commerce Strategy Call",
      ctaHref: "/contact",
    },
    consultationSteps: [
      "Understand your product mix, pricing model, and target customer",
      "Audit your current operations and integration requirements",
      "Recommend platform (Shopify vs. custom) and feature scope",
      "Map timeline, budget, and success metrics",
    ],
    consultationNote:
      "Average first response: within 4 business hours. Most strategy calls are 45-60 minutes.",
  },
};

function PainPointsSection({ blueprint }: { blueprint: ServiceBlueprint }) {
  return (
    <section
      id="pain-points"
      className="relative scroll-mt-28 bg-primary/[0.03] py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[42vh] w-[38vw] rounded-full bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.08)_0%,transparent_72%)]" />
      </div>
      <SiteContainer>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <AnimatedReveal>
            <div className="lg:sticky lg:top-28">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                <AlertTriangle className="size-3.5" />
                Risk Analysis
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {blueprint.painPoints.title}
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground leading-7">
                {blueprint.painPoints.intro}
              </p>
            </div>
          </AnimatedReveal>
          <div className="space-y-1 border-t border-border/70">
            {blueprint.painPoints.items.map((item, index) => (
              <AnimatedReveal key={item}>
                <div className="grid gap-3 border-b border-border/70 py-5 md:grid-cols-[auto_1fr] md:items-start md:gap-5">
                  <div className="inline-flex size-8 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-xs font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground md:text-base">
                    {item}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

function TechStackSection({ blueprint }: { blueprint: ServiceBlueprint }) {
  return (
    <section id="tech-stack" className="scroll-mt-28 py-20 md:py-24">
      <SiteContainer>
        <AnimatedReveal>
          <div className="mb-9 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {blueprint.techStack.title}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              {blueprint.techStack.tagline}
            </p>
          </div>
        </AnimatedReveal>
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/12 via-background to-primary/5 p-6 md:p-8">
          <div className="pointer-events-none absolute -right-20 -top-16 size-56 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.16)_0%,transparent_72%)]" />
          <div className="pointer-events-none absolute -bottom-20 -left-24 size-56 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.12)_0%,transparent_72%)]" />
          <div className="flex flex-wrap gap-2.5 md:gap-3">
            {blueprint.techStack.tools.map((tool) => (
              <AnimatedReveal key={tool.name}>
                <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/85 px-3.5 py-2 text-sm transition-all duration-300 hover:border-primary/35 hover:bg-background">
                  <span className="font-semibold text-foreground">
                    {tool.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {tool.category}
                  </span>
                  <div className="size-1.5 rounded-full bg-primary/60" />
                </div>
              </AnimatedReveal>
            ))}
          </div>
          <div className="mt-6 grid gap-3 border-t border-primary/15 pt-6 md:grid-cols-3">
            {[
              "Enterprise-grade workflows",
              "Production reliability standards",
              "Future-proof architecture decisions",
            ].map((point) => (
              <AnimatedReveal key={point}>
                <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary/70" />
                  <span>{point}</span>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

function ServiceSolutionSection({
  blueprint,
}: {
  blueprint: ServiceBlueprint;
}) {
  return (
    <section id="solution-architecture" className="scroll-mt-28 py-20 md:py-24">
      <SiteContainer>
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          <AnimatedReveal>
            <div className="lg:sticky lg:top-28">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                <LayoutGrid className="size-3.5" />
                Solution Architecture
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {blueprint.solution.title}
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground leading-7">
                {blueprint.solution.intro}
              </p>

              <div className="mt-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/80">
                  Architecture Assurance
                </p>
                <div className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                  {[
                    "Systems are designed for operational continuity.",
                    "Every layer maps to measurable business outcomes.",
                    "Delivery decisions remain aligned to long-term scale.",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary/75" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedReveal>

          <div className="space-y-4">
            {blueprint.solution.items.map((item, index) => (
              <AnimatedReveal key={item.title}>
                <article className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_14px_40px_rgba(79,70,229,0.12)] md:p-6">
                  <div className="pointer-events-none absolute -right-16 -top-16 size-36 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.14)_0%,transparent_72%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.13em] text-primary/80">
                      Layer {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Outcome-Focused
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-foreground md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                    {item.detail}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Execution-ready", "Scalable", "Business-aligned"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-primary/20 bg-primary/8 px-2.5 py-1 text-[11px] font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </article>
              </AnimatedReveal>
            ))}

            <AnimatedReveal>
              <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/12 via-primary/4 to-transparent p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/80">
                  Delivery Note
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground md:text-base">
                  Architecture decisions are validated against delivery speed,
                  reliability requirements, and long-term operating cost before
                  build execution begins.
                </p>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

function CoreServiceTemplate({ slug }: { slug: string }) {
  const blueprint = coreBlueprints[slug];
  if (!blueprint) return null;

  const railSections = [
    { id: "overview", label: "Overview" },
    { id: "pain-points", label: "Pain Points" },
    { id: "solution-architecture", label: "Solution" },
    { id: "strategic-edge", label: "Strategic Edge" },
    { id: "feature-benefits", label: "Feature Benefits" },
    { id: "delivery-process", label: "Process" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "faq", label: "FAQ" },
    { id: "next-step", label: "Next Step" },
    { id: "consultation", label: "Consultation" },
  ];

  return (
    <>
      <ServiceDetailScrollRail sections={railSections} />

      <section
        id="overview"
        className="relative scroll-mt-28 overflow-hidden py-24 md:py-32 lg:py-36"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[70vh] w-[74vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.14)_0%,transparent_70%)]" />
          <div className="absolute right-0 top-0 h-[36vh] w-[36vw] rounded-full bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.08)_0%,transparent_68%)]" />
        </div>
        <SiteContainer>
          <ScrollParallaxWrap
            intensity={18}
            className="mx-auto max-w-4xl text-center"
          >
            <AnimatedReveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="size-4" />
                {blueprint.hero.kicker}
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={0.08}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {blueprint.hero.title}
              </h1>
            </AnimatedReveal>
            <AnimatedReveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                {blueprint.hero.subtitle}
              </p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden rounded-full border border-primary/45 bg-gradient-to-r from-primary to-primary/80 px-8 text-primary-foreground shadow-[0_12px_30px_rgba(79,70,229,0.35)]"
                >
                  <Link href={blueprint.hero.primaryCtaHref ?? "/contact"}>
                    <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 -skew-x-12 bg-white/55 blur-[1px] transition-transform duration-700 group-hover:translate-x-52" />
                    {blueprint.hero.primaryCtaText ?? "Book a Strategy Call"}
                    <ArrowUpRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                >
                  <Link href={blueprint.hero.secondaryCtaHref ?? "/services"}>
                    {blueprint.hero.secondaryCtaText ?? "Explore All Services"}
                  </Link>
                </Button>
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={0.3}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
                {[
                  "10+ Years Expertise",
                  "10 Permanent Partners",
                  "3 In-house SaaS Products",
                ].map((item) => (
                  <div key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-primary/70" />
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          </ScrollParallaxWrap>
        </SiteContainer>
      </section>

      <PainPointsSection blueprint={blueprint} />

      <ServiceSolutionSection blueprint={blueprint} />

      <section
        id="strategic-edge"
        className="scroll-mt-28 bg-primary/[0.03] py-20 md:py-24"
      >
        <SiteContainer>
          <AnimatedReveal>
            <ScrollParallaxWrap intensity={14}>
              <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/12 to-transparent p-8 shadow-[0_20px_56px_rgba(79,70,229,0.12)] md:p-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  <ShieldCheck className="size-3.5" />
                  Strategic Advantage
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  {blueprint.veteranEdge.title}
                </h2>
                <p className="mt-4 max-w-3xl text-muted-foreground leading-7">
                  {blueprint.veteranEdge.body}
                </p>
                <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
                  <Star className="size-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    {blueprint.veteranEdge.stat}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {blueprint.veteranEdge.statLabel}
                  </span>
                </div>
              </div>
            </ScrollParallaxWrap>
          </AnimatedReveal>
        </SiteContainer>
      </section>

      <section id="feature-benefits" className="scroll-mt-28 py-20 md:py-24">
        <SiteContainer>
          <div className="mb-9">
            <AnimatedReveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                <Code2 className="size-3.5" />
                Feature Breakdown
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={0.06}>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {blueprint.featureBenefits.title}
              </h2>
              <p className="mt-4 max-w-3xl text-muted-foreground leading-7">
                {blueprint.featureBenefits.intro}
              </p>
            </AnimatedReveal>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border/70">
            <div className="hidden grid-cols-[0.9fr_1.1fr] border-b border-border/70 bg-primary/[0.04] px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground md:grid">
              <span>Feature</span>
              <span>Business Benefit</span>
            </div>
            {blueprint.featureBenefits.items.map((item) => (
              <AnimatedReveal key={item.feature}>
                <div className="grid gap-2 border-b border-border/70 px-6 py-5 last:border-b-0 md:grid-cols-[0.9fr_1.1fr] md:gap-6">
                  <div>
                    <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary md:hidden">
                      Feature
                    </div>
                    <div className="mt-2 text-sm font-semibold leading-7 text-foreground md:mt-0 md:text-base">
                      {item.feature}
                    </div>
                  </div>
                  <div>
                    <div className="inline-flex rounded-full border border-border/60 bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground md:hidden">
                      Benefit
                    </div>
                    <div className="mt-2 text-sm leading-7 text-muted-foreground md:mt-0 md:text-base">
                      {item.benefit}
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section
        id="delivery-process"
        className="scroll-mt-28 bg-primary/[0.03] py-20 md:py-24"
      >
        <SiteContainer>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <AnimatedReveal>
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  {blueprint.process.title}
                </h2>
                <div className="mt-6 space-y-0 border-t border-border/70">
                  {blueprint.process.steps.map((step, i) => (
                    <div
                      key={step}
                      className="grid grid-cols-[auto_1fr] items-center gap-4 border-b border-border/70 py-4"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium leading-7 md:text-base">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/14 to-transparent p-7">
                <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.2)_0%,transparent_70%)]" />
                <h3 className="text-2xl font-semibold tracking-tight">
                  {blueprint.saasProof.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                  {blueprint.saasProof.body}
                </p>
                <div className="mt-4 space-y-2">
                  {blueprint.saasProof.bullets.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </SiteContainer>
      </section>

      <TechStackSection blueprint={blueprint} />

      <section
        id="faq"
        className="scroll-mt-28 bg-primary/[0.03] py-20 md:py-24"
      >
        <SiteContainer>
          <AnimatedReveal>
            <div className="mx-auto max-w-5xl border-y border-border/70 py-8 md:py-10">
              <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    FAQ
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Clear answers for scope, ownership, communication, and
                    post-delivery support. No ambiguity before kickoff.
                  </p>
                  <div className="mt-4 space-y-2">
                    {[
                      "Source ownership included",
                      "Structured communication cadence",
                      "Post-launch guidance available",
                    ].map((item) => (
                      <div
                        key={item}
                        className="inline-flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle2 className="size-3.5 text-primary/70" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <Accordion type="single" collapsible className="px-1">
                  {blueprint.faqs.map((faq, index) => (
                    <AccordionItem key={faq.q} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left text-sm md:text-base">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <div
              id="next-step"
              className="mx-auto mt-10 scroll-mt-28 max-w-5xl border-t border-primary/20 pt-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                <Sparkles className="size-3.5" />
                Smart Next Step
              </div>
              <div className="mt-3 text-lg font-semibold">
                {blueprint.dynamicSuggestion.teaser}
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
                {blueprint.dynamicSuggestion.body}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {blueprint.dynamicSuggestion.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-background/90 px-4 py-2 text-sm font-medium hover:border-primary/40 hover:text-primary"
                  >
                    {link.label}
                    <ArrowUpRight className="size-4" />
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </SiteContainer>
      </section>

      <section id="consultation" className="scroll-mt-28 py-20 md:py-24">
        <SiteContainer>
          <AnimatedReveal>
            <ScrollParallaxWrap intensity={12}>
              <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-primary/25 bg-[linear-gradient(145deg,rgba(79,70,229,0.17)_0%,rgba(79,70,229,0.04)_40%,rgba(255,255,255,0.96)_100%)] shadow-[0_24px_62px_rgba(79,70,229,0.14)]">
                <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
                  <div className="relative p-10 md:p-12">
                    <div className="pointer-events-none absolute -right-16 -top-14 size-52 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.2)_0%,transparent_70%)]" />
                    <div className="relative z-10">
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/12 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                        Service Consultation
                      </div>
                      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        {blueprint.finalCta.title}
                      </h2>
                      <p className="mt-4 max-w-2xl text-muted-foreground">
                        {blueprint.finalCta.body}
                      </p>
                      <div className="mt-7">
                        <Button
                          asChild
                          size="lg"
                          className="group relative overflow-hidden rounded-full border border-primary/45 bg-gradient-to-r from-primary to-primary/80 px-9 text-primary-foreground shadow-[0_14px_30px_rgba(79,70,229,0.35)] transition-all duration-300 hover:shadow-[0_18px_42px_rgba(79,70,229,0.5)]"
                        >
                          <Link href={blueprint.finalCta.ctaHref}>
                            <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 -skew-x-12 bg-white/55 blur-[1px] transition-transform duration-700 group-hover:translate-x-56" />
                            {blueprint.finalCta.ctaText}
                            <ArrowUpRight className="ml-2 size-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-primary/15 bg-background/55 p-8 md:p-10 lg:border-l lg:border-t-0">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/12">
                      <ShieldCheck className="size-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      What Happens Next
                    </h3>
                    <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                      {(
                        blueprint.consultationSteps ?? [
                          "30-minute strategic discovery call",
                          "Scope and priority alignment",
                          "Recommendation on service mix and timeline",
                          "Clear proposal with execution path",
                        ]
                      ).map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary/75" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 rounded-xl border border-primary/15 bg-primary/8 p-3 text-xs text-muted-foreground">
                      {blueprint.consultationNote ??
                        "Average first response time: under 4 business hours."}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollParallaxWrap>
          </AnimatedReveal>
        </SiteContainer>
      </section>
    </>
  );
}

function GenericServiceTemplate({
  title,
  summary,
  sections,
}: {
  title: string;
  summary: string;
  sections: string[];
}) {
  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[65vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.12)_0%,transparent_70%)]" />
        </div>
        <SiteContainer>
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedReveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-2 text-sm font-medium text-primary">
                <Cloud className="size-4" />
                Service Details
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={0.08}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {title}
              </h1>
            </AnimatedReveal>
            <AnimatedReveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                {summary}
              </p>
            </AnimatedReveal>
          </div>
        </SiteContainer>
      </section>

      <section className="py-20 md:py-24">
        <SiteContainer>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((item, index) => (
              <AnimatedReveal key={item} delay={index * 0.05}>
                <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/10 to-transparent p-5">
                  <div className="text-sm font-medium text-foreground">
                    {item}
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="pb-12">
        <SiteContainer>
          <div className="rounded-3xl border border-primary/20 bg-primary/6 p-7 text-center">
            <h2 className="text-2xl font-semibold">
              Need guidance for this service?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Share your requirements and we will map the right implementation
              plan.
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="/contact">
                  Speak with an Expert
                  <ArrowUpRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </SiteContainer>
      </section>
    </>
  );
}

export function generateStaticParams() {
  return allServicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = allServicePages.find((item) => item.slug === slug);
  const blueprint = coreBlueprints[slug];

  return {
    title: blueprint?.seoTitle ?? `${service?.title ?? "Service"} | Sterlixit`,
    description:
      blueprint?.seoDescription ??
      service?.summary ??
      "Explore Sterlixit specialist digital services designed to drive brand growth, web performance, and revenue outcomes.",
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title:
        blueprint?.seoTitle ?? `${service?.title ?? "Service"} | Sterlixit`,
      description:
        blueprint?.seoDescription ??
        service?.summary ??
        "Explore Sterlixit specialist digital services designed to drive brand growth, web performance, and revenue outcomes.",
      url: `https://sterlixit.co.uk/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = allServicePages.find((item) => item.slug === slug);
  if (!service) notFound();

  const isCoreService = Object.prototype.hasOwnProperty.call(
    coreBlueprints,
    slug,
  );

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.title, href: `/services/${slug}` },
        ]}
      />
      <SiteHeader />

      {isCoreService ? (
        <CoreServiceTemplate slug={slug} />
      ) : (
        <GenericServiceTemplate
          title={service.title}
          summary={service.summary}
          sections={service.sections}
        />
      )}

      <SiteFooter />
      <FloatingServiceSpecialtiesBar />
      <ExitIntentDialog />
      <LiveChatButton />
    </main>
  );
}
