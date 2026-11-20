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
    <main id="main-content" className="w-full pt-12">
      {/* Back button */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-8">
        <Link
          to="/work"
          className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-scuba-muted hover:text-scuba-orchid transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>
      </div>

      {/* Project Header */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-12">
        <div className="flex items-center space-x-3 mb-6">
          <span className="px-3 py-1 rounded bg-scuba-violet/20 border border-scuba-violet/40 text-scuba-orchid text-xs font-semibold uppercase tracking-widest">
            {project.category}
          </span>
          <span className="text-xs text-scuba-muted font-mono">
            Status: {project.status}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#A6A6A6] leading-relaxed mb-8">
          {project.summary}
        </p>

        <div className="p-4 rounded-xl bg-[#0E0E10] border border-[#242428] flex items-center space-x-3 text-xs text-scuba-muted">
          <ShieldCheck className="w-5 h-5 text-scuba-orchid flex-shrink-0" />
          <span>Client: <strong className="text-white">{project.client}</strong> (Direct IP & Production Architecture verified)</span>
        </div>
      </section>

      {/* Deep Dive Breakdown */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 py-8 space-y-12">
        
        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-[#0E0E10] border border-[#242428]">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-scuba-orchid uppercase mb-4">
              01 // The Core Challenge
            </h2>
            <p className="text-sm sm:text-base text-[#DCDCDC] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0E0E10] border border-[#242428]">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-scuba-orchid uppercase mb-4">
              02 // Engineered Solution
            </h2>
            <p className="text-sm sm:text-base text-[#DCDCDC] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Deliverables */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0E0E10] border border-[#242428]">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-white uppercase mb-6">
            Production Deliverables & Architecture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.deliverables.map((item) => (
              <div key={item} className="flex items-start space-x-3 text-sm text-[#DCDCDC]">
                <div className="w-5 h-5 rounded-full bg-scuba-violet/30 border border-scuba-orchid/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-scuba-orchid" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="p-8 rounded-2xl bg-[#0E0E10] border border-[#242428]">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-white uppercase mb-4">
            Technologies & Infrastructure Utilized
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg text-xs font-mono bg-[#141416] text-white border border-[#2E2E36]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Verified Results Notice */}
        <div className="p-6 rounded-xl bg-[#0a0a0c] border border-dashed border-[#242428] text-xs text-scuba-muted space-y-2">
          <p className="font-semibold text-[#DCDCDC]">Verified Commercial Results Disclosure:</p>
          <p>
            Specific client conversion percentages, private API volume data, and proprietary revenue numbers are withheld per non-disclosure agreements. System uptime, deployment reliability, and code ownership targets were 100% achieved.
          </p>
        </div>

        <div className="pt-8 flex items-center justify-between">
          <Link
            to="/work"
            className="text-xs font-semibold text-scuba-muted hover:text-white transition-colors"
          >
            ← Back to all work
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-scuba-orchid hover:text-white transition-colors"
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
