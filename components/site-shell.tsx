"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";

function SocialIcon({ label }: { label: string }) {
  switch (label) {
    case "LinkedIn":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="0.6"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );
    case "X":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.727-8.83-8.157-10.67h6.022l4.263 5.647 5.647-6.647zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4"
          aria-hidden="true"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4"
          aria-hidden="true"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    default:
      return null;
  }
}
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  IntegrationShowcase,
  type Integration,
} from "@/components/ui/integration-showcase";
import { Textarea } from "@/components/ui/textarea";
import {
  mainNavigation,
  coreServices,
  footerColumns,
  legalPages,
  socialLinks,
} from "@/lib/site-data";
import { publicIntegrationConfig } from "@/lib/integrations";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoBrandHovering, setIsLogoBrandHovering] = useState(false);
  const pathname = usePathname();

  const normalizePath = (value: string) =>
    value.length > 1 ? value.replace(/\/$/, "") : value;

  const isActiveLink = (href: string) => {
    const current = normalizePath(pathname || "/");
    const target = normalizePath(href);

    if (target === "/") {
      return current === "/";
    }

    return current === target || current.startsWith(`${target}/`);
  };
  // Keep this utility set for future campaigns if needed:
  // const utilityNav = [
  //   { label: "Branding", href: "/services/graphics-branding" },
  //   { label: "Web Development", href: "/services/web-design-development" },
  //   { label: "Digital Marketing", href: "/services/digital-marketing" },
  //   { label: "Case Studies", href: "/portfolio" },
  // ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <SiteContainer>
        <div className="flex items-center justify-between py-2.5 sm:py-3.5">
          <motion.div
            className="inline-flex items-center gap-1.5 sm:gap-2.5"
            onHoverStart={() => setIsLogoBrandHovering(true)}
            onHoverEnd={() => setIsLogoBrandHovering(false)}
          >
            <Link
              href="/"
              aria-label="Go to Sterlixit homepage"
              className="inline-flex items-center gap-1.5 sm:gap-2.5"
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src="/sterlixit.svg"
                  alt="Sterlixit digital growth agency logo"
                  title="Sterlixit digital growth agency"
                  width={132}
                  height={32}
                  priority
                  className="h-12 w-auto sm:h-16"
                />
              </motion.div>
              <motion.span
                animate={
                  isLogoBrandHovering
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0.7, x: -8 }
                }
                transition={{
                  delay: isLogoBrandHovering ? 0.08 : 0,
                  duration: 0.35,
                }}
                className="hidden text-xl font-semibold tracking-tight text-foreground sm:inline md:text-2xl"
              >
                Sterlixit
              </motion.span>
            </Link>
          </motion.div>
          <nav className="hidden items-center gap-1 rounded-full border border-border/60 bg-secondary/35 p-1.5 lg:flex">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActiveLink(item.href) ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-1.5 text-base transition",
                  isActiveLink(item.href)
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:bg-background hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="group relative overflow-hidden rounded-full border border-primary/45 bg-linear-to-r from-primary to-primary/80 px-4 text-primary-foreground shadow-[0_10px_26px_rgba(79,70,229,0.35)] hover:from-primary/95 hover:to-primary/75"
            >
              <Link href="/book-free-strategy-call" className="relative">
                <span className="relative z-10">Book a Call</span>
                <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 -skew-x-12 bg-white/55 blur-[1px] transition-transform duration-700 group-hover:translate-x-36" />
              </Link>
            </Button>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-site-nav"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </SiteContainer>
      {isOpen ? (
        <div id="mobile-site-nav" className="border-t bg-background lg:hidden">
          <SiteContainer>
            <div className="flex flex-col gap-3 py-4">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActiveLink(item.href) ? "page" : undefined}
                  className={cn(
                    "rounded-md px-2 py-1.5 text-sm transition",
                    isActiveLink(item.href)
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                size="sm"
                className="group relative w-fit overflow-hidden rounded-full border border-primary/45 bg-linear-to-r from-primary to-primary/80 text-primary-foreground"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/book-free-strategy-call" className="relative">
                  <span className="relative z-10">Book a Call</span>
                  <span className="pointer-events-none absolute -left-8 top-0 h-full w-8 -skew-x-12 bg-white/55 transition-transform duration-700 group-hover:translate-x-28" />
                </Link>
              </Button>
            </div>
          </SiteContainer>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  return (
    <footer className="relative overflow-hidden border-t bg-[linear-gradient(180deg,rgba(110,120,255,0.09)_0%,rgba(120,120,120,0)_58%)]">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_top_right,rgba(110,120,255,0.18),transparent_40%),radial-gradient(circle_at_10%_80%,rgba(70,70,70,0.12),transparent_34%)]" />
      <SiteContainer>
        <div className="grid gap-8 py-14 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Build With Confidence
            </p>
            <h3 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              Create your next growth chapter with design, engineering, and
              performance marketing under one partner.
            </h3>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              Tell us your goals and current blockers. We will map a practical,
              milestone-based plan around your timeline.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/book-free-strategy-call">Book Strategy Call</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/request-proposal">Request Proposal</Link>
              </Button>
            </div>
          </div>

          <Card className="border-border/70 bg-background/80 backdrop-blur">
            <CardHeader className="space-y-2">
              <CardTitle className="text-xl">Get Updates That Matter</CardTitle>
              <p className="text-sm text-muted-foreground">
                Monthly playbooks on acquisition, conversion, and retention.
              </p>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-3"
                onSubmit={async (event) => {
                  event.preventDefault();
                  setState("loading");

                  const response = await fetch("/api/newsletter", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      email,
                      source: "footer_newsletter",
                      tags: ["footer", "main_site"],
                    }),
                  });

                  if (response.ok) {
                    setState("done");
                    setEmail("");
                    return;
                  }

                  setState("error");
                }}
              >
                <Input
                  type="email"
                  placeholder="Work email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="bg-background"
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={state === "loading"}
                >
                  {state === "loading" ? "Subscribing..." : "Subscribe"}
                </Button>
                {state === "done" ? (
                  <p className="text-sm text-emerald-600">
                    Subscribed. Watch your inbox for the next playbook.
                  </p>
                ) : null}
                {state === "error" ? (
                  <p className="text-sm text-destructive">
                    Could not subscribe right now. Please retry.
                  </p>
                ) : null}
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 border-t border-border/70 py-10 md:grid-cols-2 lg:grid-cols-6 lg:gap-10">
          <div className="space-y-4 md:max-w-sm lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Image
                src="/sterlixit.svg"
                alt="Sterlixit digital growth agency logo"
                width={156}
                height={32}
                className="h-14 w-auto"
              />
              <span className="sr-only">Sterlixit</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              <a
                href="https://maps.app.goo.gl/qbBpiJ11NAzBEQHM9"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-foreground hover:underline"
              >
                {publicIntegrationConfig.footerAddress}
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              <a
                href={`mailto:${publicIntegrationConfig.footerEmail}`}
                className="transition hover:text-foreground hover:underline"
              >
                {publicIntegrationConfig.footerEmail}
              </a>{" "}
              •{" "}
              <a
                href={`tel:${publicIntegrationConfig.footerPhone.replace(/\s+/g, "")}`}
                className="transition hover:text-foreground hover:underline"
              >
                {publicIntegrationConfig.footerPhone}
              </a>
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition hover:bg-accent hover:text-foreground"
                >
                  <SocialIcon label={social.label} />
                </Link>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm leading-6 text-foreground/90 transition hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-border/70 py-5 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Sterlixit. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {legalPages.map((item) => (
              <Link
                key={item.slug}
                href={`/legal/${item.slug}`}
                className="hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </SiteContainer>
    </footer>
  );
}

export function SiteContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full container px-5 sm:px-6 lg:px-10 xl:px-12">
      {children}
    </div>
  );
}

export function SiteSection({
  title,
  description,
  children,
  id,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="py-16 md:py-20 lg:py-24">
      <SiteContainer>
        <div className="mb-8 w-full space-y-3 md:mb-10">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-3xl text-muted-foreground">{description}</p>
          ) : null}
        </div>
        <div className="w-full">{children}</div>
      </SiteContainer>
    </section>
  );
}

export function AnimatedReveal({
  children,
  className,
  delay = 0,
  hover = false,
  instant = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  instant?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={instant ? false : { opacity: 0, y: 72, filter: "blur(16px)" }}
      whileInView={
        instant ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      animate={instant ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      whileHover={hover ? { y: -14, scale: 1.03 } : undefined}
      viewport={{ once: true, amount: 0.24 }}
      transition={
        instant
          ? { duration: 0.01 }
          : hover
            ? { type: "spring", stiffness: 280, damping: 19, delay }
            : { duration: 1.05, ease: [0.22, 1, 0.36, 1], delay }
      }
    >
      {children}
    </motion.div>
  );
}

export function AnimatedTextRail({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-border/70 bg-secondary/30 py-3",
        className,
      )}
    >
      <motion.div
        className="flex w-max items-center gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 9.5, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-xs uppercase tracking-[0.18em] text-muted-foreground md:text-sm"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function SnapSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "w-full md:snap-start md:snap-always md:min-h-screen md:flex md:items-center",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function ParallaxOnScroll({
  children,
  className,
  offset = 70,
}: {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [offset, -offset],
  );

  return (
    <motion.div ref={rootRef} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

export function HomeHeroMotion() {
  return (
    <section className="relative overflow-hidden border-b py-20 md:py-28 ">
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-95">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-size-[46px_46px]" />
        <motion.div
          className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
          animate={{ x: [0, 65, -28, 0], y: [0, 26, -14, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
          animate={{ x: [0, -56, 24, 0], y: [0, -24, 12, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/3 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full border border-border/50"
          animate={{ rotate: [0, 360], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <SiteContainer>
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <AnimatedReveal className="space-y-7" instant>
            <motion.div
              className="inline-flex w-fit items-center rounded-full border border-border/80 bg-background/75 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.01 }}
            >
              Fintech-grade digital execution for modern teams
            </motion.div>

            <motion.h1
              className="max-w-xl text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.02]"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.01 }}
            >
              Build a Premium Growth Engine That Turns Into{" "}
              <span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Revenue
              </span>
            </motion.h1>
            <motion.p
              className="max-w-lg text-[17px] leading-relaxed text-muted-foreground"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.01 }}
            >
              Sterlixit combines design, engineering, and performance marketing
              so your brand feels high trust from day one and scales with a
              measurable revenue system.
            </motion.p>
            <motion.div
              className="flex flex-wrap items-center gap-3 pt-1"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.01 }}
            >
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Button asChild size="lg">
                  <Link href="/book-free-strategy-call">
                    Get Free Consultation
                  </Link>
                </Button>
              </motion.div>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border/70"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </motion.div>

            <motion.div
              className="grid gap-2 pt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground sm:grid-cols-2"
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.01 }}
            >
              {["Launch-ready in weeks", "Strategy + Build + Growth"].map(
                (proof) => (
                  <span
                    key={proof}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/70 px-3 py-1.5"
                  >
                    <CheckCircle2 className="size-3.5 text-primary" />
                    {proof}
                  </span>
                ),
              )}
            </motion.div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2} instant>
            <motion.div
              initial={{ rotate: -2, y: 10 }}
              animate={{ rotate: [0, 1.2, 0], y: [0, -4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative rounded-3xl border border-border/70 bg-background/80 p-3 md:p-4 backdrop-blur">
                <div className="relative overflow-hidden rounded-2xl border border-border/60">
                  <Image
                    src="/home/hero.svg"
                    alt="Sterlixit website growth dashboard preview"
                    title="Sterlixit website growth dashboard preview"
                    width={980}
                    height={640}
                    className="h-90 w-full object-cover md:h-125 lg:h-140"
                    priority
                  />
                  {/* <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0)_35%,rgba(15,23,42,0.62)_100%)]" /> */}
                  <motion.div
                    className="absolute left-5 top-5 rounded-xl border border-border/60 bg-background/80 px-3 py-2 backdrop-blur"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      Live Campaigns
                    </p>
                    <p className="text-sm font-semibold">
                      +34% conversion trend
                    </p>
                  </motion.div>
                  {/* <motion.div
                    className="absolute bottom-5 left-5 right-5 rounded-xl border border-border/60 bg-background/85 p-3 backdrop-blur"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, -3, 0] }}
                    transition={{
                      duration: 4.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Performance Snapshot</span>
                      <span>Updated live</span>
                    </div>
                    <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <p className="text-xs text-muted-foreground">ROAS</p>
                        <p className="text-sm font-semibold">4.8x</p>
                      </div>
                      <div className="rounded-lg bg-primary/10 p-2">
                        <p className="text-xs text-muted-foreground">Leads</p>
                        <p className="text-sm font-semibold">1.9k</p>
                      </div>
                      <div className="rounded-lg bg-primary/10 p-2">
                        <p className="text-xs text-muted-foreground">CPA</p>
                        <p className="text-sm font-semibold">-21%</p>
                      </div>
                    </div>
                  </motion.div> */}
                </div>
              </div>
            </motion.div>
          </AnimatedReveal>
        </div>
      </SiteContainer>
    </section>
  );
}

export function HomeHeroStatic() {
  return (
    <section className="py-20 md:py-28">
      <div className="relative mx-auto w-full container px-5 sm:px-6 lg:px-10 xl:px-12 bg-primary">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="space-y-7">
            <div className="inline-flex w-fit items-center rounded-full border border-border/80 bg-background/75 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Fintech-grade digital execution for modern teams
            </div>

            <h1 className="max-w-xl text-4xl font-semibold text-white tracking-tight md:text-6xl md:leading-[1.02]">
              Build a Premium Growth Engine That Turns Into Revenue
            </h1>
            <p className="max-w-lg text-[17px] leading-relaxed text-muted-foreground">
              Sterlixit combines design, engineering, and performance marketing
              so your brand feels high trust from day one and scales with a
              measurable revenue system.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button asChild size="lg">
                <Link href="/book-free-strategy-call">
                  Get Free Consultation
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border/70"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>

            <div className="grid gap-2 pt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground sm:grid-cols-2">
              {["Launch-ready in weeks", "Strategy + Build + Growth"].map(
                (proof) => (
                  <span
                    key={proof}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/70 px-3 py-1.5"
                  >
                    <CheckCircle2 className="size-3.5 text-primary" />
                    {proof}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/home/hero.svg"
              alt="Sterlixit website growth dashboard preview"
              title="Sterlixit website growth dashboard preview"
              width={980}
              height={640}
              className="h-90 w-full object-cover md:h-125 lg:h-140"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function MarketingFeatureStack() {
  const integrations: Integration[] = [
    {
      name: "Live Chat",
      description: "Capture high-intent visitor conversations in real time.",
      iconSrc: "https://img.icons8.com/color/96/chat--v1.png",
    },
    {
      name: "Lead Forms",
      description: "Convert traffic into qualified leads with optimised forms.",
      iconSrc:
        "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googleforms.svg",
    },
    {
      name: "CRM Sync",
      description: "Route every inquiry directly into your sales pipeline.",
      iconSrc: "https://img.icons8.com/color/96/salesforce.png",
    },
    {
      name: "Newsletter",
      description: "Automate nurture journeys and re-engagement sequences.",
      iconSrc:
        "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mailchimp.svg",
    },
    {
      name: "Google Analytics",
      description: "Track funnels, conversion sources, and user behaviour.",
      iconSrc: "https://cdn.worldvectorlogo.com/logos/google-analytics-3.svg",
    },
    {
      name: "Meta Pixel",
      description: "Improve paid campaign attribution and optimisation.",
      iconSrc: "https://cdn.worldvectorlogo.com/logos/meta-3.svg",
    },
    {
      name: "Tag Manager",
      description: "Deploy and manage tracking tags without code churn.",
      iconSrc:
        "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googletagmanager.svg",
    },
    {
      name: "Zapier",
      description: "Automate repetitive operations across your stack.",
      iconSrc: "https://cdn.worldvectorlogo.com/logos/zapier.svg",
    },
  ];

  return (
    <IntegrationShowcase
      title="Build your ~growth stack~ and tracking layer"
      subtitle="Sterlixit delivery plans include implementation-ready integrations for lead capture, analytics, attribution, and CRM sync so teams can scale with clarity."
      illustrationSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop"
      illustrationAlt="Growth stack and tracking architecture"
      integrations={integrations}
      className="bg-[linear-gradient(180deg,rgba(99,102,241,0.12)_0%,rgba(255,255,255,0)_100%)]"
    />
  );
}

export function LiveChatButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const chatStorageKey = "sterlixit-smart-chat-draft-v1";
  const [isOpen, setIsOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatStep, setChatStep] = useState(0);
  const [chatInput, setChatInput] = useState("");
  const [chatSubmitting, setChatSubmitting] = useState(false);
  const [chatState, setChatState] = useState<"idle" | "done" | "error">("idle");
  const [chatError, setChatError] = useState("");
  const [chatData, setChatData] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    message: "",
  });

  const steps: Array<{
    key: keyof typeof chatData;
    question: string;
    placeholder?: string;
    required: boolean;
    type: "service" | "text" | "email" | "tel";
  }> = [
    {
      key: "service",
      question: "Which service do you need help with?",
      required: true,
      type: "service",
    },
    {
      key: "name",
      question: "Great. What is your full name?",
      placeholder: "Your name",
      required: true,
      type: "text",
    },
    {
      key: "email",
      question: "What is your work email?",
      placeholder: "you@company.com",
      required: true,
      type: "email",
    },
    {
      key: "phone",
      question: "What is the best phone number to reach you?",
      placeholder: "+44 20 8004 3327",
      required: true,
      type: "tel",
    },
    {
      key: "company",
      question: "What company are you with? (Optional)",
      placeholder: "Company name",
      required: false,
      type: "text",
    },
    {
      key: "budget",
      question: "What is your budget range? (Optional)",
      placeholder: "Example: £5k-£15k",
      required: false,
      type: "text",
    },
    {
      key: "message",
      question: "Tell us about your goals or project details (Optional)",
      placeholder: "Brief project notes",
      required: false,
      type: "text",
    },
  ];

  const currentStep = steps[chatStep];

  const getResolvedChatData = () => {
    if (!currentStep || currentStep.type === "service") {
      return chatData;
    }

    return {
      ...chatData,
      [currentStep.key]: chatInput.trim(),
    };
  };

  const resolvedChatData = getResolvedChatData();
  const selectedServiceLabel =
    coreServices.find((service) => service.slug === resolvedChatData.service)
      ?.title ??
    (resolvedChatData.service === "other" ? "Other" : "Not selected");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const raw = window.localStorage.getItem(chatStorageKey);
    if (!raw) {
      return;
    }

    try {
      const parsed = JSON.parse(raw) as {
        chatStep?: number;
        chatData?: typeof chatData;
      };

      if (parsed.chatData) {
        setChatData((prev) => ({ ...prev, ...parsed.chatData }));
      }

      if (
        typeof parsed.chatStep === "number" &&
        parsed.chatStep >= 0 &&
        parsed.chatStep < steps.length
      ) {
        setChatStep(parsed.chatStep);
      }
    } catch {
      window.localStorage.removeItem(chatStorageKey);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (chatState === "done") {
      window.localStorage.removeItem(chatStorageKey);
      return;
    }

    const payload = JSON.stringify({ chatStep, chatData });
    window.localStorage.setItem(chatStorageKey, payload);
  }, [chatData, chatStep, chatState]);

  useEffect(() => {
    if (!currentStep || currentStep.type === "service") {
      setChatInput("");
      return;
    }

    setChatInput(chatData[currentStep.key] ?? "");
  }, [chatStep]);

  useEffect(() => {
    if (!isOpen && !chatOpen) {
      return;
    }

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (!containerRef.current?.contains(target)) {
        setIsOpen(false);
        setChatOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [isOpen, chatOpen]);

  const resetChat = () => {
    setChatStep(0);
    setChatInput("");
    setChatSubmitting(false);
    setChatState("idle");
    setChatError("");
    setChatData({
      service: "",
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      message: "",
    });

    if (typeof window !== "undefined") {
      window.localStorage.removeItem(chatStorageKey);
    }
  };

  const openChatbot = () => {
    setChatOpen(true);
    setIsOpen(false);
  };

  const applyStepValue = (value: string) => {
    if (!currentStep) {
      return;
    }
    setChatData((prev) => ({ ...prev, [currentStep.key]: value.trim() }));
  };

  const goNext = () => {
    if (!currentStep || currentStep.type === "service") {
      return;
    }

    const value = chatInput.trim();
    if (currentStep.required && !value) {
      setChatError("This field is required.");
      return;
    }

    if (
      currentStep.type === "email" &&
      value &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      setChatError("Please enter a valid email address.");
      return;
    }

    if (currentStep.type === "tel" && value.replace(/[^\d]/g, "").length < 7) {
      setChatError("Please enter a valid phone number.");
      return;
    }

    applyStepValue(value);
    setChatError("");
    setChatInput("");

    if (chatStep < steps.length - 1) {
      setChatStep((prev) => prev + 1);
    }
  };

  const goBack = () => {
    if (chatStep === 0) {
      return;
    }

    const previousStep = steps[chatStep - 1];
    setChatStep((prev) => prev - 1);
    setChatInput(chatData[previousStep.key] ?? "");
    setChatError("");
  };

  const skipOptionalStep = () => {
    if (
      !currentStep ||
      currentStep.required ||
      currentStep.type === "service"
    ) {
      return;
    }

    applyStepValue("");
    setChatError("");
    setChatInput("");
    if (chatStep < steps.length - 1) {
      setChatStep((prev) => prev + 1);
    }
  };

  const selectService = (serviceSlug: string) => {
    setChatData((prev) => ({ ...prev, service: serviceSlug }));
    setChatError("");
    setChatStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const submitChatLead = async () => {
    const finalData = getResolvedChatData();

    if (
      !finalData.service ||
      !finalData.name ||
      !finalData.email ||
      !finalData.phone
    ) {
      setChatError("Please complete all required details before submitting.");
      return;
    }

    setChatSubmitting(true);
    setChatError("");
    setChatState("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...finalData,
          source: "live_chatbot",
          website: "",
        }),
      });

      if (!response.ok) {
        throw new Error("chatbot_submit_failed");
      }

      setChatState("done");
    } catch {
      setChatState("error");
      setChatError("Could not submit right now. Please try again.");
    } finally {
      setChatSubmitting(false);
    }
  };

  const openLiveChat = () => {
    if (publicIntegrationConfig.liveChatUrl) {
      window.open(
        publicIntegrationConfig.liveChatUrl,
        "_blank",
        "noopener,noreferrer",
      );
      return;
    }

    if (
      publicIntegrationConfig.liveChatProvider === "chatwoot" &&
      typeof window !== "undefined"
    ) {
      const chatwoot = (
        window as { $chatwoot?: { toggle: (state?: string) => void } }
      ).$chatwoot;
      if (typeof chatwoot?.toggle === "function") {
        chatwoot.toggle("open");
        return;
      }
    }

    if (
      typeof window !== "undefined" &&
      typeof (window as { Tawk_API?: { maximize: () => void } }).Tawk_API
        ?.maximize === "function"
    ) {
      (window as { Tawk_API?: { maximize: () => void } }).Tawk_API?.maximize();
      return;
    }

    window.location.href = `mailto:${publicIntegrationConfig.footerEmail}`;
  };

  const openWhatsApp = () => {
    const raw = publicIntegrationConfig.whatsappNumber;
    const cleaned = raw.replace(/[^\d]/g, "");

    if (!cleaned) {
      return false;
    }

    const text = encodeURIComponent(publicIntegrationConfig.whatsappMessage);
    window.open(
      `https://wa.me/${cleaned}?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
    return true;
  };

  const hasConfiguredWhatsApp =
    publicIntegrationConfig.whatsappNumber.replace(/[^\d]/g, "").length > 7;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2"
    >
      {chatOpen ? (
        <div className="w-92 max-w-[calc(100vw-1.75rem)] rounded-2xl border border-border/70 bg-background/95 p-3 shadow-[0_18px_50px_rgba(15,23,42,0.24)] backdrop-blur">
          <div className="mb-3 flex items-center justify-between border-b border-border/70 pb-2">
            <div>
              <p className="text-sm font-semibold text-foreground">
                Sterlixit Smart Chat
              </p>
              <p className="text-[11px] text-muted-foreground">
                Quick project intake and instant handoff
              </p>
            </div>
            <button
              type="button"
              className="rounded-md p-1 text-muted-foreground transition hover:bg-accent hover:text-foreground"
              onClick={() => setChatOpen(false)}
              aria-label="Close smart chat"
            >
              <X className="size-4" />
            </button>
          </div>

          {chatState === "done" ? (
            <div className="space-y-3">
              <p className="text-sm text-foreground">
                Thanks. We received your details and routed them to our CRM. Our
                team will contact you shortly.
              </p>
              <div className="flex gap-2">
                <Button
                  type="button"
                  className="flex-1"
                  onClick={() => {
                    resetChat();
                  }}
                >
                  Start New Chat
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    setChatOpen(false);
                    resetChat();
                  }}
                >
                  Close
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Step {chatStep + 1} of {steps.length}
              </p>
              <p className="text-sm font-medium text-foreground">
                {currentStep.question}
              </p>

              {currentStep.type === "service" ? (
                <div className="grid gap-2">
                  {coreServices.map((service) => (
                    <button
                      key={service.slug}
                      type="button"
                      onClick={() => selectService(service.slug)}
                      className="rounded-xl border border-border/70 px-3 py-2 text-left text-sm text-foreground transition hover:border-primary/35 hover:bg-accent"
                    >
                      {service.title}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => selectService("other")}
                    className="rounded-xl border border-border/70 px-3 py-2 text-left text-sm text-foreground transition hover:border-primary/35 hover:bg-accent"
                  >
                    Other
                  </button>
                </div>
              ) : (
                <form
                  className="space-y-2"
                  onSubmit={(event) => {
                    event.preventDefault();
                    goNext();
                  }}
                >
                  <Input
                    type={currentStep.type}
                    value={chatInput}
                    onChange={(event) => setChatInput(event.target.value)}
                    placeholder={currentStep.placeholder}
                    autoFocus
                  />
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={goBack}
                      disabled={chatStep === 0}
                    >
                      Back
                    </Button>
                    {!currentStep.required ? (
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1"
                        onClick={skipOptionalStep}
                      >
                        Skip
                      </Button>
                    ) : null}
                    {chatStep < steps.length - 1 ? (
                      <Button type="submit" className="flex-1">
                        Next
                      </Button>
                    ) : null}
                  </div>
                </form>
              )}

              {chatStep === steps.length - 1 &&
              currentStep.type !== "service" ? (
                <div className="space-y-2">
                  <div className="rounded-xl border border-border/70 bg-secondary/30 p-3 text-xs text-muted-foreground">
                    <p className="mb-2 font-semibold uppercase tracking-[0.12em] text-foreground">
                      Summary Before Submit
                    </p>
                    <p>Service: {selectedServiceLabel}</p>
                    <p>Name: {resolvedChatData.name || "-"}</p>
                    <p>Email: {resolvedChatData.email || "-"}</p>
                    <p>Phone: {resolvedChatData.phone || "-"}</p>
                    {resolvedChatData.company ? (
                      <p>Company: {resolvedChatData.company}</p>
                    ) : null}
                    {resolvedChatData.budget ? (
                      <p>Budget: {resolvedChatData.budget}</p>
                    ) : null}
                    {resolvedChatData.message ? (
                      <p>Goal: {resolvedChatData.message}</p>
                    ) : null}
                  </div>

                  <Button
                    type="button"
                    className="w-full"
                    disabled={chatSubmitting}
                    onClick={submitChatLead}
                  >
                    {chatSubmitting ? "Submitting..." : "Submit to Team"}
                  </Button>
                </div>
              ) : null}

              {chatState === "error" || chatError ? (
                <p className="text-sm text-destructive">{chatError}</p>
              ) : null}
            </div>
          )}
        </div>
      ) : null}

      {isOpen ? (
        <div className="w-60 rounded-2xl border border-border/70 bg-background/95 p-2.5 shadow-[0_16px_44px_rgba(15,23,42,0.2)] backdrop-blur">
          <button
            type="button"
            onClick={() => {
              openChatbot();
              setIsOpen(false);
            }}
            className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-foreground transition hover:bg-accent"
          >
            <span>Start Smart Chat</span>
            <MessageCircle className="size-4 text-primary" />
          </button>

          <button
            type="button"
            onClick={() => {
              if (!openWhatsApp()) {
                window.location.href = `mailto:${publicIntegrationConfig.footerEmail}`;
              }
              setIsOpen(false);
            }}
            className="mt-1 flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-foreground transition hover:bg-accent"
          >
            <span>
              {hasConfiguredWhatsApp ? "Chat on WhatsApp" : "Email Support"}
            </span>
            <ArrowUpRight className="size-4 text-primary" />
          </button>

          <button
            type="button"
            onClick={() => {
              window.location.href = "/book-free-strategy-call";
              setIsOpen(false);
            }}
            className="mt-1 flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-foreground transition hover:bg-accent"
          >
            <span>Book Strategy Call</span>
            <ArrowUpRight className="size-4 text-primary" />
          </button>
        </div>
      ) : null}

      <Button
        className="rounded-full border border-primary/40 bg-linear-to-r from-primary to-primary/80 px-4 text-primary-foreground shadow-[0_12px_30px_rgba(79,70,229,0.35)]"
        size="lg"
        aria-label="Open live chat launcher"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <MessageCircle className="size-4" />
        Chat With Us
      </Button>
    </div>
  );
}

export function ExitIntentDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    goal: "",
  });
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storageKey = "sterlixit-exit-last-shown";
    const cooldownMs = 1000 * 60 * 60 * 24 * 7;
    const lastShownRaw = window.localStorage.getItem(storageKey);
    const lastShown = lastShownRaw ? Number(lastShownRaw) : 0;

    if (lastShown && Number.isFinite(lastShown)) {
      const elapsed = Date.now() - lastShown;
      if (elapsed < cooldownMs) {
        return;
      }
    }

    let hasTriggered = false;

    const triggerPopupOnce = () => {
      if (hasTriggered) {
        return;
      }

      hasTriggered = true;
      setOpen(true);
      window.localStorage.setItem(storageKey, String(Date.now()));
    };

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    const onMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0 && !event.relatedTarget) {
        triggerPopupOnce();
      }
    };

    const onScrollDepth = () => {
      const maxScrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (maxScrollable <= 0) {
        return;
      }

      const depth = window.scrollY / maxScrollable;
      if (depth >= 0.65) {
        triggerPopupOnce();
      }
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden" && window.scrollY > 240) {
        triggerPopupOnce();
      }
    };

    const timedTrigger = window.setTimeout(() => {
      if (window.scrollY > 120 || isTouchDevice) {
        triggerPopupOnce();
      }
    }, 18000);

    if (!isTouchDevice) {
      window.addEventListener("mouseout", onMouseLeave);
    }
    window.addEventListener("scroll", onScrollDepth, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.clearTimeout(timedTrigger);
      if (!isTouchDevice) {
        window.removeEventListener("mouseout", onMouseLeave);
      }
      window.removeEventListener("scroll", onScrollDepth);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden border-border/70 p-0 sm:max-w-xl">
        <div className="border-b bg-[linear-gradient(120deg,rgba(95,110,255,0.12),rgba(120,120,120,0.03))] p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Before you go, get your free strategy mini-audit
            </DialogTitle>
            <DialogDescription>
              Share a few details and we will send actionable recommendations
              for your homepage, conversion flow, and lead capture.
            </DialogDescription>
          </DialogHeader>
        </div>
        <div className="space-y-4 p-6">
          {state === "done" ? (
            <p className="text-sm text-muted-foreground">
              Thanks! We received your details and will send your mini-audit
              shortly.
            </p>
          ) : (
            <form
              className="space-y-3"
              onSubmit={async (e) => {
                e.preventDefault();
                setState("loading");

                const response = await fetch("/api/lead", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    resource: "homepage_strategy_mini_audit",
                    email: formData.email,
                    name: formData.name,
                    company: formData.company,
                    message: formData.goal,
                    source: "exit_intent_popup_enhanced",
                  }),
                });

                if (response.ok) {
                  setState("done");
                  return;
                }

                setState("error");
              }}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Your name"
                />
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="Work email"
                />
              </div>
              <Input
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, company: e.target.value }))
                }
                placeholder="Company (optional)"
              />
              <Textarea
                value={formData.goal}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, goal: e.target.value }))
                }
                rows={4}
                placeholder="What is your biggest growth or website challenge right now?"
              />
              <Button
                type="submit"
                className="w-full"
                disabled={state === "loading"}
              >
                {state === "loading" ? "Sending..." : "Get My Mini-Audit"}
              </Button>
              <p className="text-xs text-muted-foreground">
                We will only use your details to follow up with useful, relevant
                recommendations.
              </p>
              {state === "error" ? (
                <p className="text-sm text-destructive">
                  Unable to submit right now. Please try again.
                </p>
              ) : null}
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
