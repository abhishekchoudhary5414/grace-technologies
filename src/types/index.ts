export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: {
    title: string;
    href: string;
    description: string;
    number: string;
  }[];
}

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  headline: string;
  description: string;
  route: string;
  capabilities: {
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface IndustryItem {
  title: string;
  description: string;
  stats?: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

