import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gracetechnologies.co.uk';
  const routes = [
    '',
    '/about',
    '/services',
    '/services/website-development',
    '/services/merchant-account-management',
    '/services/ai-automation',
    '/services/digital-marketing',
    '/partnership',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.9 : 0.8,
  }));
}

