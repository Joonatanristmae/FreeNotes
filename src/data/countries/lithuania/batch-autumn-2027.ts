import type { NotebookBatch } from "@/data/types";
import { createNotebookInventory } from "@/data/countries/_shared";

/**
 * PLACEHOLDER batch — replace counts, dates, city, and placement statuses
 * with real Lithuania inventory when confirmed.
 */
export const autumn2027: NotebookBatch = {
  id: "lt-autumn-2027",
  name: "Batch 1 — Vilnius",
  city: "Vilnius",
  notebookCount: 10000,
  printDeadline: "2026-09-15",
  printDeadlineLabel: "15 September 2026",
  distributionLabel: "Vilnius schools",
  targetDescription: "Secondary schools and universities in Vilnius (placeholder)",
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
    statusOverrides: {
      "front-cover": "sold",
      "inside-front": "reserved",
      "page-2": "reserved",
      "page-5": "sold",
    },
  }),
};
