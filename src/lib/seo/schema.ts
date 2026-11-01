import { SEO_CONFIG } from './config';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': SEO_CONFIG.organizationId,
    name: SEO_CONFIG.siteName,
    legalName: SEO_CONFIG.legalName,
    url: SEO_CONFIG.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${SEO_CONFIG.siteUrl}/logo/logo.png`,
      caption: `${SEO_CONFIG.siteName} Logo`,
    },
    image: `${SEO_CONFIG.siteUrl}/logo/logo.png`,
    description: SEO_CONFIG.defaultDescription,
    email: SEO_CONFIG.contact.uk.email,
    telephone: SEO_CONFIG.contact.uk.phone,
    priceRange: '££',
    currenciesAccepted: 'GBP, USD, EUR, INR',
    paymentAccepted: 'Bank Transfer, Stripe, Credit Card',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SEO_CONFIG.contact.uk.addressLines[0],
      addressLocality: SEO_CONFIG.contact.uk.city,
      addressRegion: SEO_CONFIG.contact.uk.region,
      postalCode: SEO_CONFIG.contact.uk.postalCode,
      addressCountry: SEO_CONFIG.contact.uk.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SEO_CONFIG.contact.uk.geo.latitude,
      longitude: SEO_CONFIG.contact.uk.geo.longitude,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'United Kingdom',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Greater London',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'England',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
    ],
    knowsAbout: [
      'Website Development',
      'Next.js Full-Stack Engineering',
      'AI Automation & Intelligent Workflows',
      'Merchant Account Operations',
      'Digital Marketing & Search Engine Optimisation (SEO)',
      'Generative Engine Optimisation (GEO)',
    ],
    sameAs: SEO_CONFIG.socialLinks,
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SEO_CONFIG.websiteId,
    url: SEO_CONFIG.siteUrl,
    name: SEO_CONFIG.siteName,
    description: SEO_CONFIG.defaultDescription,
    publisher: {
      '@id': SEO_CONFIG.organizationId,
    },
    inLanguage: SEO_CONFIG.language,
  };
}

export function getServiceSchema({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    serviceType,
    provider: {
      '@id': SEO_CONFIG.organizationId,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'United Kingdom',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Greater London',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'England',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
    ],
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

