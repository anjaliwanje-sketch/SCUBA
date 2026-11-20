import React from 'react';
import { Check, Shield, GitBranch, RefreshCw, Terminal } from 'lucide-react';
import { processSteps } from '../data/process';
import { CtaBanner } from '../components/home/CtaBanner';

export const ProcessPage: React.FC = () => {
  const principles = [
    {
      icon: Terminal,
      title: 'Continuous Demonstration',
      desc: 'No black-box engineering. We deploy to staging environments weekly so stakeholders can test live functionality early.'
    },
    {
      icon: GitBranch,
      title: 'Type-Safe Architecture',
      desc: 'All frontend and backend systems are built with strict TypeScript and deterministic schemas to eliminate runtime failures.'
    },
    {
      icon: Shield,
      title: 'Security Hardening by Default',
      desc: 'From environment secret storage to least-privilege IAM roles and input sanitization, security is never an afterthought.'
    },
    {
      icon: RefreshCw,
      title: 'Proactive Iteration',
      desc: 'After launch, we track real latency, search indexation, and user drop-off to proactively tune performance before bottlenecks arise.'
    }
  ];

  return (
    <main id="main-content" className="w-full pt-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-scuba-violet/20 border border-scuba-violet/40 text-scuba-orchid text-xs font-semibold tracking-widest uppercase mb-6">
            Engineering Methodology
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            How we dive deep and engineer for certainty<span className="text-scuba-orchid">.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#A6A6A6] leading-relaxed max-w-3xl">
            A disciplined, transparent, 6-stage delivery framework designed to de-risk complex software projects, accelerate launch velocity, and deliver measurable business outcomes.
          </p>
        </div>
      </section>

      {/* Process Steps Exhaustive Timeline */}
      <section className="w-full py-16 bg-[#050505] border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="space-y-12">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="p-8 sm:p-12 rounded-3xl bg-[#0E0E10] border border-[#242428] hover:border-scuba-orchid/50 transition-all duration-300 relative group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Step ID & Duration */}
                  <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between">
                    <div>
                      <span className="block text-4xl sm:text-5xl font-mono font-extrabold text-scuba-orchid mb-2">
                        {step.number}
                      </span>
                      <span className="text-xs font-semibold tracking-widest text-scuba-muted uppercase">
                        Phase: {step.phase}
                      </span>
                    </div>
                    <div className="mt-4 px-3 py-1.5 rounded-md bg-[#141416] border border-[#282830] text-xs font-medium text-white">
                      Duration: {step.duration}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="lg:col-span-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-scuba-orchid transition-colors">
                      {step.title}
                    </h2>
                    <p className="text-sm sm:text-base text-[#A6A6A6] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="lg:col-span-5 bg-[#08080A] p-6 rounded-2xl border border-[#1F1F24]">
                    <p className="text-xs font-semibold tracking-wider text-white uppercase mb-4">
                      Key Deliverables & Actions:
                    </p>
                    <div className="space-y-3">
                      {step.details.map((item) => (
                        <div key={item} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#DCDCDC]">
                          <Check className="w-4 h-4 text-scuba-orchid flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="w-full py-24 bg-[#000000] border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] text-scuba-orchid uppercase mb-3">
              Delivery Standards
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Our Core Engineering Principles<span className="text-scuba-orchid">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="p-8 rounded-2xl bg-[#0E0E10] border border-[#242428] hover:border-scuba-orchid/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-scuba-violet/20 border border-scuba-orchid/40 flex items-center justify-center text-scuba-orchid mb-6 group-hover:bg-scuba-violet group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-scuba-orchid transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-[#A6A6A6] leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBanner />
    </main>
  );
};
