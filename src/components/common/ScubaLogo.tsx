import React from 'react';

interface ScubaLogoProps {
  className?: string;
  glow?: boolean;
}

export const ScubaLogo: React.FC<ScubaLogoProps> = ({
  className = 'w-7 h-7',
  glow = true,
}) => {
  return (
    <span className={`relative inline-flex items-center justify-center flex-shrink-0 group ${className}`}>
      {glow && (
        <span
          className="absolute inset-0 rounded-full bg-scuba-violet/30 blur-sm pointer-events-none group-hover:bg-scuba-orchid/60 transition-all duration-300"
          aria-hidden="true"
        />
      )}
      <img
        src="/scuba-penguin.svg"
        alt="SCUBA Logo"
        className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(175,105,239,0.35)] transition-transform duration-300 group-hover:scale-110 select-none"
      />
    </span>
  );
};
