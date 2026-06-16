"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type CarouselTestimonial = {
  name: string;
  role: string;
  quote: string;
  rating?: number;
};

export function TestimonialCarousel({
  testimonials,
  className,
}: {
  testimonials: CarouselTestimonial[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d: number) => {
    setDir(d);
    setIndex((prev) => (prev + d + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden rounded-3xl border border-border/60 bg-background/80 px-6 py-8 shadow-[0_16px_48px_rgba(79,70,229,0.08)] backdrop-blur md:px-10 md:py-10">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            initial={{ opacity: 0, x: dir * 36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -28 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {current.rating ? (
              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star
                    key={`star-${i}`}
                    className="size-4 fill-primary text-primary"
                  />
                ))}
              </div>
            ) : null}
            <blockquote className="text-lg leading-relaxed text-foreground md:text-2xl md:leading-relaxed">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <div className="mt-6">
              <p className="font-semibold">{current.name}</p>
              <p className="text-sm text-muted-foreground">{current.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                onClick={() => {
                  setDir(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-border hover:bg-primary/40",
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="size-9 rounded-full"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-9 rounded-full"
              onClick={() => go(1)}
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
