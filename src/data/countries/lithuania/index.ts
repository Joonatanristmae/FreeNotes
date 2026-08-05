import type { CountryInventory } from "@/data/types";
import { autumn2027 } from "./batch-autumn-2027";
import { spring2028 } from "./batch-spring-2028";

export const lithuaniaInventory: CountryInventory = {
  slug: "lithuania",
  name: "Lithuania",
  flag: "🇱🇹",
  hero: {
    title: "Advertising opportunities in Lithuania",
    subtitle:
      "Choose a notebook batch and reserve your advertising placement before it sells out.",
    image: "/uuemad%20vihkud%20avatud.png",
  },
  batches: [autumn2027, spring2028],
};
