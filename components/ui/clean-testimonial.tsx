"use client";

import type React from "react";

import { useState, useCallback, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

const testimonials = [
  {
    quote:
      "Sterlixit modernised our web presence and improved how we handle inbound opportunities across the business.",
    company: "CDC Construction",
    logo: "/client/cdc.svg",
  },
  {
    quote:
      "From website build to performance campaigns, execution stayed consistent and aligned with our growth goals.",
    company: "CDC Housing",
    logo: "/client/cdchousing.webp",
  },
  {
    quote:
      "They took us from planning to launch with a clean digital foundation and reliable ongoing technical support.",
    company: "Lomash Wood",
    logo: "/client/Lomashwood.svg",
  },
  {
    quote:
      "The delivery model was practical and fast, and post-launch updates have remained smooth and well managed.",
    company: "Interior Studio",
    logo: "/client/interiorstudio.svg",
  },
];

function usePreloadImages(images: string[]) {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);
}

function SplitText({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  usePreloadImages(testimonials.map((t) => t.logo));

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY],
  );

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full container px-8 py-20"
      style={{ cursor: "none" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleNext}
    >
      <motion.div
        className="pointer-events-none absolute z-50"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="flex items-center justify-center rounded-full border border-primary/30 bg-primary/90 shadow-[0_16px_44px_rgba(79,70,229,0.35)]"
          animate={{
            width: isHovered ? 80 : 0,
            height: isHovered ? 80 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
        >
          <motion.span
            className="text-xs font-medium uppercase tracking-wider text-primary-foreground"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1 }}
          >
            Next
          </motion.span>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute right-8 top-8 flex items-baseline gap-1 font-mono text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span
          className="text-2xl font-light text-foreground"
          key={activeIndex}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(activeIndex + 1).padStart(2, "0")}
        </motion.span>
        <span className="text-muted-foreground">/</span>
        <span className="text-muted-foreground">
          {String(testimonials.length).padStart(2, "0")}
        </span>
      </motion.div>

      <motion.div
        className="absolute left-8 top-8 flex items-center -space-x-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.6 }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className={`relative h-10 w-10 overflow-hidden rounded-xl border bg-white p-1.5 transition-all duration-300 ${
              i === activeIndex
                ? "z-20 border-accent/70 shadow-[0_10px_22px_rgba(79,70,229,0.28)] ring-1 ring-accent/50"
                : "z-10 border-border/60 grayscale opacity-60"
            }`}
            animate={{
              scale: i === activeIndex ? 1 : 0.9,
              y: i === activeIndex ? -2 : 0,
            }}
            whileHover={{ scale: i === activeIndex ? 1.02 : 0.96, opacity: 1 }}
          >
            <img
              src={t.logo || "/placeholder.svg"}
              alt={`${t.company} logo`}
              className="h-full w-full object-contain"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="text-xl font-light leading-relaxed tracking-tight text-foreground md:text-2xl"
          >
            <SplitText text={currentTestimonial.quote} />
          </motion.blockquote>
        </AnimatePresence>

        <motion.div className="relative mt-12" layout>
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl">
              <motion.div
                className="absolute -inset-1.5 rounded-2xl border border-accent/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentTestimonial.company}
                  src={currentTestimonial.logo}
                  alt={`${currentTestimonial.company} logo`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute inset-1 h-12 w-12 rounded-xl border border-border/60 bg-white p-1.5 object-contain shadow-[0_8px_16px_rgba(15,23,42,0.12)]"
                />
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="relative pl-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 top-0 w-px bg-accent"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ originY: 0 }}
                />
                <span className="block text-sm font-medium tracking-wide text-foreground">
                  {currentTestimonial.company}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="relative mt-16 h-px overflow-hidden bg-border">
          <motion.div
            className="absolute inset-y-0 left-0 bg-accent"
            initial={{ width: "0%" }}
            animate={{
              width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-8 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.4 : 0.2 }}
        transition={{ duration: 0.3 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/70">
          Click anywhere
        </span>
      </motion.div>
    </div>
  );
}
