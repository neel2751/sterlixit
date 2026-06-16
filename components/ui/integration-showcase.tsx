"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const easeOutCubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

export interface Integration {
  name: string;
  description: string;
  iconSrc: string;
}

export interface IntegrationShowcaseProps {
  title: string;
  subtitle: string;
  illustrationSrc: string;
  illustrationAlt: string;
  integrations: Integration[];
  className?: string;
}

const HighlightedTitle = ({ text }: { text: string }) => {
  const parts = text.split(/~/);
  return (
    <h2 className="text-[1.85rem] font-bold tracking-tight leading-[1.12] text-foreground sm:text-4xl sm:leading-[1.08]">
      {parts.map((part, index) =>
        index === 1 ? (
          <span key={index} className="relative sm:whitespace-nowrap">
            <span className="relative">{part}</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute -bottom-2 left-0 h-4 w-full text-primary/40"
              preserveAspectRatio="none"
            >
              <path
                d="M203.371.916c-26.013-2.078-76.686 1.98-114.243 8.919-37.556 6.939-78.622 17.103-122.256 28.703-43.633 11.6-4.984 14.306 43.123 7.021 48.107-7.285 93.638-16.096 146.446-17.742 52.808-1.646 105.706 5.429 158.649 14.13 52.943 8.701 105.886 19.342 158.826 29.483 52.94 10.141 52.94 10.141-11.41-19.043C371.18 14.363 322.753 5.488 281.339 2.143 239.925-1.201 203.371.916 203.371.916z"
                fill="currentColor"
              />
            </svg>
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute -bottom-2.5 left-0 h-5 w-full text-primary"
              preserveAspectRatio="none"
            >
              <path
                d="M203.371.916c-26.013-2.078-76.686 1.98-114.243 8.919-37.556 6.939-78.622 17.103-122.256 28.703-43.633 11.6-4.984 14.306 43.123 7.021 48.107-7.285 93.638-16.096 146.446-17.742 52.808-1.646 105.706 5.429 158.649 14.13 52.943 8.701 105.886 19.342 158.826 29.483 52.94 10.141 52.94 10.141-11.41-19.043C371.18 14.363 322.753 5.488 281.339 2.143 239.925-1.201 203.371.916 203.371.916z"
                fill="currentColor"
              />
            </svg>
          </span>
        ) : (
          part
        ),
      )}
    </h2>
  );
};

export const IntegrationShowcase = React.forwardRef<
  HTMLElement,
  IntegrationShowcaseProps
>(
  (
    {
      title,
      subtitle,
      illustrationSrc,
      illustrationAlt,
      integrations,
      className,
    },
    ref,
  ) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: easeOutCubic,
        },
      },
    };

    return (
      <section
        ref={ref}
        className={cn("w-full py-14 sm:py-20 lg:py-24", className)}
      >
        <div className="mx-auto w-full container px-5 sm:px-6 lg:px-10 xl:px-12">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/55 p-6 backdrop-blur-2xl md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent" />

            <div className="relative grid grid-cols-1 items-start gap-x-12 gap-y-10 lg:grid-cols-2">
              <div className="max-w-xl">
                <HighlightedTitle text={title} />
                <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                  {subtitle}
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-center">
                <img
                  src={illustrationSrc}
                  alt={illustrationAlt}
                  title={`${illustrationAlt} by Sterlixit`}
                  className="h-auto w-64 rounded-2xl border border-border/40 object-cover shadow-[0_16px_50px_rgba(79,70,229,0.15)]"
                />
              </div>
            </div>

            <motion.div
              className="relative mt-12 grid grid-cols-1 gap-x-6 gap-y-5 sm:mt-14 sm:grid-cols-2 sm:gap-y-6 lg:mt-16 lg:grid-cols-3 xl:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {integrations.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="group flex items-start space-x-4 rounded-2xl border border-border/50 bg-background/65 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-background/80"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/35 bg-linear-to-br from-primary/20 to-accent/20 shadow-[0_8px_24px_rgba(79,70,229,0.2)]">
                    <img
                      src={item.iconSrc}
                      alt={`${item.name} integration logo`}
                      title={`${item.name} integration logo`}
                      className="h-6 w-6 object-contain saturate-150"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    );
  },
);

IntegrationShowcase.displayName = "IntegrationShowcase";
