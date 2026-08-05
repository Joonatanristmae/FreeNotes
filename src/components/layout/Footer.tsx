import Image from "next/image";
import Link from "next/link";
import { footerNav, siteConfig } from "@/data/site";

export function Footer() {
  const mailto = `mailto:${siteConfig.email}`;

  return (
    <footer className="border-t border-ink/8 bg-ink text-sand">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/vihku%20logo.svg"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 brightness-0 invert"
            />
            <span className="font-display text-2xl tracking-tight text-white">
              {siteConfig.companyName}
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand/70">
            {siteConfig.description}
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sand/50">
            Company
          </p>
          <ul className="mt-4 space-y-3">
            {footerNav.company.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-sand/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sand/50">
            Advertising
          </p>
          <ul className="mt-4 space-y-3">
            {footerNav.advertising.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-sand/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8 lg:col-span-3">
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
