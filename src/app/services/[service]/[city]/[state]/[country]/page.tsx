import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { connection } from 'next/server';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceDetailHero from '@/components/sections/ServiceDetailHero/ServiceDetailHero';
import FaqAccordion from '@/components/sections/FaqAccordion/FaqAccordion';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import LocationNavigation from '@/components/sections/LocationNavigation/LocationNavigation';
import JsonLd from '@/components/seo/JsonLd';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { getServiceConfig, getAllServiceConfigs } from '@/config/services';
import { getCityFromSegments, cities, normalizeSegment } from '@/data/cities';
import { getLocationStatus } from '@/config/locationSeo';
import { SEO_CONFIG } from '@/lib/seo/config';
import { getServiceSchema, getBreadcrumbSchema, getFaqSchema } from '@/lib/seo/schema';
import styles from './location-page.module.css';

interface LocationPageProps {
  params: Promise<{
    service: string;
    city: string;
    state: string;
    country: string;
  }>;
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug, state: stateSlug, country: countrySlug } =
    await params;

  const service = getServiceConfig(serviceSlug);
  const cityData = getCityFromSegments([citySlug, stateSlug, countrySlug]);

  if (!service || !cityData) {
    return {
      title: 'Location Not Found | Grace Technologies',
      robots: { index: false, follow: false },
    };
  }

  const status = getLocationStatus(serviceSlug, citySlug, stateSlug, countrySlug);
  const canonicalUrl = `${SEO_CONFIG.siteUrl}/services/${service.slug}/${cityData.citySlug}/${cityData.stateSlug}/${cityData.countrySlug}`;

  const metaTitle = `${service.name} in ${cityData.city} | Grace Technologies`;
  const metaDescription = `Looking for professional ${service.name.toLowerCase()} in ${cityData.city}, ${cityData.state}? Grace Technologies provides UK-governed digital solutions, custom engineering, and remote delivery for ambitious enterprises.`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: SEO_CONFIG.siteName,
      locale: SEO_CONFIG.locale,
      type: 'website',
      images: [
        {
          url: SEO_CONFIG.defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${service.name} in ${cityData.city}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [SEO_CONFIG.defaultOgImage],
    },
    robots: status.isIndexable
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}

export default async function LocationServicePage({ params }: LocationPageProps) {
  // Indicate rendering should wait for an incoming user request, making the route fully dynamic on demand
  await connection();

  const { service: serviceSlug, city: citySlug, state: stateSlug, country: countrySlug } =
    await params;

  const service = getServiceConfig(serviceSlug);
  const cityData = getCityFromSegments([citySlug, stateSlug, countrySlug]);

  // Validate all segments: 404 on invalid service, city, state, or country
  if (!service || !cityData) {
    notFound();
  }

  const status = getLocationStatus(serviceSlug, citySlug, stateSlug, countrySlug);
  if (!status.isPublished) {
    notFound();
  }

  const canonicalUrl = `${SEO_CONFIG.siteUrl}/services/${service.slug}/${cityData.citySlug}/${cityData.stateSlug}/${cityData.countrySlug}`;

  // Structured schemas
  const serviceSchema = getServiceSchema({
    name: `${service.name} Services - ${cityData.city}`,
    description: `Professional ${service.name.toLowerCase()} provided to businesses in ${cityData.city}, ${cityData.state}, ${cityData.country}.`,
    url: canonicalUrl,
    serviceType: service.name,
    areaServedName: `${cityData.city}, ${cityData.state}, ${cityData.country}`,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Services', url: `${SEO_CONFIG.siteUrl}/services` },
    { name: service.name, url: `${SEO_CONFIG.siteUrl}/services/${service.slug}` },
    { name: cityData.city, url: canonicalUrl },
  ]);

  // Location-tailored FAQs
  const locationFaqs = [
    {
      question: `How much does ${service.name.toLowerCase()} cost for businesses in ${cityData.city}?`,
      answer: `Pricing depends on your specific operational scope, custom software requirements, and integrations. Grace Technologies provides clear, milestone-driven estimates following an initial discovery consultation, avoiding ambiguous agency retainers.`,
    },
    {
      question: `Can businesses in ${cityData.city} work with Grace Technologies remotely?`,
      answer: `Yes. Grace Technologies serves clients across ${cityData.city}, ${cityData.state}, and nationwide using streamlined digital project management, collaborative video sessions, and UK-governed communication channels.`,
    },
    {
      question: `How does the UK leadership and India delivery model benefit ${cityData.city} enterprises?`,
      answer: `Our commercial governance, client strategy, and project oversight are led from the UK, while our engineering partnership with Ank Square in India provides deep technical development bandwidth—delivering exceptional engineering quality with competitive cost efficiency.`,
    },
    {
      question: `Does Grace Technologies provide ongoing maintenance and post-launch support?`,
      answer: `Yes. We provide continuous monitoring, security patching, Core Web Vitals optimization, and technical governance to ensure your digital infrastructure remains secure, fast, and competitive.`,
    },
  ];

  const faqSchema = getFaqSchema(locationFaqs);

  // Map service number for styling badge
  const serviceNumberMap: Record<string, string> = {
    'website-development': '01',
    'ai-automation': '02',
    'merchant-account-management': '03',
    'digital-marketing': '04',
  };

  const serviceNumber = serviceNumberMap[service.slug] || '01';

  return (
    <div className={styles.page}>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

      <Breadcrumb
        items={[
          { label: 'Services', href: '/services' },
          { label: service.name, href: `/services/${service.slug}` },
          { label: cityData.city },
        ]}
        backHref={`/services/${service.slug}`}
        backLabel={`Back to ${service.name}`}
      />

      {/* Dynamic Location Hero */}
      <ServiceDetailHero
        serviceId={service.slug}
        number={serviceNumber}
        tagline={`${cityData.city.toUpperCase()}, ${cityData.country.toUpperCase()}`}
        headline={`${service.primaryKeyword} in ${cityData.city}`}
        description={`Grace Technologies delivers high-impact ${service.name.toLowerCase()} for forward-thinking enterprises in ${cityData.city}, ${cityData.state}. Engineered for speed, security, and measurable commercial growth.`}
        serviceTitle={service.name}
      />

      <Container size="wide">
        {/* Section 1: Strategic Regional Context */}
        <section className={styles.section}>
          <div className={styles.introGrid}>
            <div className={styles.introCopy}>
              <span className={styles.highlightTag}>REGIONAL EXPERTISE & DELIVERY</span>
              <h2 className={styles.introTitle}>
                {service.name} Solutions Engineered for {cityData.city} Businesses
              </h2>
              <p className={styles.introParagraph}>
                Whether your organisation is an established enterprise in {cityData.state} or an ambitious growing startup, our British-led technology advisory and engineering capabilities provide the robust infrastructure required to lead your sector.
              </p>
              <p className={styles.introParagraph}>
                We combine consultative clarity with modern technical frameworks. By adhering to strict UK commercial standards, GDPR compliance, and sub-second performance metrics, we ensure your digital assets generate qualified commercial enquiries.
              </p>
            </div>

            <div className={styles.locationHighlightBox}>
              <span className={styles.highlightTag}>LOCATION SNAPSHOT</span>
              <h3 className={styles.highlightTitle}>{cityData.city}, {cityData.country}</h3>
              <ul className={styles.highlightList}>
                <li className={styles.highlightItem}>
                  <CheckCircleOutlineOutlinedIcon className={styles.checkIcon} />
                  <span>Region: {cityData.state}</span>
                </li>
                <li className={styles.highlightItem}>
                  <CheckCircleOutlineOutlinedIcon className={styles.checkIcon} />
                  <span>Jurisdiction: United Kingdom</span>
                </li>
                <li className={styles.highlightItem}>
                  <CheckCircleOutlineOutlinedIcon className={styles.checkIcon} />
                  <span>Delivery Model: UK Consultation & Governance</span>
                </li>
                <li className={styles.highlightItem}>
                  <CheckCircleOutlineOutlinedIcon className={styles.checkIcon} />
                  <span>Support: Remote Video, Phone & 1-Click WhatsApp</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Service Capabilities */}
        <section className={styles.section}>
          <SectionHeading
            label="WHAT WE DELIVER"
            title={`${service.name} Capabilities`}
            description={`Comprehensive solutions tailored to the operational demands of modern ${cityData.city} companies.`}
          />
          <div className={styles.capabilitiesGrid}>
            {service.capabilities.map((cap, index) => (
              <div key={cap.title} className={styles.capabilityCard}>
                <span className={styles.capabilityNumber}>{String(index + 1).padStart(2, '0')}</span>
                <h3 className={styles.capabilityTitle}>{cap.title}</h3>
                <p className={styles.capabilityDesc}>{cap.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Why Choose Grace Technologies */}
        <section className={styles.section}>
          <SectionHeading
            label="OUR ADVANTAGE"
            title={`Why ${cityData.city} Enterprises Partner With Us`}
            description="Clear strategic alignment, technical depth, and transparent commercial governance."
          />
          <div className={styles.whyUsGrid}>
            <div className={styles.whyUsCard}>
              <h3 className={styles.whyUsTitle}>UK Commercial Governance</h3>
              <p className={styles.whyUsDesc}>
                Direct UK communication, clear contractual frameworks, and transparent milestone reporting give you total peace of mind throughout every phase.
              </p>
            </div>
            <div className={styles.whyUsCard}>
              <h3 className={styles.whyUsTitle}>High-Impact Global Engineering</h3>
              <p className={styles.whyUsDesc}>
                Our bilateral partnership with Ank Square Private Limited in India provides enterprise-grade engineering bandwidth with unmatched cost advantages.
              </p>
            </div>
            <div className={styles.whyUsCard}>
              <h3 className={styles.whyUsTitle}>Uncompromising Performance</h3>
              <p className={styles.whyUsDesc}>
                We build exclusively with modern stacks (Next.js 16, React 19, TypeScript), delivering sub-second load times and elite Core Web Vitals rankings.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Development Process */}
        <section className={styles.section}>
          <SectionHeading
            label="HOW WE WORK"
            title="Our Delivery Framework"
            description={`A structured, four-stage process engineered for predictability and rapid deployment in ${cityData.city}.`}
          />
          <div className={styles.processGrid}>
            {service.process.map((p) => (
              <div key={p.step} className={styles.processCard}>
                <div className={styles.processStep}>{p.step}</div>
                <h3 className={styles.processTitle}>{p.title}</h3>
                <p className={styles.processDesc}>{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Regional FAQs */}
        <section className={styles.section}>
          <SectionHeading
            label="FREQUENT QUESTIONS"
            title={`Frequently Asked Questions in ${cityData.city}`}
            description="Clear answers regarding our service delivery, consultation model, and pricing structure."
          />
          <FaqAccordion faqs={locationFaqs} />
        </section>

        {/* Section 6: UK Regional Navigation */}
        <LocationNavigation
          currentServiceSlug={service.slug}
          currentCitySlug={cityData.citySlug}
          serviceTitle={service.name}
        />
      </Container>

      {/* Dynamic CTA */}
      <ServiceCTASection
        badge={`ELEVATE YOUR ${cityData.city.toUpperCase()} BUSINESS`}
        title={`Discuss Your ${service.name} Project in ${cityData.city}`}
        description={`Schedule an introductory consultation with our UK strategy team. We'll evaluate your requirements and outline a tailored roadmap.`}
        primaryCtaText={`Enquire for ${cityData.city} →`}
        serviceTitle={service.name}
      />
    </div>
  );
}
