import Image from "next/image";
import Link from "next/link";
import { countries } from "@/data/countries";
import { siteConfig } from "@/data/site";

export function ContactCTA() {
  const mailto = `mailto:${siteConfig.email}`;
  const selectableCountries = countries;

  return (
    <section id="become-a-partner" className="relative scroll-mt-24 overflow-hidden border-t border-ink/8 bg-forest">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
            Become a partner
          </h2>
          <p className="mt-8 text-sm text-sand/60 sm:text-base">Contact us:</p>
          <a
            href={mailto}
            className="mt-2 inline-block text-xl font-medium tracking-tight text-white transition-colors hover:text-sand sm:text-2xl"
          >
            {siteConfig.email}
          </a>

          <div className="mt-10 border-t border-white/15 pt-8">
            <p className="max-w-md text-sm leading-relaxed text-sand/75 sm:text-base">
              For more region-based information, choose your country.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {selectableCountries.map((country) => {
                const href = country.hasInventory
                  ? `/${country.slug}`
                  : country.active
                    ? `/countries/${country.slug}`
                    : "/countries";

                return (
                  <Link
                    key={country.slug}
                    href={href}
                    className="inline-flex items-center gap-1.5 rounded-md border border-white/25 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/10"
                  >
                    <span aria-hidden>{country.flag}</span>
                    {country.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative mx-auto aspect-[5/4] w-full max-w-xl scale-110 lg:mx-0 lg:max-w-none lg:scale-125">
          <Image
            src="/vihku-ava-ja-lõpukaaned.png"
            alt="FreeNotes notebook covers with advertising"
            fill
            unoptimized
            className="object-contain object-center"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      </div>
    </section>
  );
}
