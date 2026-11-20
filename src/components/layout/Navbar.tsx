import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ScubaLogo } from '../common/ScubaLogo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
    <header className="sticky top-0 z-40 w-full h-[80px] bg-[#000000]/95 backdrop-blur-md border-b border-[#1A1A1A]">
      {/* 3-Column Grid for Desktop mathematically centering SCUBA wordmark */}
      <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Left Column Links (Desktop only) */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8 justify-start" aria-label="Primary navigation left">
          {leftNavLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-xs tracking-[0.2em] font-semibold transition-colors duration-300 py-2 group min-h-[44px] flex items-center ${
                  isActive ? 'text-scuba-orchid' : 'text-[#DCDCDC] hover:text-scuba-orchid'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-1 left-0 w-full h-[2px] bg-scuba-orchid transition-all duration-300 ease-out origin-left ${
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Center Column: Mathematically Centered SCUBA Wordmark */}
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-scuba-orchid rounded-lg py-1.5 px-2.5 min-h-[44px]"
            aria-label="SCUBA home"
          >
            <ScubaLogo className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0" />
            <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.22em] text-white group-hover:text-scuba-orchid transition-colors duration-300">
              SCUBA
            </span>
          </Link>
        </div>

        {/* Right Column Links + Mobile Hamburger */}
        <div className="flex items-center justify-end">
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8 justify-end" aria-label="Primary navigation right">
            {rightNavLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-xs tracking-[0.2em] font-semibold transition-colors duration-300 py-2 group min-h-[44px] flex items-center ${
                    isActive ? 'text-scuba-orchid' : 'text-[#DCDCDC] hover:text-scuba-orchid'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    <span
                      className={`absolute bottom-1 left-0 w-full h-[2px] bg-scuba-orchid transition-all duration-300 ease-out origin-left ${
                        isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Hamburger Button with comfortable 44px tap target */}
          <button
            type="button"
            className="lg:hidden w-11 h-11 -mr-1 flex items-center justify-center text-[#DCDCDC] hover:text-scuba-orchid focus:outline-none focus-visible:ring-2 focus-visible:ring-scuba-orchid rounded-lg transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[80px] z-50 bg-[#000000]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between px-6 sm:px-8 py-8 border-t border-[#1A1A1A] h-[calc(100dvh-80px)] overflow-y-auto overscroll-contain animate-fadeIn"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col space-y-4">
            <p className="text-[10px] tracking-[0.25em] text-scuba-muted uppercase font-mono px-2">Navigation</p>
            {[...leftNavLinks, ...rightNavLinks].map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-base sm:text-lg font-semibold tracking-[0.16em] transition-all px-3 py-2.5 rounded-lg min-h-[44px] flex items-center ${
                    isActive
                      ? 'text-scuba-orchid bg-[#1A1A1A]/80 border-l-2 border-scuba-orchid pl-4'
                      : 'text-white hover:text-scuba-orchid hover:bg-[#121216]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#1A1A1A] flex flex-col space-y-4 pb-6">
            <p className="text-xs text-scuba-muted px-1">Official AI Growth & Engineering Agency</p>
            <Link
              to="/contact"
              className="w-full py-4 text-center bg-scuba-violet hover:bg-scuba-orchid text-white font-semibold text-xs tracking-[0.18em] rounded-full shadow-glow-violet transition-colors min-h-[48px] flex items-center justify-center"
            >
              START YOUR PROJECT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
