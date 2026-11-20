import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import { CtaBanner } from '../components/home/CtaBanner';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <main id="main-content" className="w-full pt-8 sm:pt-12">
      {/* Back button */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <Link
          to="/work"
          className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-scuba-muted hover:text-scuba-orchid transition-colors py-1 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>
      </div>

      {/* Project Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded bg-scuba-violet/20 border border-scuba-violet/40 text-scuba-orchid text-xs font-semibold uppercase tracking-widest font-mono">
            {project.category}
          </span>
          <span className="text-xs text-scuba-muted font-mono">
            Status: {project.status}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 sm:mb-6 leading-[1.12]">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#A6A6A6] leading-relaxed mb-6 sm:mb-8">
          {project.summary}
        </p>

        <div className="p-4 rounded-xl bg-[#0E0E10] border border-[#242428] flex items-start sm:items-center space-x-3 text-xs text-scuba-muted">
          <ShieldCheck className="w-5 h-5 text-scuba-orchid flex-shrink-0 mt-0.5 sm:mt-0" />
          <span>Client: <strong className="text-white">{project.client}</strong> (Direct IP & Production Architecture verified)</span>
        </div>
      </section>

      {/* Deep Dive Breakdown */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 sm:space-y-12">
        
        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0E0E10] border border-[#242428]">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-scuba-orchid uppercase mb-4 font-mono">
              01 // The Core Challenge
            </h2>
            <p className="text-sm sm:text-base text-[#DCDCDC] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0E0E10] border border-[#242428]">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-scuba-orchid uppercase mb-4 font-mono">
              02 // Engineered Solution
            </h2>
            <p className="text-sm sm:text-base text-[#DCDCDC] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Deliverables */}
        <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#0E0E10] border border-[#242428]">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-white uppercase mb-6 font-mono">
            Production Deliverables & Architecture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {project.deliverables.map((item) => (
              <div key={item} className="flex items-start space-x-3 text-xs sm:text-sm text-[#DCDCDC]">
                <div className="w-5 h-5 rounded-full bg-scuba-violet/30 border border-scuba-orchid/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-scuba-orchid" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0E0E10] border border-[#242428]">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-white uppercase mb-4 font-mono">
            Technologies & Infrastructure Utilized
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs font-mono bg-[#141416] text-white border border-[#2E2E36]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Verified Results Notice */}
        <div className="p-4 sm:p-6 rounded-xl bg-[#0a0a0c] border border-dashed border-[#242428] text-xs text-scuba-muted space-y-2">
          <p className="font-semibold text-[#DCDCDC]">Verified Commercial Results Disclosure:</p>
          <p>
            Specific client conversion percentages, private API volume data, and proprietary revenue numbers are withheld per non-disclosure agreements. System uptime, deployment reliability, and code ownership targets were 100% achieved.
          </p>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            to="/work"
            className="text-xs font-semibold text-scuba-muted hover:text-white transition-colors py-1 min-h-[44px] flex items-center"
          >
            ← Back to all work
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-scuba-orchid hover:text-white transition-colors py-1 min-h-[44px]"
          >
            <span>DISCUSS A SIMILAR PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </section>

      {/* CTA */}
      <CtaBanner />
    </main>
  );
};
