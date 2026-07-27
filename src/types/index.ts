import type { LucideIcon } from "lucide-react";

/* ------------------------------ services ------------------------------ */
export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  price: string;
  icon: LucideIcon;
  palette: [string, string];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

/* ------------------------------ portfolio ----------------------------- */
export type ProjectCategory = "Web" | "Game" | "IoT" | "Design";

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: number;
  description: string;
  tags: string[];
  outcome: string;
  palette: [string, string];
  /** Tailwind aspect-ratio class — drives the masonry rhythm. */
  aspect: string;
  image?: string;
  github?: string;
  link?: string;
}

/* ------------------------------- gallery ------------------------------ */
export interface GalleryItem {
  id: string;
  caption: string;
  category: string;
  palette: [string, string];
  aspect: string;
}

/* ------------------------------ marketing ----------------------------- */
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  palette: [string, string];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  palette: [string, string];
}

export type FaqCategory = "General" | "Process" | "Pricing" | "Support";

export interface Faq {
  question: string;
  answer: string;
  category: FaqCategory;
}

export interface PricingTier {
  name: string;
  description: string;
  /** null = custom pricing */
  monthly: number | null;
  features: string[];
  highlighted: boolean;
  badge?: string;
  cta: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface ProofItem {
  type: "certificate" | "documentation" | "link";
  title: string;
  url?: string;
  issuer?: string;
  date?: string;
  image?: string;
  palette?: [string, string];
}

export interface TimelineItem {
  year: string;
  title: string;
  company?: string;
  location?: string;
  logoUrl?: string;
  description?: string;
  highlights?: string[];
  tags?: string[];
  proofs?: ProofItem[];
}

export interface CompanyValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Achievement {
  org: string;
  award: string;
  year: string;
}

export interface PartnerLogo {
  name: string;
  icon: LucideIcon;
}

/* -------------------------------- blog -------------------------------- */
export type PostCategory = "Design" | "Engineering" | "Growth" | "Workflow";

export type PostBlock =
  | { type: "p" | "h2" | "quote"; text: string }
  | { type: "list"; items: string[] };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  date: string;
  readingTime: number;
  author: { name: string; role: string };
  palette: [string, string];
  content: PostBlock[];
}
