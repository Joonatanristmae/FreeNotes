import type { Metadata } from "next";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "FreeNotes started in Estonia to provide free educational notebooks funded by advertising — expanding across Europe.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/8">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#F3F4F1_0%,#E8EBE4_100%)]"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-forest-muted">
              Our story
            </p>
            <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Free notebooks. Meaningful reach.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              FreeNotes started in Estonia with a clear goal: give students useful
              educational tools while creating a new advertising channel for
              companies.
            </p>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden bg-forest/10">
            <Image
              src="/images/notebook-covers.png"
              alt="FreeNotes notebook covers"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3">
          <article className="border-t-2 border-forest pt-6">
            <h2 className="font-display text-2xl tracking-tight text-ink">
              Estonian origins
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              We began by partnering with schools and universities across Estonia,
              proving that free, high-quality notebooks can carry trusted brand
              messages into everyday student life.
            </p>
          </article>
          <article className="border-t-2 border-forest pt-6">
            <h2 className="font-display text-2xl tracking-tight text-ink">
              Educational impact
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Every campaign funds notebooks that students actually need. Brands
              support education while gaining months of physical presence —
              not a fleeting digital impression.
            </p>
          </article>
          <article className="border-t-2 border-forest pt-6">
            <h2 className="font-display text-2xl tracking-tight text-ink">
              European expansion
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Lithuania, Finland, and the United Kingdom are next. Our model is
              built to scale country by country with local distribution networks
              and market-specific packages.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-sand/50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            align="center"
            title="Built for advertisers who want lasting attention"
            subtitle="We combine media planning discipline with a product students use daily. That is the FreeNotes difference."
          />
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/countries/estonia" size="lg">
              Explore Estonia
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Talk to us
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Grow with FreeNotes"
        subtitle="Whether you are launching a first campaign or planning multi-market reach, we are ready to help."
        buttonLabel="Request advertising information"
        buttonHref="/contact"
      />
    </>
  );
}
