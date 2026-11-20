import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../../data/services';

export const ServicesCarousel: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // SVGs Motifs for each division as per SVC-4
  const divisionMotifs: Record<string, React.ReactNode> = {
    'digital-experience': (
      <svg className="w-10 h-10 text-scuba-orchid" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="8" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
        <line x1="4" y1="16" x2="36" y2="16" stroke="currentColor" strokeWidth="2" />
        <circle cx="10" cy="12" r="1.5" fill="currentColor" />
        <circle cx="15" cy="12" r="1.5" fill="currentColor" />
        <circle cx="20" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
    'search-ai-visibility': (
      <svg className="w-10 h-10 text-scuba-orchid" viewBox="0 0 40 40" fill="none">
        <circle cx="18" cy="18" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M26 26L34 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 18H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 14V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    'ai-business-automation': (
      <svg className="w-10 h-10 text-scuba-orchid" viewBox="0 0 40 40" fill="none">
        <rect x="10" y="10" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M16 4V10M24 4V10M16 30V36M24 30V36M4 16H10M4 24H10M30 16H36M30 24H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
      </svg>
    ),
    'business-growth-consultancy': (
      <svg className="w-10 h-10 text-scuba-orchid" viewBox="0 0 40 40" fill="none">
        <path d="M6 34L16 22L24 28L34 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 10H34V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };

  const checkScrollState = useCallback(() => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    const cardWidth = 380; // approximate width of one card + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), servicesData.length - 1));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.addEventListener('scroll', checkScrollState, { passive: true });
      window.addEventListener('resize', checkScrollState);
      checkScrollState();
    }
    return () => {
      if (track) {
        track.removeEventListener('scroll', checkScrollState);
      }
      window.removeEventListener('resize', checkScrollState);
    };
  }, [checkScrollState]);

  const scrollByDirection = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;
    const scrollAmount = trackRef.current.clientWidth * 0.8;
    trackRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      scrollByDirection('left');
    } else if (e.key === 'ArrowRight') {
      scrollByDirection('right');
    }
  };

  return (
    <section 
      className="w-full py-24 bg-[#050505] border-t border-[#1A1A1A] relative"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-scuba-orchid uppercase mb-3">
              Core Capabilities
            </p>
            <h2 id="services-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Our Four Divisions<span className="text-scuba-orchid">.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A6A6A6] mt-3 max-w-xl">
              Engineered for velocity and scale. Each division operates with senior technical rigor and seamless inter-disciplinary execution.
            </p>
          </div>

          {/* Controls: Prev/Next Buttons */}
          <div className="flex items-center space-x-3 self-end md:self-auto">
            <button
              onClick={() => scrollByDirection('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border border-[#242428] bg-[#0E0E10] text-white transition-all ${
                canScrollLeft
                  ? 'hover:border-scuba-orchid hover:text-scuba-orchid cursor-pointer'
                  : 'opacity-40 cursor-not-allowed'
              }`}
              aria-label="Scroll services left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollByDirection('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border border-[#242428] bg-[#0E0E10] text-white transition-all ${
                canScrollRight
                  ? 'hover:border-scuba-orchid hover:text-scuba-orchid cursor-pointer'
                  : 'opacity-40 cursor-not-allowed'
              }`}
              aria-label="Scroll services right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={trackRef}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Services carousel track. Use left and right arrow keys to navigate."
          className="flex space-x-6 overflow-x-auto pb-8 pt-2 scroll-smooth snap-x snap-mandatory focus:outline-none focus-visible:ring-2 focus-visible:ring-scuba-orchid no-scrollbar"
        >
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="flex-shrink-0 w-[85vw] sm:w-[420px] snap-center rounded-2xl bg-[#0E0E10] border border-[#242428] hover:border-scuba-orchid/80 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group shadow-lg"
            >
              <div>
                {/* Header Motif & Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[#1A1A1A] border border-[#2e1d35] group-hover:border-scuba-orchid/50 transition-colors">
                    {divisionMotifs[service.id]}
                  </div>
                  <span className="text-xs font-mono font-semibold text-scuba-muted group-hover:text-scuba-orchid transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-scuba-orchid transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-scuba-orchid tracking-wide mb-4">
                  {service.tagline}
                </p>
                <p className="text-xs text-[#A6A6A6] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Deliverables list */}
                <div className="space-y-2.5 mb-8">
                  <p className="text-[11px] font-semibold tracking-wider text-white uppercase">
                    Key Deliverables:
                  </p>
                  {service.deliverables.slice(0, 4).map((item) => (
                    <div key={item} className="flex items-start space-x-2 text-xs text-[#DCDCDC]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-scuba-orchid mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-6 border-t border-[#1A1A1A] flex items-center justify-between">
                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-white group-hover:text-scuba-orchid transition-colors"
                >
                  <span>EXPLORE DIVISION</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="text-[11px] font-semibold text-scuba-muted hover:text-white transition-colors"
                >
                  Enquire →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator Dots */}
        <div className="flex items-center justify-center space-x-2 mt-4" aria-hidden="true">
          {servicesData.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'w-8 bg-scuba-orchid'
                  : 'w-2 bg-[#262626]'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
