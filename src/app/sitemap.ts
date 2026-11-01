import { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/lib/seo/config';
import clientsData from '@/config/clients.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO_CONFIG.siteUrl;

  // Static core marketing pages
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/website-development`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/merchant-account-management`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ai-automation`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/digital-marketing`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/partnership`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/client`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // Dynamic client case study pages
  const clientRoutes = clientsData.clients.map((client) => ({
    url: `${baseUrl}/client/${client.slug}`,
    lastModified: new Date('2026-11-01'),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...clientRoutes];
}
