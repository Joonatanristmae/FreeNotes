"use client";

import { useId, useState } from "react";
import type { BookingStatus, NotebookBatch, PlacementStatus } from "@/data/types";
import { BatchAvailabilityGrid } from "@/components/inventory/BatchAvailabilityGrid";
import { cn } from "@/lib/utils";

export type UpcomingBatchesCopy = {
  title: string;
  subtitle: string;
  notebooksLabel: string;
  distribution: string;
  designDeadline: string;
  distributionStart: string;
  availableOf: (available: number, total: number) => string;
  availabilityHeading: string;
  bookingStatus: Record<BookingStatus, string>;
  placementStatus: Record<PlacementStatus, string>;
};

const defaultCopy: UpcomingBatchesCopy = {
  title: "Upcoming batches",
  subtitle:
    "Each batch shows how many notebooks will print, when advertising must be booked, and where they distribute. Expand a batch to see cover and page availability.",
  notebooksLabel: "notebooks",
  distribution: "Distribution",
  designDeadline: "Design deadline",
  distributionStart: "Distribution start date",
  availableOf: (available, total) =>
    `${available} of ${total} placements available`,
  availabilityHeading: "Advertising availability",
  bookingStatus: {
    "booking-open": "Booking open",
    "coming-soon": "Coming soon",
    closed: "Closed",
  },
  placementStatus: {
    available: "Available",
    reserved: "Reserved",
    sold: "Sold",
  },
};

type UpcomingBatchesProps = {
  batches: NotebookBatch[];
  onReservePlacement: (batch: NotebookBatch, placementId: string) => void;
  copy?: UpcomingBatchesCopy;
};

export function UpcomingBatches({
  batches,
  onReservePlacement,
  copy = defaultCopy,
}: UpcomingBatchesProps) {
  const [openBatchId, setOpenBatchId] = useState<string | null>(null);

  return (
    <section
      id="upcoming-batches"
      className="scroll-mt-24 bg-paper px-6 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {copy.subtitle}
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {batches.map((batch) => {
            const availableCount = batch.placements.filter(
              (p) => p.status === "available",
            ).length;
            const isOpen = openBatchId === batch.id;

            return (
              <BatchAccordion
                key={batch.id}
                batch={batch}
                availableCount={availableCount}
                isOpen={isOpen}
                copy={copy}
                onToggle={() =>
                  setOpenBatchId((current) =>
                    current === batch.id ? null : batch.id,
                  )
                }
                onReservePlacement={onReservePlacement}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BatchAccordion({
  batch,
  availableCount,
  isOpen,
  copy,
  onToggle,
  onReservePlacement,
}: {
  batch: NotebookBatch;
  availableCount: number;
  isOpen: boolean;
  copy: UpcomingBatchesCopy;
  onToggle: () => void;
  onReservePlacement: (batch: NotebookBatch, placementId: string) => void;
}) {
  const panelId = useId();
  const headerId = useId();

  return (
    <article
      id={`batch-${batch.id}`}
      className="scroll-mt-24 border border-ink/8 bg-white shadow-sm"
    >
      <h3 className="m-0">
        <button
          type="button"
          id={headerId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={cn(
            "flex w-full items-start gap-3 p-5 text-left transition-colors sm:gap-4 sm:p-6",
            "hover:bg-sand/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-forest/40",
          )}
        >
          <span
            aria-hidden
            className={cn(
              "mt-1.5 inline-flex h-7 w-7 shrink-0 items-center justify-center border border-ink/15 text-forest transition-transform sm:mt-2",
              isOpen && "rotate-90",
            )}
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
              <path
                d="M6 3.5 10.5 8 6 12.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
                  {batch.name}
                </span>
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
                  {copy.bookingStatus[batch.bookingStatus]}
                </span>
              </div>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-forest">
                {batch.notebookCount.toLocaleString("en-US")}
                <span className="ml-2 text-sm font-medium text-muted">
                  {copy.notebooksLabel}
                </span>
              </p>
              <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
                <div>
                  <dt className="text-muted">{copy.distribution}</dt>
                  <dd className="mt-0.5 font-medium text-ink">
                    {batch.distributionLabel}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted">{copy.designDeadline}</dt>
                  <dd className="mt-0.5 font-medium text-ink">
                    {batch.designDeadlineLabel ?? batch.printDeadlineLabel}
                  </dd>
                </div>
                {batch.distributionStartLabel ? (
                  <div>
                    <dt className="text-muted">{copy.distributionStart}</dt>
                    <dd className="mt-0.5 font-medium text-ink">
                      {batch.distributionStartLabel}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </div>

            <p className="shrink-0 text-sm text-muted sm:pt-1 sm:text-right">
              {copy.availableOf(availableCount, batch.placements.length)}
            </p>
          </div>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        hidden={!isOpen}
        className="border-t border-ink/8 px-5 pb-6 pt-5 sm:px-6 sm:pb-8"
      >
        {isOpen ? (
          <>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-forest-muted">
              {copy.availabilityHeading}
            </h4>
            <BatchAvailabilityGrid
              placements={batch.placements}
              statusLabels={copy.placementStatus}
              onSelectAvailable={(placement) =>
                onReservePlacement(batch, placement.id)
              }
            />
          </>
        ) : null}
      </div>
    </article>
  );
}
