"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
  image: string;
};

type HeroPreviewWallsProps = {
  badgeText?: string;
  title?: string;
  description?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  cards?: Card[];
  bottomSlot?: React.ReactNode;
};

export const CardSlide = ({
  items,
  offset = 22,
  scaleFactor = 0.06,
  intervalDuration = 3000,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  intervalDuration?: number;
}) => {
  const [cards, setCards] = useState<Card[]>(items);
  const [dynamicOffset, setDynamicOffset] = useState(offset);
  const [dynamicScale, setDynamicScale] = useState(scaleFactor);
  const [cardSize, setCardSize] = useState({ height: "26rem", width: "22rem" });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDynamicOffset(10);
        setDynamicScale(0.04);
        setCardSize({ height: "24rem", width: "20rem" });
      } else if (window.innerWidth < 1024) {
        setDynamicOffset(14);
        setDynamicScale(0.05);
        setCardSize({ height: "28rem", width: "24rem" });
      } else {
        setDynamicOffset(offset);
        setDynamicScale(scaleFactor);
        setCardSize({ height: "30rem", width: "30rem" });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [offset, scaleFactor]);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCards((prev) => {
        const arr = [...prev];
        const tail = arr.pop();
        if (!tail) return prev;
        arr.unshift(tail);
        return arr;
      });
    }, intervalDuration);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [intervalDuration]);

  return (
    <div
      className="relative flex justify-center"
      style={{
        height: `calc(${cardSize.height} + ${cards.length * dynamicOffset}px)`,
        width: cardSize.width,
      }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute overflow-hidden rounded-2xl border border-border/60 bg-card/95 p-5 text-left shadow-xl shadow-primary/10 backdrop-blur-sm sm:p-6 md:p-8"
          style={{
            transformOrigin: "top center",
            height: cardSize.height,
            width: cardSize.width,
          }}
          animate={{
            top: index * -dynamicOffset,
            scale: 1 - index * dynamicScale,
            zIndex: cards.length - index,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        >
          <div className="space-y-3 sm:space-y-4">
            <div className="text-lg font-semibold text-foreground sm:text-xl md:text-2xl">
              {card.name}
            </div>
            <div className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {card.content}
            </div>

            <div className="relative mt-3 h-40 overflow-hidden rounded-lg border border-border/70 shadow-md sm:h-44 md:h-52">
              <Image
                src={card.image.replace("w=2670", "w=1400")}
                alt={card.name}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 480px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-4 border-t border-border/60 pt-3">
            <p className="text-sm font-medium text-foreground sm:text-base">
              {card.designation}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export function HeroPreviewWalls({
  badgeText = "Proof of Performance",
  title = "Proven Solutions. Engineered for Excellence.",
  description = "We don’t just build apps; we solve complex business bottlenecks. Explore how our 10-year veteran team has transformed operations for 10+ permanent partners and launched global SaaS platforms.",
  primaryCtaText = "Explore Case Studies",
  secondaryCtaText = "Book a Strategy Call",
  onPrimaryClick,
  onSecondaryClick,
  cards,
  bottomSlot,
}: HeroPreviewWallsProps) {
  const defaultCards = useMemo<Card[]>(
    () => [
      {
        id: 0,
        name: "SaaS & MVP Delivery",
        designation: "From idea to launch-ready product",
        content: (
          <p>
            We architect and ship scalable products with practical roadmaps,
            secure foundations, and measurable go-to-market speed.
          </p>
        ),
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2670&auto=format&fit=crop",
      },
      {
        id: 1,
        name: "Operational Automation",
        designation: "Efficiency through systems thinking",
        content: (
          <p>
            Our teams unify fragmented workflows and data pipelines so decisions
            become faster, cleaner, and easier to scale.
          </p>
        ),
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
      },
      {
        id: 2,
        name: "Enterprise-Grade Architecture",
        designation: "Reliable infrastructure at scale",
        content: (
          <p>
            We design platforms for security, resilience, and long-term growth
            across cloud-native and hybrid environments.
          </p>
        ),
        image:
          "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2670&auto=format&fit=crop",
      },
    ],
    [],
  );

  const finalCards = cards && cards.length > 0 ? cards : defaultCards;

  return (
    <section className="relative overflow-visible bg-background pb-16 pt-14 sm:pt-16 md:pb-20 md:pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[46vh] w-[52vw] rounded-full bg-[radial-gradient(ellipse_at_top_left,rgba(79,70,229,0.18)_0%,transparent_66%)]" />
        <div className="absolute bottom-0 right-0 h-[42vh] w-[46vw] rounded-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.12)_0%,transparent_66%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(79,70,229,0.06)_0%,rgba(255,255,255,0)_48%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-305 px-6 md:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.01 }}
              className="mb-4 inline-block rounded-full border border-primary/25 bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
            >
              {badgeText}
            </motion.div>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.01 }}
              className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.01 }}
              className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
            >
              {description}
            </motion.p>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.01 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <button
                onClick={onPrimaryClick}
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:brightness-95"
              >
                {primaryCtaText}
              </button>
              <button
                onClick={onSecondaryClick}
                className="rounded-full border border-border/80 bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/45 hover:text-primary"
              >
                {secondaryCtaText}
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.01 }}
            className="relative"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-primary/10 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.12),transparent_70%)]" />
            <motion.div
              className="relative z-10 flex justify-center py-4 sm:py-6"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <CardSlide items={finalCards} />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="mt-10 md:mt-12"
        >
          {bottomSlot}
        </motion.div>
      </div>
    </section>
  );
}
