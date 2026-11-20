import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { blogCategories, blogPostsData } from '../data/blog';
import { BlogCategory } from '../types';

export const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main id="main-content" className="w-full pt-12">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-scuba-violet/20 border border-scuba-violet/40 text-scuba-orchid text-xs font-semibold tracking-widest uppercase mb-6">
            Insights & Engineering Papers
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Technical clarity in an era of AI noise<span className="text-scuba-orchid">.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#A6A6A6] leading-relaxed max-w-3xl">
            In-depth perspectives on artificial intelligence architecture, generative search optimization (AEO/GEO), automated pipelines, and full-stack engineering.
          </p>
        </div>
      </section>

      {/* Search & Categories Bar */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-12">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pb-6 border-b border-[#1A1A1A]">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-scuba-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technical insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#0E0E10] border border-[#242428] text-xs text-white placeholder-scuba-muted focus:outline-none focus:border-scuba-orchid transition-colors"
            />
          </div>

          {/* Category Filter Pills (PRD BLOG-2: 6 categories) */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'All'
                  ? 'bg-scuba-violet border border-scuba-orchid text-white'
                  : 'bg-[#0E0E10] border border-[#242428] text-scuba-muted hover:text-white'
              }`}
            >
              All Topics
            </button>
            {blogCategories.map((cat: BlogCategory) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-scuba-violet border border-scuba-orchid text-white'
                    : 'bg-[#0E0E10] border border-[#242428] text-scuba-muted hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid / Empty State */}
      <section className="w-full py-6 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-3xl bg-[#0E0E10] border border-[#242428] hover:border-scuba-orchid/60 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-semibold tracking-widest text-scuba-orchid uppercase px-3 py-1 rounded bg-scuba-violet/20 border border-scuba-violet/40">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1.5 text-xs text-scuba-muted">
                        <Clock className="w-3.5 h-3.5 text-scuba-orchid" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-scuba-orchid transition-colors duration-300">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-[#A6A6A6] leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded text-[10px] font-mono bg-[#141416] text-[#DCDCDC] border border-[#282830]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#1A1A1A] flex items-center justify-between">
                    <div className="text-xs text-scuba-muted">
                      <p className="font-semibold text-white">{post.author.name}</p>
                      <p>{post.author.role}</p>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold tracking-wider text-scuba-orchid hover:text-white transition-colors"
                    >
                      <span>READ PAPER</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State as required by PRD BLOG-5 */
            <div className="p-16 rounded-3xl bg-[#0E0E10] border border-[#242428] text-center max-w-2xl mx-auto">
              <BookOpen className="w-12 h-12 text-scuba-orchid mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Articles are coming soon.
              </h3>
              <p className="text-sm text-[#A6A6A6] leading-relaxed mb-6">
                Our engineering team is currently preparing deep-dive architectural breakdowns for this category. Check back shortly or subscribe to updates.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 rounded-full bg-scuba-violet hover:bg-scuba-orchid text-white text-xs font-semibold tracking-wider transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
