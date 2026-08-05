import type { Country } from "./types";

export const countries: Country[] = [
  {
    slug: "estonia",
    name: "Estonia",
    flag: "🇪🇪",
    active: true,
    hasInventory: true,
    hero: {
      title: "FreeNotes Estonia",
      subtitle:
        "Reach students across Estonia through free notebooks distributed in schools and universities.",
    },
    stats: [
      {
        id: "ee-notebooks",
        value: "45,000+",
        label: "Annual notebook distribution",
      },
      {
        id: "ee-universities",
        value: "8+",
        label: "Universities reached",
      },
      {
        id: "ee-schools",
        value: "30+",
        label: "Schools reached",
      },
      {
        id: "ee-students",
        value: "35,000+",
        label: "Students reached",
      },
    ],
    universities: [
      { id: "ut", name: "University of Tartu", logo: "/advertising partners/UT_website_logo_blue_eng.svg" },
      { id: "tlu", name: "Tallinn University", logo: "/advertising partners/tallinna ülikool.svg" },
      { id: "taltech", name: "Tallinn University of Technology" },
      { id: "tktk", name: "TTK University of Applied Sciences", logo: "/advertising partners/TTK_logo.png" },
      {
        id: "ttk",
        name: "Tallinn Health Care College",
        logo: "/advertising partners/tallinna tervishoiukõrgkool.png",
      },
    ],
    highSchools: [
      { id: "hs-1", name: "Hugo Treffner Gymnasium", logo: "/koolid/hugo-logo.svg" },
      { id: "hs-2", name: "Gustav Adolf Grammar School", logo: "/koolid/gag-logo.svg" },
      { id: "hs-3", name: "Tallinn English College" },
      { id: "hs-4", name: "Miina Härma Gymnasium", logo: "/koolid/härma-logo.svg" },
      { id: "hs-5", name: "Nõo Secondary Science School", logo: "/koolid/nõo-logo.svg" },
      { id: "hs-6", name: "Jakob Westholm Gymnasium", logo: "/koolid/westholm-logo.svg" },
      { id: "hs-7", name: "Jaan Poska Gymnasium", logo: "/koolid/jaan poska gümnaasium 1.svg" },
      { id: "hs-8", name: "Keila School", logo: "/koolid/keila-logo.svg" },
      { id: "hs-9", name: "Elva Gymnasium", logo: "/koolid/elva-logo.svg" },
      { id: "hs-10", name: "Pelgulinna Gymnasium", logo: "/koolid/pelgulinna-logo.svg" },
      { id: "hs-11", name: "Mustamäe Gymnasium", logo: "/koolid/mustamäe-logo.svg" },
      { id: "hs-12", name: "Tabasalu Gymnasium", logo: "/koolid/tabasalu-logo.svg" },
    ],
    pricing: [
      {
        id: "front-cover",
        name: "Front cover advertisement",
        description:
          "Maximum visibility on the notebook cover students see every time they open their bag.",
        reach: "Full print run · ~45,000 notebooks",
        price: "Price on request",
        ctaLabel: "Request this package",
        image: "/images/ad-front-cover.webp",
        featured: true,
      },
      {
        id: "back-cover",
        name: "Back cover advertisement",
        description:
          "High-impact placement on the back cover — present whenever notebooks are in use.",
        reach: "Full print run · ~45,000 notebooks",
        price: "Price on request",
        ctaLabel: "Request this package",
        image: "/images/ad-back-cover.webp",
      },
      {
        id: "inside-page",
        name: "Inside page advertisement",
        description:
          "Dedicated inside pages for detailed messaging, offers, or brand storytelling.",
        reach: "Full print run · ~45,000 notebooks",
        price: "Price on request",
        ctaLabel: "Request this package",
        image: "/images/ad-inside-page.webp",
      },
    ],
    partners: [
      {
        id: "ut",
        name: "University of Tartu",
        logo: "/advertising partners/UT_website_logo_blue_eng.svg",
        year: 2024,
        description: "Study programme outreach to secondary and university students.",
      },
      {
        id: "tlu",
        name: "Tallinn University",
        logo: "/advertising partners/tallinna ülikool.svg",
        year: 2024,
        description: "Campus brand presence among prospective students.",
      },
      {
        id: "ttk",
        name: "TTK University of Applied Sciences",
        logo: "/advertising partners/TTK_logo.png",
        year: 2024,
        description: "Applied science and engineering programme awareness.",
      },
      {
        id: "health",
        name: "Tallinn Health Care College",
        logo: "/advertising partners/tallinna tervishoiukõrgkool.png",
        year: 2024,
        description: "Healthcare study path outreach to young adults.",
      },
      {
        id: "kaitsevagi",
        name: "Estonian Defence Forces",
        logo: "/advertising partners/kaitsevägi.svg",
        year: 2023,
        description: "National defence career and service information campaign.",
      },
      {
        id: "bfm",
        name: "BFM",
        logo: "/advertising partners/bfm-kaksik-eng.svg",
        year: 2023,
        description: "Study programme outreach to prospective media students.",
      },
      {
        id: "skytte",
        name: "Johan Skytte Institute",
        logo: "/advertising partners/johan_skytte.png",
        year: 2023,
        description: "Social sciences programme promotion to graduating students.",
      },
      {
        id: "ecology",
        name: "Institute of Ecology and Earth Sciences",
        logo: "/advertising partners/ökoloogia ja maateadused.png",
        logoScale: 1,
        year: 2024,
        description: "Ecology and earth science study path awareness.",
      },
    ],
  },
  {
    slug: "lithuania",
    name: "Lithuania",
    flag: "🇱🇹",
    active: true,
    hasInventory: true,
    hero: {
      title: "FreeNotes Lithuania",
      subtitle: "Coming soon — expand your student reach across the Baltics.",
    },
    stats: [],
    universities: [],
    highSchools: [],
    pricing: [],
    partners: [],
  },
  {
    slug: "finland",
    name: "Finland",
    flag: "🇫🇮",
    active: false,
    hero: {
      title: "FreeNotes Finland",
      subtitle: "Coming soon — Nordic expansion in planning.",
    },
    stats: [],
    universities: [],
    highSchools: [],
    pricing: [],
    partners: [],
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    active: false,
    hero: {
      title: "FreeNotes United Kingdom",
      subtitle: "Coming soon — UK market entry in preparation.",
    },
    stats: [],
    universities: [],
    highSchools: [],
    pricing: [],
    partners: [],
  },
];

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}

export function getActiveCountries(): Country[] {
  return countries.filter((c) => c.active);
}
