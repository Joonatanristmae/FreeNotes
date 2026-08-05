export type Statistic = {
  id: string;
  value: string;
  label: string;
};

export type Institution = {
  id: string;
  name: string;
  logo?: string;
};

export type PricingPackage = {
  id: string;
  name: string;
  description: string;
  reach: string;
  price: string;
  ctaLabel: string;
  image?: string;
  featured?: boolean;
};

export type CountryPartner = {
  id: string;
  name: string;
  logo: string;
  logoScale?: number;
  year: number;
  description: string;
};

export type Country = {
  slug: string;
  name: string;
  flag: string;
  active: boolean;
  /** When true, country card links to /{slug} inventory page */
  hasInventory?: boolean;
  hero: {
    title: string;
    subtitle: string;
  };
  stats: Statistic[];
  universities: Institution[];
  highSchools: Institution[];
  pricing: PricingPackage[];
  partners: CountryPartner[];
};

export type PartnerCampaign = {
  id: string;
  name: string;
  logo: string;
  logoScale?: number;
  country: string;
  year: number;
  notebooks: number;
  campaignGoal: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type PlacementStatus = "available" | "reserved" | "sold";

export type Placement = {
  id: string;
  name: string;
  status: PlacementStatus;
  price?: number;
  previewImage?: string;
};

export type BookingStatus = "booking-open" | "coming-soon" | "closed";

export type NotebookBatch = {
  id: string;
  name: string;
  notebookCount: number;
  distributionDate: string;
  distributionLabel: string;
  targetDescription: string;
  bookingStatus: BookingStatus;
  placements: Placement[];
  previewImages: {
    cover: string;
    open: string;
  };
  mediaKit: {
    previewImage: string;
    pdfUrl: string;
  };
};

export type CountryInventory = {
  slug: string;
  name: string;
  flag: string;
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  batches: NotebookBatch[];
};
