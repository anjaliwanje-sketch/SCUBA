import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ScubaLogo } from '../common/ScubaLogo';

export const Navbar: React.FC = () => {
  const leftNavLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
  ];

  const rightNavLinks = [
    { name: 'BLOG', path: '/blog' },
    { name: 'PROCESS', path: '/process' },
    { name: 'WORK', path: '/work' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full h-[68px] sm:h-[80px] bg-[#000000]/95 backdrop-blur-md border-b border-[#1A1A1A]">
      {/* 3-Column Grid mathematically centering SCUBA wordmark across ALL screen sizes (Desktop, Tablet & Mobile) */}
      <div className="w-full h-full max-w-7xl mx-auto px-2 xs:px-3 sm:px-6 lg:px-8 grid grid-cols-[1fr_auto_1fr] items-center">
        
        {/* Left Column Links */}
        <nav 
          className="flex items-center space-x-1.5 xs:space-x-2.5 sm:space-x-4 md:space-x-6 lg:space-x-8 justify-start whitespace-nowrap min-w-0 overflow-x-auto no-scrollbar py-2" 
          aria-label="Primary navigation left"
        >
          {leftNavLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-[9px] xs:text-[10px] sm:text-[11px] lg:text-xs tracking-[0.06em] xs:tracking-[0.1em] sm:tracking-[0.18em] lg:tracking-[0.2em] font-semibold transition-colors duration-300 py-1.5 group flex items-center flex-shrink-0 ${
                  isActive ? 'text-scuba-orchid' : 'text-[#DCDCDC] hover:text-scuba-orchid'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-scuba-orchid transition-all duration-300 ease-out origin-left ${
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Center Column: Mathematically Centered SCUBA Wordmark */}
        <div className="flex items-center justify-center flex-shrink-0 px-1 xs:px-2 sm:px-3">
          <Link
            to="/"
            className="flex items-center space-x-1 xs:space-x-1.5 sm:space-x-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-scuba-orchid rounded-lg py-1 px-1.5"
            aria-label="SCUBA home"
          >
            <ScubaLogo className="w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0" />
            <span className="text-sm xs:text-base sm:text-xl md:text-2xl font-bold tracking-[0.14em] xs:tracking-[0.18em] sm:tracking-[0.22em] text-white group-hover:text-scuba-orchid transition-colors duration-300">
              SCUBA
            </span>
          </Link>
        </div>

        {/* Right Column Links */}
        <nav 
          className="flex items-center space-x-1.5 xs:space-x-2 sm:space-x-3.5 md:space-x-5 lg:space-x-8 justify-end whitespace-nowrap min-w-0 overflow-x-auto no-scrollbar py-2" 
          aria-label="Primary navigation right"
        >
          {rightNavLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-[9px] xs:text-[10px] sm:text-[11px] lg:text-xs tracking-[0.06em] xs:tracking-[0.1em] sm:tracking-[0.18em] lg:tracking-[0.2em] font-semibold transition-colors duration-300 py-1.5 group flex items-center flex-shrink-0 ${
                  isActive ? 'text-scuba-orchid' : 'text-[#DCDCDC] hover:text-scuba-orchid'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-scuba-orchid transition-all duration-300 ease-out origin-left ${
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
};
