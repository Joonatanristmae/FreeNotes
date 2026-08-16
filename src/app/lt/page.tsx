import type { Metadata } from "next";
import { CountryBatchesSection } from "@/components/inventory/CountryBatchesSection";
import { AdvertisingPrices } from "@/components/inventory/AdvertisingPrices";
import { CountryTeamContact } from "@/components/inventory/CountryTeamContact";
import { DistributionLocations } from "@/components/inventory/DistributionLocations";
import { Benefits } from "@/components/sections/Benefits";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { lithuaniaInventory } from "@/data/countries/lithuania";

export const metadata: Metadata = {
  title: "FreeNotes Lithuania — Advertising",
  description:
    "Free notebooks for Lithuanian students, funded by advertising. View distribution, prices, and upcoming batches.",
};

export default function LithuaniaPage() {
  const inventory = lithuaniaInventory;

  return (
    <>
      <Hero
        primaryCta={{
          href: "#upcoming-batches",
          label: "View upcoming batches",
        }}
        secondaryCta={{ href: "#contact", label: "Contact us" }}
      />

      <HowItWorks />

      <Benefits title="Why FreeNotes" />

      <DistributionLocations
        countryName={inventory.name}
        locations={inventory.distributionLocations}
        title="How and where we distribute"
        subtitle="We deliver FreeNotes notebooks directly to school buildings in Lithuania, where students can take them for free. Replace the placeholder school list below with confirmed locations."
      />

      <AdvertisingPrices
        prices={inventory.advertisingPrices}
        title="General pricelist"
        subtitle="Advertising funds the production and free distribution of notebooks in Lithuania."
      />

      <CountryBatchesSection inventory={inventory} />

      <CountryTeamContact
        countryName={inventory.name}
        team={inventory.teamContacts ?? []}
      />
    </>
  );
}
