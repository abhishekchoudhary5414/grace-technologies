import type { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/lib/seo/config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SEO_CONFIG.siteName,
    short_name: 'Grace Tech',
    description: SEO_CONFIG.defaultDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#030712',
    theme_color: '#030712',
    icons: [
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/logo/circlelogo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
