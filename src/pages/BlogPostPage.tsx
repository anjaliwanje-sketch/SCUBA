import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2, ArrowRight } from 'lucide-react';
import { blogPostsData } from '../data/blog';
import { CtaBanner } from '../components/home/CtaBanner';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Related posts from same or other categories
  const relatedPosts = blogPostsData.filter((p) => p.slug !== slug).slice(0, 2);

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
    <main id="main-content" className="w-full pt-12">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-8">
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-scuba-muted hover:text-scuba-orchid transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL INSIGHTS</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 sm:px-8 py-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3.5 py-1 rounded bg-scuba-violet/20 border border-scuba-violet/40 text-scuba-orchid text-xs font-semibold uppercase tracking-widest">
            {post.category}
          </span>
          <div className="flex items-center space-x-1.5 text-xs text-scuba-muted">
            <Clock className="w-3.5 h-3.5 text-scuba-orchid" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-xs text-scuba-muted">
            <Calendar className="w-3.5 h-3.5 text-scuba-orchid" />
            <span>{post.date}</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
          {post.title}
        </h1>

        <div className="p-6 rounded-2xl bg-[#0E0E10] border border-[#242428] flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-scuba-violet/30 border border-scuba-orchid/50 flex items-center justify-center text-scuba-orchid">
              <User className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">{post.author.name}</p>
              <p className="text-xs text-scuba-muted">{post.author.role}</p>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#141416] border border-[#26262E] text-xs font-medium text-[#DCDCDC] hover:text-scuba-orchid hover:border-scuba-orchid transition-colors"
            aria-label="Share article"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>

        {/* Article Body Content */}
        <div className="prose prose-invert max-w-none space-y-6 text-[#DCDCDC] leading-relaxed text-base sm:text-lg">
          {post.content.split('\n\n').map((paragraph, index) => {
            const trimmed = paragraph.trim();
            if (trimmed.startsWith('# ')) {
              return null; // already in h1
            }
            if (trimmed.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4 tracking-tight border-b border-[#1A1A1A] pb-3">
                  {trimmed.replace('## ', '')}
                </h2>
              );
            }
            if (trimmed.startsWith('### ')) {
              return (
                <h3 key={index} className="text-xl font-bold text-scuba-orchid mt-8 mb-2">
                  {trimmed.replace('### ', '')}
                </h3>
              );
            }
            if (trimmed.startsWith('---')) {
              return <hr key={index} className="border-[#1A1A1A] my-8" />;
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
        <div className="mt-12 pt-8 border-t border-[#1A1A1A] flex flex-wrap gap-2">
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

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="w-full py-16 bg-[#050505] border-t border-[#1A1A1A]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8">
            <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">
              Related Perspectives
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="p-6 rounded-2xl bg-[#0E0E10] border border-[#242428] hover:border-scuba-orchid/60 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-semibold text-scuba-orchid uppercase mb-2 block">
                      {related.category}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-scuba-orchid transition-colors mb-2">
                      {related.title}
                    </h3>
                  </div>
                  <span className="text-xs text-scuba-muted group-hover:text-white flex items-center space-x-1 mt-4">
                    <span>Read article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaBanner />
    </main>
  );
};
