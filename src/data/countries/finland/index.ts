import type { CountryInventory } from "@/data/types";
import { autumn2027 } from "./batch-autumn-2027";

/**
 * Finland country advertising page data.
 *
 * Edit this file (and the batch-*.ts files next to it) to update:
 * - hero copy
 * - distribution schools/cities
 * - advertising rate card
 * - upcoming batches + placement availability
 * - previousPartners (leave [] until there are Finnish clients)
 * - teamContacts (names + photos for the contact section)
 *
 * Rows marked isPlaceholder: true are mock data — replace before launch.
 */
export const finlandInventory: CountryInventory = {
  slug: "finland",
  name: "Finland",
  flag: "🇫🇮",
  hero: {
    title: "FreeNotes Finland",
    subtitle:
      "Free notebooks for Finnish students, funded by advertising.",
    image: "/uuemad%20vihkud%20avatud.png",
  },
  distributionLocations: [
    {
      id: "fi-loc-1",
      schoolName: "[School name — replace]",
      city: "Helsinki",
      studentCount: null,
      notebookCount: null,
      isPlaceholder: true,
    },
    {
      id: "fi-loc-2",
      schoolName: "[School name — replace]",
      city: "Helsinki",
      studentCount: null,
      notebookCount: null,
      isPlaceholder: true,
    },
    {
      id: "fi-loc-3",
      schoolName: "[School name — replace]",
      city: "Espoo",
      studentCount: null,
      notebookCount: null,
      isPlaceholder: true,
    },
    {
      id: "fi-loc-4",
      schoolName: "[School name — replace]",
      city: "Tampere",
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
      name: "Middle full page",
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
  batches: [autumn2027],
  previousPartners: [],
  teamContacts: [
    {
      id: "joonatan",
      name: "Joonatan Ristmäe",
      photo: "/meie fotod/joonatan.jpg",
    },
    {
      id: "nikodemus",
      name: "Nikodemus Tommiska",
      photo: null,
    },
  ],
};
