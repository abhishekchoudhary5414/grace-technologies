import { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/lib/seo/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/dashboard/'],
      },
      // Search Engine & AI crawlers explicit declaration
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Slurp',
          'DuckDuckBot',
          'Baiduspider',
          'YandexBot',
          'Applebot',
          'PerplexityBot',
          'ChatGPT-User',
          'OAI-SearchBot',
        ],
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      // Restrict unauthorized bulk AI scrapers if desirable, but allow public discovery
      {
        userAgent: ['CCBot', 'GPTBot'],
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: `${SEO_CONFIG.siteUrl}/sitemap.xml`,
    host: SEO_CONFIG.siteUrl,
  };
}
