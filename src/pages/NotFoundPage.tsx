import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <main id="main-content" className="w-full min-h-[calc(100vh-200px)] flex items-center justify-center py-24 px-6 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-scuba-violet/20 border border-scuba-orchid/40 flex items-center justify-center text-scuba-orchid mx-auto">
          <Compass className="w-8 h-8" />
        </div>
        
        <p className="text-xs font-mono font-bold tracking-widest text-scuba-orchid uppercase">
          Error 404 // Coordinates Unknown
        </p>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Page Not Found
        </h1>

        <p className="text-sm text-[#A6A6A6] leading-relaxed">
          The requested path does not exist or has been relocated to another quadrant.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-scuba-violet hover:bg-scuba-orchid text-white font-semibold text-xs tracking-widest rounded-full transition-all flex items-center justify-center space-x-2"
          >
            <span>RETURN HOME</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 py-3 bg-[#0E0E10] border border-[#242428] text-scuba-lightgray hover:text-white font-semibold text-xs tracking-widest rounded-full transition-all"
          >
            CONTACT SUPPORT
          </Link>
        </div>
      </div>
    </main>
  );
};
