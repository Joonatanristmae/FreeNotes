import type { Statistic } from "@/data/types";
import { cn } from "@/lib/utils";

type StatisticCardProps = {
  statistic: Statistic;
  className?: string;
};

export function StatisticCard({ statistic, className }: StatisticCardProps) {
  return (
    <div
      className={cn(
        "border-t border-forest/15 pt-5",
        className,
      )}
    >
      <p className="font-display text-3xl tracking-tight text-forest sm:text-4xl">
        {statistic.value}
      </p>
      <p className="mt-2 text-sm leading-snug text-muted">{statistic.label}</p>
    </div>
  );
}
