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

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sterlixit",
  url: SITE_URL,
  logo: `${SITE_URL}/sterlixit.svg`,
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
  name: "Sterlixit",
  url: SITE_URL,
  inLanguage: "en-GB",
  description: SITE_DESCRIPTION,
  publisher: {
    "@type": "Organization",
    name: "Sterlixit",
    url: SITE_URL,
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sterlixit",
  image: `${SITE_URL}/sterlixit.svg`,
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
