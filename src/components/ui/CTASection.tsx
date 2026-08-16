import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonHref: string;
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
  className?: string;
  id?: string;
};

export function CTASection({
  title,
  subtitle,
  buttonLabel,
  buttonHref,
  secondaryButtonLabel,
  secondaryButtonHref,
  className,
  id,
}: CTASectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden bg-forest px-6 py-20 sm:py-24",
        id && "scroll-mt-24",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 60%, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px, 64px 64px",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-2xl text-base text-sand/80 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={buttonHref} variant="secondary" size="lg">
            {buttonLabel}
          </Button>
          {secondaryButtonLabel && secondaryButtonHref ? (
            <Button
              href={secondaryButtonHref}
              variant="ghost"
              size="lg"
              className="border border-white/35 text-white hover:bg-white/10 hover:text-white"
            >
              {secondaryButtonLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
