import { publicIntegrationConfig } from "@/lib/integrations";

// Canonical domain — matches the root layout `metadataBase` and the rendered
// canonical/OG URLs (www), so structured-data entity URLs don't fork the brand
// across www / non-www.
export const SITE_URL = "https://www.sterlixit.co.uk";

const SITE_DESCRIPTION =
  "Sterlixit helps brands scale with strategy-first branding, web development, SaaS product engineering, and conversion-focused digital marketing.";

// E.164 form of publicIntegrationConfig.contactPagePhone ("+44 20 8004 3327").
const TELEPHONE = "+442080043327";
const EMAIL = publicIntegrationConfig.contactPageEmail;

const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "595a Cranbrook Road, Gants Hill",
  addressLocality: "London",
  postalCode: "IG2 6JZ",
  addressCountry: "GB",
} as const;

const SAME_AS = [
  "https://www.linkedin.com/company/sterlixit",
  "https://www.instagram.com/sterlixit",
  "https://x.com/sterlixit",
  "https://www.youtube.com/@sterlixit",
  "https://www.facebook.com/sterlixit",
];

// Stable node anchors so other schema graphs can reference these entities by
// @id (e.g. WebSite.publisher) instead of duplicating inline nodes.
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Sterlixit",
  url: SITE_URL,
  logo: `${SITE_URL}/sterlixit.svg`,
  image: `${SITE_URL}/opengraph-image.jpg`,
  email: EMAIL,
  telephone: TELEPHONE,
  address: POSTAL_ADDRESS,
  sameAs: SAME_AS,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: EMAIL,
    telephone: TELEPHONE,
    availableLanguage: ["en"],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Sterlixit",
  url: SITE_URL,
  inLanguage: "en-GB",
  description: SITE_DESCRIPTION,
  publisher: { "@id": ORGANIZATION_ID },
};

export const LOCALBUSINESS_ID = `${SITE_URL}/#localbusiness`;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": LOCALBUSINESS_ID,
  name: "Sterlixit",
  image: `${SITE_URL}/opengraph-image.jpg`,
  url: SITE_URL,
  email: EMAIL,
  telephone: TELEPHONE,
  priceRange: "££",
  address: POSTAL_ADDRESS,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "17:00",
    },
  ],
};

/** FAQPage schema — pass the same Q/A items rendered in the visible HTML (D-02). */
export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/** BreadcrumbList schema for nested pages. `href` of "/" resolves to the root. */
export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href === "/" ? SITE_URL : `${SITE_URL}${item.href}`,
    })),
  };
}

/**
 * ContactPage schema for /contact. `about` references the LocalBusiness node by
 * @id — that node is rendered on the same page via `localBusinessSchema`, so the
 * graph links the two instead of duplicating the business details (D-12).
 */
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  about: { "@id": LOCALBUSINESS_ID },
};

/**
 * Service schema for a single /services/[slug] page. `provider` links to the
 * sitewide Organization node by @id. Values come from the same data that renders
 * the page's title/summary, so schema mirrors the visible content (D-02).
 */
export function serviceSchema(service: {
  slug: string;
  title: string;
  summary: string;
  seoDescription?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    url: `${SITE_URL}/services/${service.slug}`,
    description: service.seoDescription ?? service.summary,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "GB",
    serviceType: service.title,
  };
}

/**
 * CreativeWork schema for a single /portfolio/[slug] case study. `creator` links
 * to the sitewide Organization node by @id.
 */
export function creativeWorkSchema(item: {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: item.title,
    url: `${SITE_URL}/portfolio/${item.slug}`,
    about: item.description,
    creator: { "@id": ORGANIZATION_ID },
    keywords: item.technologies.join(", "),
  };
}

/**
 * BlogPosting schema for a single /blog/[slug] post. Built from the byline that's
 * visible on the page (category · date · author). Named human authors map to
 * Person; the in-house "Sterlixit Team" byline maps to Organization. `publisher`
 * links to the sitewide Organization node by @id.
 */
export function blogPostingSchema(post: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
}) {
  const isTeam = post.author.toLowerCase().includes("team");
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    // Strip the brand suffix some titles carry so the headline stays clean.
    headline: post.title.replace(/\s*\|\s*Sterlixit\s*$/i, ""),
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": isTeam ? "Organization" : "Person",
      name: post.author,
    },
    publisher: { "@id": ORGANIZATION_ID },
    description: post.excerpt,
    articleSection: post.category,
    image: `${SITE_URL}/opengraph-image.jpg`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}

/**
 * Organization + AggregateRating + Review schema for /testimonials. Built from
 * the same review items rendered on the page (D-02). Emitted as a standalone
 * Organization node (no @id) so the review data stays scoped to this page and
 * doesn't merge into the sitewide Organization entity.
 *
 * Note: Google restricted self-serving Organization review stars in 2019, so
 * this powers AI/LLM answer engines and Knowledge Graph context rather than SERP
 * star snippets — genuine third-party platforms (Google Business Profile,
 * Trustpilot, Clutch) are what earn those.
 */
export function organizationReviewsSchema(
  reviews: { name: string; quote: string; rating: number }[],
) {
  const average =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sterlixit",
    url: SITE_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: average.toFixed(1),
      reviewCount: String(reviews.length),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      reviewBody: review.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(review.rating),
        bestRating: "5",
        worstRating: "1",
      },
    })),
  };
}

/**
 * FAQPage schema built from a {question, answer} shape (homepage FAQ uses this
 * key naming; see `faqPageSchema` for the {q, a} variant).
 */
export function faqPageSchemaFromQuestions(
  faqs: { question: string; answer: string }[],
) {
  return faqPageSchema(faqs.map((faq) => ({ q: faq.question, a: faq.answer })));
}
