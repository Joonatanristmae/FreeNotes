import { PartnerLogo } from "@/components/ui/PartnerLogo";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { partnerCampaigns } from "@/data/partners";

export function PartnersPreview() {
  const preview = partnerCampaigns.slice(0, 8);

  return (
    <section id="partners" className="scroll-mt-24 border-t border-ink/8 bg-sand/40 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Previous partners"
          subtitle="Organisations that have used FreeNotes to reach students."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {preview.map((partner) => (
            <PartnerLogo
              key={partner.id}
              name={partner.name}
              logo={partner.logo}
              scale={partner.logoScale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
