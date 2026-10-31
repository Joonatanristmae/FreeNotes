import Link from "next/link";
import type { Country } from "@/data/types";
import { getCountryHref } from "@/data/countries";
import { cn } from "@/lib/utils";

type CountryCardProps = {
  country: Country;
  className?: string;
};

export function CountryCard({ country, className }: CountryCardProps) {
  const href = getCountryHref(country);

  const content = (
    <div
      className={cn(
        "group flex h-full flex-col justify-between border border-ink/8 bg-white p-6 transition-colors duration-200",
        href
          ? "hover:border-forest/40 hover:bg-sand/40"
          : "opacity-80",
        className,
      )}
    >
      <div>
        <span className="text-3xl" aria-hidden>
          {country.flag}
        </span>
        <h3 className="mt-4 font-display text-2xl tracking-tight text-ink">
          {country.name}
        </h3>
      </div>
      <p
        className={cn(
          "mt-6 text-sm font-medium",
          href ? "text-forest" : "text-muted",
        )}
      >
        {country.active || country.hasInventory ? "Available" : "Coming soon"}
      </p>
    </div>
  );

  if (href) {
    const isExternal = /^https?:\/\//i.test(href);
    if (isExternal) {
      return (
        <a href={href} className="block h-full">
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
