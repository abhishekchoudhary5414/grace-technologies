/**
 * Central SEO Configuration for Grace Technologies
 * Primary canonical domain: https://www.gracetechnologies.uk
 */

export const SEO_CONFIG = {
  siteName: 'Grace Technologies',
  legalName: 'Grace Technologies',
  siteUrl: 'https://www.gracetechnologies.uk',
  defaultTitle: 'Grace Technologies | Digital & Technology Solutions',
  titleTemplate: '%s | Grace Technologies',
  defaultDescription:
    'A UK-led technology partner delivering website development, merchant account management, AI automation and digital marketing solutions for growing businesses.',
  defaultOgImage: 'https://www.gracetechnologies.uk/logo/logo.png',
  locale: 'en_GB',
  inLocale: 'en_IN',
  language: 'en',
  themeColor: '#030712',
  organizationId: 'https://www.gracetechnologies.uk/#organization',
  websiteId: 'https://www.gracetechnologies.uk/#website',
  contact: {
    uk: {
      company: 'Grace Technologies',
      country: 'United Kingdom',
      addressLines: [
        '398 Whalebone Lane South',
        'Romford, Greater London',
        'RM6 6HP, England',
      ],
      postalCode: 'RM6 6HP',
      city: 'Romford',
      region: 'Greater London',
      countryCode: 'GB',
      email: 'contact@gracetechnologies.uk',
      phone: '+44 7407 268125',
      geo: {
        latitude: 51.576,
        longitude: 0.148,
      },
    },
    indiaPartner: {
      company: 'Ank Square Pvt. Ltd.',
      country: 'India',
      addressLines: [
        'Ramjaipal Road, Opp. Gola Road',
        'Near Hotel Magadh Palace',
        'Patna, Bihar, India - 801503',
      ],
      postalCode: '801503',
      city: 'Patna',
      region: 'Bihar',
      countryCode: 'IN',
      email: 'contact@anksquare.com',
      phone: '+91-9939337638',
    },
  },
  socialLinks: [
    'https://www.instagram.com/gracetechnologiesofficial/',
    'https://www.facebook.com/share/1CKuqfF3Ef/',
    'https://www.youtube.com/@Gracetechnologiesofficial',
    'https://x.com/grace_Official4',
    'https://www.linkedin.com/',
  ],
  services: [
    {
      id: 'website-development',
      name: 'Website Development',
      url: 'https://www.gracetechnologies.uk/services/website-development',
      description:
        'Custom business websites, Next.js web applications, e-commerce architectures, and technical performance engineering.',
    },
    {
      id: 'merchant-account-management',
      name: 'Merchant Account Management',
      url: 'https://www.gracetechnologies.uk/services/merchant-account-management',
      description:
        'Professional merchant onboarding assistance, multi-currency payment operations support, and gateway integrations.',
    },
    {
      id: 'ai-automation',
      name: 'AI Automation',
      url: 'https://www.gracetechnologies.uk/services/ai-automation',
      description:
        'Intelligent business process automation, autonomous agentic workflows, CRM integrations, and predictive pipelines.',
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing & SEO',
      url: 'https://www.gracetechnologies.uk/services/digital-marketing',
      description:
        'Data-driven organic search engine optimisation (SEO), Generative Engine Optimisation (GEO), and omnichannel ad campaigns.',
    },
  ],
} as const;

