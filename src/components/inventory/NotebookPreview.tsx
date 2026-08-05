"use client";

import Image from "next/image";
import type { NotebookBatch, Placement } from "@/data/types";
import { cn } from "@/lib/utils";

type NotebookPreviewProps = {
  batch: NotebookBatch;
  activePlacement?: Placement | null;
};

export function NotebookPreview({
  batch,
  activePlacement,
}: NotebookPreviewProps) {
  const imageSrc =
    activePlacement?.id.includes("cover") || !activePlacement
      ? batch.previewImages.cover
      : batch.previewImages.open;

  return (
    <div className="rounded-xl border border-ink/8 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest-muted">
        Notebook preview
      </p>
      <h3 className="mt-2 font-display text-xl text-ink">
        {activePlacement ? activePlacement.name : batch.name}
      </h3>
      <p className="mt-1 text-sm text-muted">
        {activePlacement
          ? "Highlighted placement in the notebook mockup."
          : "Select a placement to highlight it here."}
      </p>

      <div className="relative mt-5 aspect-[4/5] overflow-hidden rounded-lg bg-sand">
        <Image
          src={imageSrc}
          alt={`${batch.name} notebook preview`}
          fill
          unoptimized={imageSrc.includes("%") || imageSrc.endsWith(".png")}
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 28rem"
        />
        {activePlacement ? (
          <div
            className={cn(
              "absolute inset-x-6 rounded-md border-2 border-accent/80 bg-accent/20 transition-all duration-300",
              activePlacement.id === "front-cover" && "top-4 h-1/3",
              activePlacement.id === "back-cover" && "bottom-4 h-1/3",
              activePlacement.id === "inside-cover" && "top-1/4 h-1/4",
              activePlacement.id.startsWith("page-") && "bottom-8 left-6 right-6 h-12",
            )}
            aria-hidden
          />
        ) : null}
      </div>
    </div>
  );
}
