import type { PlacementStatus } from "@/data/types";
import { cn } from "@/lib/utils";

const styles: Record<PlacementStatus, string> = {
  available: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
  reserved: "bg-amber-50 text-amber-700 ring-amber-600/15",
  sold: "bg-rose-50 text-rose-700 ring-rose-600/15",
};

const labels: Record<PlacementStatus, string> = {
  available: "Available",
  reserved: "Reserved",
  sold: "Sold",
};

type PlacementStatusBadgeProps = {
  status: PlacementStatus;
  className?: string;
};

export function PlacementStatusBadge({
  status,
  className,
}: PlacementStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset",
        styles[status],
        className,
      )}
    >
      {labels[status]}
    </span>
  );
}
