import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <main id="main-content" className="w-full pt-8 sm:pt-12 pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-scuba-muted hover:text-scuba-orchid transition-colors mb-6 sm:mb-8 py-1 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </Link>

        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 rounded-lg bg-scuba-violet/20 border border-scuba-orchid/40 text-scuba-orchid">
            <Shield className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold tracking-widest text-scuba-muted uppercase font-mono">
            Legal Compliance
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs text-scuba-muted font-mono mb-8 sm:mb-12">
          Effective Date: November 2026 | Last Updated: November 2026
        </p>

        <div className="space-y-6 sm:space-y-8 text-xs sm:text-sm md:text-base text-[#A6A6A6] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">1. Overview</h2>
            <p>
              SCUBA ("we", "our", or "the Agency") respects the privacy of our visitors and clients. This Privacy Policy details how we collect, store, and utilize information submitted via our website and direct communication channels.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">2. Information We Collect</h2>
            <p>
              We only collect information voluntarily provided by you when submitting an enquiry or contacting our team:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-[#DCDCDC]">
              <li>Contact details: full name, corporate email address, and phone / WhatsApp number.</li>
              <li>Project scope data: organization name, service division interest, project requirements, budget, and timeline estimates.</li>
              <li>Technical diagnostics: standard non-identifying server logs (browser version, operating system) used solely for performance monitoring.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">3. Use of Information</h2>
            <p>
              Information collected is used strictly for:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-[#DCDCDC]">
              <li>Responding directly to project enquiries and drafting technical proposals.</li>
              <li>Executing non-disclosure agreements (NDAs) and professional services contracts.</li>
              <li>Optimizing the technical performance, accessibility, and security of our web platform.</li>
            </ul>
            <p>
              We do not sell, rent, monetize, or disclose your confidential project information to third-party brokers or advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">4. Non-Disclosure & Confidentiality</h2>
            <p>
              All proprietary business concepts, architectural parameters, and technological scopes submitted via SCUBA communication channels are treated with strict confidentiality. We routinely execute bilateral NDAs prior to in-depth technical scoping.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">5. Contact Regarding Privacy</h2>
            <p>
              For any questions regarding data handling or to request the deletion of your enquiry data, contact:
            </p>
            <p className="font-mono text-white">
              privacy@scuba.agency
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};
