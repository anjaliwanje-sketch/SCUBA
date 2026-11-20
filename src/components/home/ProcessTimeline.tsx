import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { processSteps } from '../../data/process';

export const ProcessTimeline: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);
  const currentStep = processSteps[selectedStepIndex];

  return (
    <section className="w-full py-24 bg-[#050505] border-t border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-scuba-orchid uppercase mb-3">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            The 6-Step Engineering Lifecycle<span className="text-scuba-orchid">.</span>
          </h2>
          <p className="text-base text-[#A6A6A6] leading-relaxed">
            A repeatable, transparent process designed to minimize delivery risk and compress time to market.
          </p>
        </div>

        {/* Desktop Horizontal Step Navigation */}
        <div className="hidden lg:block relative mb-12">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#1F1F24] -translate-y-1/2 z-0" />
          
          <div className="relative z-10 grid grid-cols-6 gap-4">
            {processSteps.map((step, idx) => {
              const isSelected = selectedStepIndex === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`flex flex-col items-center text-center p-3 rounded-xl transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-scuba-orchid ${
                    isSelected ? 'bg-[#0E0E10] border border-scuba-orchid' : 'hover:bg-[#0E0E10]/50'
                  }`}
                  aria-pressed={isSelected}
                  aria-label={`Step ${step.number}: ${step.title}`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 mb-3 border ${
                      isSelected
                        ? 'bg-scuba-violet border-scuba-orchid text-white shadow-glow-orchid scale-110'
                        : 'bg-[#141416] border-[#242428] text-scuba-muted group-hover:border-scuba-orchid/50 group-hover:text-white'
                    }`}
                  >
                    {step.number}
                  </div>
                  <span className={`text-xs font-bold tracking-tight transition-colors ${
                    isSelected ? 'text-white' : 'text-scuba-muted group-hover:text-white'
                  }`}>
                    {step.title}
                  </span>
                  <span className="text-[10px] text-scuba-orchid font-medium mt-1">
                    {step.duration}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Horizontal Scroll Selector */}
        <div className="lg:hidden flex space-x-3 overflow-x-auto pb-6 mb-8 no-scrollbar">
          {processSteps.map((step, idx) => {
            const isSelected = selectedStepIndex === idx;
            return (
              <button
                key={step.number}
                onClick={() => setSelectedStepIndex(idx)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-full border text-xs font-semibold tracking-wide transition-all ${
                  isSelected
                    ? 'bg-scuba-violet border-scuba-orchid text-white shadow-glow-violet'
                    : 'bg-[#0E0E10] border-[#242428] text-scuba-muted hover:text-white'
                }`}
              >
                {step.number}. {step.title}
              </button>
            );
          })}
        </div>

        {/* Active Step Detail Card with Animated Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.number}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-4xl mx-auto rounded-2xl bg-[#0E0E10] border border-[#242428] p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 pb-8 border-b border-[#1A1A1A]">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="px-3 py-1 rounded bg-scuba-violet/20 border border-scuba-violet/50 text-scuba-orchid font-mono text-xs font-semibold">
                    Step {currentStep.number}
                  </span>
                  <span className="text-xs font-semibold tracking-wider text-scuba-muted uppercase">
                    Phase: {currentStep.phase}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {currentStep.title}
                </h3>
              </div>

              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#141416] border border-[#242428] text-xs font-medium text-white self-start">
                <Clock className="w-4 h-4 text-scuba-orchid" />
                <span>Estimated: {currentStep.duration}</span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#DCDCDC] leading-relaxed mb-8">
              {currentStep.description}
            </p>

            <div>
              <p className="text-xs font-semibold tracking-widest text-white uppercase mb-4">
                Sprint Deliverables & Activities:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentStep.details.map((detail) => (
                  <div key={detail} className="flex items-start space-x-3 text-sm text-[#A6A6A6]">
                    <div className="w-5 h-5 rounded-full bg-scuba-violet/30 border border-scuba-orchid/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-scuba-orchid" />
                    </div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step Footer Navigation */}
            <div className="mt-10 pt-6 border-t border-[#1A1A1A] flex items-center justify-between">
              <span className="text-xs text-scuba-muted">
                Step {selectedStepIndex + 1} of {processSteps.length}
              </span>
              <div className="flex items-center space-x-4">
                <Link
                  to="/process"
                  className="text-xs font-semibold text-scuba-orchid hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Read Full Methodology</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
