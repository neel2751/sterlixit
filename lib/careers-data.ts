export type CareerRole = {
  slug: string;
  title: string;
  mode: string;
  type: string;
  team: string;
  location: string;
  summary: string;
  intro: string;
  impact: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  stack: string[];
};

export const careerRoles: CareerRole[] = [
  {
    slug: "product-designer",
    title: "Product Designer",
    mode: "Remote",
    type: "Full-time",
    team: "Product & Experience",
    location: "India / APAC friendly",
    summary:
      "Design high-conversion web journeys, SaaS interfaces, and scalable design systems with strong UX discipline.",
    intro:
      "You will shape the product and website experience layer across client and internal initiatives, balancing brand craft with measurable conversion outcomes.",
    impact: [
      "Define end-to-end UX flows for conversion-critical pages and product workflows.",
      "Raise design quality across visual language, hierarchy, motion, and interaction clarity.",
      "Translate strategy and research into interfaces that ship quickly and perform consistently.",
    ],
    responsibilities: [
      "Lead wireframing, journey mapping, and high-fidelity UI design for web and SaaS products.",
      "Build and maintain reusable design systems in partnership with engineering.",
      "Collaborate with growth and strategy teams on experimentation and funnel optimisation.",
      "Present design rationale clearly to stakeholders and iterate from feedback.",
    ],
    requirements: [
      "3+ years in product or digital experience design with a strong shipped portfolio.",
      "Advanced Figma proficiency and strong design system fundamentals.",
      "Solid understanding of responsive design, accessibility, and conversion principles.",
      "Ability to work independently in async, remote collaboration setups.",
    ],
    niceToHave: [
      "Experience with SaaS onboarding and dashboard UX patterns.",
      "Motion design basics for interface storytelling.",
      "Exposure to CRO or growth experimentation workflows.",
    ],
    stack: ["Figma", "Notion", "Framer", "Hotjar", "GA4"],
  },
  {
    slug: "full-stack-developer",
    title: "Full-stack Developer",
    mode: "Remote",
    type: "Full-time",
    team: "Engineering",
    location: "India / APAC friendly",
    summary:
      "Build modern web platforms with Next.js, integrate APIs, and ship reliable, performance-first experiences.",
    intro:
      "You will own implementation quality from frontend polish to backend integrations, building systems that are scalable, maintainable, and measurable.",
    impact: [
      "Ship production-ready features with strong performance and clean architecture.",
      "Improve developer velocity through reusable components and robust patterns.",
      "Ensure reliability across deployment, integration, and data workflows.",
    ],
    responsibilities: [
      "Develop and maintain Next.js applications with TypeScript and modern UI architecture.",
      "Integrate third-party APIs, CRMs, analytics, and automation workflows.",
      "Implement secure backend routes, validation, and resilient error handling.",
      "Collaborate with design and growth teams to ship fast without compromising quality.",
    ],
    requirements: [
      "3+ years of full-stack web development experience.",
      "Strong TypeScript, React, and Next.js fundamentals.",
      "Hands-on API integration and backend route implementation experience.",
      "Working knowledge of performance optimisation and production debugging.",
    ],
    niceToHave: [
      "Experience with headless CMS and e-commerce ecosystems.",
      "Familiarity with CI/CD pipelines and cloud deployment workflows.",
      "Exposure to analytics instrumentation and attribution tracking.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Vercel"],
  },
  {
    slug: "growth-strategist",
    title: "Growth Strategist",
    mode: "Remote",
    type: "Full-time",
    team: "Growth",
    location: "India / APAC friendly",
    summary:
      "Own acquisition and funnel strategy across SEO, paid media, conversion optimisation, and lifecycle channels.",
    intro:
      "You will connect traffic, content, conversion, and retention into a coherent growth engine aligned to pipeline and revenue goals.",
    impact: [
      "Turn fragmented marketing activity into a cohesive demand system.",
      "Increase qualified lead flow through channel strategy and funnel experiments.",
      "Strengthen reporting clarity with actionable weekly performance narratives.",
    ],
    responsibilities: [
      "Design and manage multi-channel growth plans across SEO, paid media, and lifecycle programs.",
      "Own experimentation roadmap for landing pages, offers, and messaging.",
      "Build measurement frameworks and communicate outcomes to stakeholders.",
      "Collaborate with design and engineering to execute conversion improvements.",
    ],
    requirements: [
      "3+ years in performance or growth strategy roles with measurable outcomes.",
      "Strong understanding of funnel analytics, attribution, and experimentation.",
      "Hands-on experience with ad platforms, analytics tooling, and reporting cadence.",
      "Excellent strategic communication and stakeholder management.",
    ],
    niceToHave: [
      "Experience with B2B demand generation and SaaS GTM motion.",
      "SEO content strategy and technical SEO familiarity.",
      "Lifecycle automation and CRM journey design exposure.",
    ],
    stack: ["GA4", "Search Console", "Meta Ads", "Google Ads", "HubSpot"],
  },
];

export function getCareerRoleBySlug(slug: string) {
  return careerRoles.find((role) => role.slug === slug);
}
