import type { NotebookBatch } from "@/data/types";
import { createPlacements } from "@/data/countries/_shared";

export const autumn2027: NotebookBatch = {
  id: "autumn-2027",
  name: "Autumn 2027",
  city: "Tallinn & Tartu",
  notebookCount: 5000,
  printDeadline: "2027-08-15",
  printDeadlineLabel: "15 August 2027",
  distributionLabel: "Upper secondary schools across Estonia",
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
    { id: "front-cover", name: "Front cover", status: "sold", price: 2500 },
    { id: "back-cover", name: "Back cover", status: "available", price: 1000 },
    {
      id: "inside-front",
      name: "Inside front cover",
      status: "reserved",
      price: 800,
    },
    {
      id: "inside-back",
      name: "Inside back cover",
      status: "available",
      price: 800,
    },
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
