import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-start overflow-hidden pt-10 sm:pt-14 pb-20 bg-[#000000]">
      {/* Volumetric Violet Glow behind Hero content */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] rounded-full bg-scuba-violet/20 blur-[130px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center z-10">
        
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-scuba-violet/40 bg-[#0E0E10]/80 mb-6 backdrop-blur-md"
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

        {/* Subtitle / Philosophy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[#A6A6A6] max-w-2xl mx-auto font-normal leading-relaxed mb-10"
        >
          From strategic AI engineering to full-stack digital experiences and modern search visibility, we partner with ambitious businesses to dive deeper and build smarter.
        </motion.p>

        {/* Dual Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12 sm:mb-16 z-20"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-scuba-violet hover:bg-scuba-orchid text-white font-semibold text-xs tracking-[0.18em] rounded-full transition-all duration-300 shadow-glow-violet hover:shadow-glow-orchid flex items-center justify-center space-x-2 group cursor-pointer"
          >
            <span>START YOUR PROJECT</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#0E0E10]/80 hover:bg-[#1A1A1A] border border-[#242428] hover:border-scuba-orchid text-[#DCDCDC] hover:text-white font-semibold text-xs tracking-[0.18em] rounded-full transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            EXPLORE WHAT WE DO
          </Link>
        </motion.div>

        {/* Seamless Atmospheric Hero Centerpiece Visual */}
        {/* As in reference image: no hard box borders, seamlessly feathering into the pure #000000 background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl mx-auto flex items-center justify-center -mt-4 sm:-mt-6"
        >
          {/* Volumetric backlight glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-scuba-violet/25 blur-[100px] rounded-full pointer-events-none -z-10" />

          {/* Ethereal Visual with organic edge feathering */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] max-w-4xl mx-auto overflow-hidden">
            <img
              src="/scuba-hero-portrait.jpg"
              alt="SCUBA AI Growth & Engineering Visual with Orbiting Capabilities"
              className="w-full h-full object-cover object-center filter brightness-105 contrast-105 select-none"
              loading="eager"
              fetchPriority="high"
            />

            {/* Seamless edge gradients: blends outer edges directly into the #000000 dark canvas */}
            {/* Top feather */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#000000] via-[#000000]/60 to-transparent pointer-events-none" />
            {/* Bottom feather */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent pointer-events-none" />
            {/* Left feather */}
            <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-[#000000] via-[#000000]/70 to-transparent pointer-events-none" />
            {/* Right feather */}
            <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-[#000000] via-[#000000]/70 to-transparent pointer-events-none" />
            {/* Subtle radial vignette feathering around corners */}
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{
                background: 'radial-gradient(circle at 50% 50%, transparent 60%, #000000 98%)'
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};