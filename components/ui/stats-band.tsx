import { cn } from "@/lib/utils";
import { SiteContainer } from "@/components/site-shell";

export type BandStat = {
  value: string;
  label: string;
};

export function StatsBand({
  stats,
  className,
}: {
  stats: BandStat[];
  className?: string;
}) {
  return (
    <div className={cn("bg-foreground py-10 md:py-12", className)}>
      <SiteContainer>
        <div className="flex flex-wrap justify-center gap-8 md:gap-0 md:divide-x md:divide-primary-foreground/20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="min-w-[140px] flex-1 text-center md:px-8"
            >
              <p className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-primary-foreground/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </SiteContainer>
    </div>
  );
}
