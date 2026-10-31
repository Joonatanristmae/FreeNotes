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

type NotebookInventoryOptions = {
  coverPrices: {
    front: number;
    back: number;
    insideFront: number;
    insideBack: number;
  };
  pagePrice: number;
  pageCount?: number;
  /** Override status for specific placement ids (e.g. "page-3", "front-cover"). */
  statusOverrides?: Partial<Record<string, PlacementStatus>>;
  /** Override display names for specific placement ids. */
  nameOverrides?: Partial<Record<string, string>>;
};

/** Covers + inside covers + numbered pages (default 48). */
export function createNotebookInventory({
  coverPrices,
  pagePrice,
  pageCount = 48,
  statusOverrides = {},
  nameOverrides = {},
}: NotebookInventoryOptions): Placement[] {
  const statusFor = (id: string): PlacementStatus =>
    statusOverrides[id] ?? "available";
  const nameFor = (id: string, fallback: string) =>
    nameOverrides[id] ?? fallback;

  const coversStart: PlacementSeed[] = [
    {
      id: "front-cover",
      name: nameFor("front-cover", "Front cover"),
      status: statusFor("front-cover"),
      price: coverPrices.front,
    },
    {
      id: "inside-front",
      name: nameFor("inside-front", "Inside front cover"),
      status: statusFor("inside-front"),
      price: coverPrices.insideFront,
    },
  ];

  const pages: PlacementSeed[] = Array.from({ length: pageCount }, (_, i) => {
    const n = i + 1;
    const id = `page-${n}`;
    return {
      id,
      name: nameFor(id, `Page ${n}`),
      status: statusFor(id),
      price: pagePrice,
    };
  });

  const coversEnd: PlacementSeed[] = [
    {
      id: "inside-back",
      name: nameFor("inside-back", "Inside back cover"),
      status: statusFor("inside-back"),
      price: coverPrices.insideBack,
    },
    {
      id: "back-cover",
      name: nameFor("back-cover", "Back cover"),
      status: statusFor("back-cover"),
      price: coverPrices.back,
    },
  ];

  return createPlacements([...coversStart, ...pages, ...coversEnd]);
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
