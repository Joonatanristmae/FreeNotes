import type { Metadata } from "next";
import { FinlandLanding } from "@/components/countries/FinlandLanding";
import { getFinlandPageCopy } from "@/data/countries/finland/i18n";

const copy = getFinlandPageCopy("en");

export const metadata: Metadata = {
  title: copy.metadata.title,
  description: copy.metadata.description,
  alternates: {
    languages: {
      fi: "/fi",
      en: "/fi-en",
    },
  },
};

export default function FinlandEnglishPage() {
  return <FinlandLanding locale="en" />;
}
