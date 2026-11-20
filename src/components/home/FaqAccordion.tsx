import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqsData } from '../../data/faqs';

export const FaqAccordion: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([faqsData[0].id]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section 
      className="w-full py-16 sm:py-24 bg-[#050505] border-t border-[#1A1A1A] relative"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-scuba-orchid uppercase mb-3 font-mono">
            Transparency & Clarity
          </p>
          <h2 id="faq-heading" className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 sm:mb-6">
            Frequently Asked Questions<span className="text-scuba-orchid">.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A6A6A6] leading-relaxed">
            Straightforward answers regarding our deliverables, pricing models, technology stack, and commercial qualifications.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-[#242428] bg-[#0E0E10] transition-colors duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between space-x-3 sm:space-x-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-scuba-orchid cursor-pointer min-h-[56px]"
                >
                  <span className="text-sm sm:text-base md:text-lg font-bold text-white transition-colors duration-200 hover:text-scuba-orchid">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#1A1A1A] border border-[#2E2E34] flex items-center justify-center flex-shrink-0 text-scuba-orchid transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-scuba-violet text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-4 pb-4 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm md:text-base text-[#A6A6A6] leading-relaxed border-t border-[#18181C]"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt for custom questions */}
        <div className="mt-10 sm:mt-12 text-center text-xs text-scuba-muted">
          <span>Have a question not listed here? </span>
          <a
            href="https://wa.me/917205325430"
            target="_blank"
            rel="noopener noreferrer"
            className="text-scuba-orchid hover:underline font-semibold"
          >
            Ask us directly on WhatsApp
          </a>
          <span> or </span>
          <a href="/contact" className="text-scuba-orchid hover:underline font-semibold">
            submit an enquiry
          </a>
          .
        </div>

      </div>
    </section>
  );
};
