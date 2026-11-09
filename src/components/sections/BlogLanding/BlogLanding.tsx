'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Container from '@/components/common/Container/Container';
import { BLOG_POSTS } from '@/data/blog';
import styles from './BlogLanding.module.css';

const FILTERS = [
  'All',
  'Website Development',
  'AI Automation',
  'Merchant Account Management',
  'SEO',
  'Digital Growth',
  'Performance',
];

function getCategoryValue(post: (typeof BLOG_POSTS)[number]) {
  if (post.tags.some((tag) => tag.toLowerCase().includes('website'))) return 'Website Development';
  if (post.tags.some((tag) => tag.toLowerCase().includes('ai'))) return 'AI Automation';
  if (post.tags.some((tag) => tag.toLowerCase().includes('merchant'))) return 'Merchant Account Management';
  if (post.tags.some((tag) => tag.toLowerCase().includes('seo'))) return 'SEO';
  if (post.tags.some((tag) => tag.toLowerCase().includes('performance'))) return 'Performance';
  return 'Digital Growth';
}

export default function BlogLanding() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredPosts = useMemo(() => {
    if (selectedFilter === 'All') return BLOG_POSTS;
    return BLOG_POSTS.filter((post) => getCategoryValue(post) === selectedFilter);
  }, [selectedFilter]);

  const featuredPost = filteredPosts[0] ?? BLOG_POSTS[0];
  const morePosts = filteredPosts.filter((post) => post.slug !== featuredPost.slug);

  return (
    <div className={styles.page}>
      <Container size="wide">
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Insights, Strategy & Thought Leadership</span>
            <h1>Technical Intelligence for Modern Enterprise Growth.</h1>
            <p>
              In-depth strategic analyses, architectural blueprints, and actionable intelligence covering Next.js website engineering, Answer Engine Optimisation (AEO), Generative Engine Optimisation (GEO), enterprise AI automation, and merchant payment infrastructure for UK & global enterprises.
            </p>

            <div className={styles.filterBar} aria-label="Blog categories">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`${styles.filterBtn} ${selectedFilter === filter ? styles.filterBtnActive : ''}`}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <article className={styles.featuredCard}>
            <div className={`${styles.visual} ${styles[featuredPost.visual]}`} aria-hidden="true">
              <span className={styles.visualPill}>{featuredPost.tags[0]}</span>
              <span className={styles.visualOrb} />
              <span className={styles.visualLine} />
            </div>

            <div className={styles.featuredContent}>
              <div className={styles.featuredMeta}>
                <span>{featuredPost.author}</span>
                <span>{new Date(featuredPost.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              </div>

              <div className={styles.tagRow}>
                {featuredPost.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <h2>
                <Link href={`/blog/${featuredPost.slug}`} className={styles.featuredTitle}>
                  {featuredPost.title}
                </Link>
              </h2>

              <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>

              <Link href={`/blog/${featuredPost.slug}`} className={styles.primaryLink}>
                Read article
              </Link>
            </div>
          </article>
        </header>

        <section className={styles.contentSection}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionLabel}>Knowledge Base & Topical Hub</span>
              <h2>Authoritative Guides for Enterprise Leaders & Engineers</h2>
            </div>
            <span className={styles.resultCount}>{filteredPosts.length} articles</span>
          </div>

          <div className={styles.grid}>
            {morePosts.length > 0 ? (
              morePosts.map((post) => (
                <article key={post.slug} className={styles.postCard}>
                  <div className={`${styles.visual} ${styles[post.visual]} ${styles.smallVisual}`} aria-hidden="true">
                    <span className={styles.visualPill}>{post.tags[0]}</span>
                    <span className={styles.visualOrb} />
                    <span className={styles.visualLine} />
                  </div>

                  <div className={styles.postBody}>
                    <div className={styles.metaRow}>
                      <span>{post.author}</span>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </time>
                    </div>

                    <div className={styles.tagRow}>
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3>
                      <Link href={`/blog/${post.slug}`} className={styles.postTitle}>
                        {post.title}
                      </Link>
                    </h3>

                    <p>{post.excerpt}</p>

                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                      Read more
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className={styles.emptyState}>
                <h3>No articles in this category yet.</h3>
                <p>Try another topic to explore more insights.</p>
              </div>
            )}
          </div>
        </section>
      </Container>
    </div>
  );
}
