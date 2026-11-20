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
          'Claude-Web',
          'ClaudeBot',
          'Google-Extended',
          'Amazonbot',
          'cohere-ai',
        ],
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/admin/', '/api/'],
      },
      // Restrict unauthorized bulk AI scrapers from admin/api, allow public discovery and llms.txt
      {
        userAgent: ['CCBot', 'GPTBot'],
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: [
      `${SEO_CONFIG.siteUrl}/sitemap.xml`,
      `${SEO_CONFIG.siteUrl}/feed.xml`,
    ],
    host: SEO_CONFIG.siteUrl,
  };
}
