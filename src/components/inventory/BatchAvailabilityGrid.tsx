"use client";

import type { Placement, PlacementStatus } from "@/data/types";
import { formatPrice } from "@/data/countries/_shared";
import { cn } from "@/lib/utils";

const defaultStatusLabels: Record<PlacementStatus, string> = {
  available: "Available",
  reserved: "Reserved",
  sold: "Sold",
};

const statusCardStyles: Record<PlacementStatus, { card: string; dot: string }> =
  {
    available: {
      card: "border-emerald-200 bg-emerald-50/70 hover:border-emerald-400",
      dot: "bg-emerald-500",
    },
    reserved: {
      card: "border-amber-200 bg-amber-50/70",
      dot: "bg-amber-500",
    },
    sold: {
      card: "border-rose-200 bg-rose-50/60 opacity-80",
      dot: "bg-rose-500",
    },
  };

type BatchAvailabilityGridProps = {
  placements: Placement[];
  onSelectAvailable?: (placement: Placement) => void;
  statusLabels?: Record<PlacementStatus, string>;
};

export function BatchAvailabilityGrid({
  placements,
  onSelectAvailable,
  statusLabels = defaultStatusLabels,
}: BatchAvailabilityGridProps) {
  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-4 text-xs font-medium text-muted">
        <LegendDot
          className="bg-emerald-500"
          label={statusLabels.available}
        />
        <LegendDot className="bg-amber-500" label={statusLabels.reserved} />
        <LegendDot className="bg-rose-500" label={statusLabels.sold} />
      </div>

      <div className="columns-1 gap-x-3 sm:columns-2 lg:columns-3 xl:columns-4">
        {placements.map((placement) => {
          const style = statusCardStyles[placement.status];
          const label = statusLabels[placement.status];
          const isAvailable = placement.status === "available";
          const showPrice =
            placement.status === "available" ||
            placement.status === "reserved";

          return (
            <button
              key={placement.id}
              type="button"
              disabled={!isAvailable}
              onClick={() => {
                if (isAvailable) onSelectAvailable?.(placement);
              }}
              className={cn(
                "mb-1 flex h-9 w-full break-inside-avoid items-center gap-2 border px-2.5 text-left text-sm transition-colors",
                style.card,
                isAvailable && "cursor-pointer",
                !isAvailable && "cursor-default",
              )}
            >
              <span
                className={cn("h-2 w-2 shrink-0 rounded-full", style.dot)}
                aria-hidden
              />
              <span className="min-w-0 flex-1 truncate font-medium text-ink">
                {placement.name}
              </span>
              <span className="sr-only">{label}</span>
              <span className="shrink-0 tabular-nums text-ink/80">
                {showPrice ? formatPrice(placement.price) : "—"}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function LegendDot({ className, label }: { className: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={cn("h-2 w-2 rounded-full", className)} aria-hidden />
      {label}
    </span>
  );
}
