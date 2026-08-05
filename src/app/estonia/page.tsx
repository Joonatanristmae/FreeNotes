import type { Metadata } from "next";
import { CountryAdvertisingInventory } from "@/components/inventory/CountryAdvertisingInventory";
import { estoniaInventory } from "@/data/countries/estonia";

export const metadata: Metadata = {
  title: "Advertising opportunities in Estonia",
  description: estoniaInventory.hero.subtitle,
};

export default function EstoniaPage() {
  return <CountryAdvertisingInventory inventory={estoniaInventory} />;
}
