import React from 'react';

interface ScubaLogoProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export const ScubaLogo: React.FC<ScubaLogoProps> = ({
  className = 'w-6 h-6',
  size = 24,
  glow = true,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 transition-transform duration-300 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="scubaStarGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AF69EF" />
          <stop offset="100%" stopColor="#710193" />
        </linearGradient>
        {glow && (
          <filter id="scubaGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        )}
      </defs>
      {/* 4-point Star Insignia */}
      <path
        d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"
        fill="url(#scubaStarGrad)"
        filter={glow ? 'url(#scubaGlowFilter)' : undefined}
      />
      {/* Subtle diamond core highlight */}
      <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" opacity="0.85" />
    </svg>
  );
};
