import type { Placement, PlacementStatus } from "@/data/types";

type PlacementSeed = {
  id: string;
  name: string;
  status: PlacementStatus;
  price?: number;
};

export function createPlacements(seeds: PlacementSeed[]): Placement[] {
  return seeds.map((seed) => ({
    ...seed,
    price: seed.status === "available" ? seed.price : undefined,
  }));
}

export function formatPrice(price?: number): string {
  if (price === undefined) return "—";
  return new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}
