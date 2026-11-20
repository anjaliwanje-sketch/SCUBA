export type ServiceDivisionId = 
  | 'digital-experience'
  | 'search-ai-visibility'
  | 'ai-business-automation'
  | 'business-growth-consultancy';

export interface ServiceDivision {
  id: ServiceDivisionId;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  icon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  phase: string;
  duration: string;
  description: string;
  details: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Services' | 'Pricing' | 'Technology' | 'Process';
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  technologies: string[];
  status: 'Completed' | 'In Production' | 'NDA Prototype';
  placeholder?: boolean;
}

export type BlogCategory = 
  | 'Artificial Intelligence'
  | 'Web & App Development'
  | 'SEO, AEO & GEO'
  | 'Business Automation'
  | 'Digital Growth'
  | 'Engineering & Technology';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  author: {
    name: string;
    role: string;
  };
  date: string;
  readTime: string;
  published: boolean;
  tags: string[];
}

export interface ContactFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  service: ServiceDivisionId | '';
  projectDescription: string;
  budget: string;
  timeline: string;
}
