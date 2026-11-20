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
      <div className="w-full h-full max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Left Column Links */}
        <nav className="hidden lg:flex items-center space-x-8 justify-start" aria-label="Primary navigation left">
          {leftNavLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-xs tracking-[0.2em] font-semibold transition-colors duration-300 py-2 group ${
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
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="flex items-center space-x-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-scuba-orchid rounded py-1 px-2"
            aria-label="SCUBA home"
          >
            <ScubaLogo className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl sm:text-2xl font-bold tracking-[0.22em] text-white group-hover:text-scuba-orchid transition-colors duration-300">
              SCUBA
            </span>
          </Link>
        </div>

        {/* Right Column Links + Mobile Hamburger */}
        <div className="flex items-center justify-end">
          <nav className="hidden lg:flex items-center space-x-8 justify-end" aria-label="Primary navigation right">
            {rightNavLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-xs tracking-[0.2em] font-semibold transition-colors duration-300 py-2 group ${
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

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-[#DCDCDC] hover:text-scuba-orchid focus:outline-none focus-visible:ring-2 focus-visible:ring-scuba-orchid rounded transition-colors"
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
          className="fixed inset-0 top-[80px] z-50 bg-[#000000]/95 backdrop-blur-xl lg:hidden flex flex-col px-8 py-10 border-t border-[#1A1A1A] animate-fadeIn"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col space-y-6">
            <p className="text-[10px] tracking-[0.25em] text-scuba-muted uppercase">Navigation</p>
            {[...leftNavLinks, ...rightNavLinks].map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-semibold tracking-[0.18em] transition-colors py-1 ${
                    isActive ? 'text-scuba-orchid pl-2 border-l-2 border-scuba-orchid' : 'text-white hover:text-scuba-orchid'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-[#1A1A1A] flex flex-col space-y-4">
            <p className="text-xs text-scuba-muted">Official AI Growth & Engineering Agency</p>
            <Link
              to="/contact"
              className="w-full py-3 text-center bg-scuba-violet hover:bg-scuba-orchid text-white font-semibold text-xs tracking-[0.18em] rounded transition-colors"
            >
              START YOUR PROJECT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
