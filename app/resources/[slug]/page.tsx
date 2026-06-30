import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { ResourceLeadForm } from "@/components/ui/resource-lead-form";
import {
  BLOG_RESOURCE_SLUG,
  getLandingResources,
  getResourceBySlug,
} from "@/lib/resources";

export function generateStaticParams() {
  return getLandingResources().map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource || resource.slug === BLOG_RESOURCE_SLUG) {
    return { title: "Resource Not Found" };
  }
  return {
    title: `${resource.title} — Free ${resource.format}`,
    description: resource.description,
    alternates: { canonical: `/resources/${resource.slug}` },
    openGraph: {
      title: `${resource.title} | Sterlixit`,
      description: resource.description,
      url: `https://www.sterlixit.co.uk/resources/${resource.slug}`,
      images: [{ url: resource.imageSrc }],
    },
  };
}

export default async function ResourceLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource || resource.slug === BLOG_RESOURCE_SLUG) notFound();

  const Icon = resource.icon;

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.12)_0%,transparent_66%)]" />
        <div className="relative mx-auto w-full max-w-305 px-6 md:px-10">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            All resources
          </Link>

          <div className="mt-8 grid gap-10 md:grid-cols-[1fr_420px] md:items-start">
            {/* Detail side */}
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/8">
                  <Icon className="size-5 text-primary" />
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                    {resource.category}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-border/70 bg-background px-3 py-1 text-[11px] font-medium text-muted-foreground">
                    {resource.format}
                  </span>
                </div>
              </div>

              <h1 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                {resource.title}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                {resource.description}
              </p>

              <h2 className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                What's inside
              </h2>
              <ul className="mt-4 space-y-2.5">
                {resource.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2.5 text-sm text-foreground/85"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Capture side */}
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-[0_12px_40px_rgba(15,23,42,0.07)] md:sticky md:top-24">
              <p className="text-base font-semibold text-foreground">
                Get it free
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Enter your details and we'll send the {resource.format.toLowerCase()}{" "}
                straight to your inbox.
              </p>
              <div className="mt-5">
                <ResourceLeadForm
                  resourceTitle={resource.title}
                  source={resource.source}
                  category={resource.category}
                  ctaLabel={resource.ctaLabel}
                />
              </div>
              <p className="mt-3 text-[11px] leading-5 text-muted-foreground">
                No spam. Unsubscribe anytime. We only use your email to send the
                resource and occasional relevant insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
