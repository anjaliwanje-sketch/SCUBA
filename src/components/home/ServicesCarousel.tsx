import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Layers, Search, Cpu, TrendingUp } from 'lucide-react';
import { servicesData } from '../../data/services';

export const ServicesCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const divisionIcons = [
    <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-scuba-orchid" />,
    <Search className="w-5 h-5 sm:w-6 sm:h-6 text-scuba-orchid" />,
    <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-scuba-orchid" />,
    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-scuba-orchid" />,
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
      className="w-full py-16 sm:py-24 bg-[#000000] border-t border-[#1A1A1A] relative overflow-hidden select-none"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title & Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6 relative z-30">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.25em] text-scuba-orchid uppercase mb-3 font-mono">
              <span className="w-2 h-2 rounded-full bg-scuba-orchid animate-pulse" />
              <span>Core Capabilities</span>
            </div>
            <h2 id="services-heading" className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
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
              className="w-11 h-11 rounded-full border border-[#242428] bg-[#0E0E10] text-white hover:text-scuba-orchid hover:border-scuba-orchid transition-all duration-300 shadow-md hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-scuba-orchid cursor-pointer flex items-center justify-center"
              aria-label="Previous division"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full border border-[#242428] bg-[#0E0E10] text-white hover:text-scuba-orchid hover:border-scuba-orchid transition-all duration-300 shadow-md hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-scuba-orchid cursor-pointer flex items-center justify-center"
              aria-label="Next division"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* Showcase Stage */}
      <div className="relative w-full overflow-hidden py-4 sm:py-6">
        
        {/* Top Division Indicator Bar - Clean & Centered */}
        <div className="max-w-xl mx-auto px-4 mb-6 sm:mb-8 flex items-center justify-center space-x-6 sm:space-x-8 text-xs font-mono border-b border-[#1A1A1A] pb-3">
          {servicesData.map((service, idx) => (
            <button
              key={service.id}
              onClick={() => setActiveIndex(idx)}
              className={`relative py-1.5 transition-colors duration-300 font-semibold cursor-pointer ${
                activeIndex === idx ? 'text-scuba-orchid' : 'text-scuba-muted hover:text-white'
              }`}
            >
              <span>DIV 0{idx + 1}</span>
              {activeIndex === idx && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-scuba-orchid rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Carousel Slider Stage: Clean, perfectly centered, without obscuring aperture masks */}
        <div className="relative w-full h-[540px] sm:h-[600px] flex items-center justify-center">
          
          {/* Cards Track with Framer Motion 3D Offset & Snapping */}
          <div className="relative w-full h-full max-w-6xl mx-auto flex items-center justify-center">
            {servicesData.map((service, index) => {
              const offset = index - activeIndex;
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  drag={isCenter ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(_, { offset: dragOffset, velocity }) => {
                    const swipeConfidence = Math.abs(dragOffset.x) * velocity.x;
                    if (swipeConfidence < -8000 || dragOffset.x < -50) {
                      nextSlide();
                    } else if (swipeConfidence > 8000 || dragOffset.x > 50) {
                      prevSlide();
                    }
                  }}
                  initial={false}
                  animate={{
                    x: `${offset * 105}%`,
                    scale: isCenter ? 1 : 0.9,
                    opacity: isCenter ? 1 : 0.4,
                    zIndex: isCenter ? 15 : 5,
                    rotateY: offset * -6,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 28,
                  }}
                  className={`absolute w-[90vw] max-w-[360px] sm:max-w-none sm:w-[460px] md:w-[500px] h-[510px] sm:h-[570px] rounded-3xl border transition-all duration-300 overflow-hidden cursor-pointer shadow-2xl ${
                    isCenter
                      ? 'border-scuba-orchid/80 shadow-[0_0_40px_rgba(175,105,239,0.3)] ring-1 ring-scuba-orchid/40'
                      : 'border-[#242428] hover:border-scuba-orchid/40'
                  }`}
                >
                  {/* Background Artwork specific to division */}
                  {divisionArt[index]}

                  {/* Dark Gradient Overlay for optimal readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#05020a]/85 to-[#000000]/60 z-10" />

                  {/* Content Container */}
                  <div className="relative z-10 w-full h-full p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                    
                    {/* Top Row: Mascot/Logo + Division Index & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <img
                          src="/scuba-penguin.svg"
                          alt="SCUBA mascot"
                          className="w-6 h-6 object-contain filter drop-shadow-[0_2px_4px_rgba(175,105,239,0.3)]"
                        />
                        <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">
                          Division 0{index + 1}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-[#140722]/90 border border-scuba-orchid/50 flex items-center justify-center">
                        {divisionIcons[index]}
                      </div>
                    </div>

                    {/* Middle Section: Title, Subtitle, Description, Deliverables */}
                    <div className="my-auto py-2">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-scuba-orchid mb-3 leading-snug">
                        {service.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-[#A6A6A6] line-clamp-3 leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Deliverables Section with purple checkmarks */}
                      <p className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-scuba-orchid uppercase mb-2">
                        KEY DELIVERABLES:
                      </p>
                      <div className="space-y-1.5 sm:space-y-2">
                        {service.deliverables.slice(0, 4).map((item) => (
                          <div key={item} className="flex items-start space-x-2 text-[11px] sm:text-xs text-[#DCDCDC]">
                            <div className="w-4 h-4 rounded-full bg-scuba-violet/30 border border-scuba-orchid/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-scuba-orchid" />
                            </div>
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Row: Actions */}
                    <div className="pt-4 border-t border-[#1F1F24] flex items-center justify-between">
                      <Link
                        to={`/services#${service.id}`}
                        className="inline-flex items-center space-x-1.5 text-xs font-semibold tracking-wider text-white hover:text-scuba-orchid transition-colors py-1 min-h-[36px]"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>EXPLORE DIVISION</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>

                      <Link
                        to={`/contact?service=${service.id}`}
                        className="text-xs text-scuba-orchid hover:underline font-mono py-1 min-h-[36px] flex items-center font-medium"
                        onClick={(e) => e.stopPropagation()}
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

      </div>
    </section>
  );
};
