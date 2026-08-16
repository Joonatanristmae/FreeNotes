"use client";

import Image from "next/image";
import { useCallback } from "react";
import type { CountryInventory, NotebookBatch } from "@/data/types";
import { siteConfig } from "@/data/site";
import { AdvertisingPrices } from "@/components/inventory/AdvertisingPrices";
import { DistributionLocations } from "@/components/inventory/DistributionLocations";
import { PreviousPartners } from "@/components/inventory/PreviousPartners";
import { UpcomingBatches } from "@/components/inventory/UpcomingBatches";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";

type CountryAdvertisingInventoryProps = {
  inventory: CountryInventory;
};

export function CountryAdvertisingInventory({
  inventory,
}: CountryAdvertisingInventoryProps) {
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
    <>
      {/* 1. Country hero — compact */}
      <section className="relative overflow-hidden border-b border-ink/8">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(27,58,47,0.08),_transparent_55%),linear-gradient(180deg,#F3F4F1_0%,#EAECE7_100%)]"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-12 lg:py-16">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-forest-muted">
              {inventory.flag} Advertising in {inventory.name}
            </p>
            <h1 className="font-display text-3xl tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {inventory.hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {inventory.hero.subtitle}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="#upcoming-batches" size="lg">
                View upcoming batches
              </Button>
              <Button href={contactHref} variant="outline" size="lg">
                Contact us
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-[5/4] w-full max-w-md overflow-hidden bg-forest/5 lg:max-w-none">
            <Image
              src={inventory.hero.image}
              alt={`FreeNotes notebooks in ${inventory.name}`}
              fill
              unoptimized
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. Where we distribute */}
      <DistributionLocations
        countryName={inventory.name}
        locations={inventory.distributionLocations}
      />

      {/* 3. Advertising prices */}
      <AdvertisingPrices prices={inventory.advertisingPrices} />

      {/* 4–5. Upcoming batches + availability */}
      <UpcomingBatches
        batches={inventory.batches}
        onReservePlacement={handleReservePlacement}
      />

      {/* 6. Previous partners — hidden when empty */}
      <PreviousPartners
        countryName={inventory.name}
        partners={inventory.previousPartners ?? []}
      />

      {/* 7. CTA / contact */}
      <CTASection
        id="reserve"
        title="Interested in advertising?"
        subtitle={`Contact us to reserve an available placement in ${inventory.name}, or ask about upcoming batches.`}
        buttonLabel="Contact us"
        buttonHref={contactHref}
        secondaryButtonLabel="Reserve advertising space"
        secondaryButtonHref={contactHref}
      />
    </>
  );
}
