import type { DistributionLocation } from "@/data/types";
import { formatCount } from "@/data/countries/_shared";
import { SectionTitle } from "@/components/ui/SectionTitle";

type DistributionLocationsProps = {
  countryName: string;
  locations: DistributionLocation[];
  title?: string;
  subtitle?: string;
};

export function DistributionLocations({
  countryName,
  locations,
  title = "Where we distribute",
  subtitle,
}: DistributionLocationsProps) {
  const hasPlaceholders = locations.some((location) => location.isPlaceholder);
  const resolvedSubtitle =
    subtitle ??
    `FreeNotes notebooks are distributed directly through schools to students in ${countryName}.`;

  return (
    <section id="distribution" className="scroll-mt-24 bg-paper px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title={title} subtitle={resolvedSubtitle} />

        {hasPlaceholders ? (
          <p className="mt-4 text-sm text-muted">
            School list below is placeholder data — replace in country data when
            confirmed.
          </p>
        ) : null}

        <div className="mt-8 overflow-hidden rounded-xl border border-ink/8 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 bg-sand/40">
                  <th className="px-4 py-3 font-semibold text-ink">School</th>
                  <th className="px-4 py-3 font-semibold text-ink">City</th>
                  <th className="px-4 py-3 text-right font-semibold text-ink">
                    Students
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-ink">
                    Notebooks
                  </th>
                </tr>
              </thead>
              <tbody>
                {locations.map((location) => (
                  <tr
                    key={location.id}
                    className="border-b border-ink/6 last:border-0"
                  >
                    <td className="px-4 py-3 font-medium text-ink">
                      {location.schoolName}
                      {location.isPlaceholder ? (
                        <span className="ml-2 text-xs font-normal text-muted">
                          placeholder
                        </span>
                      ) : null}
                    </td>
                    <td className="px-4 py-3 text-muted">{location.city}</td>
                    <td className="px-4 py-3 text-right tabular-nums text-ink">
                      {formatCount(location.studentCount)}
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums text-ink">
                      {formatCount(location.notebookCount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
