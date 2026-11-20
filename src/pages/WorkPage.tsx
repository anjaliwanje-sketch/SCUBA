import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldAlert, Filter } from 'lucide-react';
import { projectsData } from '../data/projects';
import { CtaBanner } from '../components/home/CtaBanner';

export const WorkPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI & Business Automation',
    'Search & AI Visibility',
    'Digital Experience & Development',
    'Business Growth Consultancy',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <main id="main-content" className="w-full pt-8 sm:pt-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-scuba-violet/20 border border-scuba-violet/40 text-scuba-orchid text-xs font-semibold tracking-widest uppercase mb-6 font-mono">
            Case Studies & Architecture
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 sm:mb-8 leading-[1.1]">
            Engineered systems that prove the concept<span className="text-scuba-orchid">.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#A6A6A6] leading-relaxed max-w-3xl">
            Explore our representative engineering solutions. Each project highlights the core business challenge, technical architecture, and deployed deliverables.
          </p>
        </div>
      </section>

      {/* NDA Notice Box as required by PRD WORK-2 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <div className="p-4 sm:p-6 rounded-2xl bg-[#0E0E10] border border-[#242428] flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 text-xs text-scuba-muted">
          <ShieldAlert className="w-6 h-6 text-scuba-orchid flex-shrink-0" />
          <div className="space-y-1">
            <p className="text-white font-semibold">Strict Client Confidentiality & Verified Scopes</p>
            <p>
              In accordance with non-disclosure agreements, live client corporate identities and confidential financial metrics are anonymized. All architectural workflows, tech stacks, and engineering challenges shown represent actual completed or in-production builds.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 no-scrollbar px-1">
          <Filter className="w-4 h-4 text-scuba-orchid mr-2 flex-shrink-0 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all min-h-[44px] flex items-center cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-scuba-violet border border-scuba-orchid text-white shadow-glow-violet'
                  : 'bg-[#0E0E10] border border-[#242428] text-scuba-muted hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full py-4 pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className="rounded-2xl sm:rounded-3xl bg-[#0E0E10] border border-[#242428] hover:border-scuba-orchid/60 p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-semibold tracking-widest text-scuba-orchid uppercase px-3 py-1 rounded bg-scuba-violet/20 border border-scuba-violet/40 font-mono">
                      {project.category}
                    </span>
                    <span className="text-[10px] text-scuba-muted font-mono">
                      {project.status}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-scuba-orchid transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-xs text-scuba-muted mb-4 font-medium">
                    Client: {project.client}
                  </p>
                  <p className="text-xs sm:text-sm text-[#A6A6A6] leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6 text-xs text-[#DCDCDC]">
                    <p className="font-semibold text-white uppercase text-[10px] tracking-wider font-mono">
                      Engineering Challenge:
                    </p>
                    <p className="text-scuba-muted line-clamp-2">{project.challenge}</p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-[10px] font-mono bg-[#141416] text-[#DCDCDC] border border-[#282830]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#1A1A1A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <Link
                    to={`/work/${project.slug}`}
                    className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-white group-hover:text-scuba-orchid transition-colors py-1 min-h-[36px]"
                  >
                    <span>READ CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <span className="text-[10px] font-mono text-scuba-muted uppercase">
                    [Representative Scope]
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBanner />
    </main>
  );
};
