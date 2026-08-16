import type { CountryInventory } from "@/data/types";
import { autumn2027 } from "./batch-autumn-2027";
import { spring2028 } from "./batch-spring-2028";

/**
 * Estonia country advertising page data.
 * Edit this file and batch-*.ts to update inventory content.
 */
export const estoniaInventory: CountryInventory = {
  slug: "estonia",
  name: "Estonia",
  flag: "🇪🇪",
  hero: {
    title: "FreeNotes Estonia",
    subtitle:
      "Free notebooks for Estonian students, funded by advertising.",
    image: "/uuemad%20vihkud%20avatud.png",
  },
  distributionLocations: [
    {
      id: "ee-hugo",
      schoolName: "Hugo Treffner Gymnasium",
      city: "Tartu",
      studentCount: null,
      notebookCount: null,
      isPlaceholder: true,
    },
    {
      id: "ee-gag",
      schoolName: "Gustav Adolf Grammar School",
      city: "Tallinn",
      studentCount: null,
      notebookCount: null,
      isPlaceholder: true,
    },
    {
      id: "ee-harma",
      schoolName: "Miina Härma Gymnasium",
      city: "Tartu",
      studentCount: null,
      notebookCount: null,
      isPlaceholder: true,
    },
    {
      id: "ee-ut",
      schoolName: "University of Tartu",
      city: "Tartu",
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
      price: 2500,
      isPlaceholder: true,
    },
    {
      id: "back-cover",
      name: "Back cover",
      description: "Strong presence whenever notebooks are in use or closed.",
      price: 1000,
      isPlaceholder: true,
    },
    {
      id: "inside-front",
      name: "Inside front cover",
      description: "Premium inside placement facing the first notebook pages.",
      price: 800,
      isPlaceholder: true,
    },
    {
      id: "inside-back",
      name: "Inside back cover",
      description: "Premium inside placement at the end of the notebook.",
      price: 800,
      isPlaceholder: true,
    },
    {
      id: "page",
      name: "Individual notebook page",
      description:
        "Full page for detailed messaging, offers, or brand storytelling.",
      price: 15,
      isPlaceholder: true,
    },
  ],
  batches: [autumn2027, spring2028],
  previousPartners: [],
};
