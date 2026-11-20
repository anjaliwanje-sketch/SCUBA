import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldAlert } from 'lucide-react';
import { projectsData } from '../../data/projects';

export const SelectedWork: React.FC = () => {
  return (
    <section className="w-full py-24 bg-[#000000] border-t border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-scuba-orchid uppercase mb-3">
              Portfolio & Engineering
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ideas brought to life<span className="text-scuba-orchid">.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A6A6A6] mt-3 max-w-xl">
              Representative engineering blueprints and production architectures built with precision.
            </p>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-scuba-orchid hover:text-white transition-colors"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Honest Disclosure Box per PRD WORK-2 */}
        <div className="mb-10 p-4 rounded-xl bg-[#0E0E10] border border-[#242428] flex items-center space-x-3 text-xs text-scuba-muted">
          <ShieldAlert className="w-5 h-5 text-scuba-orchid flex-shrink-0" />
          <p>
            <strong className="text-white">Client Privacy Note:</strong> To respect active non-disclosure agreements, live client brand identities and private proprietary metrics are anonymized. The engineering architectures below represent real production scopes.
          </p>
        </div>

        {/* 2x2 Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.slice(0, 4).map((project) => (
            <div
              key={project.slug}
              className="rounded-2xl bg-[#0E0E10] border border-[#242428] hover:border-scuba-orchid/60 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold tracking-widest text-scuba-orchid uppercase px-3 py-1 rounded bg-scuba-violet/20 border border-scuba-violet/40">
                    {project.category}
                  </span>
                  <span className="text-[10px] text-scuba-muted font-mono">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-scuba-orchid transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs text-scuba-muted mb-4 font-medium">
                  Client: {project.client}
                </p>
                <p className="text-sm text-[#A6A6A6] leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-[10px] font-mono bg-[#1A1A1A] text-[#DCDCDC] border border-[#2E2E34]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#1A1A1A] flex items-center justify-between">
                <Link
                  to={`/work/${project.slug}`}
                  className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-white group-hover:text-scuba-orchid transition-colors"
                >
                  <span>VIEW ARCHITECTURE</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <span className="text-[10px] text-scuba-muted uppercase font-mono">
                  [Verified Architecture]
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
