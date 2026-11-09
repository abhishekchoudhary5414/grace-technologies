import type { Metadata } from 'next';
import BlogLanding from '@/components/sections/BlogLanding/BlogLanding';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema, getBlogIndexSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import { BLOG_POSTS } from '@/data/blog';
import styles from './blog.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Blog & Insights | SEO, GEO, AEO & AI Automation UK',
  description:
    'Authoritative technical intelligence on UK website engineering, Generative Engine Optimisation (GEO), Answer Engine Optimisation (AEO), enterprise AI automation and merchant operations.',
  canonicalPath: '/blog',
  keywords: [
    'Grace Technologies blog',
    'Website development company UK insights',
    'SEO GEO AEO strategy UK',
    'Generative engine optimisation',
    'Answer engine optimisation guide',
    'Enterprise AI automation agency UK',
    'Merchant account operations management',
    'Next.js full-stack engineering London',
    'B2B digital transformation UK',
  ],
});

export default function BlogPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Blog', url: `${SEO_CONFIG.siteUrl}/blog` },
  ]);

  const blogCollectionSchema = getBlogIndexSchema(
    BLOG_POSTS.slice(0, 15).map((post) => ({
      title: post.title,
      url: `${SEO_CONFIG.siteUrl}/blog/${post.slug}`,
      datePublished: post.date,
      description: post.excerpt,
    }))
  );

  return (
    <>
      <div className={styles.page}>
        <JsonLd data={[breadcrumbSchema, blogCollectionSchema]} />
        <Breadcrumb items={[{ label: 'Blog' }]} backHref="/" backLabel="Back to Home" />
        <BlogLanding />
      </div>
    </>
  );
}
