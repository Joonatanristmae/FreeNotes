import type { NotebookBatch } from "@/data/types";
import { createPlacements } from "@/data/countries/_shared";

export const autumn2027: NotebookBatch = {
  id: "lt-autumn-2027",
  name: "Autumn 2027",
  notebookCount: 5000,
  distributionDate: "2027-09-01",
  distributionLabel: "September 2027",
  targetDescription: "Universities across Lithuania",
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
    { id: "front-cover", name: "Front Cover", status: "available", price: 2200 },
    { id: "back-cover", name: "Back Cover", status: "available", price: 900 },
    { id: "inside-cover", name: "Inside Cover", status: "available", price: 700 },
    { id: "page-1", name: "Page 1", status: "available", price: 12 },
    { id: "page-2", name: "Page 2", status: "available", price: 12 },
    { id: "page-3", name: "Page 3", status: "reserved", price: 12 },
    { id: "page-4", name: "Page 4", status: "available", price: 12 },
    { id: "page-5", name: "Page 5", status: "available", price: 12 },
    { id: "page-6", name: "Page 6", status: "sold", price: 12 },
    { id: "page-7", name: "Page 7", status: "available", price: 12 },
    { id: "page-8", name: "Page 8", status: "available", price: 12 },
  ]),
};
