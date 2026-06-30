import {
  BarChart3,
  BookOpen,
  ClipboardList,
  FileText,
  Gauge,
  Globe,
  Layers,
  Megaphone,
  Palette,
  Search,
  Zap,
} from "lucide-react";

// Shared resource catalogue. Imported by the /resources index (client) and the
// per-resource landing pages at /resources/[slug] (server) — see D-04, where
// each resource now has a real, indexable destination instead of a JS-only
// form button.

export type Resource = {
  slug: string;
  category: string;
  title: string;
  description: string;
  format: string;
  icon: React.ElementType;
  imageSrc: string;
  source: string;
  highlights: string[];
  ctaLabel: string;
};

export const resources: Resource[] = [
  {
    slug: "website-audit",
    category: "Website",
    title: "Free Website Audit",
    description:
      "Get a detailed performance and conversion snapshot of your site. We identify speed bottlenecks, UX friction points, and missed revenue opportunities.",
    format: "PDF Report",
    icon: Gauge,
    imageSrc:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop",
    source: "resource_website_audit",
    highlights: [
      "Core Web Vitals analysis",
      "Conversion bottleneck mapping",
      "Mobile experience scorecard",
    ],
    ctaLabel: "Get My Website Audit",
  },
  {
    slug: "seo-audit",
    category: "SEO",
    title: "Free SEO Audit",
    description:
      "Uncover the technical SEO issues and keyword gaps holding your rankings back. Delivered as a prioritised action plan your team can execute immediately.",
    format: "PDF Report",
    icon: Search,
    imageSrc:
      "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=1600&auto=format&fit=crop",
    source: "resource_seo_audit",
    highlights: [
      "Technical SEO health check",
      "Keyword gap analysis",
      "Backlink opportunity report",
    ],
    ctaLabel: "Get My SEO Audit",
  },
  {
    slug: "branding-checklist",
    category: "Brand",
    title: "Brand Consistency Checklist",
    description:
      "A 40-point checklist to audit your visual identity, tone of voice, and messaging cohesion across every customer touchpoint — from ads to invoices.",
    format: "Checklist PDF",
    icon: Palette,
    imageSrc:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600&auto=format&fit=crop",
    source: "resource_branding_checklist",
    highlights: [
      "Visual identity audit",
      "Tone of voice guidelines",
      "Cross-channel messaging review",
    ],
    ctaLabel: "Download Checklist",
  },
  {
    slug: "growth-engine-blueprint",
    category: "Strategy",
    title: "90-Day Growth Engine Blueprint",
    description:
      "The exact execution template we use to align strategy, website, and demand generation into one operating system for fast-scaling businesses.",
    format: "Strategy Template",
    icon: Zap,
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    source: "resource_growth_engine_blueprint",
    highlights: [
      "90-day milestone roadmap",
      "Channel prioritisation matrix",
      "Team accountability framework",
    ],
    ctaLabel: "Get the Blueprint",
  },
  {
    slug: "saas-mvp-checklist",
    category: "SaaS",
    title: "SaaS MVP Launch Checklist",
    description:
      "A founder-ready checklist covering pre-launch QA, onboarding activation flow, and release confidence gates for shipping your first SaaS product.",
    format: "Checklist PDF",
    icon: ClipboardList,
    imageSrc:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    source: "resource_saas_mvp_checklist",
    highlights: [
      "Pre-launch QA protocol",
      "Activation flow templates",
      "Release confidence gates",
    ],
    ctaLabel: "Download Checklist",
  },
  {
    slug: "conversion-rate-guide",
    category: "Conversion",
    title: "CRO Playbook for B2B Teams",
    description:
      "Proven conversion rate optimisation frameworks for B2B landing pages, pricing pages, and sign-up flows — with real before/after examples.",
    format: "Playbook PDF",
    icon: BarChart3,
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    source: "resource_cro_playbook",
    highlights: [
      "Landing page formula",
      "Pricing page psychology",
      "Form optimisation tactics",
    ],
    ctaLabel: "Download Playbook",
  },
  {
    slug: "digital-marketing-audit",
    category: "Marketing",
    title: "Digital Marketing Audit Template",
    description:
      "A structured audit template to evaluate your paid, organic, email, and social performance against industry benchmarks across every channel.",
    format: "Audit Template",
    icon: Megaphone,
    imageSrc:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    source: "resource_marketing_audit",
    highlights: [
      "Paid channel efficiency scores",
      "Organic growth benchmarks",
      "Email performance grades",
    ],
    ctaLabel: "Get the Audit Template",
  },
  {
    slug: "design-system-starter",
    category: "Product",
    title: "Design System Starter Kit",
    description:
      "Token architecture, component documentation templates, and design principles to help product teams build a scalable, dev-ready design system.",
    format: "Figma + PDF",
    icon: Layers,
    imageSrc:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop",
    source: "resource_design_system_starter",
    highlights: [
      "Token architecture guide",
      "Component documentation template",
      "Developer handoff checklist",
    ],
    ctaLabel: "Download Starter Kit",
  },
  {
    slug: "content-strategy-guide",
    category: "Content",
    title: "Content Strategy Playbook",
    description:
      "Turn content into a compounding growth asset. Includes editorial calendar templates, topic cluster frameworks, and content ROI measurement models.",
    format: "Playbook PDF",
    icon: FileText,
    imageSrc:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    source: "resource_content_strategy",
    highlights: [
      "Editorial calendar template",
      "Topic cluster architecture",
      "Content ROI model",
    ],
    ctaLabel: "Get the Playbook",
  },
  {
    slug: "global-readiness-checklist",
    category: "Strategy",
    title: "Global Expansion Readiness Checklist",
    description:
      "A structured readiness framework for businesses preparing to enter new markets — covering localisation, compliance, and digital infrastructure.",
    format: "Checklist PDF",
    icon: Globe,
    imageSrc:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
    source: "resource_global_readiness",
    highlights: [
      "Market entry readiness score",
      "Localisation requirements map",
      "Compliance & legal checklist",
    ],
    ctaLabel: "Download Checklist",
  },
  {
    slug: "blog-insights",
    category: "Learning",
    title: "Sterlixit Insights Library",
    description:
      "Explore our full blog: growth systems, SaaS execution playbooks, conversion optimisation guides, and digital strategy deep-dives.",
    format: "Free Reading",
    icon: BookOpen,
    imageSrc:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1600&auto=format&fit=crop",
    source: "resource_insights_library",
    highlights: [
      "Strategy deep-dives",
      "Execution playbooks",
      "Founder & operator frameworks",
    ],
    ctaLabel: "Browse the Blog",
  },
];

export const CATEGORIES = [
  "All",
  ...Array.from(new Set(resources.map((r) => r.category))),
];

// The blog library links straight to /blog; everything else gets a gated
// landing page at /resources/[slug].
export const BLOG_RESOURCE_SLUG = "blog-insights";

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

/** Resources that have their own gated landing page (excludes the blog link). */
export function getLandingResources(): Resource[] {
  return resources.filter((r) => r.slug !== BLOG_RESOURCE_SLUG);
}

/** The crawlable destination for a resource's CTA. */
export function resourceHref(resource: Resource): string {
  return resource.slug === BLOG_RESOURCE_SLUG
    ? "/blog"
    : `/resources/${resource.slug}`;
}
