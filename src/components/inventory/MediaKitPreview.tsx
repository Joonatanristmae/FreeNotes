"use client";

import Image from "next/image";
import { useState } from "react";
import type { NotebookBatch } from "@/data/types";
import { Button } from "@/components/ui/Button";

type MediaKitPreviewProps = {
  batch: NotebookBatch;
};

export function MediaKitPreview({ batch }: MediaKitPreviewProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="rounded-xl border border-ink/8 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest-muted">
          Media kit
        </p>
        <h2 className="mt-2 font-display text-3xl tracking-tight text-ink">
          Pricing brochure
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Preview the pricing sheet for {batch.name}. Replace this placeholder
          with your designed brochure when ready.
        </p>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative mt-8 block aspect-[16/10] w-full overflow-hidden rounded-lg border border-ink/8 bg-sand text-left transition hover:border-forest/30"
        >
          <Image
            src={batch.mediaKit.previewImage}
            alt={`${batch.name} pricing brochure preview`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 72rem"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          <span className="absolute bottom-4 left-4 rounded-md bg-white/95 px-3 py-1.5 text-sm font-medium text-ink">
            Click to view full size
          </span>
        </button>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button type="button" onClick={() => setOpen(true)}>
            View full size
          </Button>
          <Button href={batch.mediaKit.pdfUrl} variant="outline">
            Download PDF
          </Button>
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Pricing brochure lightbox"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-ink/8 px-4 py-3">
              <p className="text-sm font-medium text-ink">
                {batch.name} · Pricing brochure
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-1.5 text-sm text-muted hover:bg-sand hover:text-ink"
              >
                Close
              </button>
            </div>
            <div className="relative aspect-[16/10] w-full bg-sand">
              <Image
                src={batch.mediaKit.previewImage}
                alt={`${batch.name} pricing brochure`}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
