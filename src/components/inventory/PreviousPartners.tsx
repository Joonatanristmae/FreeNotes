import type { CountryPartner } from "@/data/types";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { encodeAssetPath } from "@/lib/utils";

type PreviousPartnersProps = {
  countryName: string;
  partners: CountryPartner[];
};

/**
 * Renders only when partners exist.
 * Leave previousPartners empty in country data to hide this section.
 */
export function PreviousPartners({
  countryName,
  partners,
}: PreviousPartnersProps) {
  if (partners.length === 0) return null;

  return (
    <section
      id="previous-partners"
      className="scroll-mt-24 border-t border-ink/8 bg-paper px-6 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Previous advertising partners"
          subtitle={`Brands and institutions that have advertised with FreeNotes in ${countryName}.`}
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <li
              key={partner.id}
              className="flex flex-col border border-ink/8 bg-white p-5 shadow-sm"
            >
              <div className="relative mb-4 h-12 w-28">
                <Image
                  src={encodeAssetPath(partner.logo)}
                  alt=""
                  fill
                  className="object-contain object-left"
                  sizes="112px"
                  style={
                    partner.logoScale
                      ? { transform: `scale(${partner.logoScale})` }
                      : undefined
                  }
                />
              </div>
              <h3 className="font-medium text-ink">{partner.name}</h3>
              <p className="mt-1 text-xs text-muted">{partner.year}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {partner.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
