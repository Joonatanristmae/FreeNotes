import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="top" className="relative border-b border-ink/8">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_rgba(27,58,47,0.08),_transparent_55%),linear-gradient(180deg,#F3F4F1_0%,#EAECE7_100%)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-16 lg:grid-cols-2 lg:gap-16 lg:pb-24 lg:pt-24">
        <div className="animate-fade-up z-10">
          <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            We give away{" "}
            <span className="text-accent">free notebooks</span> to students with{" "}
            <em className="font-display not-italic text-accent">your advertising</em>
          </h1>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#countries" size="lg">
              Select your country
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact us
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-up animation-delay-150 justify-self-center lg:justify-self-end lg:pl-24 xl:pl-32 lg:translate-x-24 xl:translate-x-30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/uuemad%20vihkud%20avatud.png"
            alt="Open FreeNotes notebooks with advertising"
            width={2400}
            height={1800}
            className="h-auto w-full max-w-xl drop-shadow-[0_20px_40px_rgba(26,31,28,0.18)] lg:max-w-none lg:w-[38rem] xl:w-[42rem]"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
