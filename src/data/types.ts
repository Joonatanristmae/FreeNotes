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
  /** When true, country card links to the inventory/market page */
  hasInventory?: boolean;
  /** Public URL for the country page (e.g. "/lt"). Defaults to `/{slug}` when hasInventory. */
  path?: string;
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

/** School / institution where notebooks are distributed. */
export type DistributionLocation = {
  id: string;
  schoolName: string;
  city: string;
  /** Use null for unknown; replace with real counts later. */
  studentCount: number | null;
  /** Use null for unknown; replace with real counts later. */
  notebookCount: number | null;
  /** Mark true while this row is still mock/placeholder data. */
  isPlaceholder?: boolean;
};

/** Country-level rate card (independent of a specific batch). */
export type AdvertisingPrice = {
  id: string;
  name: string;
  description: string;
  /** EUR amount, or null when price is on request / not set yet. */
  price: number | null;
  /** Optional path to a placement preview image (e.g. /hinnakiri2/esikaas.png). */
  image?: string;
  /** Shown after the price, e.g. "+VAT / 5000 vihikut". */
  priceSuffix?: string;
  /** Secondary line under the price, e.g. "(kokku vihikus 60tk)". */
  priceNote?: string;
  /** Placement dimensions — shown in the info tooltip on hover. */
  size?: string;
  /** Preview image placement within the price card. */
  imagePosition?: "left" | "right";
  /** Clockwise rotation in degrees for the preview image (default 14 on right-side images). */
  imageRotation?: number;
  /** Align the preview image to the top edge of the card. */
  imageAlignTop?: boolean;
  /** Mark true while this price is still mock/placeholder data. */
  isPlaceholder?: boolean;
};

export type NotebookBatch = {
  id: string;
  name: string;
  city: string;
  notebookCount: number;
  /** ISO date string for sorting, e.g. "2027-09-15" */
  printDeadline: string;
  /** Human-readable print deadline, e.g. "15 September 2027" */
  printDeadlineLabel: string;
  /** Where notebooks will be distributed */
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

export type CountryTeamMember = {
  id: string;
  name: string;
  role?: string;
  /** Path under /public, or null while waiting for a photo. */
  photo: string | null;
  isPlaceholder?: boolean;
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
  /** Schools/cities where notebooks reach students. */
  distributionLocations: DistributionLocation[];
  /** Standard advertising rate card for this country. */
  advertisingPrices: AdvertisingPrice[];
  batches: NotebookBatch[];
  /**
   * Previous advertising partners for this country.
   * Leave empty to hide the section (e.g. Lithuania has none yet).
   */
  previousPartners?: CountryPartner[];
  /** Local contacts shown on the country page. */
  teamContacts?: CountryTeamMember[];
};
