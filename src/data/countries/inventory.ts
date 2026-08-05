import type { CountryInventory } from "@/data/types";
import { estoniaInventory } from "@/data/countries/estonia";
import { lithuaniaInventory } from "@/data/countries/lithuania";

export const countryInventories: CountryInventory[] = [
  estoniaInventory,
  lithuaniaInventory,
];

export function getCountryInventory(slug: string): CountryInventory | undefined {
  return countryInventories.find((country) => country.slug === slug);
}

export function getInventorySlugs(): string[] {
  return countryInventories.map((country) => country.slug);
}
