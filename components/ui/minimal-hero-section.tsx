"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const STYLE_ID = "bento3-animations";

const palettes = {
  dark: {
    surface: "bg-neutral-950 text-neutral-100",
    heading: "text-white",
    muted: "text-neutral-400",
    capsule: "bg-white/5 border-white/10 text-white/80",
    card: "bg-neutral-900/55",
    button:
      "border-white/15 text-white hover:border-white/40 hover:bg-white/10",
    secondaryButton:
      "border-white/15 text-white/85 hover:border-white/40 hover:bg-white/6",
    trustPill: "bg-white/6 border-white/10 text-white/85",
    gridColor: "rgba(255, 255, 255, 0.06)",
    overlay:
      "linear-gradient(180deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.7) 45%, rgba(10,10,10,0.92) 100%)",
  },
  light: {
    surface: "bg-slate-100 text-neutral-900",
    heading: "text-neutral-900",
    muted: "text-neutral-600",
    capsule: "bg-white/70 border-neutral-200 text-neutral-700",
    card: "bg-white/82",
    button:
      "border-neutral-300 text-neutral-900 hover:border-neutral-500 hover:bg-neutral-900/5",
    secondaryButton:
      "border-neutral-300 text-neutral-700 hover:border-neutral-500 hover:bg-neutral-900/5",
    trustPill: "bg-white/70 border-neutral-200 text-neutral-700",
    gridColor: "rgba(17, 17, 17, 0.08)",
    overlay:
      "linear-gradient(180deg, rgba(248,250,252,0.96) 0%, rgba(241,245,249,0.68) 45%, rgba(248,250,252,0.96) 100%)",
  },
};

type HeroLink = {
  label: string;
  href: string;
};

type MinimalHeroSectionProps = {
  kicker: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  primaryCta: HeroLink;
  secondaryCta?: HeroLink;
  trustItems?: string[];
  className?: string;
};

type RootTheme = "dark" | "light";

const getRootTheme = (): RootTheme => {
  if (typeof document === "undefined") {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  }

  const root = document.documentElement;
  if (root.classList.contains("dark")) return "dark";
  if (
    root.dataset?.theme === "dark" ||
    root.getAttribute("data-theme") === "dark"
  ) {
    return "dark";
  }
  if (root.classList.contains("light")) return "light";
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
};

export default function MinimalHeroSection({
  kicker,
  title,
  subtitle,
  imageUrl,
  imageAlt,
  primaryCta,
  secondaryCta,
  trustItems = [],
  className,
}: MinimalHeroSectionProps) {
  const [theme, setTheme] = useState<RootTheme>(() => getRootTheme());
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.innerHTML = `
      @keyframes bento3-reveal {
        0% { opacity: 0; transform: translate3d(0, 36px, 0) scale(0.97); filter: blur(12px); }
        60% { filter: blur(0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
      }
      .bento3-root {
        min-height: 84svh;
        min-height: 84vh;
        padding-inline: clamp(1.25rem, 6vw, 4.5rem);
        padding-block: clamp(2.75rem, 6vw, 5rem);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .bento3-shell {
        position: relative;
        isolation: isolate;
        width: min(100%, 76rem);
        border-radius: clamp(1.8rem, 4vw, 2.8rem);
        min-height: clamp(23rem, 56vw, 40rem);
        padding: clamp(1.5rem, 5vw, 4rem);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .bento3-copy {
        display: flex;
        flex-direction: column;
        gap: clamp(1.25rem, 4vw, 2rem);
        align-items: center;
        text-align: center;
        max-width: 48rem;
        position: relative;
        z-index: 2;
      }
      .bento3-lede {
        display: flex;
        flex-direction: column;
        gap: clamp(1rem, 3vw, 1.45rem);
      }
      .bento3-cta {
        display: flex;
        gap: clamp(0.8rem, 4vw, 1.25rem);
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
      .bento3-image {
        position: relative;
        position: absolute;
        inset: 0;
        z-index: 0;
      }
      .bento3-image::before {
        content: "";
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15), transparent 46%), linear-gradient(170deg, rgba(0,0,0,0.6), rgba(0,0,0,0.38) 36%, rgba(0,0,0,0.65));
        z-index: 1;
      }
      .bento3-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1.02);
      }
      .bento3-footnote {
        display: flex;
        gap: clamp(1.2rem, 4vw, 2rem);
        flex-wrap: wrap;
        font-size: 0.7rem;
        letter-spacing: 0.32em;
        text-transform: uppercase;
        align-items: center;
        justify-content: center;
      }
      @media (max-width: 860px) {
        .bento3-copy {
          align-items: center;
          text-align: center;
          max-width: 34rem;
        }
        .bento3-cta {
          justify-content: center;
        }
      }
      @media (max-width: 640px) {
        .bento3-root {
          min-height: auto;
          padding-inline: clamp(1rem, 8vw, 1.8rem);
          padding-block: clamp(2rem, 10vw, 4rem);
        }
        .bento3-shell {
          min-height: clamp(22rem, 78vw, 30rem);
        }
        .bento3-cta {
          flex-direction: column;
          justify-content: center;
          width: 100%;
        }
        .bento3-cta > * {
          width: 100%;
          justify-content: center;
        }
        .bento3-footnote {
          letter-spacing: 0.22em;
          justify-content: center;
          text-align: center;
        }
      }
    `;

    document.head.appendChild(style);
    return () => {
      if (style.parentNode) style.remove();
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    const syncTheme = () => {
      const next = getRootTheme();
      setTheme((prev) => (prev === next ? prev : next));
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    const media =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-color-scheme: dark)")
        : null;

    media?.addEventListener("change", syncTheme);

    return () => {
      observer.disconnect();
      media?.removeEventListener("change", syncTheme);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") return;

    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const palette = useMemo(() => palettes[theme], [theme]);

  const containerStyle = useMemo(
    () =>
      ({
        "--bento3-grid-color": palette.gridColor,
      }) as React.CSSProperties,
    [palette.gridColor],
  );

  return (
    <div
      className={cn(
        "bento3-root relative w-full overflow-hidden transition-colors duration-700",
        palette.surface,
        className,
      )}
      style={containerStyle}
    >
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--bento3-grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--bento3-grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "22px 22px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: palette.overlay }}
      />

      <section
        ref={sectionRef}
        className={cn(
          "relative z-10 mx-auto w-full",
          visible
            ? "animate-[bento3-reveal_0.9s_cubic-bezier(.22,.68,0,1)_forwards]"
            : "opacity-0",
        )}
      >
        <div
          className={cn(
            "bento3-shell w-full border border-white/20 shadow-[0_30px_100px_-55px_rgba(15,15,15,0.75)] transition-colors duration-500 dark:border-white/15",
          )}
        >
          <figure className="bento3-image" aria-label={imageAlt}>
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </figure>

          <div className="bento3-copy">
            <div
              className={cn(
                "inline-flex w-fit items-center gap-3 rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.45em]",
                palette.capsule,
              )}
            >
              <Sparkles className="size-3.5" />
              {kicker}
            </div>

            <div className="bento3-lede">
              <h1
                className={cn(
                  "text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl",
                  palette.heading,
                )}
              >
                {title}
              </h1>
              <p className={cn("max-w-md text-sm sm:text-base", palette.muted)}>
                {subtitle}
              </p>
            </div>

            <div className="bento3-cta">
              <Link
                href={primaryCta.href}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] transition",
                  palette.button,
                )}
              >
                {primaryCta.label}
                <ArrowUpRight className="size-4" />
              </Link>

              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] transition",
                    palette.secondaryButton,
                  )}
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>

            {trustItems.length > 0 ? (
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className={cn(
                      "inline-flex items-center justify-center rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.2em]",
                      palette.trustPill,
                    )}
                  >
                    {item}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className={cn("bento3-footnote mt-10", palette.muted)}>
          <span>Design. Systems. Execution.</span>
          <span>Built for premium digital growth brands.</span>
        </div>
      </section>
    </div>
  );
}
