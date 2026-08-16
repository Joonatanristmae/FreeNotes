import type { NotebookBatch } from "@/data/types";
import { createNotebookInventory } from "@/data/countries/_shared";

/**
 * PLACEHOLDER batch — replace with real Lithuania inventory when confirmed.
 */
export const spring2028: NotebookBatch = {
  id: "lt-spring-2028",
  name: "Batch 2 — Kaunas",
  city: "Kaunas",
  notebookCount: 8000,
  printDeadline: "2027-01-20",
  printDeadlineLabel: "20 January 2027",
  distributionLabel: "Kaunas schools",
  targetDescription: "Secondary schools in Kaunas (placeholder)",
  bookingStatus: "coming-soon",
  previewImages: {
    cover: "/images/ad-back-cover.webp",
    open: "/images/ad-inside-page.webp",
  },
  mediaKit: {
    previewImage: "/images/ad-back-cover.webp",
    pdfUrl: "/media-kits/lithuania-spring-2028.pdf",
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
  }),
};
