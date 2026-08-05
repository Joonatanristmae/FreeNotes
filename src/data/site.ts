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

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Countries", href: "/countries" },
    { label: "Partners", href: "/partners" },
  ] as NavLink[],
  advertising: [
    { label: "Advertising options", href: "/estonia" },
    { label: "Contact", href: "/contact" },
  ] as NavLink[],
};

export const navLinks: NavLink[] = [
  { label: "Countries", href: "/countries" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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
      "We produce high-quality notebooks and distribute them directly to students.",
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
    title: "Long exposure",
    description: "Students use notebooks every day for months.",
  },
  {
    id: "targeted",
    title: "Targeted audience",
    description: "Reach students aged 16–25 directly.",
  },
  {
    id: "physical",
    title: "Physical connection",
    description: "Become part of students' everyday life.",
  },
  {
    id: "meaningful",
    title: "Meaningful advertising",
    description: "Support education while promoting your brand.",
  },
];
