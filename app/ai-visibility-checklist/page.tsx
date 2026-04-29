import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Globe,
  Bot,
  Search,
  FileText,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Visibility Checklist",
  description:
    "A practical weekly checklist to improve discoverability and citation rates across ChatGPT, Perplexity, Claude, Gemini, and other AI assistants.",
  alternates: { canonical: "/ai-visibility-checklist" },
  openGraph: {
    title: "AI Visibility Checklist | Sterlixit",
    description:
      "A practical weekly checklist to improve discoverability and citation rates across major AI assistants.",
    url: "https://sterlixit.com/ai-visibility-checklist",
  },
};

const checklistSections = [
  {
    title: "Crawlability",
    icon: Globe,
    items: [
      "robots.txt is publicly accessible and allows important pages.",
      "sitemap.xml is up to date and submitted to Google Search Console and Bing Webmaster Tools.",
      "llms.txt is live at /llms.txt and references canonical sources.",
      "Critical money pages return 200 and are not blocked by noindex.",
    ],
  },
  {
    title: "AI Bot Access",
    icon: Bot,
    items: [
      "GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended, and Bingbot are allowed.",
      "Low-value paths (API, internal demos) remain disallowed.",
      "No accidental WAF/rate-limit blocks for legitimate crawl traffic.",
      "Server logs are reviewed for bot crawl errors at least weekly.",
    ],
  },
  {
    title: "Content Quality",
    icon: FileText,
    items: [
      "Top service pages include clear claims, proof, and updated dates.",
      "Case studies include measurable outcomes with context.",
      "Contact details are consistent across footer, contact page, and schema.",
      "Legal and policy pages are present and linked in the footer.",
    ],
  },
  {
    title: "Entity Signals",
    icon: Search,
    items: [
      "Organisation and Website schema are valid.",
      "Brand name, address, phone, and primary domain are consistent everywhere.",
      "Authoritative third-party mentions/backlinks are growing month over month.",
      "Social profiles and company listings point to the canonical domain.",
    ],
  },
  {
    title: "Measurement",
    icon: BarChart3,
    items: [
      "Track branded query impressions and clicks in search consoles.",
      "Track referral traffic from AI platforms where available.",
      "Log pages cited by AI answers and improve weak pages.",
      "Run a monthly AI citation audit for top commercial keywords.",
    ],
  },
];

export default function AiVisibilityChecklistPage() {
  return (
    <main className="bg-background py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            GEO + AEO Playbook
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            AI Visibility Checklist
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Use this checklist weekly to improve discoverability and citation
            quality across ChatGPT and other major AI assistants.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/llms.txt"
              className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-accent"
            >
              View llms.txt
            </Link>
            <Link
              href="/sitemap.xml"
              className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-accent"
            >
              View sitemap.xml
            </Link>
            <Link
              href="/robots.txt"
              className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-accent"
            >
              View robots.txt
            </Link>
          </div>
        </div>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          {checklistSections.map((section) => {
            const Icon = section.icon;

            return (
              <article
                key={section.title}
                className="rounded-2xl border border-border/70 bg-card p-6"
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="inline-flex size-8 items-center justify-center rounded-full border border-border/70 bg-background">
                    <Icon className="size-4 text-primary" />
                  </span>
                  <h2 className="text-lg font-semibold text-foreground">
                    {section.title}
                  </h2>
                </div>

                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-6 text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
