import type { Metadata } from 'next';
import { SEO_CONFIG } from './config';

export interface MetadataGeneratorOptions {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string[];
  noIndex?: boolean;
  alternateLocales?: Array<{ locale: string; path: string }>;
}

export function constructMetadata({
  title,
  description,
  canonicalPath = '',
  ogImage,
  ogType = 'website',
  keywords = [],
  noIndex = false,
  alternateLocales,
}: MetadataGeneratorOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${SEO_CONFIG.siteName}` : SEO_CONFIG.defaultTitle;
  const pageDescription = description || SEO_CONFIG.defaultDescription;
  const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const canonicalUrl = `${SEO_CONFIG.siteUrl}${cleanPath === '/' ? '' : cleanPath}`;
  const ogImageUrl = ogImage || SEO_CONFIG.defaultOgImage;

  const languages: Record<string, string> = {
    'en-GB': canonicalUrl,
  };

  if (alternateLocales) {
    alternateLocales.forEach(({ locale, path }) => {
      const altCleanPath = path.startsWith('/') ? path : `/${path}`;
      languages[locale] = `${SEO_CONFIG.siteUrl}${altCleanPath === '/' ? '' : altCleanPath}`;
    });
  }

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.keys(languages).length > 1 ? languages : undefined,
    },
    openGraph: {
      type: ogType,
      locale: SEO_CONFIG.locale,
      url: canonicalUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${pageTitle} - ${SEO_CONFIG.siteName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [ogImageUrl],
      creator: '@grace_Official4',
    },
    other: {
      'geo.region': 'GB-LND',
      'geo.placename': 'Romford, Greater London',
      'geo.position': `${SEO_CONFIG.contact.uk.geo.latitude};${SEO_CONFIG.contact.uk.geo.longitude}`,
      ICBM: `${SEO_CONFIG.contact.uk.geo.latitude}, ${SEO_CONFIG.contact.uk.geo.longitude}`,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

