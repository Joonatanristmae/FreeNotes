"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  getNavLinksByPathname,
  getRegionByPathname,
} from "@/data/regions";
import { navLinks, siteConfig } from "@/data/site";
import { RegionSelector } from "@/components/layout/RegionSelector";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function NavItem({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  // Next.js Link can duplicate hash fragments (e.g. #top#countries).
  // Use a plain anchor for in-page / hash navigation.
  if (href.includes("#")) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

function LithuaniaLangSwitch({
  pathname,
  className,
  onNavigate,
}: {
  pathname: string;
  className?: string;
  onNavigate?: () => void;
}) {
  const isEn = pathname === "/lt-en" || pathname.startsWith("/lt-en/");
  const isLt = pathname === "/lt" || pathname.startsWith("/lt/");
  if (!isEn && !isLt) return null;

  const optionClass = (active: boolean) =>
    cn(
      "px-2 py-1 text-sm font-medium transition-colors",
      active ? "bg-forest text-white" : "text-muted hover:text-ink",
    );

  return (
    <div
      className={cn(
        "inline-flex items-center overflow-hidden rounded-md border border-ink/15",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      <Link
        href="/lt"
        hrefLang="lt"
        className={optionClass(isLt)}
        aria-current={isLt ? "page" : undefined}
        onClick={onNavigate}
      >
        LT
      </Link>
      <Link
        href="/lt-en"
        hrefLang="en"
        className={optionClass(isEn)}
        aria-current={isEn ? "page" : undefined}
        onClick={onNavigate}
      >
        EN
      </Link>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const region = getRegionByPathname(pathname);
  const contactHref =
    pathname === "/lt-en" || pathname.startsWith("/lt-en/")
      ? "/lt-en#contact"
      : region.contactHref;
  const regionNavLinks = getNavLinksByPathname(pathname);
  const links = regionNavLinks ?? navLinks;
  const showContactButton = !regionNavLinks;
  const logoHref = regionNavLinks
    ? `${pathname.startsWith("/lt-en") ? "/lt-en" : region.href}#top`
    : "/international#top";
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-6 lg:h-[4.5rem]">
        <NavItem
          href={logoHref}
          className="flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-xl tracking-tight text-ink">
            {siteConfig.name}
          </span>
        </NavItem>

        <nav className="hidden items-center gap-5 md:flex lg:gap-6">
          {links.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </NavItem>
          ))}
          <LithuaniaLangSwitch pathname={pathname} />
          <RegionSelector prominent={Boolean(regionNavLinks)} />
          {showContactButton ? (
            <Button href={contactHref} size="sm">
              Contact us
            </Button>
          ) : null}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LithuaniaLangSwitch pathname={pathname} />
          <RegionSelector
            prominent={Boolean(regionNavLinks)}
            onNavigate={() => setOpen(false)}
          />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={cn(
                  "h-0.5 w-full bg-ink transition-transform",
                  open && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-ink transition-opacity",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-ink transition-transform",
                  open && "-translate-y-2 -rotate-45",
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-ink/8 bg-paper px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                className="text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavItem>
            ))}
            {showContactButton ? (
              <Button
                href={contactHref}
                className="mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                Contact us
              </Button>
            ) : null}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
