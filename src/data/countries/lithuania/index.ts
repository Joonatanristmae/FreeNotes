import type { CountryInventory } from "@/data/types";
import { autumn2027 } from "./batch-autumn-2027";
import { spring2028 } from "./batch-spring-2028";

/**
 * Lithuania country advertising page data.
 *
 * Edit this file (and the batch-*.ts files next to it) to update:
 * - hero copy
 * - distribution schools/cities
 * - advertising rate card
 * - upcoming batches + placement availability
 * - previousPartners (leave [] until there are Lithuanian clients)
 * - teamContacts (names + photos for the contact section)
 *
 * Rows marked isPlaceholder: true are mock data — replace before launch.
 */
export const lithuaniaInventory: CountryInventory = {
  slug: "lithuania",
  name: "Lithuania",
  flag: "🇱🇹",
  hero: {
    title: "FreeNotes Lithuania",
    subtitle:
      "Free notebooks for Lithuanian students, funded by advertising.",
    image: "/uuemad%20vihkud%20avatud.png",
  },
  distributionLocations: [
    {
      id: "lt-loc-1",
      schoolName: "[School name — replace]",
      city: "Vilnius",
      studentCount: null,
      notebookCount: null,
      isPlaceholder: true,
    },
    {
      id: "lt-loc-2",
      schoolName: "[School name — replace]",
      city: "Vilnius",
      studentCount: null,
      notebookCount: null,
      isPlaceholder: true,
    },
    {
      id: "lt-loc-3",
      schoolName: "[School name — replace]",
      city: "Kaunas",
      studentCount: null,
      notebookCount: null,
      isPlaceholder: true,
    },
    {
      id: "lt-loc-4",
      schoolName: "[School name — replace]",
      city: "Klaipėda",
      studentCount: null,
      notebookCount: null,
      isPlaceholder: true,
    },
  ],
  advertisingPrices: [
    {
      id: "esikaas",
      name: "Front cover",
      description: "Highest visibility",
      size: "A4 (210 × 297 mm)",
      image: "/hinnakiri2/esikaas.png",
      imageRotation: 0,
      imageAlignTop: true,
      price: 1350,
      priceSuffix: "+VAT / 5000 notebooks",
      isPlaceholder: true,
    },
    {
      id: "valemileht",
      name: "Inside front cover",
      description: "",
      size: "A4 half page (210 × 297 mm)",
      image: "/hinnakiri2/valemileht.png",
      imageRotation: 0,
      price: 200,
      priceSuffix: "+VAT / 5000 notebooks",
      isPlaceholder: true,
    },
    {
      id: "tavaleht",
      name: "Standard Page Footer",
      description:
        "The bottom strip on a standard page. (46 per notebook in total)",
      size: "A4 strip (210 × 45 mm)",
      image: "/hinnakiri2/tavaleht.png",
      imageRotation: 0,
      imageAlignTop: true,
      price: 13,
      priceSuffix: "+VAT / 1 page in 5000 notebooks",
      isPlaceholder: true,
    },
    {
      id: "vaheleht",
      name: "Middle page",
      description:
        "Full A4 page in the middle of the notebook. (2 per notebook in total)",
      size: "A4 spread (420 × 297 mm)",
      image: "/hinnakiri2/vaheleht.png",
      imagePosition: "left",
      price: 200,
      priceSuffix: "+VAT / 5000 notebooks",
      isPlaceholder: true,
    },
    {
      id: "tagakaane-sisekylg",
      name: "Inside back cover",
      description: "",
      size: "A4 (210 × 297 mm)",
      image: "/hinnakiri2/tagakaane sisekülg.png",
      imagePosition: "left",
      price: 200,
      priceSuffix: "+VAT / 5000 notebooks",
      isPlaceholder: true,
    },
    {
      id: "tagakaas",
      name: "Back cover",
      description: "",
      size: "A4 (210 × 297 mm)",
      image: "/hinnakiri2/tagakaas.png",
      imageRotation: 0,
      price: 200,
      priceSuffix: "+VAT / 5000 notebooks",
      isPlaceholder: true,
    },
  ],
  batches: [autumn2027, spring2028],
  // No Lithuanian clients yet — section stays hidden until you add entries.
  previousPartners: [],
  teamContacts: [
    {
      id: "kazimieras",
      name: "Kazimieras",
      role: "FreeNotes Lithuania",
      photo: "/kazimieras.jpg",
    },
    {
      id: "joonatan",
      name: "Joonatan Ristmäe",
      role: "FreeNotes Lithuania",
      photo: "/meie fotod/joonatan.webp",
    },
    {
      id: "auguste",
      name: "Augustė Jasaitytė",
      role: "FreeNotes Lithuania",
      photo: null,
    },
  ],
};
