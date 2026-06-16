import { cn } from "@/lib/utils";

export function TechGrid({
  technologies,
  className,
}: {
  technologies: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6",
        className,
      )}
    >
      {technologies.map((tech) => (
        <div
          key={tech}
          className="flex items-center justify-center rounded-xl border border-border/60 bg-background/80 px-3 py-4 text-center text-xs font-medium text-muted-foreground transition hover:border-primary/40 hover:bg-primary/5 hover:text-foreground"
        >
          {tech}
        </div>
      ))}
    </div>
  );
}
