"use client";

import type { BookingStatus, NotebookBatch } from "@/data/types";
import { BatchAvailabilityGrid } from "@/components/inventory/BatchAvailabilityGrid";
import { cn } from "@/lib/utils";

const statusLabel: Record<BookingStatus, string> = {
  "booking-open": "Booking open",
  "coming-soon": "Coming soon",
  closed: "Closed",
};

type UpcomingBatchesProps = {
  batches: NotebookBatch[];
  onReservePlacement: (batch: NotebookBatch, placementId: string) => void;
};

export function UpcomingBatches({
  batches,
  onReservePlacement,
}: UpcomingBatchesProps) {
  return (
    <section
      id="upcoming-batches"
      className="scroll-mt-24 bg-paper px-6 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Upcoming batches
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Each batch shows how many notebooks will print, when advertising
            must be booked, where they distribute, and which placements are
            still open.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          {batches.map((batch) => {
            const availableCount = batch.placements.filter(
              (p) => p.status === "available",
            ).length;

            return (
              <article
                key={batch.id}
                id={`batch-${batch.id}`}
                className="scroll-mt-24 border border-ink/8 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex flex-col gap-4 border-b border-ink/8 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
                        {batch.name}
                      </h3>
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-1 text-xs font-semibold",
                          batch.bookingStatus === "booking-open" &&
                            "bg-emerald-50 text-emerald-700",
                          batch.bookingStatus === "coming-soon" &&
                            "bg-amber-50 text-amber-700",
                          batch.bookingStatus === "closed" &&
                            "bg-rose-50 text-rose-700",
                        )}
                      >
                        {statusLabel[batch.bookingStatus]}
                      </span>
                    </div>
                    <p className="mt-3 text-2xl font-semibold tracking-tight text-forest">
                      {batch.notebookCount.toLocaleString("en-US")}
                      <span className="ml-2 text-sm font-medium text-muted">
                        notebooks
                      </span>
                    </p>
                  </div>
                  <p className="text-sm text-muted sm:text-right">
                    {availableCount} of {batch.placements.length} placements
                    available
                  </p>
                </div>

                <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
                  <div>
                    <dt className="text-muted">City</dt>
                    <dd className="mt-0.5 font-medium text-ink">{batch.city}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Print deadline</dt>
                    <dd className="mt-0.5 font-medium text-ink">
                      {batch.printDeadlineLabel}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted">Distribution</dt>
                    <dd className="mt-0.5 font-medium text-ink">
                      {batch.distributionLabel}
                    </dd>
                  </div>
                </dl>

                <div className="mt-8">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-forest-muted">
                    Advertising availability
                  </h4>
                  <BatchAvailabilityGrid
                    placements={batch.placements}
                    onSelectAvailable={(placement) =>
                      onReservePlacement(batch, placement.id)
                    }
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
