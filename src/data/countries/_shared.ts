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
    // Keep price visible for available + reserved; hide for sold.
    price: seed.status === "sold" ? undefined : seed.price,
  }));
}

export function formatPrice(price?: number | null): string {
  if (price === undefined || price === null) return "—";
  return new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatCount(value: number | null): string {
  if (value === null) return "TBD";
  return value.toLocaleString("en-US");
}
