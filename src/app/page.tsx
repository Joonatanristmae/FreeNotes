import { Benefits } from "@/components/sections/Benefits";
import { CountriesPreview } from "@/components/sections/CountriesPreview";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PartnersPreview } from "@/components/sections/PartnersPreview";
import { ContactCTA } from "@/components/blocks/ContactCTA";

export default function HomePage() {
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
