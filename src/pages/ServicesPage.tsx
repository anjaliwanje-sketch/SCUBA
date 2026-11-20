import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Check, ArrowRight, Layers, Search, Cpu, TrendingUp } from 'lucide-react';
import { servicesData } from '../data/services';
import { CtaBanner } from '../components/home/CtaBanner';

export const ServicesPage: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const divisionIcons: Record<string, React.ReactNode> = {
    'digital-experience': <Layers className="w-8 h-8 text-scuba-orchid" />,
    'search-ai-visibility': <Search className="w-8 h-8 text-scuba-orchid" />,
    'ai-business-automation': <Cpu className="w-8 h-8 text-scuba-orchid" />,
    'business-growth-consultancy': <TrendingUp className="w-8 h-8 text-scuba-orchid" />,
  };

  return (
    <main id="main-content" className="w-full pt-12">
      {/* Services Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-scuba-violet/20 border border-scuba-violet/40 text-scuba-orchid text-xs font-semibold tracking-widest uppercase mb-6">
            Engineering & Growth Capabilities
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Engineered software. Autonomous systems. Compounding visibility<span className="text-scuba-orchid">.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#A6A6A6] leading-relaxed max-w-3xl">
            We deliver end-to-end technical execution across four core divisions. Explore our capabilities below, or discuss a customized cross-division scope tailored to your roadmap.
          </p>
        </div>
      </section>

      {/* Division Deep Dives */}
      <section className="w-full py-12 bg-[#050505] border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-24">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-28 p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#0E0E10] border border-[#242428] relative overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-scuba-violet/10 blur-[100px] pointer-events-none rounded-full" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                {/* Left Overview Column */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3.5 rounded-2xl bg-[#1A1A1A] border border-[#2e1d35]">
                        {divisionIcons[service.id]}
                      </div>
                      <span className="text-sm font-mono font-bold text-scuba-orchid">
                        0{index + 1} // DIVISION
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                      {service.title}
                    </h2>
                    <p className="text-sm font-medium text-scuba-orchid tracking-wide mb-6">
                      {service.tagline}
                    </p>
                    <p className="text-base text-[#A6A6A6] leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-wider text-white uppercase mb-3">
                      Technologies & Frameworks:
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-md text-xs font-mono bg-[#141416] text-[#DCDCDC] border border-[#282830]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/contact?service=${service.id}`}
                      className="inline-flex items-center space-x-2 px-6 py-3.5 bg-scuba-violet hover:bg-scuba-orchid text-white font-semibold text-xs tracking-[0.18em] rounded-full transition-all duration-300 shadow-glow-violet group"
                    >
                      <span>ENQUIRE ABOUT THIS DIVISION</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Right Deliverables Column */}
                <div className="lg:col-span-7 bg-[#08080A] rounded-2xl border border-[#1F1F24] p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.2em] text-white uppercase mb-6 pb-4 border-b border-[#1A1A1A]">
                      Full Deliverables Scope
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {service.deliverables.map((item) => (
                        <div
                          key={item}
                          className="p-4 rounded-xl bg-[#0E0E10] border border-[#242428] flex items-start space-x-3 group hover:border-scuba-orchid/50 transition-colors"
                        >
                          <div className="w-5 h-5 rounded-full bg-scuba-violet/30 border border-scuba-orchid/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-scuba-orchid" />
                          </div>
                          <span className="text-sm text-[#DCDCDC] font-medium leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#1A1A1A] flex items-center justify-between text-xs text-scuba-muted">
                    <span>Target Outcome: Production Deployment</span>
                    <a
                      href="https://wa.me/917205325430"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-scuba-orchid hover:underline"
                    >
                      Quick Consultation on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBanner />
    </main>
  );
};
