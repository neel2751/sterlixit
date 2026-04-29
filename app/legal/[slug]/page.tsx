import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ExitIntentDialog,
  LiveChatButton,
  SiteContainer,
  SiteFooter,
  SiteHeader,
} from "@/components/site-shell";
import {
  SimpleCardsSection,
  StandardPageLayout,
} from "@/components/page-primitives";
import { legalPages } from "@/lib/site-data";

const policySections = [
  {
    title: "Information We Collect",
    points: [
      "Identity and contact details such as your name, company, email address, and phone number when you submit a form or book a consultation.",
      "Project, campaign, and service information you provide during enquiries, strategy calls, and service delivery.",
      "Technical usage data such as browser type, device information, and interaction signals through analytics or cookie tools.",
    ],
  },
  {
    title: "How We Use Your Information",
    points: [
      "To respond to enquiries, scope project requirements, and deliver agreed services.",
      "To improve platform performance, user experience, and conversion workflows across our digital properties.",
      "To send service updates, legal notices, or relevant marketing communication where permitted.",
    ],
  },
  {
    title: "CRM, Vendors, and Data Sharing",
    points: [
      "Form submissions may be processed through approved CRM and marketing systems used to manage service operations.",
      "We share data only with vendors and partners required to deliver contracted services, infrastructure, or support workflows.",
      "We do not sell personal information. Third-party processing is governed by contractual and security obligations.",
    ],
  },
  {
    title: "Retention and Security",
    points: [
      "We retain personal information only for as long as required for service delivery, compliance, and legitimate business purposes.",
      "Appropriate technical and organizational safeguards are used to reduce unauthorized access, disclosure, or misuse risks.",
      "No internet transmission is fully risk-free, but we continuously review controls to protect data integrity and confidentiality.",
    ],
  },
  {
    title: "Your Rights",
    points: [
      "You may request access, correction, or deletion of personal information we hold, subject to legal and contractual obligations.",
      "You can opt out of non-essential marketing communication at any time via unsubscribe options or direct request.",
      "To exercise privacy rights, contact us at hello@sterlixit.com and include sufficient detail to verify your request.",
    ],
  },
];

const termsSections = [
  {
    title: "Acceptance of Terms",
    points: [
      "By accessing Sterlixit websites, platforms, or services, you agree to these Terms & Conditions.",
      "If you do not agree with any part of these terms, you should discontinue use of our services and website.",
      "Additional service-specific agreements, statements of work, or proposals may supplement these terms.",
    ],
  },
  {
    title: "Service Scope and Delivery",
    points: [
      "Service scope, milestones, and deliverables are defined in writing through signed proposals, contracts, or statements of work.",
      "Project timelines may vary based on approvals, content dependencies, third-party access, and revision rounds.",
      "Sterlixit may use trusted tools, hosting providers, and delivery partners to execute agreed services.",
    ],
  },
  {
    title: "Fees, Payment, and Renewals",
    points: [
      "Fees, payment schedules, and billing currency are set in your signed agreement or invoice terms.",
      "Delayed payments may pause active delivery, support, maintenance, or campaign operations.",
      "Recurring services continue per agreed billing cycle unless cancelled in accordance with contract notice periods.",
    ],
  },
  {
    title: "Intellectual Property",
    points: [
      "Pre-existing intellectual property, frameworks, and internal tooling remain the property of Sterlixit unless explicitly transferred.",
      "Client-owned assets, trademarks, and supplied content remain client property.",
      "Final deliverables transfer as defined in the governing agreement after full payment and fulfillment of contractual terms.",
    ],
  },
  {
    title: "Liability and Warranties",
    points: [
      "Services are provided on a commercially reasonable basis and subject to technical, platform, and third-party limitations.",
      "Sterlixit is not liable for indirect, incidental, or consequential losses, including loss of revenue, traffic, or opportunity.",
      "Maximum liability is limited to the fees paid for the specific service period, except where prohibited by law.",
    ],
  },
  {
    title: "Termination and Governing Law",
    points: [
      "Either party may terminate according to notice and termination clauses in the active service agreement.",
      "Upon termination, completed work and payable dues are settled per contract terms.",
      "These terms are governed by applicable laws in the governing jurisdiction stated in the service agreement.",
    ],
  },
];

const refundSections = [
  {
    title: "General Refund Position",
    points: [
      "Refund eligibility depends on service type, project stage, and signed agreement terms.",
      "Where work has already been planned, allocated, or delivered, charges for completed portions are generally non-refundable.",
      "Any approved refund is processed only through the original payment channel unless otherwise agreed in writing.",
    ],
  },
  {
    title: "Discovery, Strategy, and Consulting",
    points: [
      "Discovery sessions, advisory calls, strategic planning, and consulting deliverables are non-refundable once delivered.",
      "If a session is rescheduled with sufficient notice, credits may be applied toward a future booking based on availability.",
      "No-show or late cancellation outcomes follow the booking terms communicated at the time of scheduling.",
    ],
  },
  {
    title: "Design and Development Engagements",
    points: [
      "Milestone payments cover time, specialist allocation, and output delivered up to that stage.",
      "If a project is terminated early, outstanding fees for completed work remain payable and future work is paused.",
      "Partial refunds, where applicable, are assessed against undelivered scope only and must be approved in writing.",
    ],
  },
  {
    title: "Marketing and Ongoing Services",
    points: [
      "Monthly retainers, campaign management, support, and maintenance subscriptions are billed per agreed cycle.",
      "Cancellation requests apply from the next billing period unless your agreement states a different notice window.",
      "Media spend, third-party software fees, and platform costs are non-refundable once committed or consumed.",
    ],
  },
  {
    title: "How to Request a Review",
    points: [
      "Send refund requests to hello@sterlixit.com with project name, invoice reference, and reason for the request.",
      "Our operations team reviews requests against contract scope, delivered milestones, and payment records.",
      "Decisions and any approved refund timelines are communicated in writing after internal review.",
    ],
  },
];

const cookieSections = [
  {
    title: "What Cookies We Use",
    points: [
      "Essential cookies required for core site operation, security, and session continuity.",
      "Performance and analytics cookies used to understand traffic behaviour and improve experience quality.",
      "Functional cookies that retain selected preferences to personalize your interaction across visits.",
    ],
  },
  {
    title: "How Cookies Are Used",
    points: [
      "To measure page performance, identify user-flow friction, and improve site speed and navigation.",
      "To understand campaign attribution and optimise digital marketing effectiveness.",
      "To support feature reliability across forms, service pages, and conversion pathways.",
    ],
  },
  {
    title: "Third-Party Cookies",
    points: [
      "Some cookies may be set by integrated platforms such as analytics, CRM, advertising, and embedded service tools.",
      "Third-party cookie behaviour is governed by the respective provider privacy and cookie notices.",
      "Sterlixit selects tools based on business need, security review, and service delivery impact.",
    ],
  },
  {
    title: "Managing Cookie Preferences",
    points: [
      "You can control or delete cookies through browser settings at any time.",
      "Blocking some cookies may impact functionality, personalization, or service performance.",
      "Where required, consent options are presented and can be updated in line with applicable regulations.",
    ],
  },
];

const disclaimerSections = [
  {
    title: "General Information",
    points: [
      "Information on Sterlixit websites and materials is provided for general business and educational purposes.",
      "We aim for accuracy, but do not guarantee that all information is always complete, current, or error-free.",
      "Content should not be treated as legal, tax, financial, or regulatory advice.",
    ],
  },
  {
    title: "No Guaranteed Outcomes",
    points: [
      "Case studies, performance metrics, and campaign illustrations are examples and not promises of identical outcomes.",
      "Actual results depend on market conditions, implementation quality, client readiness, and platform changes.",
      "Commercial outcomes may vary by industry, budget, internal operations, and third-party dependencies.",
    ],
  },
  {
    title: "External Links and Tools",
    points: [
      "Our website may reference or link to external platforms, vendors, and resources for convenience.",
      "Sterlixit is not responsible for the content, policies, or availability of third-party websites.",
      "Use of third-party systems is at your discretion and subject to their own terms.",
    ],
  },
  {
    title: "Liability Limitation",
    points: [
      "To the extent permitted by law, Sterlixit disclaims liability for indirect or consequential losses from website use.",
      "No implied warranties are created by informational content, downloadable assets, or public communications.",
      "Formal obligations are defined exclusively in executed contracts and statements of work.",
    ],
  },
];

const ndaSections = [
  {
    title: "Confidential Information",
    points: [
      "Confidential information includes business plans, product details, technical documentation, pricing, client data, and non-public materials shared during engagement.",
      "Information disclosed verbally, digitally, or in writing may be treated as confidential where context reasonably indicates sensitivity.",
      "Publicly available information or data independently developed without use of confidential material is excluded.",
    ],
  },
  {
    title: "Obligations of Receiving Party",
    points: [
      "The receiving party must protect confidential information with reasonable safeguards and restrict access to authorized personnel only.",
      "Confidential information may be used solely for evaluating or delivering the intended business engagement.",
      "Disclosure to subcontractors or advisors is allowed only where they are bound by equivalent confidentiality obligations.",
    ],
  },
  {
    title: "Non-Disclosure and Exceptions",
    points: [
      "The receiving party must not disclose confidential information without prior written consent of the disclosing party.",
      "Disclosure required by law, court order, or regulator is permitted where legally necessary and appropriately limited.",
      "Where permitted, the disclosing party should be notified in advance to seek protective action.",
    ],
  },
  {
    title: "Duration and Return of Information",
    points: [
      "Confidentiality obligations continue for the period specified in the signed agreement, or for a commercially reasonable period where not specified.",
      "On request or contract conclusion, confidential materials should be returned, deleted, or securely archived as legally required.",
      "Surviving confidentiality obligations remain enforceable beyond project completion where applicable.",
    ],
  },
];

export function generateStaticParams() {
  return legalPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const legal = legalPages.find((item) => item.slug === slug);
  const isPrivacyPolicy = slug === "privacy-policy";
  const isTerms = slug === "terms-and-conditions";
  const isRefundPolicy = slug === "refund-policy";
  const isCookiePolicy = slug === "cookie-policy";
  const isDisclaimer = slug === "disclaimer";
  const isNda = slug === "nda";

  return {
    title: legal?.title ?? "Legal",
    description: isPrivacyPolicy
      ? "Privacy Policy for Sterlixit website, services, and client engagement workflows."
      : isTerms
        ? "Terms & Conditions for Sterlixit services, project delivery, payments, and platform usage."
        : isRefundPolicy
          ? "Refund Policy for Sterlixit services, milestone work, retainers, and subscription-based delivery engagements."
          : isCookiePolicy
            ? "Cookie Policy explaining how Sterlixit uses essential, analytics, and functional cookies across site experiences."
            : isDisclaimer
              ? "Disclaimer for Sterlixit website content, outcomes, external links, and liability limitations."
              : isNda
                ? "NDA terms describing confidentiality obligations for business, product, and technical information shared with Sterlixit."
                : `${legal?.title ?? "Legal information"} for Sterlixit services and platform usage.`,
    alternates: { canonical: `/legal/${slug}` },
    robots: { index: false, follow: false },
    openGraph: {
      title: legal ? `${legal.title} | Sterlixit` : "Legal | Sterlixit",
      description: isPrivacyPolicy
        ? "Privacy Policy for Sterlixit website, services, and client engagement workflows."
        : isTerms
          ? "Terms & Conditions for Sterlixit services, project delivery, payments, and platform usage."
          : isRefundPolicy
            ? "Refund Policy for Sterlixit services, milestone work, retainers, and subscription-based delivery engagements."
            : isCookiePolicy
              ? "Cookie Policy explaining how Sterlixit uses essential, analytics, and functional cookies across site experiences."
              : isDisclaimer
                ? "Disclaimer for Sterlixit website content, outcomes, external links, and liability limitations."
                : isNda
                  ? "NDA terms describing confidentiality obligations for business, product, and technical information shared with Sterlixit."
                  : `${legal?.title ?? "Legal information"} for Sterlixit services and platform usage.`,
      url: `https://sterlixit.com/legal/${slug}`,
    },
  };
}

function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/70 py-16 md:py-22">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_0%,rgba(79,70,229,0.12),transparent_45%),radial-gradient(circle_at_95%_15%,rgba(99,102,241,0.08),transparent_38%)]" />
        <SiteContainer>
          <div className="relative mx-auto max-w-4xl space-y-5 text-center">
            <p className="inline-flex items-center rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Legal & Compliance
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              This policy explains how Sterlixit collects, uses, stores, and
              protects information when you use our website, engage our team, or
              submit details through our service forms.
            </p>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Effective date: 6 April 2026
            </p>
          </div>
        </SiteContainer>
      </section>

      <section className="py-12 md:py-16">
        <SiteContainer>
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="h-fit border-border/60 bg-background/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">Policy Snapshot</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  We use personal and business information to deliver strategy,
                  design, engineering, and growth services.
                </p>
                <p>
                  We do not sell personal information and only share data with
                  trusted processors needed for service operations.
                </p>
                <p>
                  You can request access or deletion by contacting our team.
                </p>
                <div className="pt-2">
                  <Button asChild size="sm" className="w-full sm:w-auto">
                    <Link href="/contact">Request Data Support</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {policySections.map((section) => (
                <Card
                  key={section.title}
                  className="border-border/60 bg-background/85 backdrop-blur"
                >
                  <CardHeader>
                    <CardTitle className="text-xl tracking-tight">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                      {section.points.map((point) => (
                        <li key={point} className="flex gap-2.5">
                          <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="border-t border-border/70 py-10">
        <SiteContainer>
          <div className="mx-auto max-w-4xl rounded-2xl border border-border/60 bg-secondary/35 p-6 text-center md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Privacy Questions?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              If you need clarification on data handling, retention, or lawful
              processing basis, contact our team and reference your request in
              detail for faster verification.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link href="/contact">Contact Privacy Team</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="mailto:hello@sterlixit.com">
                  hello@sterlixit.com
                </Link>
              </Button>
            </div>
          </div>
        </SiteContainer>
      </section>

      <SiteFooter />
      <ExitIntentDialog />
      <LiveChatButton />
    </main>
  );
}

function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/70 py-16 md:py-22">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(79,70,229,0.12),transparent_46%),radial-gradient(circle_at_95%_22%,rgba(99,102,241,0.09),transparent_40%)]" />
        <SiteContainer>
          <div className="relative mx-auto max-w-4xl space-y-5 text-center">
            <p className="inline-flex items-center rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Legal Framework
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Terms & Conditions
            </h1>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              These terms govern how Sterlixit services are scoped, delivered,
              billed, and supported across digital strategy, design,
              development, and growth engagements.
            </p>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Effective date: 6 April 2026
            </p>
          </div>
        </SiteContainer>
      </section>

      <section className="py-12 md:py-16">
        <SiteContainer>
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="h-fit border-border/60 bg-background/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">Terms Snapshot</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Scope, timeline, and payment obligations are defined by your
                  executed proposal or contract.
                </p>
                <p>
                  Intellectual property transfer, usage rights, and support
                  commitments follow signed agreement terms.
                </p>
                <p>
                  Service delivery may rely on platform providers and approved
                  third-party systems.
                </p>
                <div className="pt-2">
                  <Button asChild size="sm" className="w-full sm:w-auto">
                    <Link href="/request-proposal">
                      Request Contract Review
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {termsSections.map((section) => (
                <Card
                  key={section.title}
                  className="border-border/60 bg-background/85 backdrop-blur"
                >
                  <CardHeader>
                    <CardTitle className="text-xl tracking-tight">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                      {section.points.map((point) => (
                        <li key={point} className="flex gap-2.5">
                          <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="border-t border-border/70 py-10">
        <SiteContainer>
          <div className="mx-auto max-w-4xl rounded-2xl border border-border/60 bg-secondary/35 p-6 text-center md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Need Contract Clarification?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              For master service agreement queries, procurement requirements, or
              legal clarification before onboarding, contact our operations
              team.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link href="/contact">Contact Legal Operations</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="mailto:hello@sterlixit.com">
                  hello@sterlixit.com
                </Link>
              </Button>
            </div>
          </div>
        </SiteContainer>
      </section>

      <SiteFooter />
      <ExitIntentDialog />
      <LiveChatButton />
    </main>
  );
}

function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/70 py-16 md:py-22">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_0%,rgba(79,70,229,0.12),transparent_45%),radial-gradient(circle_at_92%_20%,rgba(99,102,241,0.09),transparent_40%)]" />
        <SiteContainer>
          <div className="relative mx-auto max-w-4xl space-y-5 text-center">
            <p className="inline-flex items-center rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Billing & Commercial Terms
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Refund Policy
            </h1>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              This policy explains how refund requests are assessed across
              strategy, design, development, marketing retainers, and ongoing
              service subscriptions.
            </p>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Effective date: 6 April 2026
            </p>
          </div>
        </SiteContainer>
      </section>

      <section className="py-12 md:py-16">
        <SiteContainer>
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="h-fit border-border/60 bg-background/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">Refund Snapshot</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Completed milestones and delivered advisory work are usually
                  non-refundable.
                </p>
                <p>
                  Any partial refund assessment applies to undelivered scope and
                  must align with your signed contract terms.
                </p>
                <p>
                  Third-party and platform costs are non-refundable once
                  committed.
                </p>
                <div className="pt-2">
                  <Button asChild size="sm" className="w-full sm:w-auto">
                    <Link href="/contact">Request Billing Review</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {refundSections.map((section) => (
                <Card
                  key={section.title}
                  className="border-border/60 bg-background/85 backdrop-blur"
                >
                  <CardHeader>
                    <CardTitle className="text-xl tracking-tight">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                      {section.points.map((point) => (
                        <li key={point} className="flex gap-2.5">
                          <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="border-t border-border/70 py-10">
        <SiteContainer>
          <div className="mx-auto max-w-4xl rounded-2xl border border-border/60 bg-secondary/35 p-6 text-center md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Need a Refund Decision Review?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your invoice reference and engagement details, and our
              operations team will review your request against the agreed
              service scope and billing terms.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link href="/contact">Contact Billing Team</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="mailto:hello@sterlixit.com">
                  hello@sterlixit.com
                </Link>
              </Button>
            </div>
          </div>
        </SiteContainer>
      </section>

      <SiteFooter />
      <ExitIntentDialog />
      <LiveChatButton />
    </main>
  );
}

function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-border/70 py-16 md:py-22">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(79,70,229,0.12),transparent_46%),radial-gradient(circle_at_92%_20%,rgba(99,102,241,0.09),transparent_40%)]" />
        <SiteContainer>
          <div className="relative mx-auto max-w-4xl space-y-5 text-center">
            <p className="inline-flex items-center rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Data Controls
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Cookie Policy
            </h1>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              This policy explains how cookies and related technologies are used
              across Sterlixit websites and digital service experiences.
            </p>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Effective date: 6 April 2026
            </p>
          </div>
        </SiteContainer>
      </section>
      <section className="py-12 md:py-16">
        <SiteContainer>
          <div className="mx-auto max-w-4xl space-y-4">
            {cookieSections.map((section) => (
              <Card
                key={section.title}
                className="border-border/60 bg-background/85"
              >
                <CardHeader>
                  <CardTitle className="text-xl tracking-tight">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </SiteContainer>
      </section>
      <SiteFooter />
      <ExitIntentDialog />
      <LiveChatButton />
    </main>
  );
}

function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-border/70 py-16 md:py-22">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_0%,rgba(79,70,229,0.12),transparent_45%),radial-gradient(circle_at_94%_20%,rgba(99,102,241,0.09),transparent_40%)]" />
        <SiteContainer>
          <div className="relative mx-auto max-w-4xl space-y-5 text-center">
            <p className="inline-flex items-center rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Legal Notice
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Disclaimer
            </h1>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              This disclaimer outlines the limits of informational content,
              external references, and performance statements published by
              Sterlixit.
            </p>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Effective date: 6 April 2026
            </p>
          </div>
        </SiteContainer>
      </section>
      <section className="py-12 md:py-16">
        <SiteContainer>
          <div className="mx-auto max-w-4xl space-y-4">
            {disclaimerSections.map((section) => (
              <Card
                key={section.title}
                className="border-border/60 bg-background/85"
              >
                <CardHeader>
                  <CardTitle className="text-xl tracking-tight">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </SiteContainer>
      </section>
      <SiteFooter />
      <ExitIntentDialog />
      <LiveChatButton />
    </main>
  );
}

function NdaPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-border/70 py-16 md:py-22">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(79,70,229,0.12),transparent_46%),radial-gradient(circle_at_92%_20%,rgba(99,102,241,0.09),transparent_40%)]" />
        <SiteContainer>
          <div className="relative mx-auto max-w-4xl space-y-5 text-center">
            <p className="inline-flex items-center rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Confidentiality
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              NDA
            </h1>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              This page summarizes confidentiality expectations for business,
              technical, and strategic information shared during discovery and
              delivery engagements.
            </p>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Effective date: 6 April 2026
            </p>
          </div>
        </SiteContainer>
      </section>
      <section className="py-12 md:py-16">
        <SiteContainer>
          <div className="mx-auto max-w-4xl space-y-4">
            {ndaSections.map((section) => (
              <Card
                key={section.title}
                className="border-border/60 bg-background/85"
              >
                <CardHeader>
                  <CardTitle className="text-xl tracking-tight">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </SiteContainer>
      </section>
      <SiteFooter />
      <ExitIntentDialog />
      <LiveChatButton />
    </main>
  );
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const legal = legalPages.find((item) => item.slug === slug);
  if (!legal) notFound();

  if (slug === "privacy-policy") {
    return <PrivacyPolicyPage />;
  }

  if (slug === "terms-and-conditions") {
    return <TermsAndConditionsPage />;
  }

  if (slug === "refund-policy") {
    return <RefundPolicyPage />;
  }

  if (slug === "cookie-policy") {
    return <CookiePolicyPage />;
  }

  if (slug === "disclaimer") {
    return <DisclaimerPage />;
  }

  if (slug === "nda") {
    return <NdaPage />;
  }

  return (
    <StandardPageLayout
      title={legal.title}
      subtitle="Legal and policy information for Sterlixit services and platform usage."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Legal", href: "/legal" },
        { name: legal.title, href: `/legal/${slug}` },
      ]}
    >
      <SimpleCardsSection
        title={legal.title}
        items={[
          "This is a template legal page. Replace with finalized legal text before production.",
          "Scope, obligations, and policy specifics should be reviewed by legal counsel.",
        ]}
      />
    </StandardPageLayout>
  );
}
