import type { NotebookBatch } from "@/data/types";
import { createPlacements } from "@/data/countries/_shared";

export const spring2028: NotebookBatch = {
  id: "lt-spring-2028",
  name: "Spring 2028",
  notebookCount: 5000,
  distributionDate: "2028-02-01",
  distributionLabel: "February 2028",
  targetDescription: "Secondary schools and universities across Lithuania",
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
    { id: "front-cover", name: "Front Cover", status: "available", price: 2200 },
    { id: "back-cover", name: "Back Cover", status: "available", price: 900 },
    { id: "inside-cover", name: "Inside Cover", status: "available", price: 700 },
    { id: "page-1", name: "Page 1", status: "available", price: 12 },
    { id: "page-2", name: "Page 2", status: "available", price: 12 },
    { id: "page-3", name: "Page 3", status: "available", price: 12 },
    { id: "page-4", name: "Page 4", status: "available", price: 12 },
  ]),
};
