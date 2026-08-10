import type { NotebookBatch } from "@/data/types";
import { createPlacements } from "@/data/countries/_shared";

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
  placements: createPlacements([
    { id: "front-cover", name: "Front cover", status: "sold", price: 2200 },
    { id: "back-cover", name: "Back cover", status: "available", price: 900 },
    {
      id: "inside-front",
      name: "Inside front cover",
      status: "reserved",
      price: 700,
    },
    {
      id: "inside-back",
      name: "Inside back cover",
      status: "available",
      price: 700,
    },
    { id: "page-1", name: "Page 1", status: "available", price: 12 },
    { id: "page-2", name: "Page 2", status: "reserved", price: 12 },
    { id: "page-3", name: "Page 3", status: "available", price: 12 },
    { id: "page-4", name: "Page 4", status: "available", price: 12 },
    { id: "page-5", name: "Page 5", status: "sold", price: 12 },
    { id: "page-6", name: "Page 6", status: "available", price: 12 },
    { id: "page-7", name: "Page 7", status: "available", price: 12 },
    { id: "page-8", name: "Page 8", status: "available", price: 12 },
  ]),
};
