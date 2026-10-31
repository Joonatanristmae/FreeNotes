import Image from "next/image";
import { howItWorks as defaultSteps } from "@/data/site";

const icons = [
  <svg key="1" viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 9h18" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
    <path d="M7 4h10v16H7V4Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 4v16M14 8h1.5M14 12h1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
    <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 19c1.5-3 4-4.5 7-4.5S17.5 16 19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
];

type HowItWorksStep = {
  id: string;
  step: string;
  title: string;
  description: string;
};

type HowItWorksProps = {
  eyebrow?: string;
  title?: string;
  steps?: HowItWorksStep[];
  imageAlt?: string;
};

export function HowItWorks({
  eyebrow = "Process",
  title = "How it works",
  steps = defaultSteps,
  imageAlt = "FreeNotes notebooks",
}: HowItWorksProps) {
  return (
    <section className="bg-paper px-6 py-20 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
        <div className="relative mx-auto aspect-square w-full max-w-[18rem] shrink-0 sm:max-w-[20rem] lg:mx-0 lg:w-[20rem] lg:max-w-none">
          <Image
            src="/cropped_circle_image.png"
            alt={imageAlt}
            fill
            unoptimized
            className="object-contain drop-shadow-lg"
            sizes="320px"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="max-w-xl -translate-x-3 sm:-translate-x-5 lg:-translate-x-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-forest-muted">
              {eyebrow}
            </p>
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              {title}
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-5">
            {steps.map((step, index) => (
              <article
                key={step.id}
                className="relative border border-ink/8 bg-white p-5 transition-colors duration-200 hover:border-forest/25 sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-forest">{icons[index]}</span>
                  <span className="font-display text-2xl text-forest/20">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
