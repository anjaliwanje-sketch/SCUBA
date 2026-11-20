import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Layers, Search, Cpu, TrendingUp } from 'lucide-react';
import { servicesData } from '../../data/services';
import { ScubaLogo } from '../common/ScubaLogo';

export const ServicesCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const divisionIcons = [
    <Layers className="w-6 h-6 text-scuba-orchid" />,
    <Search className="w-6 h-6 text-scuba-orchid" />,
    <Cpu className="w-6 h-6 text-scuba-orchid" />,
    <TrendingUp className="w-6 h-6 text-scuba-orchid" />,
  ];

  const divisionArt = [
    // 01: Digital Experience & Development
    (
      <div className="absolute inset-0 bg-gradient-to-br from-[#1c0828] via-[#0b0312] to-[#000000]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(175,105,239,0.35)_0%,transparent_70%)]" />
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 600" fill="none">
          <defs>
            <linearGradient id="gridGrad1" x1="0" y1="0" x2="400" y2="600" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#AF69EF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#710193" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <g stroke="url(#gridGrad1)" strokeWidth="1">
            <line x1="50" y1="100" x2="350" y2="100" />
            <line x1="50" y1="200" x2="350" y2="200" />
            <line x1="50" y1="300" x2="350" y2="300" />
            <line x1="100" y1="50" x2="100" y2="350" />
            <line x1="200" y1="50" x2="200" y2="350" />
            <line x1="300" y1="50" x2="300" y2="350" />
          </g>
          <rect x="120" y="140" width="160" height="120" rx="16" stroke="#AF69EF" strokeWidth="2" fill="#140722" fillOpacity="0.8" />
          <circle cx="200" cy="200" r="28" stroke="#FFFFFF" strokeWidth="2" />
          <path d="M190 200L210 200M200 190L200 210" stroke="#AF69EF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    ),
    // 02: Search & AI Visibility
    (
      <div className="absolute inset-0 bg-gradient-to-br from-[#120722] via-[#06020c] to-[#000000]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(113,1,147,0.45)_0%,transparent_75%)]" />
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 600" fill="none">
          <circle cx="200" cy="190" r="75" stroke="#AF69EF" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="200" cy="190" r="45" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="200" cy="190" r="16" fill="#AF69EF" />
          <path d="M140 130L200 190L260 250" stroke="#710193" strokeWidth="1.5" />
          <path d="M260 130L200 190L140 250" stroke="#710193" strokeWidth="1.5" />
          <circle cx="140" cy="130" r="6" fill="#AF69EF" />
          <circle cx="260" cy="130" r="6" fill="#AF69EF" />
          <circle cx="140" cy="250" r="6" fill="#AF69EF" />
          <circle cx="260" cy="250" r="6" fill="#AF69EF" />
        </svg>
      </div>
    ),
    // 03: AI & Business Automation
    (
      <div className="absolute inset-0 bg-gradient-to-br from-[#1d0628] via-[#09020e] to-[#000000]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(175,105,239,0.4)_0%,transparent_70%)]" />
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 600" fill="none">
          <rect x="130" y="120" width="140" height="140" rx="24" stroke="#AF69EF" strokeWidth="2" fill="#11051b" />
          <path d="M170 120V80M230 120V80M170 260V300M230 260V300M130 160H90M130 220H90M270 160H310M270 220H310" stroke="#AF69EF" strokeWidth="2" strokeLinecap="round" />
          <circle cx="200" cy="190" r="28" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="200" cy="190" r="12" fill="#710193" />
        </svg>
      </div>
    ),
    // 04: Business Growth Consultancy
    (
      <div className="absolute inset-0 bg-gradient-to-br from-[#160624] via-[#08020e] to-[#000000]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(113,1,147,0.45)_0%,transparent_75%)]" />
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 600" fill="none">
          <path d="M80 300L160 210L220 250L320 110" stroke="#AF69EF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M260 110H320V170" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="160" cy="210" r="6" fill="#FFFFFF" />
          <circle cx="220" cy="250" r="6" fill="#FFFFFF" />
          <circle cx="320" cy="110" r="8" fill="#AF69EF" />
        </svg>
      </div>
    ),
  ];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % servicesData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section
      className="w-full py-24 bg-[#000000] border-t border-[#1A1A1A] relative overflow-hidden select-none"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header with Title & Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-30">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.25em] text-scuba-orchid uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-scuba-orchid animate-pulse" />
              <span>Core Capabilities</span>
            </div>
            <h2 id="services-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Our Four Divisions<span className="text-scuba-orchid">.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A6A6A6] mt-3 max-w-xl">
              Engineered for velocity and scale. Each division operates with senior technical rigor and seamless inter-disciplinary execution.
            </p>
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center space-x-3 self-end md:self-auto">
            <button
              onClick={prevSlide}
              className="p-3.5 rounded-full border border-[#242428] bg-[#0E0E10] text-white hover:text-scuba-orchid hover:border-scuba-orchid transition-all duration-300 shadow-md hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-scuba-orchid cursor-pointer"
              aria-label="Previous division"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3.5 rounded-full border border-[#242428] bg-[#0E0E10] text-white hover:text-scuba-orchid hover:border-scuba-orchid transition-all duration-300 shadow-md hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-scuba-orchid cursor-pointer"
              aria-label="Next division"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* Cinematic Showcase Container with Curvilinear Aperture Mask as in Reference Video */}
      <div className="relative w-full overflow-hidden py-10">
        
        {/* Top Hairline Indicator Bar */}
        <div className="max-w-4xl mx-auto px-6 mb-6 flex items-center justify-between text-[11px] font-mono text-scuba-muted border-b border-[#1A1A1A] pb-3">
          {servicesData.map((service, idx) => (
            <button
              key={service.id}
              onClick={() => setActiveIndex(idx)}
              className={`flex items-center space-x-2 transition-colors duration-300 ${
                activeIndex === idx ? 'text-scuba-orchid font-bold' : 'text-scuba-muted hover:text-white'
              }`}
            >
              <span>DIV 0{idx + 1}</span>
              <span className="hidden sm:inline text-[10px] text-scuba-muted/60">// {service.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* Carousel Slider Stage */}
        <div className="relative w-full h-[580px] sm:h-[640px] flex items-center justify-center">
          
          {/* Top Organic Concave Mask (curves down on sides, arches up in center to reveal active card) */}
          <div className="absolute top-0 left-0 w-full h-16 sm:h-24 pointer-events-none z-20">
            <svg
              className="w-full h-full text-[#000000] fill-current"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              {/* Center opens up to y=0, flanking sides dip down to y=90 */}
              <path d="M 0 0 L 1000 0 L 1000 80 C 760 80, 680 0, 500 0 C 320 0, 240 80, 0 80 Z" />
            </svg>
          </div>

          {/* Bottom Organic Concave Mask (curves up on sides, arches down in center to reveal active card) */}
          <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 pointer-events-none z-20">
            <svg
              className="w-full h-full text-[#000000] fill-current"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              {/* Center opens down to y=100, flanking sides curve up to y=20 */}
              <path d="M 0 100 L 1000 100 L 1000 20 C 760 20, 680 100, 500 100 C 320 100, 240 20, 0 20 Z" />
            </svg>
          </div>

          {/* Cards Track with Framer Motion 3D Offset & Snapping */}
          <div className="relative w-full h-full max-w-6xl mx-auto flex items-center justify-center">
            {servicesData.map((service, index) => {
              // Calculate relative offset from active index
              const offset = index - activeIndex;
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  initial={false}
                  animate={{
                    x: `${offset * 105}%`,
                    scale: isCenter ? 1 : 0.88,
                    opacity: isCenter ? 1 : 0.45,
                    zIndex: isCenter ? 15 : 5,
                    rotateY: offset * -6,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 28,
                  }}
                  className={`absolute w-[86vw] sm:w-[460px] md:w-[500px] h-[520px] sm:h-[580px] rounded-[32px] border transition-all duration-300 overflow-hidden cursor-pointer shadow-2xl ${
                    isCenter
                      ? 'border-scuba-orchid/80 shadow-[0_0_50px_-10px_rgba(175,105,239,0.35)]'
                      : 'border-[#242428] hover:border-scuba-orchid/40'
                  }`}
                >
                  {/* Background Artwork specific to division */}
                  {divisionArt[index]}

                  {/* Dark Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#05020a]/80 to-transparent z-10" />

                  {/* Content Container */}
                  <div className="relative z-10 w-full h-full p-8 sm:p-10 flex flex-col justify-between">
                    
                    {/* Top Row: Index + Icon Motif */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <ScubaLogo className="w-5 h-5" glow={false} />
                        <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">
                          Division 0{index + 1}
                        </span>
                      </div>
                      
                      <div className="p-3 rounded-2xl bg-[#0E0E10]/80 border border-scuba-violet/40 backdrop-blur-md">
                        {divisionIcons[index]}
                      </div>
                    </div>

                    {/* Center: Title & Tagline & Deliverables */}
                    <div className="my-auto pt-6">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm font-semibold text-scuba-orchid tracking-wide mb-4">
                        {service.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-[#A6A6A6] leading-relaxed mb-6 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Deliverables snippet with checkmarks */}
                      <div className="space-y-2 mb-2">
                        {service.deliverables.slice(0, 3).map((item) => (
                          <div key={item} className="flex items-start space-x-2.5 text-xs text-[#E6E6E6]">
                            <div className="w-4 h-4 rounded-full bg-scuba-violet/40 border border-scuba-orchid/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-scuba-orchid" />
                            </div>
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Row: Actions */}
                    <div className="pt-6 border-t border-[#262626]/80 flex items-center justify-between">
                      <Link
                        to={`/services#${service.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-white hover:text-scuba-orchid transition-colors group/btn"
                      >
                        <span>EXPLORE DIVISION</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Link>

                      <Link
                        to={`/contact?service=${service.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-1.5 rounded-full bg-scuba-violet/30 hover:bg-scuba-violet border border-scuba-orchid/40 text-[11px] font-semibold text-white tracking-wider transition-all"
                      >
                        Enquire →
                      </Link>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Dynamic Centered Division Title Callout underneath (matching the typography in reference video) */}
        <div className="text-center mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={servicesData[activeIndex].id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="inline-flex flex-col items-center"
            >
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-scuba-orchid mb-1">
                // {servicesData[activeIndex].shortTitle}
              </span>
              <p className="text-sm font-semibold text-[#DCDCDC]">
                {servicesData[activeIndex].tagline}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots Indicator */}
        <div className="flex items-center justify-center space-x-2.5 mt-8">
          {servicesData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? 'w-10 bg-scuba-orchid shadow-glow-orchid'
                  : 'w-2 bg-[#262626] hover:bg-[#3D3D45]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
