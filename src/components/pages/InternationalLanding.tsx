import { Benefits } from "@/components/sections/Benefits";
import { CountriesPreview } from "@/components/sections/CountriesPreview";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PartnersPreview } from "@/components/sections/PartnersPreview";
import { ContactCTA } from "@/components/blocks/ContactCTA";

/** Shared international marketing homepage (served at `/` and `/international`). */
export function InternationalLanding() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Benefits />
      <CountriesPreview />
      <PartnersPreview />
      <ContactCTA />
    </>
  );
}
