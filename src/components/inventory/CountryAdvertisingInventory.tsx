"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { CountryInventory } from "@/data/types";
import { AdvertisingInventoryTable } from "@/components/inventory/AdvertisingInventoryTable";
import { MediaKitPreview } from "@/components/inventory/MediaKitPreview";
import { NotebookBatchCard } from "@/components/inventory/NotebookBatchCard";
import { NotebookPreview } from "@/components/inventory/NotebookPreview";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { SectionTitle } from "@/components/ui/SectionTitle";

const howItWorksSteps = [
  {
    id: "choose",
    step: "01",
    title: "Choose your placement",
    description:
      "Browse available covers and pages for the selected notebook batch.",
  },
  {
    id: "artwork",
    step: "02",
    title: "Submit your artwork",
    description:
      "Send print-ready creative for the placements you reserved.",
  },
  {
    id: "distribute",
    step: "03",
    title: "We print and distribute notebooks",
    description:
      "Your brand reaches students through daily use across the school year.",
  },
];

type CountryAdvertisingInventoryProps = {
  inventory: CountryInventory;
};

export function CountryAdvertisingInventory({
  inventory,
}: CountryAdvertisingInventoryProps) {
  const defaultBatchId = inventory.batches[0]?.id ?? "";
  const [selectedBatchId, setSelectedBatchId] = useState(defaultBatchId);
  const [activePlacementId, setActivePlacementId] = useState<string | null>(
    null,
  );

  const selectedBatch = useMemo(
    () =>
      inventory.batches.find((batch) => batch.id === selectedBatchId) ??
      inventory.batches[0],
    [inventory.batches, selectedBatchId],
  );

  const activePlacement = useMemo(
    () =>
      selectedBatch?.placements.find(
        (placement) => placement.id === activePlacementId,
      ) ?? null,
    [activePlacementId, selectedBatch],
  );

  if (!selectedBatch) {
    return null;
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/8">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(27,58,47,0.08),_transparent_55%),linear-gradient(180deg,#F3F4F1_0%,#EAECE7_100%)]"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-forest-muted">
              {inventory.flag} {inventory.name}
            </p>
            <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {inventory.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              {inventory.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Contact us
              </Button>
              <Button href="#media-kit" variant="outline" size="lg">
                Download Media Kit
              </Button>
            </div>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-xl bg-forest/10 shadow-sm">
            <Image
              src={inventory.hero.image}
              alt={`FreeNotes notebooks in ${inventory.name}`}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Batches"
            title="Notebook batches"
            subtitle="Select a print run to inspect live advertising inventory."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {inventory.batches.map((batch) => (
              <NotebookBatchCard
                key={batch.id}
                batch={batch}
                selected={batch.id === selectedBatch.id}
                onSelect={(id) => {
                  setSelectedBatchId(id);
                  setActivePlacementId(null);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="inventory"
        className="scroll-mt-24 border-y border-ink/8 bg-sand/30 px-6 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Inventory"
            title={`${selectedBatch.name} placements`}
            subtitle="Available placements show live prices. Reserved and sold placements hide pricing."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <AdvertisingInventoryTable
              placements={selectedBatch.placements}
              activePlacementId={activePlacementId}
              onSelectPlacement={setActivePlacementId}
            />
            <NotebookPreview
              batch={selectedBatch}
              activePlacement={activePlacement}
            />
          </div>
        </div>
      </section>

      <section id="media-kit" className="scroll-mt-24 bg-paper px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <MediaKitPreview batch={selectedBatch} />
        </div>
      </section>

      <section className="border-t border-ink/8 bg-sand/40 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Process"
            title="How it works"
            subtitle="A clear path from placement selection to distribution."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {howItWorksSteps.map((step) => (
              <article
                key={step.id}
                className="rounded-xl border border-ink/8 bg-white p-6 shadow-sm"
              >
                <p className="font-display text-3xl text-forest/25">{step.step}</p>
                <h3 className="mt-4 font-display text-xl tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in this notebook batch?"
        subtitle={`Request a quotation for ${selectedBatch.name} in ${inventory.name}.`}
        buttonLabel="Request a quotation"
        buttonHref="/contact"
      />
    </>
  );
}
