export type VentureKind = "Entity" | "Product" | "Initiative";
export type VentureStatus = "Operating" | "In development";

export interface Venture {
  id: string;
  name: string;
  kind: VentureKind;
  /** Legal form or product category, e.g. "Limited Liability Partnership" */
  entityType: string;
  /** Sanket's role. Omit when no role has been established. */
  role?: string;
  status: VentureStatus;
  /** Parent entity or brand, e.g. "Smarkitals Technologies India Pvt Ltd" */
  parent?: string;
  summary: string;
  /** What is offered today */
  available?: string[];
  /** Work that is planned or being built, never presented as live */
  inDevelopment?: string[];
  note?: string;
  /** Only set for links that have been checked and resolve to the right site */
  verifiedLink?: { label: string; href: string };
}

export interface ServiceGroup {
  id: string;
  title: string;
  iconName: string;
  whoItHelps: string;
  problems: string[];
  deliverables: string[];
  note?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  summary: string;
  /** Full text. Articles without it are shown as previews only. */
  content?: string[];
}

export interface WritingProject {
  id: string;
  name: string;
  format: string;
  description: string;
  status?: string;
  /** Only set for links that have been verified */
  href?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  /** Where the quote came from (e.g. LinkedIn recommendation URL). Required to publish. */
  source?: string;
}

export interface Principle {
  title: string;
  description: string;
}
