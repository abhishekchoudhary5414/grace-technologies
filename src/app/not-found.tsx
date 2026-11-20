import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import Button from '@/components/common/Button/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './not-found.module.css';

export const metadata: Metadata = {
  title: 'Page Not Found | Grace Technologies',
  description:
    'The requested page could not be located. Explore Grace Technologies bespoke website development, intelligent AI automation, merchant account management, and digital marketing services.',
  robots: {
    index: false,
    follow: true,
  },
};

const CORE_SERVICES = [
  {
    name: 'Website Development',
    category: 'High-Performance Web Platforms',
    href: '/services/website-development',
  },
  {
    name: 'App Development',
    category: 'Native & Cross-Platform Mobile Apps',
    href: '/services/app-development',
  },
  {
    name: 'Software Development',
    category: 'Enterprise SaaS & Cloud Systems',
    href: '/services/software-development',
  },
  {
    name: 'AI Automation',
    category: 'Autonomous Agents & Intelligent Systems',
    href: '/services/ai-automation',
  },
  {
    name: 'Merchant Account',
    category: 'Secure Global Payment Infrastructure',
    href: '/services/merchant-account-management',
  },
  {
    name: 'Digital Marketing',
    category: 'Data-Driven Growth & Search Visibility',
    href: '/services/digital-marketing',
  },
];

export default function NotFound() {
  return (
    <div className={styles.page}>
      {/* Visual Ambient Rings */}
      <div className={styles.ambientRingOne} aria-hidden="true" />
      <div className={styles.ambientRingTwo} aria-hidden="true" />

      {/* Website Navigation Breadcrumb */}
      <Breadcrumb
        items={[{ label: '404 - Page Not Found' }]}
        backHref="/"
        backLabel="Back to Home"
      />

      {/* Hero Content Section */}
      <section className={styles.heroSection}>
        <Container size="default">
          <div className={styles.card}>
            {/* Elegant Status Badge */}
            <div className={styles.badgeWrap}>
              <span className={styles.badge}>
                <span className={styles.badgeDot} />
                404 · Page Not Found
              </span>
            </div>

            {/* Giant 404 Headline */}
            <h1 className={styles.errorCode} aria-label="Error 404">
              404
            </h1>

            {/* Title */}
            <h2 className={styles.title}>
              We Couldn&apos;t Locate That Page
            </h2>

            {/* Contextual Description */}
            <p className={styles.description}>
              The destination you are trying to access may have been updated,
              relocated, or is no longer available. You can navigate back to the
              homepage or discover our bespoke technology capabilities below.
            </p>

            {/* Action Buttons using Website Design System */}
            <div className={styles.actions}>
              <Button href="/" variant="primary" size="lg" icon>
                Return to Homepage
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore All Capabilities
              </Button>
            </div>

            {/* Divider */}
            <div className={styles.divider}>
              <span className={styles.dividerLine} />
              <span className={styles.dividerText}>Our Core Capabilities</span>
              <span className={styles.dividerLine} />
            </div>

            {/* Core Services Grid */}
            <div className={styles.servicesGrid}>
              {CORE_SERVICES.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className={styles.serviceCard}
                >
                  <div className={styles.serviceHeader}>
                    <span className={styles.serviceName}>{service.name}</span>
                    <ArrowForwardIcon className={styles.serviceArrow} fontSize="inherit" />
                  </div>
                  <span className={serviceCategoryClass(service.category)}>
                    {service.category}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

function serviceCategoryClass(text: string): string {
  return styles.serviceCategory;
}
