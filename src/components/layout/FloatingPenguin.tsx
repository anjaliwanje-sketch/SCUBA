import React, { useState } from 'react';

export const FloatingPenguin: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl =
    'https://wa.me/917205325430?text=Hello%20SCUBA!%20I%20would%20like%20to%20discuss%20your%20services.';

  return (
    <aside
      aria-label="Direct WhatsApp Enquiry"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-end"
    >
      {/* Tooltip on hover/focus */}
      <div
        id="penguin-tooltip"
        role="tooltip"
        className={`absolute right-full mr-3 px-3.5 py-1.5 bg-[#0E0E10] border border-scuba-violet/60 text-white text-xs font-medium rounded-full shadow-lg whitespace-nowrap transition-all duration-300 pointer-events-none ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="text-scuba-orchid font-semibold">● </span>
        Let's talk about your project!
        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-[#0E0E10] border-r border-t border-scuba-violet/60 transform rotate-45 -translate-y-1/2" />
      </div>

      {/* Floating Penguin Mascot Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        aria-describedby="penguin-tooltip"
        aria-label="Chat with SCUBA team on WhatsApp"
        className="group relative flex items-center justify-center w-[58px] h-[58px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#000000] border-2 border-scuba-violet/60 hover:border-scuba-orchid shadow-glow-violet hover:shadow-glow-orchid transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-scuba-orchid animate-float-gentle cursor-pointer p-1"
      >
        {/* Glow backdrop pulse */}
        <div className="absolute inset-0 rounded-full bg-scuba-violet/20 blur-md group-hover:bg-scuba-orchid/30 transition-all duration-300 pointer-events-none" />

        {/* Mascot Vector SVG */}
        <img
          src="/scuba-penguin.svg"
          alt="SCUBA Penguin Mascot"
          className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(175,105,239,0.3)] select-none"
          loading="lazy"
          width="70"
          height="70"
        />

        {/* Online Pulse Indicator */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#000000] rounded-full z-20">
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
        </span>
      </a>
    </aside>
  );
};
