import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type ComparisonRow = {
  feature: string;
  us: boolean | string;
  them: boolean | string;
};

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return <Check className="mx-auto size-4 text-primary" aria-label="Yes" />;
  if (value === false)
    return <X className="mx-auto size-4 text-destructive/70" aria-label="No" />;
  return <span className="text-xs text-muted-foreground">{value}</span>;
}

export function ComparisonTable({
  rows,
  usName,
  themName,
  className,
}: {
  rows: ComparisonRow[];
  usName: string;
  themName: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-border/60", className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-foreground text-primary-foreground">
            <th className="px-5 py-4 text-left font-semibold">Feature</th>
            <th className="px-5 py-4 text-center font-semibold">{usName}</th>
            <th className="px-5 py-4 text-center font-semibold text-primary-foreground/55">
              {themName}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {rows.map((row, i) => (
            <tr
              key={row.feature}
              className={i % 2 === 0 ? "bg-background" : "bg-secondary/25"}
            >
              <td className="px-5 py-3.5 text-foreground">{row.feature}</td>
              <td className="px-5 py-3.5 text-center">
                <Cell value={row.us} />
              </td>
              <td className="px-5 py-3.5 text-center">
                <Cell value={row.them} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
