import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <main id="main-content" className="w-full pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-8">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-scuba-muted hover:text-scuba-orchid transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </Link>

        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 rounded-lg bg-scuba-violet/20 border border-scuba-orchid/40 text-scuba-orchid">
            <FileText className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold tracking-widest text-scuba-muted uppercase">
            Legal Terms
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Terms & Conditions
        </h1>
        <p className="text-xs text-scuba-muted font-mono mb-12">
          Effective Date: November 2026 | Last Updated: November 2026
        </p>

        <div className="space-y-8 text-sm sm:text-base text-[#A6A6A6] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">1. Acceptance of Terms</h2>
            <p>
              By accessing the SCUBA website (the "Site") or contacting SCUBA ("the Agency"), you agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using the Site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">2. Professional Agency Services</h2>
            <p>
              The content provided on this Site is for informational and portfolio demonstration purposes. Formal engineering engagements, deliverables, milestones, timelines, and payment terms are governed solely by signed Statements of Work (SOW) and Master Services Agreements (MSA) executed between SCUBA and the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">3. Algorithmic Disclaimers & Qualifications</h2>
            <p>
              As articulated in our core agency qualifications:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-[#DCDCDC]">
              <li>SCUBA does not guarantee specific #1 numerical search rankings, specific AI engine citations, or conversion multiples, as third-party search and LLM retrieval engines operate independently.</li>
              <li>Hosting infrastructure, third-party software subscriptions, and cloud API consumption costs are billed directly to client accounts to ensure client IP and data ownership.</li>
              <li>Autonomous AI agents require separate risk assessments and defined guardrails.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">4. Intellectual Property</h2>
            <p>
              The SCUBA trademarks, brand visual identity, mascot artwork, and original site copy are the intellectual property of SCUBA. Client work produced under paid contract is transferred 100% to the client upon full settlement of contracted milestone fees.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">5. Contact</h2>
            <p>
              For legal inquiries or contractual clarifications, contact:
            </p>
            <p className="font-mono text-white">
              legal@scuba.agency
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};
