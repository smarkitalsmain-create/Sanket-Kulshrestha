export interface Venture {
  id: string;
  name: string;
  logoUrl?: string;
  tagline: string;
  mission: string;
  purpose: string;
  currentFocus: string;
  futureVision: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface MetricItem {
  label: string;
  value: number;
  suffix: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  date: string;
  content?: string;
}

export interface MediaItem {
  id: string;
  title: string;
  type: 'Workshop' | 'Guest Session' | 'Panel' | 'Business Event' | 'Podcast' | 'Conversation';
  date: string;
  location?: string;
  description: string;
  imageUrl?: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface PhilosophyPrinciple {
  title: string;
  description: string;
}
