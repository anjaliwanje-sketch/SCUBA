import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Target, Users2 } from 'lucide-react';

export const WhyScuba: React.FC = () => {
  const pillars = [
    {
      id: '01',
      title: 'Idea to Execution',
      subtitle: 'Full-Lifecycle Delivery',
      icon: Zap,
      description: 'We accompany you across the entire product arc. From early conceptual architecture and UX prototyping through to high-concurrency cloud deployment, we build the entire operational system.'
    },
    {
      id: '02',
      title: 'AI with Purpose',
      subtitle: 'Deterministic Engineering',
      icon: ShieldCheck,
      description: 'No speculative novelty or unvalidated wrappers. We architect custom AI agents, RAG pipelines, and automated workflows engineered to reduce human error and save real operational hours.'
    },
    {
      id: '03',
      title: 'Business-First Thinking',
      subtitle: 'Revenue & Speed Aligned',
      icon: Target,
      description: 'Code is a commercial asset, not an academic exercise. Our architecture decisions prioritize customer conversion velocity, sustainable cloud costs, and search discoverability.'
    },
    {
      id: '04',
      title: 'Clear Collaboration',
      subtitle: 'Zero Bureaucracy',
      icon: Users2,
      description: 'You communicate directly with principal engineers and technical strategists. Transparent weekly sprint demos, async documentation, and dedicated direct channels without account manager friction.'
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-[#000000] border-t border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-scuba-orchid uppercase mb-3 font-mono">
            The SCUBA Advantage
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 sm:mb-6">
            Why visionary teams choose SCUBA<span className="text-scuba-orchid">.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A6A6A6] leading-relaxed">
            Built on deep technical conviction, rapid delivery cycles, and an obsession with measurable commercial results.
          </p>
        </div>

        {/* 4 Pillars 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#0E0E10] border border-[#242428] hover:border-scuba-orchid/60 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Subtle Pillar Index Badge */}
                <span className="absolute top-5 right-6 sm:top-6 sm:right-8 text-2xl sm:text-3xl font-extrabold font-mono text-[#1F1F24] group-hover:text-scuba-tint/50 transition-colors pointer-events-none">
                  {pillar.id}
                </span>

                <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2e1d35] flex items-center justify-center text-scuba-orchid group-hover:text-white group-hover:bg-scuba-violet transition-all duration-300 mb-5 sm:mb-6">
                  <Icon className="w-6 h-6" />
                </div>

                <p className="text-xs font-semibold tracking-wider text-scuba-orchid uppercase mb-1 font-mono">
                  {pillar.subtitle}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 tracking-tight group-hover:text-scuba-orchid transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A6A6] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
