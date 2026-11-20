import { ServiceDivision } from '../types';

export const servicesData: ServiceDivision[] = [
  {
    id: 'digital-experience',
    title: 'Digital Experience & Development',
    shortTitle: 'Digital Experience',
    tagline: 'Engineered web & mobile software built for performance, reliability, and scale.',
    description: 'We architect and build enterprise-grade web applications, responsive digital platforms, and cross-platform mobile experiences that turn complex functionality into seamless user interactions.',
    deliverables: [
      'Custom Web Applications (React, Next.js, TypeScript)',
      'Cross-Platform Mobile Apps (iOS & Android)',
      'High-Performance Web Platforms & Portals',
      'Modern UI/UX Design Systems & Motion Interfaces',
      'Robust API Architecture, Microservices & Headless CMS',
      'Performance Optimization & Core Web Vitals Hardening'
    ],
    techStack: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'GraphQL'],
    icon: 'Layers'
  },
  {
    id: 'search-ai-visibility',
    title: 'Search & AI Visibility',
    shortTitle: 'Search & AI Visibility',
    tagline: 'Dominate traditional search results and emerging AI discovery engines.',
    description: 'The search landscape has shifted. We combine deep technical SEO with cutting-edge AI Engine Optimization (AEO) and Generative Engine Optimization (GEO) to ensure your brand is cited and recommended by LLMs and search engines alike.',
    deliverables: [
      'Technical SEO & Deep Core Web Vitals Optimization',
      'AI Engine Optimization (AEO for ChatGPT, Perplexity, Copilot)',
      'Generative Engine Optimization (GEO for Google AI Overviews)',
      'Semantic Entity Mapping & Structured Data Architecture',
      'Authority Content Strategy & Knowledge Graph Integration',
      'Competitor Search & LLM Citation Auditing'
    ],
    techStack: ['Schema.org', 'JSON-LD', 'Google Search Console', 'Perplexity API', 'OpenAI Search', 'Lighthouse'],
    icon: 'Search'
  },
  {
    id: 'ai-business-automation',
    title: 'AI & Business Automation',
    shortTitle: 'AI & Automation',
    tagline: 'Intelligent systems and autonomous workflows that compress operational overhead.',
    description: 'We turn repetitive manual workflows into autonomous, self-healing pipelines. From bespoke AI agents to end-to-end data pipelines, we engineer practical AI solutions that drive real bottom-line efficiency.',
    deliverables: [
      'Custom AI Agents, Copilots & Task Automation Bots',
      'End-to-End Workflow & Pipeline Orchestration',
      'CRM, ERP & Customer Support System Integrations',
      'Document Intelligence & Unstructured Data Extraction',
      'Internal Tooling, Admin Portals & Monitoring Dashboards',
      'LLM Fine-Tuning, Guardrails & Deterministic Fallbacks'
    ],
    techStack: ['Python', 'LangChain', 'FastAPI', 'OpenAI', 'Anthropic', 'Vector DBs', 'Make / n8n', 'Docker'],
    icon: 'Cpu'
  },
  {
    id: 'business-growth-consultancy',
    title: 'Business Growth Consultancy',
    shortTitle: 'Growth Consultancy',
    tagline: 'High-conviction product strategy and growth engineering aligned to revenue.',
    description: 'Technology without commercial alignment is overhead. We partner directly with founders and leadership teams to validate product assumptions, eliminate conversion bottlenecks, and modernize technology roadmaps.',
    deliverables: [
      'Digital Product Strategy & Roadmap Definition',
      'Tech Stack Architecture & Modernization Advisory',
      'Conversion Rate Optimization (CRO) & Funnel Engineering',
      'Product-Led Growth (PLG) & User Onboarding Engineering',
      'Customer Retention, LTV & Engagement Optimization',
      'Data & Analytics Infrastructure Setup'
    ],
    techStack: ['Analytics', 'Mixpanel', 'PostHog', 'A/B Testing', 'Figma', 'Stripe Systems'],
    icon: 'TrendingUp'
  }
];
