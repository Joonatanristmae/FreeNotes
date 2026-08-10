import type { NotebookBatch } from "@/data/types";
import { createPlacements } from "@/data/countries/_shared";

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
  placements: createPlacements([
    { id: "front-cover", name: "Front cover", status: "available", price: 2200 },
    { id: "back-cover", name: "Back cover", status: "available", price: 900 },
    {
      id: "inside-front",
      name: "Inside front cover",
      status: "available",
      price: 700,
    },
    {
      id: "inside-back",
      name: "Inside back cover",
      status: "available",
      price: 700,
    },
    { id: "page-1", name: "Page 1", status: "available", price: 12 },
    { id: "page-2", name: "Page 2", status: "available", price: 12 },
    { id: "page-3", name: "Page 3", status: "available", price: 12 },
    { id: "page-4", name: "Page 4", status: "available", price: 12 },
  ]),
};
