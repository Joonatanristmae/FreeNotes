import { AdvertisingPrices } from "@/components/inventory/AdvertisingPrices";
import { CountryBatchesSection } from "@/components/inventory/CountryBatchesSection";
import { CountryTeamContact } from "@/components/inventory/CountryTeamContact";
import { DistributionLocations } from "@/components/inventory/DistributionLocations";
import { Benefits } from "@/components/sections/Benefits";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import {
  getFinlandPageCopy,
  getLocalizedFinlandInventory,
  type FinlandLocale,
} from "@/data/countries/finland/i18n";

type FinlandLandingProps = {
  locale: FinlandLocale;
};

export function FinlandLanding({ locale }: FinlandLandingProps) {
  const copy = getFinlandPageCopy(locale);
  const inventory = getLocalizedFinlandInventory(locale);

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

      <CountryBatchesSection inventory={inventory} market="fi" locale={locale} />

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
