import { Fragment, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  repeat?: number;
  children: ReactNode;
};

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  repeat = 2,
  children,
}: MarqueeProps) {
  const repeatedChildren = Array.from({ length: repeat }).map((_, i) => (
    <Fragment key={`marquee-item-${i}`}>{children}</Fragment>
  ));

  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex min-w-max shrink-0 items-center gap-[--gap] animate-marquee pr-[--gap] py-1",
          reverse && "direction-[reverse]",
          pauseOnHover && "group-hover:paused",
        )}
      >
        {repeatedChildren}
      </div>
      <div
        aria-hidden
        className={cn(
          "flex min-w-max shrink-0 items-center gap-[--gap] animate-marquee pr-[--gap] py-1",
          reverse && "direction-[reverse]",
          pauseOnHover && "group-hover:paused",
        )}
      >
        {repeatedChildren}
      </div>
    </div>
  );
}
