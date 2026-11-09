import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/common/Container/Container';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import FaqAccordion from '@/components/sections/FaqAccordion/FaqAccordion';
import EnquiryNowButton from '@/components/common/EnquiryNowButton/EnquiryNowButton';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getArticleSchema, getBreadcrumbSchema, getFaqSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import { BLOG_POSTS } from '@/data/blog';
import styles from './page.module.css';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    return constructMetadata({
      title: 'Article Not Found',
      description: 'This article could not be found.',
      canonicalPath: '/blog',
      noIndex: true,
    });
  }

  return {
    ...constructMetadata({
      title: post.title,
      description: post.excerpt,
      canonicalPath: `/blog/${post.slug}`,
      ogImage: `${SEO_CONFIG.siteUrl}${post.image}`,
      ogType: 'article',
      keywords: post.tags,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
    }),
    authors: [{ name: post.author }],
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((item) => post.related.includes(item.slug)).slice(0, 3);
  const articleSchema = getArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `${SEO_CONFIG.siteUrl}/blog/${post.slug}`,
    author: post.author,
    image: `${SEO_CONFIG.siteUrl}${post.image}`,
    datePublished: post.date,
    dateModified: post.updated,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Blog', url: `${SEO_CONFIG.siteUrl}/blog` },
    { name: post.title, url: `${SEO_CONFIG.siteUrl}/blog/${post.slug}` },
  ]);
  const faqSchema = getFaqSchema(post.faq);

  const visualKey = `visual${post.visual.charAt(0).toUpperCase()}${post.visual.slice(1)}` as keyof typeof styles;
  const visualClass = styles[visualKey] ?? styles.visualBlue;

  return (
    <div className={styles.page}>
      <JsonLd data={[articleSchema, breadcrumbSchema, faqSchema]} />
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} backHref="/blog" backLabel="Back to Blog" />

      <Container size="narrow">
        <article className={styles.article}>
          <div className={styles.header}>
            <span className={styles.kicker}>{post.tags.join(' • ')}</span>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.meta}>
              <span>By {post.author}</span>
              <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              <span>Updated {new Date(post.updated).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </div>
          </div>

          <div className={`${styles.heroVisual} ${visualClass}`}>
            <span className={styles.heroTag}>{post.tags[0]}</span>
            <div className={styles.heroGraphic} />
            <div className={styles.heroCircle} />
            <div className={styles.heroLine} />
            <div className={styles.heroBadge}>{post.category}</div>
          </div>

          <div className={styles.takeaways}>
            <h2 className={styles.takeawaysTitle}>Key takeaways</h2>
            <ul className={styles.takeawaysList}>
              {post.keyTakeaways.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className={styles.content}>
            {post.content.map((section) => (
              <section key={section.heading} className={styles.contentSection}>
                <h2 className={styles.sectionHeading}>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className={styles.bodyText}>
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className={styles.ctaWrap}>
            <EnquiryNowButton serviceType={post.category} />
          </div>

          <div className={styles.faqSection}>
            <h2 className={styles.faqTitle}>Frequently asked questions</h2>
            <FaqAccordion faqs={post.faq} />
          </div>

          <div className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>Related articles</h2>
            <div className={styles.relatedList}>
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className={styles.relatedLink}>
                  {related.title}
                </Link>
              ))}
            </div>
          </div>
        </article>
      </Container>
    </div>
  );
}
