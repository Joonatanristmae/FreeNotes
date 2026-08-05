import type { BookingStatus, NotebookBatch } from "@/data/types";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const statusLabel: Record<BookingStatus, string> = {
  "booking-open": "Booking open",
  "coming-soon": "Coming soon",
  closed: "Closed",
};

type NotebookBatchCardProps = {
  batch: NotebookBatch;
  selected?: boolean;
  onSelect: (batchId: string) => void;
};

export function NotebookBatchCard({
  batch,
  selected = false,
  onSelect,
}: NotebookBatchCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-xl border bg-white p-6 shadow-sm transition-all duration-200",
        selected
          ? "border-forest shadow-md shadow-forest/10 ring-1 ring-forest/20"
          : "border-ink/8 hover:border-forest/30 hover:shadow-md",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-2xl tracking-tight text-ink">
          {batch.name}
        </h3>
        <span
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold",
            batch.bookingStatus === "booking-open" &&
              "bg-emerald-50 text-emerald-700",
            batch.bookingStatus === "coming-soon" &&
              "bg-amber-50 text-amber-700",
            batch.bookingStatus === "closed" && "bg-rose-50 text-rose-700",
          )}
        >
          {statusLabel[batch.bookingStatus]}
        </span>
      </div>

      <p className="mt-4 text-3xl font-semibold tracking-tight text-forest">
        {batch.notebookCount.toLocaleString("en-US")}
        <span className="ml-2 text-sm font-medium text-muted">notebooks</span>
      </p>

      <dl className="mt-5 space-y-3 text-sm">
        <div>
          <dt className="text-muted">Distribution</dt>
          <dd className="mt-0.5 font-medium text-ink">{batch.distributionLabel}</dd>
        </div>
        <div>
          <dt className="text-muted">Target</dt>
          <dd className="mt-0.5 font-medium text-ink">{batch.targetDescription}</dd>
        </div>
      </dl>

      <div className="mt-auto pt-6">
        <Button
          type="button"
          className="w-full"
          variant={selected ? "primary" : "outline"}
          onClick={() => onSelect(batch.id)}
        >
          View placements
        </Button>
      </div>
    </article>
  );
}
