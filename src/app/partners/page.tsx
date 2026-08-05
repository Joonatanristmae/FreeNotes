import type { Metadata } from "next";
import { PartnerLogo } from "@/components/ui/PartnerLogo";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTASection } from "@/components/ui/CTASection";
import { partnerCampaigns } from "@/data/partners";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Companies and institutions that have advertised with FreeNotes across Europe.",
};

export default function PartnersPage() {
  return (
    <>
      <section className="border-b border-ink/8 bg-[linear-gradient(180deg,#F3F4F1_0%,#E8EBE4_100%)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Partners"
            title="Companies that have advertised with FreeNotes"
            subtitle="From education and public services to commercial brands — partners who value lasting student reach."
          />

          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {partnerCampaigns.map((partner) => (
              <PartnerLogo
                key={partner.id}
                name={partner.name}
                logo={partner.logo}
                showName
                scale={partner.logoScale}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Campaigns"
            title="Campaign examples"
            subtitle="Illustrative partner campaigns. Replace with live case studies from your CMS."
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-ink/15">
                  <th className="py-4 pr-4 font-semibold text-ink">Company</th>
                  <th className="py-4 pr-4 font-semibold text-ink">Country</th>
                  <th className="py-4 pr-4 font-semibold text-ink">Year</th>
                  <th className="py-4 pr-4 font-semibold text-ink">Notebooks</th>
                  <th className="py-4 font-semibold text-ink">Campaign goal</th>
                </tr>
              </thead>
              <tbody>
                {partnerCampaigns.map((campaign) => (
                  <tr key={campaign.id} className="border-b border-ink/8">
                    <td className="py-4 pr-4 font-medium text-ink">{campaign.name}</td>
                    <td className="py-4 pr-4 text-muted">{campaign.country}</td>
                    <td className="py-4 pr-4 text-muted">{campaign.year}</td>
                    <td className="py-4 pr-4 text-muted">
                      {campaign.notebooks.toLocaleString("en-US")}
                    </td>
                    <td className="max-w-sm py-4 text-muted">{campaign.campaignGoal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection
        title="Join our partner network"
        subtitle="Place your brand in the hands of students — every school day."
        buttonLabel="Become a partner"
        buttonHref="/contact"
      />
    </>
  );
}
