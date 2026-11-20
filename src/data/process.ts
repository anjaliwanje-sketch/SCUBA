import { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    phase: 'Discovery',
    title: 'Discover',
    duration: 'Week 1',
    description: 'We deconstruct your core concept, business objectives, and user requirements. No assumptions—only clarity.',
    details: [
      'Stakeholder alignment interviews',
      'Technical feasibility and risk audit',
      'Competitive landscape & market gap review',
      'Scope definition and initial milestone mapping'
    ]
  },
  {
    number: '02',
    phase: 'Strategy',
    title: 'Research & Strategize',
    duration: 'Week 1–2',
    description: 'Translating business goals into an actionable engineering blueprint, technology selection, and data architecture.',
    details: [
      'Technology stack selection & cost modeling',
      'AI pipeline & LLM model feasibility analysis',
      'Information architecture & data modeling',
      'Detailed specification & sprint planning'
    ]
  },
  {
    number: '03',
    phase: 'Design',
    title: 'Define & Design',
    duration: 'Week 2–3',
    description: 'Crafting intuitive user journeys, interactive wireframes, and high-fidelity design systems tailored to conversion.',
    details: [
      'Wireframing & core interaction flows',
      'Design system & component specifications',
      'Interactive Figma prototypes & user validation',
      'Design tokens & developer handoff guidelines'
    ]
  },
  {
    number: '04',
    phase: 'Engineering',
    title: 'Engineer & Build',
    duration: 'Week 3–6+',
    description: 'Writing clean, modular, production-grade code with automated test suites, CI/CD pipelines, and rigorous security checks.',
    details: [
      'Full-stack modular frontend & backend build',
      'AI agents & API automation integration',
      'Automated testing & performance profiling',
      'Continuous client demos and iterative refinements'
    ]
  },
  {
    number: '05',
    phase: 'Deployment',
    title: 'Launch & Handover',
    duration: 'Week 6–8',
    description: 'Hardening security, verifying zero-downtime deployment, and ensuring comprehensive documentation and team enablement.',
    details: [
      'Production deployment & CDN edge caching',
      'Technical SEO, AEO & schema verification',
      'Security audit & credential hardening',
      'Complete code repositories, docs & team training'
    ]
  },
  {
    number: '06',
    phase: 'Growth',
    title: 'Support & Evolve',
    duration: 'Ongoing',
    description: 'Continuous monitoring, iterative feature rollout, search visibility adjustments, and ongoing AI model optimization.',
    details: [
      'Proactive monitoring, uptime alerts & bug fixes',
      'Search & AI engine ranking tracking',
      'Iterative conversion & performance tuning',
      'Quarterly growth & tech advisory reviews'
    ]
  }
];
