import Image from "next/image";
import type { Country } from "@/data/types";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { encodeAssetPath } from "@/lib/utils";

type DistributionNetworkProps = {
  country: Country;
};

export function DistributionNetwork({ country }: DistributionNetworkProps) {
  return (
    <section className="bg-paper px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Distribution"
          title="Distribution network"
          subtitle={`Institutions where FreeNotes notebooks reach students in ${country.name}.`}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl tracking-tight text-ink">
              Universities
            </h3>
            <ul className="mt-6 space-y-3">
              {country.universities.map((uni) => (
                <li
                  key={uni.id}
                  className="flex items-center gap-4 border border-ink/8 bg-white px-4 py-3"
                >
                  {uni.logo ? (
                    <div className="relative h-10 w-16 shrink-0">
                      <Image
                        src={encodeAssetPath(uni.logo)}
                        alt=""
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                  ) : (
                    <div className="flex h-10 w-16 shrink-0 items-center justify-center bg-sand text-xs text-muted">
                      Logo
                    </div>
                  )}
                  <span className="text-sm font-medium text-ink">{uni.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl tracking-tight text-ink">
              High schools
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {country.highSchools.map((school) => (
                <li
                  key={school.id}
                  className="flex items-center gap-3 border border-ink/8 bg-white px-3 py-3"
                >
                  {school.logo ? (
                    <div className="relative h-8 w-12 shrink-0">
                      <Image
                        src={encodeAssetPath(school.logo)}
                        alt=""
                        fill
                        className="object-contain"
                        sizes="48px"
                      />
                    </div>
                  ) : null}
                  <span className="text-sm text-ink">{school.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex min-h-[280px] items-center justify-center border border-dashed border-forest/30 bg-sand/40">
          <div className="px-6 text-center">
            <p className="font-display text-xl text-ink">Interactive map</p>
            <p className="mt-2 text-sm text-muted">
              Placeholder for a distribution map of {country.name}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
