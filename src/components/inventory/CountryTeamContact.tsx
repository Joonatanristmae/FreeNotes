import Image from "next/image";
import type { CountryTeamMember } from "@/data/types";
import { siteConfig } from "@/data/site";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { encodeAssetPath } from "@/lib/utils";

type CountryTeamContactProps = {
  countryName: string;
  email?: string;
  team: CountryTeamMember[];
};

export function CountryTeamContact({
  countryName,
  email = siteConfig.email,
  team,
}: CountryTeamContactProps) {
  const mailto = `mailto:${email}`;

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-ink/8 bg-forest px-6 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          light
          title="Contact us"
          subtitle={`Talk to the FreeNotes team in ${countryName} about placements, batches, and reservations.`}
        />

        <a
          href={mailto}
          className="mt-8 inline-block font-display text-2xl tracking-tight text-white transition-colors hover:text-sand sm:text-3xl"
        >
          {email}
        </a>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {team.map((member) => (
            <li
              key={member.id}
              className="flex items-center gap-5 border border-white/15 bg-white/5 p-5"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-white/10 sm:h-24 sm:w-24">
                {member.photo ? (
                  <Image
                    src={encodeAssetPath(member.photo)}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center text-xs text-sand/50"
                    aria-hidden
                  >
                    Photo
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <p className="font-display text-xl tracking-tight text-white">
                  {member.name}
                </p>
                {member.role ? (
                  <p className="mt-1 text-sm text-sand/70">{member.role}</p>
                ) : null}
                {member.isPlaceholder ? (
                  <p className="mt-2 text-xs text-sand/50">
                    Placeholder — replace in country data
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
