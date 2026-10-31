import Link from "next/link";
import { AdvertisingPrices } from "@/components/inventory/AdvertisingPrices";
import { CountryBatchesSection } from "@/components/inventory/CountryBatchesSection";
import { CountryTeamContact } from "@/components/inventory/CountryTeamContact";
import { DistributionLocations } from "@/components/inventory/DistributionLocations";
import { Benefits } from "@/components/sections/Benefits";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import {
  getLithuaniaPageCopy,
  getLocalizedLithuaniaInventory,
  type LithuaniaLocale,
} from "@/data/countries/lithuania/i18n";

type LithuaniaLandingProps = {
  locale: LithuaniaLocale;
};

export function LithuaniaLanding({ locale }: LithuaniaLandingProps) {
  const copy = getLithuaniaPageCopy(locale);
  const inventory = getLocalizedLithuaniaInventory(locale);

  const headline = (
    <>
      {copy.hero.headlineBefore}
      <span className="text-accent">{copy.hero.headlineAccent1}</span>
      {copy.hero.headlineMiddle}
      <em className="font-display not-italic text-accent">
        {copy.hero.headlineAccent2}
      </em>
    </>
  );

  return (
    <>
      <div className="border-b border-ink/8 bg-paper/80">
        <div className="mx-auto flex max-w-6xl items-center justify-end gap-3 px-6 py-2 text-sm">
          <span className="text-muted" aria-hidden>
            {locale === "lt" ? "LT" : "EN"}
          </span>
          <Link
            href={copy.alternateHref}
            className="font-medium text-forest underline-offset-2 hover:underline"
            hrefLang={copy.alternateLocale}
          >
            {copy.langSwitchLabel}
          </Link>
        </div>
      </div>

      <Hero
        headline={headline}
        imageAlt={copy.hero.imageAlt}
        primaryCta={{
          href: "#upcoming-batches",
          label: copy.hero.primaryCta,
        }}
        secondaryCta={{ href: "#contact", label: copy.hero.secondaryCta }}
      />

      <HowItWorks
        eyebrow={copy.howItWorks.eyebrow}
        title={copy.howItWorks.title}
        steps={copy.howItWorks.steps}
        imageAlt={copy.hero.imageAlt}
      />

      <Benefits title={copy.benefits.title} items={copy.benefits.items} />

      <DistributionLocations
        countryName={inventory.name}
        locations={inventory.distributionLocations}
        title={copy.distribution.title}
        subtitle={copy.distribution.subtitle}
        placeholderNote={copy.distribution.placeholderNote}
        columns={copy.distribution.columns}
        placeholderTag={copy.distribution.placeholderTag}
      />

      <AdvertisingPrices
        prices={inventory.advertisingPrices}
        title={copy.prices.title}
        subtitle={copy.prices.subtitle}
        placeholderNote={copy.prices.placeholderNote}
        sizePrefix={copy.prices.sizePrefix}
        moreInfoAria={copy.prices.moreInfoAria}
      />

      <CountryBatchesSection inventory={inventory} locale={locale} />

      <CountryTeamContact
        countryName={inventory.name}
        team={inventory.teamContacts ?? []}
        title={copy.contact.title}
        subtitle={copy.contact.subtitle}
        photoPlaceholder={copy.contact.photoPlaceholder}
      />
    </>
  );
}
