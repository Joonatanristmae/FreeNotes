import type { Metadata } from "next";
import { InternationalLanding } from "@/components/pages/InternationalLanding";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — International`,
  description: siteConfig.description,
  alternates: {
    canonical: "/international",
  },
};

export default function InternationalPage() {
  return <InternationalLanding />;
}
