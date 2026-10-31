import { Button } from "@/components/ui/Button";
import type { ReactNode } from "react";

const defaultHeadline = (
  <>
    We give away{" "}
    <span className="text-accent">free notebooks</span> to students with{" "}
    <em className="font-display not-italic text-accent">your advertising</em>
  </>
);

type HeroCta = {
  href: string;
  label: string;
};

type HeroProps = {
  headline?: ReactNode;
  imageAlt?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
};

const defaultPrimary: HeroCta = {
  href: "#countries",
  label: "Select your country",
};

const defaultSecondary: HeroCta = {
  href: "/international#become-a-partner",
  label: "Contact us",
};

export function Hero({
  headline = defaultHeadline,
  imageAlt = "Open FreeNotes notebooks with advertising",
  primaryCta = defaultPrimary,
  secondaryCta = defaultSecondary,
}: HeroProps = {}) {
  return (
    <section id="top" className="relative overflow-hidden border-b border-ink/8">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(27,58,47,0.08),_transparent_55%),linear-gradient(180deg,#F3F4F1_0%,#EAECE7_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-8 lg:hidden">
        <div className="relative">
          <h1 className="relative z-10 w-[78%] max-w-[18rem] font-display text-[clamp(1.75rem,7vw,2.5rem)] leading-[1.12] tracking-tight text-ink [text-shadow:0_1px_0_rgba(255,255,255,0.85)] sm:ml-10 sm:max-w-[24rem] md:ml-16 md:max-w-[26rem]">
            {headline}
          </h1>
          <div className="relative -mt-20 mx-auto w-[88%] max-w-md sm:-mt-24 sm:max-w-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/uuemad%20vihkud%20avatud.png"
              alt={imageAlt}
              width={2400}
              height={1800}
              className="h-auto w-full drop-shadow-[0_20px_40px_rgba(26,31,28,0.18)]"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href={primaryCta.href} size="lg">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} variant="outline" size="lg">
            {secondaryCta.label}
          </Button>
        </div>
      </div>

      <div className="relative mx-auto hidden max-w-6xl grid-cols-2 items-center gap-x-12 gap-y-8 px-6 pb-24 pt-24 lg:grid">
        <div>
          <h1 className="font-display text-6xl leading-[1.1] tracking-tight text-ink">
            {headline}
          </h1>
          <div className="mt-8 flex flex-row gap-3">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="outline" size="lg">
              {secondaryCta.label}
            </Button>
          </div>
        </div>

        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/uuemad%20vihkud%20avatud.png"
            alt={imageAlt}
            width={2400}
            height={1800}
            className="h-auto w-full drop-shadow-[0_20px_40px_rgba(26,31,28,0.18)]"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
