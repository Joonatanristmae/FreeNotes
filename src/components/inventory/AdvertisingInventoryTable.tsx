"use client";

import type { Placement } from "@/data/types";
import { formatPrice } from "@/data/countries/_shared";
import { PlacementStatusBadge } from "@/components/inventory/PlacementStatusBadge";
import { cn } from "@/lib/utils";

type AdvertisingInventoryTableProps = {
  placements: Placement[];
  activePlacementId?: string | null;
  onSelectPlacement: (placementId: string) => void;
};

export function AdvertisingInventoryTable({
  placements,
  activePlacementId,
  onSelectPlacement,
}: AdvertisingInventoryTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-ink/8 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-ink/10 bg-sand/40">
              <th className="px-4 py-3 font-semibold text-ink">Placement</th>
              <th className="px-4 py-3 font-semibold text-ink">Status</th>
              <th className="px-4 py-3 text-right font-semibold text-ink">Price</th>
            </tr>
          </thead>
          <tbody>
            {placements.map((placement) => {
              const isActive = placement.id === activePlacementId;
              const showPrice = placement.status === "available";

              return (
                <tr
                  key={placement.id}
                  tabIndex={0}
                  onClick={() => onSelectPlacement(placement.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onSelectPlacement(placement.id);
                    }
                  }}
                  className={cn(
                    "cursor-pointer border-b border-ink/6 transition-colors last:border-0",
                    isActive ? "bg-forest/5" : "hover:bg-sand/50",
                  )}
                >
                  <td className="px-4 py-3 font-medium text-ink">
                    {placement.name}
                  </td>
                  <td className="px-4 py-3">
                    <PlacementStatusBadge status={placement.status} />
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums text-ink">
                    {showPrice ? formatPrice(placement.price) : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
