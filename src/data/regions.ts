import type { NavLink } from "./types";

/**
 * Central list for the header country/region selector.
 * Add a new market here only — Navbar reads from this list.
 *
 * Hrefs follow existing project routes:
 * - inventory markets → /{slug}
 * - marketing markets → /countries/{slug}
 * - international → /international (cookie-free; `/` geo-redirects LT→/lt, FI→/fi)
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
    href: "/fi",
    contactHref: "/fi#contact",
    navLinks: [
      { label: "Pricing", href: "/fi#advertising-prices" },
      { label: "Upcoming batches", href: "/fi#upcoming-batches" },
      { label: "Contact us", href: "/fi#contact" },
    ],
    matchPaths: ["/fi", "/fi-en", "/finland", "/countries/finland"],
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

function localeBaseForRegion(
  regionCode: string,
  pathname: string,
): string | null {
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  if (regionCode === "lt") {
    if (normalized === "/lt-en" || normalized.startsWith("/lt-en/")) return "/lt-en";
    if (normalized === "/lt" || normalized.startsWith("/lt/")) return "/lt";
    return null;
  }

  if (regionCode === "fi") {
    if (normalized === "/fi-en" || normalized.startsWith("/fi-en/")) return "/fi-en";
    if (normalized === "/fi" || normalized.startsWith("/fi/")) return "/fi";
    return null;
  }

  return null;
}

export function getNavLinksByPathname(pathname: string): NavLink[] | null {
  const region = getRegionByPathname(pathname);
  if (!region.navLinks) return null;

  const localeBase = localeBaseForRegion(region.code, pathname);
  if (!localeBase) {
    return region.navLinks;
  }

  const nativeLabels: Record<string, Record<string, string>> = {
    lt: {
      Pricing: "Kainoraštis",
      "Upcoming batches": "Artėjančios laidos",
      "Contact us": "Susisiekti",
    },
    fi: {
      Pricing: "Hinnasto",
      "Upcoming batches": "Tulevat erät",
      "Contact us": "Ota yhteyttä",
    },
  };

  const isNative =
    (region.code === "lt" && localeBase === "/lt") ||
    (region.code === "fi" && localeBase === "/fi");
  const labels = nativeLabels[region.code] ?? {};

  return region.navLinks.map((link) => {
    const hashIndex = link.href.indexOf("#");
    const href =
      hashIndex === -1
        ? link.href
        : `${localeBase}${link.href.slice(hashIndex)}`;
    return {
      ...link,
      href,
      label: isNative ? (labels[link.label] ?? link.label) : link.label,
    };
  });
}
