import { CountryCard } from "@/components/ui/CountryCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { countries } from "@/data/countries";

export function CountriesPreview() {
  return (
    <section id="countries" className="scroll-mt-24 bg-paper px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Markets"
          title="Where we operate"
          subtitle="Select your country for more information and to reserve advertising spots."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((country) => (
            <CountryCard key={country.slug} country={country} />
          ))}
        </div>
      </div>
    </section>
  );
}
