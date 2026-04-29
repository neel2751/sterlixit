"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
  themeColor: string;
}

interface TeamShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  buttonText?: string;
  members: TeamMember[];
}

const TeamShowcase = React.forwardRef<HTMLDivElement, TeamShowcaseProps>(
  (
    {
      title = "THE MAGIC DEVS YOU'VE BEEN SEARCHING FOR",
      description = "Why wasting time on so many different platforms for searching, interviewing and find out that it is not a good fit? We do all of these for you. No more back and forth. Get matched today.",
      buttonText = "FIND YOUR DEVELOPER",
      members,
      className,
      ...props
    },
    ref,
  ) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
        },
      },
    };

    const cardVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 10,
        },
      },
    };

    return (
      <section
        ref={ref}
        className={cn(
          "w-full bg-background px-4 py-16 text-foreground md:px-8",
          className,
        )}
        {...props}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <div className="mb-12 max-w-xl">
            <h2 className="mb-4 text-4xl font-bold tracking-tighter md:text-5xl">
              {title}
            </h2>
            <p className="mb-8 text-muted-foreground">{description}</p>
            <Button size="lg">{buttonText}</Button>
          </div>

          <motion.div
            className="flex w-full items-end justify-center -space-x-8 px-4 md:space-x-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <AnimatePresence>
              {members.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="w-full max-w-50 md:max-w-62.5"
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.05, zIndex: 40 }}
                  style={{ zIndex: members.length - index }}
                >
                  <div
                    className={cn(
                      "relative flex h-70 flex-col items-center justify-between overflow-hidden rounded-t-[50%] px-4 pb-4 pt-8 text-center md:h-87.5",
                      member.themeColor,
                    )}
                  >
                    <div className="text-black">
                      <h3 className="text-sm font-bold md:text-base">
                        {member.name}
                      </h3>
                      <p className="text-xs opacity-80 md:text-sm">
                        {member.role}
                      </p>
                    </div>
                    <img
                      src={member.imageSrc}
                      alt={member.name}
                      className="absolute bottom-0 left-0 h-auto w-full object-cover object-bottom"
                      style={{ maxHeight: "85%" }}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    );
  },
);

TeamShowcase.displayName = "TeamShowcase";

export { TeamShowcase };
export type { TeamMember, TeamShowcaseProps };
