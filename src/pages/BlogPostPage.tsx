import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import { blogPostsData } from '../data/blog';
import { CtaBanner } from '../components/home/CtaBanner';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <main id="main-content" className="w-full pt-8 sm:pt-12">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-scuba-muted hover:text-scuba-orchid transition-colors py-1 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL INSIGHTS</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3.5 py-1 rounded bg-scuba-violet/20 border border-scuba-violet/40 text-scuba-orchid text-xs font-semibold uppercase tracking-widest font-mono">
            {post.category}
          </span>
          <div className="flex items-center space-x-1.5 text-xs text-scuba-muted font-mono">
            <Clock className="w-3.5 h-3.5 text-scuba-orchid" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-xs text-scuba-muted font-mono">
            <Calendar className="w-3.5 h-3.5 text-scuba-orchid" />
            <span>{post.date}</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 sm:mb-8">
          {post.title}
        </h1>

        <div className="p-4 sm:p-6 rounded-2xl bg-[#0E0E10] border border-[#242428] flex items-center justify-between mb-8 sm:mb-12 gap-4">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-10 h-10 rounded-full bg-scuba-violet/30 border border-scuba-orchid/50 flex items-center justify-center text-scuba-orchid flex-shrink-0">
              <User className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">{post.author.name}</p>
              <p className="text-xs text-scuba-muted">{post.author.role}</p>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-[#141416] border border-[#26262E] text-xs font-medium text-[#DCDCDC] hover:text-scuba-orchid hover:border-scuba-orchid transition-colors min-h-[44px] cursor-pointer"
            aria-label="Share article"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>

        {/* Article Body Content */}
        <div className="prose prose-invert max-w-none space-y-6 text-[#DCDCDC] leading-relaxed text-sm sm:text-base md:text-lg">
          {post.content.split('\n\n').map((paragraph, index) => {
            const trimmed = paragraph.trim();
            if (trimmed.startsWith('# ')) {
              return null;
            }
            if (trimmed.startsWith('## ')) {
              return (
                <h2 key={index} className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-10 sm:mt-12 mb-4 tracking-tight border-b border-[#1A1A1A] pb-3">
                  {trimmed.replace('## ', '')}
                </h2>
              );
            }
            if (trimmed.startsWith('### ')) {
              return (
                <h3 key={index} className="text-lg sm:text-xl font-bold text-scuba-orchid mt-6 sm:mt-8 mb-2">
                  {trimmed.replace('### ', '')}
                </h3>
              );
            }
            if (trimmed.startsWith('---')) {
              return <hr key={index} className="border-[#1A1A1A] my-6 sm:my-8" />;
            }
            if (trimmed.startsWith('> ')) {
              return (
                <blockquote key={index} className="p-4 rounded-xl bg-[#0E0E10] border-l-4 border-scuba-orchid italic text-white my-6">
                  {trimmed.replace('> ', '')}
                </blockquote>
              );
            }
            if (trimmed.startsWith('- ')) {
              const listItems = trimmed.split('\n');
              return (
                <ul key={index} className="list-disc list-inside space-y-2 my-4 text-[#A6A6A6]">
                  {listItems.map((li, i) => (
                    <li key={i}>{li.replace('- ', '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="text-[#A6A6A6]">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#1A1A1A] flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-mono bg-[#0E0E10] border border-[#242428] text-scuba-lightgray"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* CTA */}
      <CtaBanner />
    </main>
  );
};
