"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ScrollParallaxWrapProps = {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
};

export function ScrollParallaxWrap({
  children,
  intensity = 24,
  className,
}: ScrollParallaxWrapProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [intensity, -intensity]);

  return (
    <motion.div ref={rootRef} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
