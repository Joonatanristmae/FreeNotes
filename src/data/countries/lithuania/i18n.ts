import type { CountryInventory, NotebookBatch, Placement } from "@/data/types";
import { lithuaniaInventory } from "./index";

export type LithuaniaLocale = "lt" | "en";

export type LithuaniaPageCopy = {
  locale: LithuaniaLocale;
  alternateLocale: LithuaniaLocale;
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
  /** Overlay translations onto inventory price cards / batches by id. */
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

const en: LithuaniaPageCopy = {
  locale: "en",
  alternateLocale: "lt",
  alternateHref: "/lt",
  langSwitchLabel: "Lietuvių",
  metadata: {
    title: "FreeNotes Lithuania — Advertising",
    description:
      "Free notebooks for Lithuanian students, funded by advertising. View distribution, prices, and upcoming batches.",
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
      "We deliver FreeNotes notebooks directly to school buildings in Lithuania, where students can take them for free.",
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
      "Advertising funds the production and free distribution of notebooks in Lithuania.",
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
      "Talk to the FreeNotes team in Lithuania about placements, batches, and reservations.",
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
    "lt-autumn-2027": {
      name: "Batch 1 — Kaunas",
      city: "Kaunas",
      distributionLabel: "universities in Kaunas",
      targetDescription: "Universities in Kaunas",
      designDeadlineLabel: "1 June 2027",
      distributionStartLabel: "September 2027",
      placementNames: {
        "page-25": "Middle full page",
        "page-26": "Middle full page",
      },
    },
  },
  countryDisplayName: "Lithuania",
};

/**
 * Lithuanian copy — phrasing aligned with the natural tone of kiri.lt
 * (e.g. „Dalijame nemokamus sąsiuvinius…“, „Kainoraštis“, „Sąsiuvinių platinimas“).
 */
const lt: LithuaniaPageCopy = {
  locale: "lt",
  alternateLocale: "en",
  alternateHref: "/lt-en",
  langSwitchLabel: "English",
  metadata: {
    title: "FreeNotes Lietuva — Reklama",
    description:
      "Nemokami sąsiuviniai Lietuvos studentams, finansuojami reklama. Platinimas, kainos ir artėjančios laidos.",
  },
  hero: {
    headlineBefore: "Dalijame ",
    headlineAccent1: "nemokamus sąsiuvinius",
    headlineMiddle: " studentams su ",
    headlineAccent2: "jūsų reklama",
    imageAlt: "Atversti FreeNotes sąsiuviniai su reklama",
    primaryCta: "Žiūrėti artėjančias laidas",
    secondaryCta: "Susisiekti",
  },
  howItWorks: {
    eyebrow: "Procesas",
    title: "Kaip tai veikia",
    steps: [
      {
        id: "advertise",
        step: "01",
        title: "Įmonės reklamuoja",
        description: "Prekių ženklai pasirenka reklamos vietą mūsų sąsiuviniuose.",
      },
      {
        id: "distribute",
        step: "02",
        title: "Gaminame ir išdalijame sąsiuvinius",
        description:
          "Pagaminame sąsiuvinius ir pristatome juos į mokyklų bei universitetų pastatus, kur studentai gali juos pasiimti nemokamai.",
      },
      {
        id: "use",
        step: "03",
        title: "Studentai jais naudojasi kasdien",
        description: "Jūsų prekės ženklas matomas visus mokslo metus.",
      },
    ],
  },
  benefits: {
    title: "Kodėl FreeNotes",
    items: [
      {
        id: "exposure",
        title: "Ilgas, pasikartojantis matomumas",
        description: "Studentai sąsiuviniais naudojasi kasdien ištisus mėnesius.",
      },
      {
        id: "targeted",
        title: "Tiksli auditorija",
        description: "Pasiekiate aukštųjų mokyklų studentus tiesiogiai.",
      },
      {
        id: "regional",
        title: "Pasirinkite regioną ar miestą",
        description:
          "Nukreipkite sąsiuvinius ten, kur jums svarbiausia — jie keliauja būtent ten, kur norite.",
      },
      {
        id: "flexible",
        title: "Lankstus mastas ir biudžetas",
        description:
          "Nuo kelių puslapių mažame tiraže apie €20 iki daugelio puslapių tūkstančiuose sąsiuvinių — turime pasiūlymą kiekvienam biudžetui.",
      },
    ],
  },
  distribution: {
    title: "Sąsiuvinių platinimas",
    subtitle:
      "FreeNotes sąsiuvinius pristatome tiesiai į mokyklų pastatus Lietuvoje, kur studentai gali juos pasiimti nemokamai.",
    placeholderNote:
      "Žemiau esantis mokyklų sąrašas yra laikinas — pakeiskite jį šalies duomenyse, kai turėsite patvirtintą informaciją.",
    columns: {
      school: "Mokykla",
      city: "Miestas",
      students: "Studentai",
      notebooks: "Sąsiuviniai",
    },
    placeholderTag: "laikina",
  },
  prices: {
    title: "Kainoraštis",
    subtitle:
      "Reklama finansuoja sąsiuvinių gamybą ir nemokamą platinimą Lietuvoje.",
    placeholderNote:
      "Kainos, pažymėtos kaip laikinos, yra iliustratyvios — pakeiskite jas patvirtintomis šalies duomenyse.",
    sizePrefix: "Dydis:",
    moreInfoAria: "Daugiau informacijos apie",
  },
  batches: {
    title: "Artėjančios laidos",
    subtitle:
      "Kiekviena laida rodo, kiek sąsiuvinių bus atspausdinta, iki kada reikia užsisakyti reklamą ir kur jie bus platinami. Išskleiskite laidą, kad pamatytumėte viršelių ir puslapių užimtumą.",
    notebooksLabel: "sąsiuvinių",
    distribution: "Platinimas",
    designDeadline: "Dizaino terminas",
    distributionStart: "Platinimo pradžia",
    availableOf: (available, total) =>
      `Laisva ${available} iš ${total} vietų`,
    availabilityHeading: "Reklamos vietų užimtumas",
    bookingStatus: {
      "booking-open": "Užsakymai atidaryti",
      "coming-soon": "Netrukus",
      closed: "Uždaryta",
    },
    placementStatus: {
      available: "Laisva",
      reserved: "Rezervuota",
      sold: "Parduota",
    },
  },
  contact: {
    title: "Susisiekite su mumis",
    subtitle:
      "Susisiekite su FreeNotes komanda Lietuvoje dėl reklamos vietų, laidų ir rezervacijų.",
    photoPlaceholder: "Nuotrauka",
  },
  reserveEmail: {
    subject: (country, batch, placement) =>
      `Reklamos rezervacija — ${country} / ${batch}${placement ? ` / ${placement}` : ""}`,
    body: (country, batch, placement) =>
      [
        `Sveiki, FreeNotes,`,
        ``,
        `Norėčiau rezervuoti reklamos vietą:`,
        `Šalis: ${country}`,
        `Laida: ${batch}`,
        placement ? `Vieta: ${placement}` : null,
        ``,
        `Lauksiu žinių.`,
      ]
        .filter(Boolean)
        .join("\n"),
  },
  priceItems: {
    esikaas: {
      name: "Priekinis viršelis",
      description: "Didžiausias matomumas",
      priceSuffix: "+PVM / 5000 sąsiuvinių",
      size: "A4 (210 × 297 mm)",
    },
    valemileht: {
      name: "Vidinė priekinio viršelio pusė",
      description: "",
      priceSuffix: "+PVM / 5000 sąsiuvinių",
      size: "A4 pusė (210 × 297 mm)",
    },
    tavaleht: {
      name: "Standartinio puslapio apačia",
      description:
        "Apatinė juosta standartiniame puslapyje. (iš viso 46 viename sąsiuvinyje)",
      priceSuffix: "+PVM / 1 puslapis 5000 sąsiuvinių",
      size: "A4 juosta (210 × 45 mm)",
    },
    vaheleht: {
      name: "Pilnas vidurinis puslapis",
      description:
        "Visas A4 puslapis sąsiuvinio viduryje. (iš viso 2 viename sąsiuvinyje)",
      priceSuffix: "+PVM / 5000 sąsiuvinių",
      size: "A4 skleidinys (420 × 297 mm)",
    },
    "tagakaane-sisekylg": {
      name: "Vidinė galinio viršelio pusė",
      description: "",
      priceSuffix: "+PVM / 5000 sąsiuvinių",
      size: "A4 (210 × 297 mm)",
    },
    tagakaas: {
      name: "Galinis viršelis",
      description: "",
      priceSuffix: "+PVM / 5000 sąsiuvinių",
      size: "A4 (210 × 297 mm)",
    },
  },
  batchOverlays: {
    "lt-autumn-2027": {
      name: "1 laida — Kaunas",
      city: "Kaunas",
      distributionLabel: "universitetai Kaune",
      targetDescription: "Universitetai Kaune",
      designDeadlineLabel: "2027 m. birželio 1 d.",
      distributionStartLabel: "2027 m. rugsėjis",
      placementNames: {
        "front-cover": "Priekinis viršelis",
        "inside-front": "Vidinė priekinio viršelio pusė",
        "inside-back": "Vidinė galinio viršelio pusė",
        "back-cover": "Galinis viršelis",
        "page-25": "Pilnas vidurinis puslapis",
        "page-26": "Pilnas vidurinis puslapis",
      },
    },
  },
  countryDisplayName: "Lietuva",
};

export const lithuaniaPageCopy: Record<LithuaniaLocale, LithuaniaPageCopy> = {
  lt,
  en,
};

function localizePlacements(
  placements: Placement[],
  nameMap: Record<string, string>,
  locale: LithuaniaLocale,
): Placement[] {
  return placements.map((placement) => {
    if (nameMap[placement.id]) {
      return { ...placement, name: nameMap[placement.id] };
    }
    if (locale === "lt" && placement.id.startsWith("page-")) {
      const n = placement.id.replace("page-", "");
      return { ...placement, name: `${n} puslapis` };
    }
    return placement;
  });
}

function localizeBatch(
  batch: NotebookBatch,
  copy: LithuaniaPageCopy,
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

export function getLithuaniaPageCopy(locale: LithuaniaLocale): LithuaniaPageCopy {
  return lithuaniaPageCopy[locale];
}

export function getLocalizedLithuaniaInventory(
  locale: LithuaniaLocale,
): CountryInventory {
  const copy = getLithuaniaPageCopy(locale);
  return {
    ...lithuaniaInventory,
    name: copy.countryDisplayName,
    hero: {
      ...lithuaniaInventory.hero,
      title:
        locale === "lt" ? "FreeNotes Lietuva" : lithuaniaInventory.hero.title,
      subtitle: copy.metadata.description,
    },
    advertisingPrices: lithuaniaInventory.advertisingPrices.map((item) => {
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
    batches: lithuaniaInventory.batches.map((batch) =>
      localizeBatch(batch, copy),
    ),
    teamContacts: lithuaniaInventory.teamContacts ?? [],
  };
}
