import type { CountryInventory, NotebookBatch, Placement } from "@/data/types";
import { finlandInventory } from "./index";

export type FinlandLocale = "fi" | "en";

export type FinlandPageCopy = {
  locale: FinlandLocale;
  alternateLocale: FinlandLocale;
  alternateHref: string;
  langSwitchLabel: string;
  metadata: { title: string; description: string };
  hero: {
    headlineBefore: string;
    headlineAccent1: string;
    headlineMiddle: string;
    headlineAccent2: string;
    imageAlt: string;
    primaryCta: string;
    secondaryCta: string;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    steps: Array<{ id: string; step: string; title: string; description: string }>;
  };
  benefits: {
    title: string;
    items: Array<{ id: string; title: string; description: string }>;
  };
  distribution: {
    title: string;
    subtitle: string;
    placeholderNote: string;
    columns: {
      school: string;
      city: string;
      students: string;
      notebooks: string;
    };
    placeholderTag: string;
  };
  prices: {
    title: string;
    subtitle: string;
    placeholderNote: string;
    sizePrefix: string;
    moreInfoAria: string;
  };
  batches: {
    title: string;
    subtitle: string;
    notebooksLabel: string;
    distribution: string;
    designDeadline: string;
    distributionStart: string;
    availableOf: (available: number, total: number) => string;
    availabilityHeading: string;
    bookingStatus: {
      "booking-open": string;
      "coming-soon": string;
      closed: string;
    };
    placementStatus: {
      available: string;
      reserved: string;
      sold: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    photoPlaceholder: string;
  };
  reserveEmail: {
    subject: (country: string, batch: string, placement?: string) => string;
    body: (country: string, batch: string, placement?: string) => string;
  };
  priceItems: Record<
    string,
    { name: string; description: string; priceSuffix?: string; size?: string }
  >;
  batchOverlays: Record<
    string,
    {
      name: string;
      city: string;
      distributionLabel: string;
      targetDescription: string;
      designDeadlineLabel: string;
      distributionStartLabel: string;
      placementNames: Record<string, string>;
    }
  >;
  countryDisplayName: string;
};

const en: FinlandPageCopy = {
  locale: "en",
  alternateLocale: "fi",
  alternateHref: "/fi",
  langSwitchLabel: "Suomi",
  metadata: {
    title: "FreeNotes Finland — Advertising",
    description:
      "Free notebooks for Finnish students, funded by advertising. View distribution, prices, and upcoming batches.",
  },
  hero: {
    headlineBefore: "We give away ",
    headlineAccent1: "free notebooks",
    headlineMiddle: " to students with ",
    headlineAccent2: "your advertising",
    imageAlt: "Open FreeNotes notebooks with advertising",
    primaryCta: "View upcoming batches",
    secondaryCta: "Contact us",
  },
  howItWorks: {
    eyebrow: "Process",
    title: "How it works",
    steps: [
      {
        id: "advertise",
        step: "01",
        title: "Companies advertise",
        description: "Brands choose advertising space on our notebooks.",
      },
      {
        id: "distribute",
        step: "02",
        title: "We create and distribute notebooks",
        description:
          "We produce notebooks and deliver them to school buildings, where students can take them for free.",
      },
      {
        id: "use",
        step: "03",
        title: "Students use them daily",
        description: "Your brand stays visible throughout the school year.",
      },
    ],
  },
  benefits: {
    title: "Why FreeNotes",
    items: [
      {
        id: "exposure",
        title: "Long repeated exposure",
        description: "Students use notebooks every day for months.",
      },
      {
        id: "targeted",
        title: "Targeted audience",
        description: "Reach college students directly.",
      },
      {
        id: "regional",
        title: "Choose your region/city",
        description:
          "Target the cities or regions that matter to you — notebooks go exactly where you want them.",
      },
      {
        id: "flexible",
        title: "Flexible scale and budget",
        description:
          "From a few pages in a small run for around €20 to many pages across thousands of notebooks — we have something for every budget.",
      },
    ],
  },
  distribution: {
    title: "How and where we distribute",
    subtitle:
      "We deliver FreeNotes notebooks directly to school buildings in Finland, where students can take them for free.",
    placeholderNote:
      "School list below is placeholder data — replace in country data when confirmed.",
    columns: {
      school: "School",
      city: "City",
      students: "Students",
      notebooks: "Notebooks",
    },
    placeholderTag: "placeholder",
  },
  prices: {
    title: "General pricelist",
    subtitle:
      "Advertising funds the production and free distribution of notebooks in Finland.",
    placeholderNote:
      "Prices marked as placeholder are illustrative — replace with confirmed rates in country data.",
    sizePrefix: "Size:",
    moreInfoAria: "More info about",
  },
  batches: {
    title: "Upcoming batches",
    subtitle:
      "Each batch shows how many notebooks will print, when advertising must be booked, and where they distribute. Expand a batch to see cover and page availability.",
    notebooksLabel: "notebooks",
    distribution: "Distribution",
    designDeadline: "Design deadline",
    distributionStart: "Distribution start date",
    availableOf: (available, total) =>
      `${available} of ${total} placements available`,
    availabilityHeading: "Advertising availability",
    bookingStatus: {
      "booking-open": "Booking open",
      "coming-soon": "Coming soon",
      closed: "Closed",
    },
    placementStatus: {
      available: "Available",
      reserved: "Reserved",
      sold: "Sold",
    },
  },
  contact: {
    title: "Contact us",
    subtitle:
      "Talk to the FreeNotes team in Finland about placements, batches, and reservations.",
    photoPlaceholder: "Photo",
  },
  reserveEmail: {
    subject: (country, batch, placement) =>
      `Reserve advertising — ${country} / ${batch}${placement ? ` / ${placement}` : ""}`,
    body: (country, batch, placement) =>
      [
        `Hi FreeNotes,`,
        ``,
        `I'd like to reserve advertising space:`,
        `Country: ${country}`,
        `Batch: ${batch}`,
        placement ? `Placement: ${placement}` : null,
        ``,
        `Looking forward to hearing from you.`,
      ]
        .filter(Boolean)
        .join("\n"),
  },
  priceItems: {
    esikaas: {
      name: "Front cover",
      description: "Highest visibility",
      priceSuffix: "+VAT / 5000 notebooks",
      size: "A4 (210 × 297 mm)",
    },
    valemileht: {
      name: "Inside front cover",
      description: "",
      priceSuffix: "+VAT / 5000 notebooks",
      size: "A4 half page (210 × 297 mm)",
    },
    tavaleht: {
      name: "Standard page footer",
      description:
        "The bottom strip on a standard page. (46 per notebook in total)",
      priceSuffix: "+VAT / 1 page in 5000 notebooks",
      size: "A4 strip (210 × 45 mm)",
    },
    vaheleht: {
      name: "Middle full page",
      description:
        "Full A4 page in the middle of the notebook. (2 per notebook in total)",
      priceSuffix: "+VAT / 5000 notebooks",
      size: "A4 spread (420 × 297 mm)",
    },
    "tagakaane-sisekylg": {
      name: "Inside back cover",
      description: "",
      priceSuffix: "+VAT / 5000 notebooks",
      size: "A4 (210 × 297 mm)",
    },
    tagakaas: {
      name: "Back cover",
      description: "",
      priceSuffix: "+VAT / 5000 notebooks",
      size: "A4 (210 × 297 mm)",
    },
  },
  batchOverlays: {
    "fi-autumn-2027": {
      name: "Batch 1 — Helsinki",
      city: "Helsinki",
      distributionLabel: "universities in Helsinki",
      targetDescription: "Universities in Helsinki",
      designDeadlineLabel: "1 June 2027",
      distributionStartLabel: "September 2027",
      placementNames: {
        "page-25": "Middle full page",
        "page-26": "Middle full page",
      },
    },
  },
  countryDisplayName: "Finland",
};

const fi: FinlandPageCopy = {
  locale: "fi",
  alternateLocale: "en",
  alternateHref: "/fi-en",
  langSwitchLabel: "English",
  metadata: {
    title: "FreeNotes Suomi — Mainonta",
    description:
      "Ilmaisia vihkoja suomalaisille opiskelijoille, rahoitettuna mainonnalla. Jakelu, hinnat ja tulevat erät.",
  },
  hero: {
    headlineBefore: "Jaamme ",
    headlineAccent1: "ilmaisia vihkoja",
    headlineMiddle: " opiskelijoille ",
    headlineAccent2: "mainoksellasi",
    imageAlt: "Avoimia FreeNotes-vihkoja mainoksilla",
    primaryCta: "Katso tulevat erät",
    secondaryCta: "Ota yhteyttä",
  },
  howItWorks: {
    eyebrow: "Prosessi",
    title: "Näin se toimii",
    steps: [
      {
        id: "advertise",
        step: "01",
        title: "Yritykset mainostavat",
        description: "Brändit valitsevat mainostilan vihkoistamme.",
      },
      {
        id: "distribute",
        step: "02",
        title: "Valmistamme ja jaamme vihkot",
        description:
          "Tuotamme vihkot ja toimitamme ne oppilaitoksiin, joista opiskelijat voivat noutaa ne ilmaiseksi.",
      },
      {
        id: "use",
        step: "03",
        title: "Opiskelijat käyttävät niitä päivittäin",
        description: "Brändisi näkyy koko lukuvuoden ajan.",
      },
    ],
  },
  benefits: {
    title: "Miksi FreeNotes",
    items: [
      {
        id: "exposure",
        title: "Pitkä, toistuva näkyvyys",
        description: "Opiskelijat käyttävät vihkoja joka päivä kuukausien ajan.",
      },
      {
        id: "targeted",
        title: "Tarkka kohderyhmä",
        description: "Tavoitat korkeakouluopiskelijat suoraan.",
      },
      {
        id: "regional",
        title: "Valitse alue tai kaupunki",
        description:
          "Kohdista vihkot sinne, missä se sinulle merkitsee — ne menevät juuri sinne minne haluat.",
      },
      {
        id: "flexible",
        title: "Joustava mittakaava ja budjetti",
        description:
          "Muutamasta sivusta pienessä painoksessa noin 20 €:sta aina moniin sivuihin tuhansissa vihkoissa — jokaiselle budjetille löytyy sopiva vaihtoehto.",
      },
    ],
  },
  distribution: {
    title: "Vihkojen jakelu",
    subtitle:
      "Toimitamme FreeNotes-vihkot suoraan oppilaitoksiin Suomessa, joista opiskelijat voivat noutaa ne ilmaiseksi.",
    placeholderNote:
      "Alla oleva koululista on tilapäinen — korvaa se maan tiedoissa, kun vahvistettu tieto on saatavilla.",
    columns: {
      school: "Koulu",
      city: "Kaupunki",
      students: "Opiskelijat",
      notebooks: "Vihkot",
    },
    placeholderTag: "tilapäinen",
  },
  prices: {
    title: "Hinnasto",
    subtitle:
      "Mainonta rahoittaa vihkojen valmistuksen ja ilmaisen jakelun Suomessa.",
    placeholderNote:
      "Tilapäisiksi merkityt hinnat ovat suuntaa-antavia — korvaa ne vahvistetuilla maan tiedoissa.",
    sizePrefix: "Koko:",
    moreInfoAria: "Lisätietoja kohteesta",
  },
  batches: {
    title: "Tulevat erät",
    subtitle:
      "Jokainen erä näyttää, kuinka monta vihkoa painetaan, milloin mainos pitää varata ja missä ne jaetaan. Avaa erä nähdäksesi kansien ja sivujen saatavuuden.",
    notebooksLabel: "vihkoa",
    distribution: "Jakelu",
    designDeadline: "Suunnittelun määräaika",
    distributionStart: "Jakelun aloitus",
    availableOf: (available, total) =>
      `Vapaana ${available} / ${total} paikkaa`,
    availabilityHeading: "Mainospaikkojen saatavuus",
    bookingStatus: {
      "booking-open": "Varaus auki",
      "coming-soon": "Tulossa",
      closed: "Suljettu",
    },
    placementStatus: {
      available: "Vapaa",
      reserved: "Varattu",
      sold: "Myyty",
    },
  },
  contact: {
    title: "Ota yhteyttä",
    subtitle:
      "Ota yhteyttä FreeNotes-tiimiin Suomessa mainospaikoista, eristä ja varauksista.",
    photoPlaceholder: "Kuva",
  },
  reserveEmail: {
    subject: (country, batch, placement) =>
      `Mainosvaraus — ${country} / ${batch}${placement ? ` / ${placement}` : ""}`,
    body: (country, batch, placement) =>
      [
        `Hei FreeNotes,`,
        ``,
        `Haluaisin varata mainostilaa:`,
        `Maa: ${country}`,
        `Erä: ${batch}`,
        placement ? `Paikka: ${placement}` : null,
        ``,
        `Kuulen mielelläni teistä.`,
      ]
        .filter(Boolean)
        .join("\n"),
  },
  priceItems: {
    esikaas: {
      name: "Etukansi",
      description: "Suurin näkyvyys",
      priceSuffix: "+ALV / 5000 vihkoa",
      size: "A4 (210 × 297 mm)",
    },
    valemileht: {
      name: "Etukannen sisäpuoli",
      description: "",
      priceSuffix: "+ALV / 5000 vihkoa",
      size: "A4 puolikas (210 × 297 mm)",
    },
    tavaleht: {
      name: "Tavallisen sivun alatunniste",
      description:
        "Alareunan kaista tavallisella sivulla. (yhteensä 46 per vihko)",
      priceSuffix: "+ALV / 1 sivu 5000 vihkossa",
      size: "A4 kaista (210 × 45 mm)",
    },
    vaheleht: {
      name: "Koko keskiaukeama",
      description:
        "Koko A4-sivu vihkon keskellä. (yhteensä 2 per vihko)",
      priceSuffix: "+ALV / 5000 vihkoa",
      size: "A4 aukeama (420 × 297 mm)",
    },
    "tagakaane-sisekylg": {
      name: "Takakannen sisäpuoli",
      description: "",
      priceSuffix: "+ALV / 5000 vihkoa",
      size: "A4 (210 × 297 mm)",
    },
    tagakaas: {
      name: "Takakansi",
      description: "",
      priceSuffix: "+ALV / 5000 vihkoa",
      size: "A4 (210 × 297 mm)",
    },
  },
  batchOverlays: {
    "fi-autumn-2027": {
      name: "1. erä — Helsinki",
      city: "Helsinki",
      distributionLabel: "yliopistot Helsingissä",
      targetDescription: "Yliopistot Helsingissä",
      designDeadlineLabel: "1. kesäkuuta 2027",
      distributionStartLabel: "Syyskuu 2027",
      placementNames: {
        "front-cover": "Etukansi",
        "inside-front": "Etukannen sisäpuoli",
        "inside-back": "Takakannen sisäpuoli",
        "back-cover": "Takakansi",
        "page-25": "Koko keskiaukeama",
        "page-26": "Koko keskiaukeama",
      },
    },
  },
  countryDisplayName: "Suomi",
};

export const finlandPageCopy: Record<FinlandLocale, FinlandPageCopy> = {
  fi,
  en,
};

function localizePlacements(
  placements: Placement[],
  nameMap: Record<string, string>,
  locale: FinlandLocale,
): Placement[] {
  return placements.map((placement) => {
    if (nameMap[placement.id]) {
      return { ...placement, name: nameMap[placement.id] };
    }
    if (locale === "fi" && placement.id.startsWith("page-")) {
      const n = placement.id.replace("page-", "");
      return { ...placement, name: `Sivu ${n}` };
    }
    return placement;
  });
}

function localizeBatch(
  batch: NotebookBatch,
  copy: FinlandPageCopy,
): NotebookBatch {
  const overlay = copy.batchOverlays[batch.id];
  if (!overlay) return batch;
  return {
    ...batch,
    name: overlay.name,
    city: overlay.city,
    distributionLabel: overlay.distributionLabel,
    targetDescription: overlay.targetDescription,
    printDeadlineLabel: overlay.designDeadlineLabel,
    designDeadlineLabel: overlay.designDeadlineLabel,
    distributionStartLabel: overlay.distributionStartLabel,
    placements: localizePlacements(
      batch.placements,
      overlay.placementNames,
      copy.locale,
    ),
  };
}

export function getFinlandPageCopy(locale: FinlandLocale): FinlandPageCopy {
  return finlandPageCopy[locale];
}

export function getLocalizedFinlandInventory(
  locale: FinlandLocale,
): CountryInventory {
  const copy = getFinlandPageCopy(locale);
  return {
    ...finlandInventory,
    name: copy.countryDisplayName,
    hero: {
      ...finlandInventory.hero,
      title:
        locale === "fi" ? "FreeNotes Suomi" : finlandInventory.hero.title,
      subtitle: copy.metadata.description,
    },
    advertisingPrices: finlandInventory.advertisingPrices.map((item) => {
      const overlay = copy.priceItems[item.id];
      if (!overlay) return item;
      return {
        ...item,
        name: overlay.name,
        description: overlay.description,
        priceSuffix: overlay.priceSuffix ?? item.priceSuffix,
        size: overlay.size ?? item.size,
      };
    }),
    batches: finlandInventory.batches.map((batch) =>
      localizeBatch(batch, copy),
    ),
    teamContacts: finlandInventory.teamContacts ?? [],
  };
}
