import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Cog, TrendingUp } from 'lucide-react';

export const BrandIntro: React.FC = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Understand the Idea',
      description: 'We deconstruct your core problem, user journey, and market constraints with rigorous architectural clarity.'
    },
    {
      icon: Cog,
      title: 'Engineer the Solution',
      description: 'We build production-grade web applications, autonomous AI pipelines, and high-performance search architectures.'
    },
    {
      icon: TrendingUp,
      title: 'Create the Impact',
      description: 'Every line of code and automation pipeline is measured against real commercial growth, speed, and efficiency.'
    }
  ];

  return (
    <section className="w-full py-24 bg-[#000000] border-t border-[#1A1A1A] relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-scuba-tint/30 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-scuba-orchid uppercase mb-3">
            Our Philosophy
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            One partner. From idea to impact<span className="text-scuba-orchid">.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A6A6A6] leading-relaxed">
            Most digital agencies fragment strategy, software development, and growth across disparate contractors. 
            SCUBA operates as your unified, full-cycle engineering partner.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-8 rounded-2xl bg-[#0E0E10] border border-[#242428] hover:border-scuba-orchid/60 transition-all duration-300 group hover:-translate-y-1 relative"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#301c38] flex items-center justify-center text-scuba-orchid group-hover:text-white group-hover:bg-scuba-violet transition-colors duration-300 mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-scuba-orchid transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-[#A6A6A6] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Tagline Callout */}
        <div className="mt-16 text-center">
          <p className="text-sm tracking-[0.2em] font-semibold text-scuba-muted uppercase">
            Dive Deeper. Build Smarter.
          </p>
        </div>

      </div>
    </section>
  );
};
