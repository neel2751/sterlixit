import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  SiteFooter,
  SiteHeader,
  SiteSection,
  SiteContainer,
  ExitIntentDialog,
  LiveChatButton,
} from "@/components/site-shell";

export function StandardPageLayout({
  title,
  subtitle,
  children,
  ctaHref = "/book-free-strategy-call",
  ctaText = "Get Free Consultation",
  breadcrumbs,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  ctaHref?: string;
  ctaText?: string;
  breadcrumbs?: { name: string; href: string }[];
}) {
  return (
    <main className="min-h-screen bg-background">
      {breadcrumbs && <BreadcrumbSchema items={breadcrumbs} />}
      <SiteHeader />
      <section className="border-b py-16 md:py-20">
        <SiteContainer>
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground">{subtitle}</p>
            <Button asChild>
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
          </div>
        </SiteContainer>
      </section>
      {children}
      <SiteFooter />
      <ExitIntentDialog />
      <LiveChatButton />
    </main>
  );
}

export function SimpleCardsSection({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: string[];
}) {
  return (
    <SiteSection title={title} description={description}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item}>
            <CardContent className="py-5 text-sm">{item}</CardContent>
          </Card>
        ))}
      </div>
    </SiteSection>
  );
}

export function FAQSection({
  title,
  faqs,
}: {
  title: string;
  faqs: { q: string; a: string }[];
}) {
  return (
    <SiteSection title={title}>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.q} value={`faq-${index}`}>
            <AccordionTrigger>{faq.q}</AccordionTrigger>
            <AccordionContent>{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SiteSection>
  );
}
