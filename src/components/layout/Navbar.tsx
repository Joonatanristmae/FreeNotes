"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig } from "@/data/site";
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

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-[4.5rem]">
        <NavItem
          href="/#top"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-xl tracking-tight text-ink">
            {siteConfig.name}
          </span>
        </NavItem>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </NavItem>
          ))}
          <Button href="/#become-a-partner" size="sm">
            Become a partner
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
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

      {open ? (
        <div className="border-t border-ink/8 bg-paper px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                className="text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavItem>
            ))}
            <Button
              href="/#become-a-partner"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Become a partner
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
