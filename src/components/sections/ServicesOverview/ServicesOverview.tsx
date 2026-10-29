'use client';

import React from 'react';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceCard from '@/components/common/ServiceCard/ServiceCard';
import { SERVICES_DATA } from '@/config/site';
import styles from './ServicesOverview.module.css';

export default function ServicesOverview() {
  return (
    <section id="services-overview" className={styles.section}>
      <Container size="wide">
        <SectionHeading
          label="CORE CAPABILITIES"
          title="Four Capabilities. One Vision for Growth."
          description="A cohesive portfolio of digital engineering, payment operations, intelligent automation and market visibility tailored for forward-thinking enterprises."
          align="center"
        />

        <div className={styles.grid}>
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
  );
}

