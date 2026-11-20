import React from 'react';
import { Compass, Target, CheckCircle2 } from 'lucide-react';
import { CtaBanner } from '../components/home/CtaBanner';

export const AboutPage: React.FC = () => {
  const differentiators = [
    {
      title: 'Unified Cross-Disciplinary Team',
      desc: 'We do not pass your vision between outsourced design contractors and separate dev houses. Our principal engineers, designers, and growth architects work in synchronous lockstep.'
    },
    {
      title: 'Deterministic AI Implementation',
      desc: 'We cut through promotional AI hype. Every automation pipeline or agent we deploy features strict schema validation, state machines, and human verification checkpoints.'
    },
    {
      title: 'Modern Generative Search Mastery',
      desc: 'We engineer digital assets prepared for both classic Google algorithms and modern generative engines (Perplexity, ChatGPT, Claude) through semantic Knowledge Graph mapping.'
    },
    {
      title: 'Radical Engineering Transparency',
      desc: 'No vague progress reports. You receive direct access to repositories, transparent milestone tracking, clean documentation, and full intellectual property ownership.'
    }
  ];

  return (
    <main id="main-content" className="w-full pt-8 sm:pt-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-scuba-violet/20 border border-scuba-violet/40 text-scuba-orchid text-xs font-semibold tracking-widest uppercase mb-6 font-mono">
            About SCUBA
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 sm:mb-8 leading-[1.1]">
            Engineering intelligent growth from the depth up<span className="text-scuba-orchid">.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#A6A6A6] leading-relaxed max-w-3xl">
            SCUBA is an AI Growth & Engineering Agency founded on a single conviction: visionary ideas deserve senior-level engineering and commercial execution, without the fragmentation of traditional agencies.
          </p>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="w-full py-16 sm:py-20 bg-[#050505] border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-scuba-orchid uppercase mb-3 font-mono">
                Our Foundation
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
                Understand the idea. Engineer the solution. Create the impact.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#A6A6A6] leading-relaxed">
                <p>
                  The name <strong className="text-white">SCUBA</strong> embodies our ethos: diving deep beneath the surface level of a problem before writing a single line of code. We believe superficial fixes produce technical debt, while deep architectural understanding produces resilient digital products.
                </p>
                <p>
                  Whether working with a pre-seed founder conceptualizing their MVP or an established enterprise seeking to automate high-volume operations with LLMs, we provide the technical firepower and commercial clarity to build smarter.
                </p>
              </div>

              {/* Stats Grid - Stacks nicely on mobile */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-4 rounded-xl bg-[#0E0E10] border border-[#242428] text-center sm:text-left">
                  <span className="block text-2xl font-bold text-white mb-1">100%</span>
                  <span className="text-xs text-scuba-muted">IP & Code Handover</span>
                </div>
                <div className="p-4 rounded-xl bg-[#0E0E10] border border-[#242428] text-center sm:text-left">
                  <span className="block text-2xl font-bold text-white mb-1">Zero</span>
                  <span className="text-xs text-scuba-muted">Agency Red Tape</span>
                </div>
                <div className="p-4 rounded-xl bg-[#0E0E10] border border-[#242428] text-center sm:text-left">
                  <span className="block text-2xl font-bold text-white mb-1">Direct</span>
                  <span className="text-xs text-scuba-muted">Senior Builder Access</span>
                </div>
              </div>
            </div>

            {/* Philosophy Card Grid */}
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0E0E10] border border-[#242428] relative">
                <div className="w-10 h-10 rounded-lg bg-scuba-violet/20 border border-scuba-orchid/40 flex items-center justify-center text-scuba-orchid mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-sm text-[#A6A6A6] leading-relaxed">
                  To empower ambitious organizations with bespoke, world-class software engineering, autonomous automation, and dominant AI search visibility that fuels long-term compounding growth.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-[#0E0E10] border border-[#242428] relative">
                <div className="w-10 h-10 rounded-lg bg-scuba-violet/20 border border-scuba-orchid/40 flex items-center justify-center text-scuba-orchid mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                <p className="text-sm text-[#A6A6A6] leading-relaxed">
                  To define the new standard for agency partnership in the age of artificial intelligence—where human architectural ingenuity and automated intelligence converge to build the future of the web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes SCUBA Different */}
      <section className="w-full py-16 sm:py-24 bg-[#000000] border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] text-scuba-orchid uppercase mb-3 font-mono">
              The Standard We Set
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 sm:mb-6">
              What sets SCUBA apart<span className="text-scuba-orchid">.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A6A6A6] leading-relaxed">
              We reject the typical agency playbook of inflated promises, outsourced junior talent, and artificial markups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {differentiators.map((diff) => (
              <div
                key={diff.title}
                className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#0E0E10] border border-[#242428] hover:border-scuba-orchid/60 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-scuba-violet/20 border border-scuba-orchid/40 flex items-center justify-center text-scuba-orchid flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-scuba-orchid transition-colors">
                      {diff.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A6A6A6] leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </main>
  );
};
