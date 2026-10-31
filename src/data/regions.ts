import type { NavLink } from "./types";

/**
 * Central list for the header country/region selector.
 * Add a new market here only — Navbar reads from this list.
 *
 * Hrefs follow existing project routes:
 * - inventory markets → /{slug}
 * - marketing markets → /countries/{slug}
 * - international → /international (cookie-free; `/` geo-redirects LT → /lt)
 */
export type RegionOption = {
  code: string;
  name: string;
  flag: string;
  href: string;
  /** Navbar "Contact us" target for pages in this region. */
  contactHref: string;
  /** Optional in-page nav links for country marketing pages. */
  navLinks?: NavLink[];
  /** Path prefixes that mark this region as current (exact or prefix match). */
  matchPaths: string[];
};

export const regionOptions: RegionOption[] = [
  {
    code: "ee",
    name: "Estonia",
    flag: "🇪🇪",
    href: "https://vihku.ee",
    contactHref: "https://vihku.ee/#become-a-partner",
    matchPaths: ["/estonia", "/countries/estonia"],
  },
  {
    code: "lt",
    name: "Lithuania",
    flag: "🇱🇹",
    href: "/lt",
    contactHref: "/lt#contact",
    navLinks: [
      { label: "Pricing", href: "/lt#advertising-prices" },
      { label: "Upcoming batches", href: "/lt#upcoming-batches" },
      { label: "Contact us", href: "/lt#contact" },
    ],
    matchPaths: ["/lt", "/lt-en", "/lithuania", "/countries/lithuania"],
  },
  {
    code: "fi",
    name: "Finland",
    flag: "🇫🇮",
    href: "/countries/finland",
    contactHref: "/international#become-a-partner",
    matchPaths: ["/countries/finland"],
  },
  {
    code: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    href: "/countries/united-kingdom",
    contactHref: "/international#become-a-partner",
    matchPaths: ["/countries/united-kingdom"],
  },
  {
    code: "international",
    name: "International",
    flag: "🌍",
    href: "/international",
    contactHref: "/international#become-a-partner",
    matchPaths: ["/", "/international"],
  },
];

export const defaultRegion =
  regionOptions.find((r) => r.code === "international") ?? regionOptions[0];

export function getRegionByPathname(pathname: string): RegionOption {
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  // Prefer specific country matches over International ("/").
  const match = regionOptions.find((region) => {
    if (region.code === "international") return false;
    return region.matchPaths.some(
      (path) =>
        normalized === path || normalized.startsWith(`${path}/`),
    );
  });

  return match ?? defaultRegion;
}

export function getContactHrefByPathname(pathname: string): string {
  return getRegionByPathname(pathname).contactHref;
}

export function getNavLinksByPathname(pathname: string): NavLink[] | null {
  const region = getRegionByPathname(pathname);
  if (!region.navLinks) return null;

  // Keep in-page links on the current Lithuania locale route (/lt vs /lt-en).
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  const lithuaniaBase =
    normalized === "/lt-en" || normalized.startsWith("/lt-en/")
      ? "/lt-en"
      : normalized === "/lt" || normalized.startsWith("/lt/")
        ? "/lt"
        : null;

  if (region.code !== "lt" || !lithuaniaBase) {
    return region.navLinks;
  }

  const ltLabels: Record<string, string> = {
    Pricing: "Kainoraštis",
    "Upcoming batches": "Artėjančios laidos",
    "Contact us": "Susisiekti",
  };

  return region.navLinks.map((link) => {
    const hashIndex = link.href.indexOf("#");
    const href =
      hashIndex === -1
        ? link.href
        : `${lithuaniaBase}${link.href.slice(hashIndex)}`;
    return {
      ...link,
      href,
      label:
        lithuaniaBase === "/lt" ? (ltLabels[link.label] ?? link.label) : link.label,
    };
  });
}
