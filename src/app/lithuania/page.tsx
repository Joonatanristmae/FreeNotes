import type { Metadata } from "next";
import { CountryAdvertisingInventory } from "@/components/inventory/CountryAdvertisingInventory";
import { lithuaniaInventory } from "@/data/countries/lithuania";

export const metadata: Metadata = {
  title: "Advertising opportunities in Lithuania",
  description: lithuaniaInventory.hero.subtitle,
};

export default function LithuaniaPage() {
  return <CountryAdvertisingInventory inventory={lithuaniaInventory} />;
}
