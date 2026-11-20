import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#000000] border-t border-[#1A1A1A] relative overflow-hidden">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[800px] h-[350px] bg-scuba-violet/25 blur-[100px] sm:blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <p className="text-xs font-semibold tracking-[0.25em] text-scuba-orchid uppercase mb-4 font-mono">
          Start The Conversation
        </p>
        
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-6">
          Ready to dive deeper and build smarter<span className="text-scuba-orchid">?</span>
        </h2>
        
        <p className="text-sm sm:text-base md:text-lg text-[#A6A6A6] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Whether you need a full-stack platform built from scratch, autonomous AI workflows integrated, or generative engine optimization, we are ready to engineer the solution.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-scuba-violet hover:bg-scuba-orchid text-white font-semibold text-xs tracking-[0.18em] rounded-full transition-all duration-300 shadow-glow-violet hover:shadow-glow-orchid flex items-center justify-center space-x-2 group min-h-[48px]"
          >
            <span>START YOUR PROJECT ENQUIRY</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="https://wa.me/917205325430?text=Hello%20SCUBA!%20I%20would%20like%20to%20discuss%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#0E0E10] hover:bg-[#1A1A1A] border border-[#242428] hover:border-scuba-orchid text-white font-semibold text-xs tracking-[0.18em] rounded-full transition-all duration-300 flex items-center justify-center space-x-2 min-h-[48px]"
          >
            <MessageCircle className="w-4 h-4 text-scuba-orchid" />
            <span>INSTANT WHATSAPP CHAT</span>
          </a>
        </div>

        <p className="text-xs text-scuba-muted mt-6 sm:mt-8">
          Strict confidentiality guaranteed. Direct NDA execution available on request.
        </p>

      </div>
    </section>
  );
};
