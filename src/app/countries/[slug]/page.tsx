import type { Metadata } from "next";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { DistributionNetwork } from "@/components/sections/DistributionNetwork";
import { CTASection } from "@/components/ui/CTASection";
import { PricingCard } from "@/components/ui/PricingCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { StatisticCard } from "@/components/ui/StatisticCard";
import { Button } from "@/components/ui/Button";
import { countries, getCountryBySlug, getCountryHref } from "@/data/countries";
import { encodeAssetPath } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return {};
  return {
    title: country.hero.title,
    description: country.hero.subtitle,
  };
}

export default async function CountryPage({ params }: PageProps) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  if (country.hasInventory) {
    redirect(getCountryHref(country) ?? `/${country.slug}`);
  }

  if (!country.active) {
    return (
      <section className="border-b border-ink/8 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-4xl" aria-hidden>
            {country.flag}
          </p>
          <h1 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
            {country.hero.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{country.hero.subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/" size="lg">
              Back to International
            </Button>
            <Button href="/international#become-a-partner" variant="outline" size="lg">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/8">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(27,58,47,0.1),_transparent_50%),linear-gradient(180deg,#F3F4F1_0%,#EAECE7_100%)]"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-forest-muted">
              {country.flag} {country.name}
            </p>
            <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {country.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {country.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#packages" size="lg">
                View packages
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Request information
              </Button>
            </div>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden bg-forest/10">
            <Image
              src="/images/notebooks-campus.webp"
              alt={`FreeNotes notebooks in ${country.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-b border-ink/8 bg-paper px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {country.stats.map((stat) => (
            <StatisticCard key={stat.id} statistic={stat} />
          ))}
        </div>
      </section>

      <DistributionNetwork country={country} />

      <section id="packages" className="scroll-mt-24 border-t border-ink/8 bg-sand/40 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Advertising"
            title="Advertising packages"
            subtitle={`Choose placement options for the ${country.name} notebook print run. Pricing is tailored per campaign.`}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {country.pricing.map((pkg) => (
              <PricingCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Track record"
            title={`Previous ${country.name} partners`}
            subtitle="Brands and institutions that have advertised with FreeNotes."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {country.partners.map((partner) => (
              <article
                key={partner.id}
                className="border border-ink/8 bg-white p-6"
              >
                <div className="relative mb-5 h-14 w-full">
                  <Image
                    src={encodeAssetPath(partner.logo)}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain object-left"
                    style={
                      partner.logoScale
                        ? { transform: `scale(${partner.logoScale})`, transformOrigin: "left center" }
                        : undefined
                    }
                    sizes="200px"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl text-ink">{partner.name}</h3>
                  <span className="text-sm text-muted">{partner.year}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {partner.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Advertise with FreeNotes ${country.name}`}
        subtitle="Request a media kit, package details, and distribution timeline."
        buttonLabel="Request advertising information"
        buttonHref="/contact"
      />
    </>
  );
}
