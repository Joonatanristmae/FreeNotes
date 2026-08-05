import Image from "next/image";
import type { PricingPackage } from "@/data/types";
import { Button } from "@/components/ui/Button";
import { cn, encodeAssetPath } from "@/lib/utils";

type PricingCardProps = {
  package: PricingPackage;
  className?: string;
};

export function PricingCard({ package: pkg, className }: PricingCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col border bg-white p-6 sm:p-8",
        pkg.featured
          ? "border-forest shadow-lg shadow-forest/10"
          : "border-ink/8",
        className,
      )}
    >
      {pkg.image ? (
        <div className="relative mb-6 aspect-[4/3] overflow-hidden bg-sand">
          <Image
            src={encodeAssetPath(pkg.image)}
            alt={pkg.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : null}
      {pkg.featured ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-forest">
          Most visible
        </p>
      ) : null}
      <h3 className="font-display text-2xl tracking-tight text-ink">
        {pkg.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {pkg.description}
      </p>
      <div className="mt-6 space-y-2 border-t border-ink/8 pt-5">
        <p className="text-sm text-ink">
          <span className="text-muted">Reach · </span>
          {pkg.reach}
        </p>
        <p className="font-display text-xl text-forest">{pkg.price}</p>
      </div>
      <Button href="/contact" className="mt-6 w-full" size="lg">
        {pkg.ctaLabel}
      </Button>
    </article>
  );
}
