import type { NavLink, Statistic } from "./types";

export const siteConfig = {
  name: "FreeNotes",
  companyName: "FreeNotes",
  tagline: "Reach students through everyday advertising.",
  description:
    "FreeNotes helps companies reach students through free notebooks distributed in schools and universities.",
  email: "info@freenotes.eu",
  location: "Estonia",
  url: "https://freenotes.eu",
};

export const navLinks: NavLink[] = [
  { label: "Countries", href: "/international#countries" },
  { label: "Partners", href: "/international#partners" },
  { label: "About", href: "/about" },
];

export const globalStats: Statistic[] = [
  { id: "notebooks", value: "120,000+", label: "Notebooks distributed annually" },
  { id: "students", value: "85,000+", label: "Students reached" },
  { id: "countries", value: "1", label: "Active countries" },
  { id: "schools", value: "40+", label: "Schools & universities" },
];

export const howItWorks = [
  {
    id: "advertise",
    step: "01",
    title: "Companies advertise",
    description: "Brands choose advertising space on our notebooks.",
  },
  {
    id: "distribute",
    step: "02",
    title: "We create and distribute notebooks",
    description:
      "We produce notebooks and deliver them to school buildings, where students can take them for free."
  },
  {
    id: "use",
    step: "03",
    title: "Students use them daily",
    description: "Your brand stays visible throughout the school year.",
  },
];

export const benefits = [
  {
    id: "exposure",
    title: "Long repeated exposure",
    description: "Students use notebooks every day for months.",
  },
  {
    id: "targeted",
    title: "Targeted audience",
    description: "Reach students aged 16–28 directly.",
  },
  {
    id: "regional",
    title: "Choose your region/city",
    description:
      "Target the cities or regions that matter to you — notebooks go exactly where you want them.",
  },
  {
    id: "flexible",
    title: "Flexible scale and budget",
    description:
      "From a few pages in a small run for around €20 to many pages across thousands of notebooks — we have something for every budget.",
  },
];
