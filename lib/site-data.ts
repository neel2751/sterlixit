export type LinkItem = {
  label: string;
  href: string;
};

export type ServicePage = {
  slug: string;
  title: string;
  summary: string;
  sections: string[];
  subpages?: LinkItem[];
};

export type PortfolioItem = {
  slug: string;
  title: string;
  category: "Web" | "Branding" | "Marketing" | "SaaS";
  client: string;
  problem: string;
  solution: string;
  process: string[];
  technologies: string[];
  results: string[];
  testimonial: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  content: string[];
  tags: string[];
};

export type IndustryPage = {
  slug: string;
  title: string;
  challenges: string[];
  howWeHelp: string[];
  caseStudies: string[];
};

export const mainNavigation: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/portfolio" },
  { label: "Investment", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const coreServices = [
  {
    slug: "graphics-branding",
    title: "Graphics & Branding",
    description:
      "Identity systems, campaign creatives, and design assets that make your brand instantly recognizable.",
  },
  {
    slug: "web-design-development",
    title: "Web Design & Development",
    description:
      "High-performance websites, e-commerce experiences, and product interfaces built for conversion.",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "SEO, paid media, and lifecycle campaigns that drive qualified traffic and measurable ROI.",
  },
  {
    slug: "custom-saas-it-solutions",
    title: "Custom SaaS / IT",
    description:
      "Secure, scalable software systems—from MVPs to enterprise integrations and cloud architecture.",
  },
  {
    slug: "support-maintenance",
    title: "Support & Maintenance",
    description:
      "Proactive monitoring, scoped SLA support, and continuous optimisation for digital stability.",
  },
];

export const servicePages: ServicePage[] = [
  {
    slug: "graphics-branding",
    title: "Graphics & Branding",
    summary:
      "Build a cohesive visual identity that compounds trust across every customer touchpoint.",
    sections: [
      "Overview",
      "Logo Design & Visual Identity",
      "UI/UX Design (Wireframing)",
      "Social Media Asset Kits",
      "Pitch Deck & Corporate Presentations",
      "Branding Process",
      "Portfolio Samples",
      "Pricing Plans",
      "FAQ",
      "CTA",
    ],
    subpages: [
      { label: "Logo Design Services", href: "/services/logo-design-services" },
      {
        label: "UI/UX Design Services",
        href: "/services/ui-ux-design-services",
      },
      { label: "Pitch Deck Design", href: "/services/pitch-deck-design" },
    ],
  },
  {
    slug: "web-design-development",
    title: "Web Design & Development",
    summary:
      "Craft conversion-focused digital experiences with robust engineering and clean UX.",
    sections: [
      "Overview",
      "UI/UX Design",
      "Web Development (React, WordPress, Shopify)",
      "E-commerce Development",
      "Landing Page Development",
      "Technologies We Use",
      "Case Studies",
      "Development Process",
      "Pricing Models",
      "FAQ",
      "CTA",
    ],
    subpages: [
      { label: "React Development", href: "/services/react-development" },
      {
        label: "WordPress Development",
        href: "/services/wordpress-development",
      },
      { label: "Shopify Development", href: "/services/shopify-development" },
      { label: "E-commerce Solutions", href: "/services/e-commerce-solutions" },
      { label: "Landing Page Design", href: "/services/landing-page-design" },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    summary:
      "Scale awareness and pipeline with full-funnel campaigns rooted in analytics.",
    sections: [
      "Overview",
      "SEO Services",
      "PPC Management",
      "Content Marketing",
      "Email Marketing",
      "Marketing Strategy Process",
      "Case Studies",
      "Pricing Packages",
      "FAQ",
      "CTA",
    ],
    subpages: [
      { label: "SEO Services", href: "/services/seo-services" },
      {
        label: "Google Ads Management",
        href: "/services/google-ads-management",
      },
      { label: "Meta Ads Management", href: "/services/meta-ads-management" },
      {
        label: "Content Writing Services",
        href: "/services/content-writing-services",
      },
      {
        label: "Email Marketing Services",
        href: "/services/email-marketing-services",
      },
    ],
  },
  {
    slug: "custom-saas-it-solutions",
    title: "Custom SaaS / IT Solutions",
    summary:
      "Modernize systems and launch resilient products with cloud-native engineering.",
    sections: [
      "Overview",
      "MVP Development",
      "API Integration",
      "DevOps & Cloud (AWS)",
      "Legacy System Migration",
      "Technologies Stack",
      "Security & Compliance",
      "Case Studies",
      "Engagement Models",
      "FAQ",
      "CTA",
    ],
    subpages: [
      { label: "MVP Development", href: "/services/mvp-development" },
      { label: "API Integration", href: "/services/api-integration" },
      { label: "DevOps Services", href: "/services/devops-services" },
      { label: "Cloud Architecture", href: "/services/cloud-architecture" },
      { label: "Data Migration", href: "/services/data-migration" },
    ],
  },
  {
    slug: "support-maintenance",
    title: "Support & Maintenance",
    summary:
      "Protect uptime and performance with scoped support operations built around your system's real risk.",
    sections: [
      "Overview",
      "Risk Assessment",
      "Coverage Model",
      "What’s Included",
      "Communication & Escalation",
      "Reporting",
      "FAQ",
      "CTA",
    ],
    subpages: [
      { label: "Website Maintenance", href: "/services/website-maintenance" },
      { label: "SaaS Maintenance", href: "/services/saas-maintenance" },
      { label: "Security & Monitoring", href: "/services/security-monitoring" },
    ],
  },
];

const generatedServiceSubpages = servicePages.flatMap((service) =>
  (service.subpages ?? []).map((sub) => ({
    slug: sub.href.replace("/services/", ""),
    title: sub.label,
    summary: `${sub.label} tailored for business growth, conversion, and operational reliability.`,
    sections: [
      "Overview",
      "Capabilities",
      "Process",
      "Case Studies",
      "Pricing",
      "FAQ",
      "CTA",
    ],
  })),
);

export const allServicePages: ServicePage[] = [
  ...servicePages,
  ...generatedServiceSubpages,
];

export const differentiators = [
  {
    title: "Strategy-First Delivery",
    description:
      "Every engagement starts with goals, ICP mapping, and measurable KPIs.",
  },
  {
    title: "Cross-Functional Team",
    description:
      "Designers, developers, and marketers collaborate from day one.",
  },
  {
    title: "Transparent Communication",
    description:
      "Weekly updates, sprint demos, and visible progress across all projects.",
  },
  {
    title: "Conversion-Focused Execution",
    description:
      "We optimise for outcomes—leads, sales, retention, and expansion.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "Post-launch support and growth services keep your stack performing.",
  },
  {
    title: "Security & Compliance Mindset",
    description:
      "We implement secure architectures and best-practice governance.",
  },
  {
    title: "Data-Driven Optimisation",
    description:
      "Continuous measurement ensure your digital systems evolve with your business.",
  },
  {
    title: "Flexible Engagement Models",
    description:
      "Project-based, retainer, or growth partnership options to fit your needs.",
  },
];

export const processSteps = [
  "Discovery",
  "Strategy",
  "Development",
  "Launch",
  "Support",
];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "cdc-construction",
    title: "CDC Construction Growth & Operations Platform",
    category: "Web",
    client: "CDC Construction",
    problem:
      "CDC needed one connected digital system across website performance, lead generation, and internal project operations.",
    solution:
      "Delivered a full-stack engagement combining website architecture, performance-led marketing systems, and custom software workflows for project delivery and reporting.",
    process: [
      "Website UX, IA, and conversion architecture",
      "Marketing funnel, analytics, and campaign instrumentation",
      "Custom software workflow design and phased rollout",
      "Ongoing optimisation across growth and operations",
    ],
    technologies: ["Next.js", "Node.js", "GA4", "Custom Workflow Stack"],
    results: [
      "Unified digital foundation across website, marketing, and operations",
      "Stronger lead quality through service-led conversion pathways",
      "Faster internal coordination with custom project workflows",
    ],
    testimonial:
      "Sterlixit became our long-term execution partner across digital growth and operational systems.",
  },
  {
    slug: "cdc-property",
    title: "CDC Property Management Digital Operations Platform",
    category: "Web",
    client: "CDC Property Management",
    problem:
      "CDC Property Management needed one connected experience for listings, lettings operations, tenant communication, and real-time payment visibility.",
    solution:
      "Delivered a full digital stack covering website journey design, growth funnel instrumentation, and custom property-management workflows for documents, payments, and updates.",
    process: [
      "Website and user-journey architecture",
      "Lettings and tenant workflow mapping",
      "Custom portal modules for payments and documents",
      "Ongoing optimisation across acquisition and service operations",
    ],
    technologies: ["Next.js", "Node.js", "GA4", "Custom Portal Workflows"],
    results: [
      "Stronger end-to-end transparency for tenants and landlords",
      "Faster operational response through real-time workflow visibility",
      "Improved lead-to-tenancy continuity across the digital journey",
    ],
    testimonial:
      "Sterlixit helped us align property growth with day-to-day operations in one reliable digital system.",
  },
  {
    slug: "cdc-development",
    title: "CDC Development Investment & Delivery Platform",
    category: "Web",
    client: "CDC Development",
    problem:
      "CDC Development needed clearer digital storytelling and a stronger system to present mixed-use development value, services, and investor pathways.",
    solution:
      "Built a structured web and growth platform aligned to their planning, design, procurement, construction, and marketing lifecycle, supported by custom content workflows.",
    process: [
      "Market and service-positioning architecture",
      "Information hierarchy and conversion flow planning",
      "Custom CMS and internal publishing workflows",
      "Continuous optimisation of messaging and lead pathways",
    ],
    technologies: [
      "Next.js",
      "SEO Framework",
      "GA4",
      "Custom Content Workflows",
    ],
    results: [
      "Clearer service communication across residential and commercial offerings",
      "Stronger enquiry intent from development-focused audiences",
      "Better internal alignment between brand, delivery, and growth teams",
    ],
    testimonial:
      "Sterlixit translated our development vision into a structured platform that supports both growth and delivery.",
  },
  {
    slug: "interior-studio",
    title: "Interior Studio Digital Experience Platform",
    category: "Web",
    client: "Interior Studio Ltd",
    problem:
      "Interior Studio needed a clearer digital journey to present its design philosophy, showcase projects, and convert visitors into qualified consultations.",
    solution:
      "We delivered a refined website and growth framework that aligned storytelling, portfolio visibility, and consultation conversion paths around a premium interior brand experience.",
    process: [
      "Brand and positioning discovery for digital channels",
      "Website IA, content hierarchy, and consultation flow design",
      "Visual showcase optimisation for project-first storytelling",
      "Continuous optimisation for engagement and enquiry quality",
    ],
    technologies: ["Next.js", "SEO Framework", "GA4", "Content Workflows"],
    results: [
      "Clearer premium positioning across service and project pages",
      "Improved consultation intent through better page flow",
      "Stronger project visibility with a cleaner visual experience",
    ],
    testimonial:
      "Sterlixit helped us turn our design vision into a digital experience that feels premium and converts with clarity.",
  },
  {
    slug: "lomashwood",
    title: "Lomash Wood End-to-End Digital Commerce Platform",
    category: "Web",
    client: "Lomash Wood",
    problem:
      "Lomash Wood needed a complete digital platform built from scratch to support product discovery, consultation booking, finance pathways, and long-term brand growth.",
    solution:
      "We planned and delivered the full programme from discovery to launch: website architecture, branded UX system, conversion journeys, and an ongoing lifetime maintenance and support model.",
    process: [
      "Discovery, planning, and platform architecture",
      "Brand-led UX, IA, and customer-journey mapping",
      "Development, integrations, and quality assurance",
      "Post-launch optimisation with lifetime support and maintenance",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Analytics",
      "Workflow Integrations",
    ],
    results: [
      "A complete production-ready platform delivered from zero to launch",
      "Stronger product and package discovery across kitchen and bedroom journeys",
      "Sustained performance through continuous maintenance and support",
    ],
    testimonial:
      "Sterlixit delivered the full journey from strategy to launch, and continues to support our growth with reliable long-term maintenance.",
  },
  {
    slug: "cdc-housing",
    title: "CDC Housing WordPress and Digital Marketing Platform",
    category: "Web",
    client: "CDC Housing",
    problem:
      "CDC Housing needed a stronger digital presence to communicate project credibility, service quality, and long-term development value with clearer lead pathways.",
    solution:
      "We delivered a full WordPress website and digital marketing programme covering positioning, conversion flow structure, campaign setup, and ongoing optimisation.",
    process: [
      "Discovery and growth-positioning strategy",
      "WordPress website architecture and content journey design",
      "Digital marketing setup with tracking and campaign structure",
      "Continuous optimisation of lead quality and engagement performance",
    ],
    technologies: ["WordPress", "SEO", "Meta Ads", "Google Analytics"],
    results: [
      "Clearer communication of CDC Housing's project and delivery value",
      "Stronger enquiry journeys from content discovery to contact",
      "Improved marketing visibility through structured campaign measurement",
    ],
    testimonial:
      "Sterlixit helped us align our website and digital marketing into one reliable growth system.",
  },
  {
    slug: "healthflow-saas-platform",
    title: "HealthFlow SaaS Platform",
    category: "SaaS",
    client: "HealthFlow",
    problem:
      "Legacy workflows caused delays and low user adoption for clinical operations.",
    solution:
      "Designed and developed a HIPAA-ready multi-tenant SaaS with role-based dashboards.",
    process: [
      "Discovery workshops",
      "UX wireframing",
      "Agile product sprints",
      "Cloud deployment",
    ],
    technologies: ["Next.js", "Node.js", "AWS", "PostgreSQL"],
    results: [
      "42% faster onboarding",
      "33% increase in monthly active users",
      "99.95% uptime",
    ],
    testimonial:
      "Sterlixit transformed our product velocity and user satisfaction.",
  },
  {
    slug: "atlas-commerce-replatform",
    title: "Atlas Commerce Replatform",
    category: "Web",
    client: "Atlas Retail",
    problem:
      "The old storefront had poor performance and low conversion on mobile devices.",
    solution:
      "Migrated to a headless e-commerce setup with optimised checkout and CRO experimentation.",
    process: ["Audit", "UX redesign", "Shopify integration", "A/B testing"],
    technologies: ["React", "Shopify", "GA4", "GTM"],
    results: [
      "2.1x faster page loads",
      "28% higher conversion rate",
      "19% lift in AOV",
    ],
    testimonial: "The new storefront exceeded every KPI we set.",
  },
  {
    slug: "lumen-brand-refresh",
    title: "Lumen Brand Refresh",
    category: "Branding",
    client: "Lumen Energy",
    problem:
      "Inconsistent visual identity across investor, sales, and social channels.",
    solution:
      "Built a modern brand system with logo family, tone guide, and campaign toolkit.",
    process: [
      "Brand audit",
      "Identity exploration",
      "Asset system delivery",
      "Rollout governance",
    ],
    technologies: ["Figma", "Adobe CC", "Notion"],
    results: [
      "Unified brand rollout in 6 weeks",
      "47% increase in branded engagement",
    ],
    testimonial: "Our new brand finally reflects the scale of our ambition.",
  },
  {
    slug: "optima-demand-engine",
    title: "Optima Demand Engine",
    category: "Marketing",
    client: "Optima B2B",
    problem:
      "High CAC and fragmented channel performance with unclear attribution.",
    solution:
      "Implemented a full-funnel growth system with paid search, SEO, and lifecycle nurture.",
    process: [
      "Attribution setup",
      "Campaign architecture",
      "Content engine",
      "Weekly optimisation",
    ],
    technologies: ["Google Ads", "Meta Ads", "HubSpot", "Search Console"],
    results: ["39% CAC reduction", "61% increase in SQL volume", "3.4x ROAS"],
    testimonial:
      "Their data-driven approach gave us confidence and measurable growth.",
  },
];

export const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Founder, Atlas Retail",
    quote:
      "Sterlixit combines strategic insight with execution speed. The outcomes were immediate.",
    rating: 5,
  },
  {
    name: "Riya Sharma",
    role: "CMO, Optima B2B",
    quote:
      "Our lead quality improved month-over-month while spend efficiency got better.",
    rating: 5,
  },
  {
    name: "Daniel Brooks",
    role: "Product Lead, HealthFlow",
    quote:
      "From architecture to launch, their team acted like a true extension of ours.",
    rating: 5,
  },
];

export const industries: IndustryPage[] = [
  {
    slug: "startups",
    title: "Startups",
    challenges: ["Fast validation", "Limited runway", "Need for rapid GTM"],
    howWeHelp: [
      "MVP development",
      "Lean growth playbooks",
      "Investor-ready branding",
    ],
    caseStudies: ["HealthFlow SaaS Platform", "Optima Demand Engine"],
  },
  {
    slug: "e-commerce",
    title: "E-commerce",
    challenges: [
      "Low conversion",
      "Checkout friction",
      "Scaling paid campaigns",
    ],
    howWeHelp: [
      "Conversion-focused storefronts",
      "CRO and analytics",
      "Performance marketing",
    ],
    caseStudies: ["Atlas Commerce Replatform"],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    challenges: [
      "Compliance obligations",
      "Complex user journeys",
      "Security risks",
    ],
    howWeHelp: [
      "Secure SaaS architecture",
      "Accessible UX",
      "Governance and audit trails",
    ],
    caseStudies: ["HealthFlow SaaS Platform"],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    challenges: [
      "Lead fragmentation",
      "Slow website performance",
      "Brand inconsistency",
    ],
    howWeHelp: [
      "Lead funnels",
      "High-converting landing pages",
      "Brand systems",
    ],
    caseStudies: ["Lumen Brand Refresh"],
  },
  {
    slug: "education",
    title: "Education",
    challenges: [
      "Enrollment funnel drop-offs",
      "Outdated student UX",
      "Content discoverability",
    ],
    howWeHelp: [
      "Enrollment-focused UX",
      "SEO content architecture",
      "Marketing automation",
    ],
    caseStudies: ["Optima Demand Engine"],
  },
  {
    slug: "saas-companies",
    title: "SaaS Companies",
    challenges: [
      "Activation bottlenecks",
      "Retention decline",
      "Scaling product velocity",
    ],
    howWeHelp: [
      "Product-led UX",
      "Lifecycle communication",
      "Cloud-native engineering",
    ],
    caseStudies: ["HealthFlow SaaS Platform"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-build-a-digital-growth-engine",
    title: "How to Build a Digital Growth Engine in 90 Days",
    excerpt:
      "A practical roadmap to align brand, website, and demand generation around revenue outcomes.",
    category: "Growth Strategy",
    date: "2026-02-10",
    author: "Sterlixit Team",
    content: [
      "Most teams invest in design, development, and marketing as separate initiatives. Growth happens faster when these systems work together.",
      "Start by defining customer segments, value proposition clarity, and conversion goals for each stage of the journey.",
      "Then build a measurement stack with GA4, CRM attribution, and clear experiment cycles so every sprint improves outcomes.",
    ],
    tags: ["strategy", "growth", "digital"],
  },
  {
    slug: "saas-mvp-launch-checklist",
    title: "SaaS MVP Launch Checklist for Founders",
    excerpt:
      "Ship an MVP that validates demand without compromising reliability or scalability.",
    category: "SaaS",
    date: "2026-01-26",
    author: "Sterlixit Team",
    content: [
      "Great MVPs are not minimal products; they are focused products. Prioritize the core job-to-be-done and one activation metric.",
      "Design onboarding before feature expansion. Activation and retention are usually UX problems before they are growth problems.",
      "Use release checklists that include performance budgets, monitoring, and support workflows before going live.",
    ],
    tags: ["saas", "mvp", "product"],
  },
  {
    slug: "website-speed-and-conversion",
    title: "Why Website Speed Directly Impacts Conversion",
    excerpt:
      "Performance optimisation is a revenue lever, not just a technical concern.",
    category: "Web Performance",
    date: "2025-12-14",
    author: "Sterlixit Team",
    content: [
      "Users interpret speed as trust. Slower pages increase drop-off before your value proposition is even seen.",
      "Improve Core Web Vitals by reducing JavaScript payloads, using responsive media, and deferring non-critical scripts.",
      "Pair speed improvements with structured A/B testing to quantify conversion impact across devices.",
    ],
    tags: ["performance", "cwv", "conversion"],
  },
  {
    slug: "brand-storytelling-that-converts",
    title: "Brand Storytelling Frameworks That Actually Convert",
    excerpt:
      "Turn positioning into narrative systems that improve trust, recall, and purchase intent.",
    category: "Brand Strategy",
    date: "2026-03-18",
    author: "Neha Rao",
    content: [
      "Strong brand storytelling starts with precision, not poetry. Define the tension your audience is living with before writing any messaging.",
      "Map each story arc to a decision stage: awareness, evaluation, and action. Different stages need different emotional and proof structures.",
      "When storytelling is connected to conversion architecture, brands stop sounding polished and start becoming memorable and actionable.",
    ],
    tags: ["branding", "positioning", "conversion"],
  },
  {
    slug: "crm-automation-playbook",
    title: "CRM Automation Playbook for Lean Growth Teams",
    excerpt:
      "Build lifecycle automation that improves lead quality without adding operational chaos.",
    category: "Operations",
    date: "2026-03-02",
    author: "Arjun Patel",
    content: [
      "Automation should amplify your team's judgment, not replace it. Start with repetitive handoffs where speed and consistency matter most.",
      "Use intent-driven segmentation so each workflow reflects behaviour, not static form fields. Better context produces better timing and better conversion.",
      "Every automation path needs one owner, one KPI, and one review cadence. That discipline prevents workflow sprawl as your funnel scales.",
    ],
    tags: ["crm", "automation", "ops"],
  },
  {
    slug: "saas-pricing-page-conversion",
    title: "How to Design SaaS Pricing Pages for Higher Conversion",
    excerpt:
      "A field-tested structure for pricing pages that reduce friction and improve demo requests.",
    category: "SaaS",
    date: "2026-02-24",
    author: "Maya Khanna",
    content: [
      "Most pricing pages fail because they optimise for information density, not decision clarity. Your first job is to lower cognitive load.",
      "Anchor each plan to an outcome and use comparison blocks only where they reduce uncertainty. Feature walls often create hesitation.",
      "Pair pricing changes with heatmap and event analytics. Small layout adjustments can produce large lift when tied to user behaviour.",
    ],
    tags: ["saas", "pricing", "ux"],
  },
  {
    slug: "launching-b2b-demand-engine",
    title: "Launching a B2B Demand Engine in 6 Focused Sprints",
    excerpt:
      "A sprint-based system to align content, paid media, and sales enablement for consistent pipeline.",
    category: "Demand Generation",
    date: "2026-02-02",
    author: "Sterlixit Team",
    content: [
      "Demand generation is a systems problem. Without cross-team rhythm, even good campaigns underperform.",
      "Structure six sprints around audience clarity, asset velocity, distribution discipline, and sales handoff quality.",
      "When marketing and sales share one operating dashboard, quality pipeline becomes predictable instead of sporadic.",
    ],
    tags: ["b2b", "demand-gen", "pipeline"],
  },
  {
    slug: "design-systems-scale-product-teams",
    title: "Design Systems That Help Product Teams Ship Faster",
    excerpt:
      "Practical patterns for creating UI systems that improve speed without sacrificing brand consistency.",
    category: "Product Design",
    date: "2026-01-08",
    author: "Ritika Sen",
    content: [
      "A design system should reduce decision fatigue for teams while preserving room for product differentiation.",
      "Start with typography, spacing, interaction states, and accessibility standards before expanding to complex components.",
      "Adoption improves when design and engineering co-own system governance with shared release notes and usage feedback loops.",
    ],
    tags: ["design-system", "product", "frontend"],
  },
];

export const legalPages = [
  { slug: "privacy-policy", title: "Privacy Policy" },
  { slug: "terms-and-conditions", title: "Terms & Conditions" },
  { slug: "refund-policy", title: "Refund Policy" },
  { slug: "cookie-policy", title: "Cookie Policy" },
  { slug: "disclaimer", title: "Disclaimer" },
  { slug: "nda", title: "NDA" },
];

export const footerColumns: { title: string; links: LinkItem[] }[] = [
  {
    title: "Services",
    links: coreServices.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  {
    title: "Quick Links",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/portfolio" },
      { label: "Investment", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Industries",
    links: industries.map((industry) => ({
      label: industry.title,
      href: `/industries/${industry.slug}`,
    })),
  },
  {
    title: "Resources",
    links: [
      { label: "Free Resources", href: "/resources" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/faq" },
      { label: "Partners & Technologies", href: "/partners-technologies" },
    ],
  },
];

export const socialLinks: LinkItem[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sterlixit" },
  { label: "Instagram", href: "https://www.instagram.com/sterlixit" },
  { label: "X", href: "https://x.com/sterlixit" },
  { label: "YouTube", href: "https://www.youtube.com/@sterlixit" },
  { label: "Facebook", href: "https://www.facebook.com/sterlixit" },
];
