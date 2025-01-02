import type { PortableTextBlock } from '@portabletext/types';

export interface CTA {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  variant: boolean;
  activateSecondaryButton: boolean;
  showCTA: boolean;
}

export interface JobOpening {
  title: string;
  location: string;
  link: string;
}

export interface JobCategory {
  _id: string;
  _createdAt: string;
  category: string;
  openings: JobOpening[];
}

export interface Feature {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  _id: string;
  _createdAt: string;
  question: string;
  answer: PortableTextBlock[];
}

export interface Event {
  _id: string;
  _createdAt: string;
  id: string;
  title: string;
  summary: string;
  slug: string;
  content: PortableTextBlock[];
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
  label: string;
  author: string;
  published: string;
  href: string;
}

// Query response types
export type CTAResponse = CTA[];
export type JobCategoryResponse = JobCategory[];
export type FeatureResponse = Feature[];
export type FAQResponse = FAQ[];
export type EventResponse = Event[];
