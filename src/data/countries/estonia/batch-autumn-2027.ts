import type { NotebookBatch } from "@/data/types";
import { createPlacements } from "@/data/countries/_shared";

export const autumn2027: NotebookBatch = {
  id: "autumn-2027",
  name: "Autumn 2027",
  notebookCount: 5000,
  distributionDate: "2027-09-01",
  distributionLabel: "September 2027",
  targetDescription: "Upper secondary schools across Estonia",
  bookingStatus: "booking-open",
  previewImages: {
    cover: "/images/ad-front-cover.webp",
    open: "/uuemad%20vihkud%20avatud.png",
  },
  mediaKit: {
    previewImage: "/images/ad-front-cover.webp",
    pdfUrl: "/media-kits/estonia-autumn-2027.pdf",
  },
  placements: createPlacements([
    { id: "front-cover", name: "Front Cover", status: "sold", price: 2500 },
    { id: "back-cover", name: "Back Cover", status: "available", price: 1000 },
    { id: "inside-cover", name: "Inside Cover", status: "reserved", price: 800 },
    { id: "page-1", name: "Page 1", status: "sold", price: 15 },
    { id: "page-2", name: "Page 2", status: "available", price: 15 },
    { id: "page-3", name: "Page 3", status: "available", price: 15 },
    { id: "page-4", name: "Page 4", status: "available", price: 15 },
    { id: "page-5", name: "Page 5", status: "reserved", price: 15 },
    { id: "page-6", name: "Page 6", status: "available", price: 15 },
    { id: "page-7", name: "Page 7", status: "available", price: 15 },
    { id: "page-8", name: "Page 8", status: "sold", price: 15 },
    { id: "page-9", name: "Page 9", status: "available", price: 15 },
    { id: "page-10", name: "Page 10", status: "available", price: 15 },
  ]),
};
