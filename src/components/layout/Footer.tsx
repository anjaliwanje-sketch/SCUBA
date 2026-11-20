import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle, ArrowUpRight } from 'lucide-react';
import { ScubaLogo } from '../common/ScubaLogo';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const services = [
    { name: 'Digital Experience & Development', path: '/services#digital-experience' },
    { name: 'Search & AI Visibility (SEO · AEO · GEO)', path: '/services#search-ai-visibility' },
    { name: 'AI & Business Automation', path: '/services#ai-business-automation' },
    { name: 'Business Growth Consultancy', path: '/services#business-growth-consultancy' },
  ];

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About SCUBA', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Process', path: '/process' },
    { name: 'Selected Work', path: '/work' },
    { name: 'Insights & Blog', path: '/blog' },
    { name: 'Contact & Enquiries', path: '/contact' },
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/scuba.stack/',
      icon: Instagram,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/people/SCUBA-AI-growth-Engineering-Agency/61596760497680/?sk=followers',
      icon: Facebook,
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/917205325430?text=Hello%20SCUBA!%20I%20would%20like%20to%20discuss%20your%20services.',
      icon: MessageCircle,
    },
  ];

  return (
    <footer className="w-full bg-[#000000] border-t border-[#1A1A1A] pt-14 sm:pt-16 pb-12 text-[#A6A6A6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          
          {/* Brand Column (full width on mobile, 2 cols wide on LG) */}
          <div className="sm:col-span-2 flex flex-col space-y-5">
            <Link to="/" className="flex items-center space-x-2.5 text-white group w-fit min-h-[44px]">
              <ScubaLogo className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" />
              <span className="text-xl sm:text-2xl font-bold tracking-[0.22em] group-hover:text-scuba-orchid transition-colors duration-300">
                SCUBA
              </span>
            </Link>
            <p className="text-sm font-medium tracking-wider text-white">
              Digital Solutions. Intelligent Growth.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed max-w-sm text-scuba-muted">
              We turn ideas into reality. High-conviction AI engineering, full-stack digital platforms, and generative search visibility for ambitious founders and enterprises.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-[#242428] bg-[#0E0E10] flex items-center justify-center text-white hover:text-scuba-orchid hover:border-scuba-orchid transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-scuba-orchid"
                    aria-label={`SCUBA on ${social.name}`}
                  >
                    <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col space-y-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-white uppercase font-mono">
              Company
            </p>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-xs sm:text-sm hover:text-scuba-orchid transition-colors duration-200 inline-block py-1 min-h-[32px] flex items-center"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="flex flex-col space-y-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-white uppercase font-mono">
              Divisions
            </p>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-xs sm:text-sm hover:text-scuba-orchid transition-colors duration-200 inline-block py-1 min-h-[32px] flex items-center"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="flex flex-col space-y-4 sm:col-span-2 lg:col-span-1">
            <p className="text-xs font-semibold tracking-[0.2em] text-white uppercase font-mono">
              Direct Contact
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-scuba-muted">
              Have an idea or engineering problem? Connect directly with our team.
            </p>
            <a
              href="https://wa.me/917205325430"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs sm:text-sm text-scuba-orchid hover:text-white transition-colors py-1 min-h-[36px]"
            >
              <span className="font-mono font-medium">+91 7205325430</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <div className="pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-3 text-xs font-semibold tracking-wider text-white bg-[#1A1A1A] hover:bg-scuba-violet border border-[#242428] rounded-lg transition-all min-h-[44px]"
              >
                REQUEST PROPOSAL
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-[#1A1A1A] flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-scuba-muted gap-4 text-center sm:text-left">
          <p>© {currentYear} SCUBA. All rights reserved. Dive Deeper. Build Smarter.</p>
          <div className="flex items-center space-x-6">
            {legal.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-scuba-orchid transition-colors py-1"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
