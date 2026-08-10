"use client";

import { useCallback } from "react";
import type { CountryInventory, NotebookBatch } from "@/data/types";
import { siteConfig } from "@/data/site";
import { UpcomingBatches } from "@/components/inventory/UpcomingBatches";

type CountryBatchesSectionProps = {
  inventory: CountryInventory;
};

export function CountryBatchesSection({
  inventory,
}: CountryBatchesSectionProps) {
  const contactHref = `mailto:${siteConfig.email}`;

  const handleReservePlacement = useCallback(
    (batch: NotebookBatch, placementId: string) => {
      const placement = batch.placements.find((p) => p.id === placementId);
      const subject = encodeURIComponent(
        `Reserve advertising — ${inventory.name} / ${batch.name}${
          placement ? ` / ${placement.name}` : ""
        }`,
      );
      const body = encodeURIComponent(
        [
          `Hi FreeNotes,`,
          ``,
          `I'd like to reserve advertising space:`,
          `Country: ${inventory.name}`,
          `Batch: ${batch.name}`,
          placement ? `Placement: ${placement.name}` : null,
          ``,
          `Looking forward to hearing from you.`,
        ]
          .filter(Boolean)
          .join("\n"),
      );
      window.location.href = `${contactHref}?subject=${subject}&body=${body}`;
    },
    [contactHref, inventory.name],
  );

  return (
    <UpcomingBatches
      batches={inventory.batches}
      onReservePlacement={handleReservePlacement}
    />
  );
}
