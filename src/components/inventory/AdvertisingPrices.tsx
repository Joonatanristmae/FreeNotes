import type { AdvertisingPrice } from "@/data/types";
import { formatPrice } from "@/data/countries/_shared";
import { SectionTitle } from "@/components/ui/SectionTitle";

type AdvertisingPricesProps = {
  prices: AdvertisingPrice[];
};

export function AdvertisingPrices({ prices }: AdvertisingPricesProps) {
  const hasPlaceholders = prices.some((price) => price.isPlaceholder);

  return (
    <section
      id="advertising-prices"
      className="scroll-mt-24 border-y border-ink/8 bg-sand/30 px-6 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Advertising prices"
          subtitle="Advertising funds the production and free distribution of the notebooks."
        />

        {hasPlaceholders ? (
          <p className="mt-4 text-sm text-muted">
            Prices marked as placeholder are illustrative — replace with confirmed
            rates in country data.
          </p>
        ) : null}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {prices.map((item) => (
            <article
              key={item.id}
              className="flex flex-col border border-ink/8 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl tracking-tight text-ink">
                  {item.name}
                </h3>
                {item.isPlaceholder ? (
                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-muted">
                    Placeholder
                  </span>
                ) : null}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <p className="mt-5 font-display text-2xl tracking-tight text-forest">
                {item.price === null ? "On request" : formatPrice(item.price)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
