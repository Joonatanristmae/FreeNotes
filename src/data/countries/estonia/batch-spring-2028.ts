import type { NotebookBatch } from "@/data/types";
import { createPlacements } from "@/data/countries/_shared";

export const spring2028: NotebookBatch = {
  id: "spring-2028",
  name: "Spring 2028",
  city: "Nationwide",
  notebookCount: 5000,
  printDeadline: "2028-01-15",
  printDeadlineLabel: "15 January 2028",
  distributionLabel: "Universities and upper secondary schools across Estonia",
  targetDescription: "Universities and upper secondary schools across Estonia",
  bookingStatus: "coming-soon",
  previewImages: {
    cover: "/images/ad-back-cover.webp",
    open: "/images/ad-inside-page.webp",
  },
  mediaKit: {
    previewImage: "/images/ad-back-cover.webp",
    pdfUrl: "/media-kits/estonia-spring-2028.pdf",
  },
  placements: createPlacements([
    { id: "front-cover", name: "Front cover", status: "available", price: 2500 },
    { id: "back-cover", name: "Back cover", status: "available", price: 1000 },
    {
      id: "inside-front",
      name: "Inside front cover",
      status: "available",
      price: 800,
    },
    {
      id: "inside-back",
      name: "Inside back cover",
      status: "available",
      price: 800,
    },
    { id: "page-1", name: "Page 1", status: "available", price: 15 },
    { id: "page-2", name: "Page 2", status: "available", price: 15 },
    { id: "page-3", name: "Page 3", status: "available", price: 15 },
    { id: "page-4", name: "Page 4", status: "available", price: 15 },
    { id: "page-5", name: "Page 5", status: "available", price: 15 },
    { id: "page-6", name: "Page 6", status: "available", price: 15 },
  ]),
};
