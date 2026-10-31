import type { Metadata } from "next";
import { LithuaniaLanding } from "@/components/countries/LithuaniaLanding";
import { getLithuaniaPageCopy } from "@/data/countries/lithuania/i18n";

const copy = getLithuaniaPageCopy("en");

export const metadata: Metadata = {
  title: copy.metadata.title,
  description: copy.metadata.description,
  alternates: {
    languages: {
      lt: "/lt",
      en: "/lt-en",
    },
  },
};

export default function LithuaniaEnglishPage() {
  return <LithuaniaLanding locale="en" />;
}
