import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Floating labels specified in PRD (FR-HERO-3)
  const floatingTags = [
    {
      id: 'web-dev',
      label: 'Web Development',
      pos: 'top-[18%] left-[4%] sm:left-[8%] lg:left-[14%]',
      floatDelay: 0,
      glowColor: 'rgba(175, 105, 239, 0.4)'
    },
    {
      id: 'app-dev',
      label: 'App Development',
      pos: 'top-[36%] left-[2%] sm:left-[5%] lg:left-[8%]',
      floatDelay: 0.6,
      glowColor: 'rgba(113, 1, 147, 0.4)'
    },
    {
      id: 'ai-auto',
      label: 'AI Automation',
      pos: 'bottom-[28%] left-[4%] sm:left-[8%] lg:left-[12%]',
      floatDelay: 1.2,
      glowColor: 'rgba(175, 105, 239, 0.4)'
    },
    {
      id: 'seo-aeo',
      label: 'SEO · AEO · GEO',
      pos: 'top-[18%] right-[4%] sm:right-[8%] lg:left-[68%]',
      floatDelay: 0.3,
      glowColor: 'rgba(175, 105, 239, 0.4)'
    },
    {
      id: 'growth-strat',
      label: 'Growth Strategy',
      pos: 'top-[42%] right-[2%] sm:right-[5%] lg:left-[74%]',
      floatDelay: 0.9,
      glowColor: 'rgba(113, 1, 147, 0.4)'
    },
    {
      id: 'digital-exp',
      label: 'Digital Experience',
      pos: 'bottom-[24%] right-[4%] sm:right-[8%] lg:left-[64%]',
      floatDelay: 1.5,
      glowColor: 'rgba(175, 105, 239, 0.4)'
    },
  ];

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-start overflow-hidden pt-12 pb-24 bg-[#000000]">
      {/* Background Subtle Violet Glow behind Hero */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] rounded-full bg-scuba-violet/20 blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-scuba-violet/40 bg-[#0E0E10]/80 mb-6 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-scuba-orchid animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-scuba-lightgray uppercase">
            AI Growth & Engineering Agency
          </span>
        </motion.div>

        {/* Primary Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.08] mb-6"
        >
          We turn ideas into reality<span className="text-scuba-orchid">.</span>
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[#A6A6A6] max-w-2xl mx-auto font-normal leading-relaxed mb-10"
        >
          From strategic AI engineering to full-stack digital experiences and modern search visibility, we partner with ambitious businesses to dive deeper and build smarter.
        </motion.p>

        {/* Two CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-scuba-violet hover:bg-scuba-orchid text-white font-semibold text-xs tracking-[0.18em] rounded-full transition-all duration-300 shadow-glow-violet hover:shadow-glow-orchid flex items-center justify-center space-x-2 group"
          >
            <span>START YOUR PROJECT</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#0E0E10]/80 hover:bg-[#1A1A1A] border border-[#242428] hover:border-scuba-orchid text-[#DCDCDC] hover:text-white font-semibold text-xs tracking-[0.18em] rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            EXPLORE WHAT WE DO
          </Link>
        </motion.div>

        {/* Signature Portrait Visual with Orbiting / Floating Tags */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-4xl mx-auto aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center"
        >
          {/* Subtle Ambient Violet Glow behind portrait */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent z-10 pointer-events-none" />
          <div className="absolute -bottom-8 w-3/4 h-28 bg-scuba-violet/30 blur-[90px] rounded-full pointer-events-none" />

          {/* Portrait Image Container */}
          <div className="relative w-full h-full overflow-hidden rounded-2xl border border-[#1A1A1A] bg-[#000000]">
            <img
              src="/scuba-hero-portrait.jpg"
              alt="SCUBA AI Growth & Engineering Visual"
              className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
              loading="eager"
              fetchPriority="high"
            />
            {/* Soft masked edges as specified in FR-HERO-2 */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/60 via-transparent to-[#000000]/60 pointer-events-none" />
          </div>

          {/* Floating Pill Badges (FR-HERO-3) */}
          {floatingTags.map((tag) => (
            <motion.div
                key={tag.id}
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: [-4, 4, -4],
                      }
                }
                transition={
                  shouldReduceMotion
                    ? {}
                    : {
                        duration: 4.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: tag.floatDelay,
                      }
                }
                className={`absolute z-20 hidden sm:flex items-center space-x-2 px-3.5 py-2 rounded-full bg-[#0E0E10]/85 border border-[#301c38] text-white backdrop-blur-md text-xs font-medium tracking-wide shadow-lg transition-all duration-300 hover:scale-105 hover:border-scuba-orchid ${tag.pos}`}
                style={{
                  boxShadow: `0 4px 20px ${tag.glowColor}`,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-scuba-orchid shadow-glow-orchid" />
                <span className="text-[11px] font-semibold text-[#E6E6E6]">{tag.label}</span>
              </motion.div>
          ))}
        </motion.div>

        {/* Mobile Floating Tags Grid (visible on smaller screens below portrait to avoid crowding) */}
        <div className="sm:hidden flex flex-wrap justify-center gap-2 mt-6">
          {floatingTags.map((tag) => (
            <span
              key={tag.id}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#0E0E10] border border-[#242428] text-[10px] text-scuba-lightgray"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-scuba-orchid" />
              <span>{tag.label}</span>
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};
