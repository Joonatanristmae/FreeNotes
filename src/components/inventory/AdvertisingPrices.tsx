import type { AdvertisingPrice } from "@/data/types";
import { AdvertisingPriceCard } from "@/components/inventory/AdvertisingPriceCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

type AdvertisingPricesProps = {
  prices: AdvertisingPrice[];
  title?: string;
  subtitle?: string;
};

export function AdvertisingPrices({
  prices,
  title = "Advertising prices",
  subtitle = "Advertising funds the production and free distribution of the notebooks.",
}: AdvertisingPricesProps) {
  const hasPlaceholders = prices.some((price) => price.isPlaceholder);

  return (
    <section
      id="advertising-prices"
      className="scroll-mt-24 border-y border-ink/8 bg-sand/30 px-6 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle title={title} subtitle={subtitle} />

        {hasPlaceholders ? (
          <p className="mt-4 text-sm text-muted">
            Prices marked as placeholder are illustrative — replace with confirmed
            rates in country data.
          </p>
        ) : null}

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {prices.map((item) => (
            <AdvertisingPriceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
