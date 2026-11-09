import type { Metadata } from 'next';
import BlogLanding from '@/components/sections/BlogLanding/BlogLanding';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import styles from './blog.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Blog | Insights for UK Businesses',
  description:
    'Read practical guidance from Grace Technologies on website development, AI automation, SEO, digital growth and merchant operations for UK businesses.',
  canonicalPath: '/blog',
  keywords: [
    'Gracetechnologies blog',
    'Website development UK blog',
    'AI automation insights UK',
    'Merchant account management guidance',
    'SEO GEO AEO blog',
  ],
});

export default function BlogPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Blog', url: `${SEO_CONFIG.siteUrl}/blog` },
  ]);

  return (
    <>
      <div className={styles.page}>
        <JsonLd data={breadcrumbSchema} />
        <Breadcrumb items={[{ label: 'Blog' }]} backHref="/" backLabel="Back to Home" />
        <BlogLanding />
      </div>
    </>
  );
}
