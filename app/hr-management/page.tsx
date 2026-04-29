import type { Metadata } from "next";
import Script from "next/script";
import { HrManagementPageContent } from "@/components/ui/hr-management-page-content";

export const metadata: Metadata = {
  title: "Sterlix HR Management Software | Multi-Branch HR Platform",
  description:
    "Sterlix HR helps organisations manage branches, attendance, rotas, leave, compliance, and security from one unified HR platform.",
  alternates: { canonical: "/hr-management" },
  keywords: [
    "HR management software UK",
    "multi branch HR platform",
    "attendance and rota management",
    "leave management software",
    "HR compliance software",
    "white label HR platform",
    "Sterlix HR",
  ],
  openGraph: {
    title: "Sterlix HR Management Software | Multi-Branch HR Platform",
    description:
      "The HR ecosystem built for scale, security, and operational clarity across branches and departments.",
    url: "https://sterlixit.com/hr-management",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Sterlix HR dashboard overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sterlix HR Management Software",
    description:
      "Manage branches, attendance, leave, compliance, and workforce operations in one platform.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sterlix HR",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Enterprise HR management software for multi-branch operations, attendance, rota planning, leave workflows, compliance, and security.",
  url: "https://sterlixit.com/hr-management",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
    description: "Free trial available",
  },
  creator: {
    "@type": "Organization",
    name: "Sterlix IT",
    url: "https://sterlixit.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can we manage multiple companies and branches in one account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sterlix HR is built for multi-company and multi-branch operations under one parent structure with department-level control.",
      },
    },
    {
      "@type": "Question",
      name: "Does attendance update in real time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Live attendance uses socket-based updates so operations and managers can monitor status changes in real time.",
      },
    },
    {
      "@type": "Question",
      name: "Can employees see only their own weekly rota?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Weekly rota management supports role-based visibility so employees view their own schedule while managers control rota planning.",
      },
    },
    {
      "@type": "Question",
      name: "How does document quarantine and virus scanning work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Uploaded documents are scanned automatically. If a threat is detected, the file is quarantined and blocked from operational workflows.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support UK bank holidays and leave carry-forward rules?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sterlix HR includes UK bank holiday integration, leave entitlement controls, carry-forward settings, leave history, and reporting.",
      },
    },
    {
      "@type": "Question",
      name: "Is the mobile app available now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not yet. The mobile companion app is currently in development and will be released in a later phase.",
      },
    },
  ],
};

export default function HrManagementPage() {
  return (
    <>
      <Script id="hr-software-schema" type="application/ld+json">
        {JSON.stringify(softwareSchema)}
      </Script>
      <Script id="hr-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <HrManagementPageContent />
    </>
  );
}
