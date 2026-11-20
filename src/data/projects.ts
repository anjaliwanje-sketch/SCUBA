import { Project } from '../types';

export const projectsData: Project[] = [
  {
    slug: 'ai-automated-operations-platform',
    title: 'Autonomous Operations & Document Pipeline',
    client: 'Confidential Logistics Group (NDA)',
    category: 'AI & Business Automation',
    summary: 'Custom intelligent document extraction and workflow routing pipeline handling complex freight documentation.',
    challenge: 'The client faced manual processing bottlenecks where operations teams spent hundreds of hours weekly manually verifying shipping bills, invoices, and customs paperwork.',
    solution: 'Engineered an asynchronous processing pipeline utilizing vision-enabled LLMs with deterministic OCR validation, automated ERP data injection, and exception flagging.',
    deliverables: [
      'Multi-modal document processing microservice',
      'Human-in-the-loop review dashboard',
      'Direct ERP webhook integration',
      'Automated error triage notification pipeline'
    ],
    technologies: ['Python', 'FastAPI', 'OpenAI Vision API', 'PostgreSQL', 'Docker', 'Redis'],
    status: 'In Production',
    placeholder: true
  },
  {
    slug: 'semantic-search-aeo-infrastructure',
    title: 'Generative Search & AEO Optimization',
    client: 'B2B Enterprise Software Suite',
    category: 'Search & AI Visibility',
    summary: 'Comprehensive semantic schema overhaul and generative engine optimization to capture AI citation authority.',
    challenge: 'Traditional SEO practices failed to gain citations in modern AI answer engines (ChatGPT Search, Perplexity, Google AI Overviews) for key enterprise software queries.',
    solution: 'Designed and deployed deep JSON-LD Knowledge Graph architecture, structured documentation answering target intent, and server-side markdown endpoints for crawler efficiency.',
    deliverables: [
      'Comprehensive Schema.org entity graph',
      'Markdown-first documentation mirrors',
      'Semantic content clusters & citation mapping',
      'Automated AEO monitoring pipeline'
    ],
    technologies: ['Next.js', 'JSON-LD', 'Schema.org', 'Perplexity API', 'Vercel Edge'],
    status: 'Completed',
    placeholder: true
  },
  {
    slug: 'fintech-modular-design-system',
    title: 'High-Performance Customer Portal & Design System',
    client: 'Fintech Asset Management Venture',
    category: 'Digital Experience & Development',
    summary: 'A sub-second financial portfolio analytics interface with real-time charting and WCAG AA accessibility compliance.',
    challenge: 'The legacy client portal suffered from slow client-side rendering, inconsistent design components, and difficult navigation on mobile devices.',
    solution: 'Architected a modular component library in React and TypeScript with zero-layout-shift UI, canvas-accelerated market charting, and bi-directional API synchronisation.',
    deliverables: [
      'Design token system in Figma & Tailwind',
      'Accessible web application in React 18',
      'Real-time WebSocket market feed integration',
      'End-to-end Playwright test suite'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WebSockets', 'ChartJS'],
    status: 'In Production',
    placeholder: true
  },
  {
    slug: 'growth-funnel-engineering',
    title: 'Conversion Architecture & Product-Led Onboarding',
    client: 'SaaS Productivity Platform',
    category: 'Business Growth Consultancy',
    summary: 'Frictionless self-serve onboarding flow and behavioral analytics instrumentation designed for conversion velocity.',
    challenge: 'High top-of-funnel visitor drop-off during user registration and complex multi-step workspace setup.',
    solution: 'Redesigned the onboarding sequence to deliver immediate user value before requiring credentials, backed by granular behavioral event tracking.',
    deliverables: [
      'Interactive pre-registration sandbox demo',
      'Segment-driven onboarding wizard',
      'Full funnel event tracking implementation',
      'Automated reactivation email hooks'
    ],
    technologies: ['React', 'PostHog', 'Mixpanel', 'Stripe Billing', 'Tailwind CSS'],
    status: 'Completed',
    placeholder: true
  }
];
