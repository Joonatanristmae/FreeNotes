"use client";

import { useCallback } from "react";
import type { CountryInventory, NotebookBatch } from "@/data/types";
import { siteConfig } from "@/data/site";
import { UpcomingBatches } from "@/components/inventory/UpcomingBatches";
import {
  getLithuaniaPageCopy,
  type LithuaniaLocale,
} from "@/data/countries/lithuania/i18n";

type CountryBatchesSectionProps = {
  inventory: CountryInventory;
  /** When set, loads Lithuania locale strings on the client (avoids passing functions as props). */
  locale?: LithuaniaLocale;
};

export function CountryBatchesSection({
  inventory,
  locale,
}: CountryBatchesSectionProps) {
  const contactHref = `mailto:${siteConfig.email}`;
  const pageCopy = locale ? getLithuaniaPageCopy(locale) : null;

  const handleReservePlacement = useCallback(
    (batch: NotebookBatch, placementId: string) => {
      const placement = batch.placements.find((p) => p.id === placementId);
      const subject = encodeURIComponent(
        pageCopy
          ? pageCopy.reserveEmail.subject(
              inventory.name,
              batch.name,
              placement?.name,
            )
          : `Reserve advertising — ${inventory.name} / ${batch.name}${
              placement ? ` / ${placement.name}` : ""
            }`,
      );
      const body = encodeURIComponent(
        pageCopy
          ? pageCopy.reserveEmail.body(
              inventory.name,
              batch.name,
              placement?.name,
            )
          : [
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
    [contactHref, inventory.name, pageCopy],
  );

  return (
    <UpcomingBatches
      batches={inventory.batches}
      onReservePlacement={handleReservePlacement}
      copy={pageCopy?.batches}
    />
  );
}
