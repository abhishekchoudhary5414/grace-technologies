import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceCard from '@/components/common/ServiceCard/ServiceCard';
import { SERVICES_DATA } from '@/config/site';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Our Services & Capabilities',
  description:
    'Explore the four core capabilities of Grace Technologies: Website Development, Merchant Account Management, AI Automation, and Digital Marketing.',
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <Container size="wide">
          <SectionHeading
            label="ENTERPRISE CAPABILITIES"
            title="Integrated Technology & Business Services."
            description="We deliver full-cycle digital transformation across four interconnected pillars, engineered to empower ambitious businesses to scale securely and efficiently."
            align="center"
          />
        </Container>
      </section>

      <section className={styles.gridSection}>
        <Container size="wide">
          <div className={styles.cardsGrid}>
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard
                key={service.id}
                number={service.number}
                title={service.title}
                tagline={service.tagline}
                description={service.description}
                href={service.route}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}

