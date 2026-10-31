import type { NotebookBatch } from "@/data/types";
import { createNotebookInventory } from "@/data/countries/_shared";

export const autumn2027: NotebookBatch = {
  id: "lt-autumn-2027",
  name: "Batch 1 — Kaunas",
  city: "Kaunas",
  notebookCount: 10000,
  printDeadline: "2027-06-01",
  printDeadlineLabel: "1 June 2027",
  designDeadlineLabel: "1 June 2027",
  distributionStartLabel: "September 2027",
  distributionLabel: "universities in Kaunas",
  targetDescription: "Universities in Kaunas",
  bookingStatus: "booking-open",
  previewImages: {
    cover: "/images/ad-front-cover.webp",
    open: "/uuemad%20vihkud%20avatud.png",
  },
  mediaKit: {
    previewImage: "/images/ad-insert.webp",
    pdfUrl: "/media-kits/lithuania-autumn-2027.pdf",
  },
  placements: createNotebookInventory({
    coverPrices: {
      front: 2200,
      back: 900,
      insideFront: 700,
      insideBack: 700,
    },
    pagePrice: 12,
    pageCount: 48,
    nameOverrides: {
      "page-25": "Middle full page",
      "page-26": "Middle full page",
    },
  }),
};
