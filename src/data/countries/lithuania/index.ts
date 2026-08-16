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
      id: "front-cover",
      name: "Front cover",
      description:
        "Highest-visibility placement on the cover students see every day.",
      price: 2200,
      isPlaceholder: true,
    },
    {
      id: "back-cover",
      name: "Back cover",
      description: "Strong presence whenever notebooks are in use or closed.",
      price: 900,
      isPlaceholder: true,
    },
    {
      id: "inside-front",
      name: "Inside front cover",
      description: "Premium inside placement facing the first notebook pages.",
      price: 700,
      isPlaceholder: true,
    },
    {
      id: "inside-back",
      name: "Inside back cover",
      description: "Premium inside placement at the end of the notebook.",
      price: 700,
      isPlaceholder: true,
    },
    {
      id: "page",
      name: "Individual notebook page",
      description:
        "Full page for detailed messaging, offers, or brand storytelling.",
      price: 12,
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
