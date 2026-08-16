/**
 * Central list for the header country/region selector.
 * Add a new market here only — Navbar reads from this list.
 *
 * Hrefs follow existing project routes:
 * - inventory markets → /{slug}
 * - marketing markets → /countries/{slug}
 * - international → /
 */
export type RegionOption = {
  code: string;
  name: string;
  flag: string;
  href: string;
  /** Path prefixes that mark this region as current (exact or prefix match). */
  matchPaths: string[];
};

export const regionOptions: RegionOption[] = [
  {
    code: "ee",
    name: "Estonia",
    flag: "🇪🇪",
    href: "/estonia",
    matchPaths: ["/estonia", "/countries/estonia"],
  },
  {
    code: "lt",
    name: "Lithuania",
    flag: "🇱🇹",
    href: "/lt",
    matchPaths: ["/lt", "/lithuania", "/countries/lithuania"],
  },
  {
    code: "fi",
    name: "Finland",
    flag: "🇫🇮",
    href: "/countries/finland",
    matchPaths: ["/countries/finland"],
  },
  {
    code: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    href: "/countries/united-kingdom",
    matchPaths: ["/countries/united-kingdom"],
  },
  {
    code: "international",
    name: "International",
    flag: "🌍",
    href: "/",
    matchPaths: ["/"],
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
