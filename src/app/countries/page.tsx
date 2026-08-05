import type { Metadata } from "next";
import { CountryCard } from "@/components/ui/CountryCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTASection } from "@/components/ui/CTASection";
import { countries } from "@/data/countries";

export const metadata: Metadata = {
  title: "Countries",
  description:
    "Explore FreeNotes markets across Europe. Estonia is available now; more countries are coming soon.",
};

export default function CountriesPage() {
  return (
    <>
      <section className="border-b border-ink/8 bg-[linear-gradient(180deg,#F3F4F1_0%,#E8EBE4_100%)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Markets"
            title="Countries"
            subtitle="FreeNotes is expanding across Europe. Advertise where we are live today, and get early access to upcoming markets."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {countries.map((country) => (
              <CountryCard key={country.slug} country={country} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Planning a multi-country campaign?"
        subtitle="Tell us where you want to reach students and we will advise on availability."
        buttonLabel="Contact FreeNotes"
        buttonHref="/contact"
      />
    </>
  );
}
