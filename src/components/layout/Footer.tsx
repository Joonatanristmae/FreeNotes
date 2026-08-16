import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  const mailto = `mailto:${siteConfig.email}`;

  return (
    <footer className="border-t border-ink/8 bg-ink text-sand">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2">
        <div>
          <Link href="/" className="inline-flex items-center">
            <span className="font-display text-2xl tracking-tight text-white">
              {siteConfig.companyName}
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand/70">
            {siteConfig.description}
          </p>
        </div>

        <div className="flex flex-row gap-12 sm:gap-16 sm:justify-self-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sand/50">
              Contact
            </p>
            <p className="mt-4 text-sm text-sand/60">Advertising enquiries:</p>
            <a
              href={mailto}
              className="mt-1 inline-block text-sm text-sand/90 transition-colors hover:text-white"
            >
              {siteConfig.email}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sand/50">
              Location
            </p>
            <p className="mt-4 text-sm text-sand/80">{siteConfig.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
