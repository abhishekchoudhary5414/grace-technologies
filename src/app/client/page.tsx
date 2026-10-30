import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import ClientCard, { ClientItem } from '@/components/sections/ClientSection/ClientCard';
import ProjectStats from '@/components/sections/Projects/ProjectStats';
import clientsConfig from '@/config/clients.json';
import styles from './client.module.css';

export const metadata: Metadata = {
  title: 'Our Clients & Commercial Partnerships | Grace Technologies',
  description:
    'Discover visionary corporate clients, startups, and institutions partnered with Grace Technologies and Ank Square for turnkey branding, websites, architecture, and technology.',
};

export default function ClientsIndexPage() {
  const clients = clientsConfig.clients as ClientItem[];

  return (
    <div className={styles.page}>
      {/* Header section */}
      <section className={styles.heroSection}>
        <Container size="wide">
          <SectionHeading
            label="CLIENT PARTNERSHIPS"
            title="Trusted by Visionary Enterprises."
            description="Explore our proven record of delivering corporate brand identities, dynamic web applications, and clinical engineering infrastructure."
            align="center"
          />
        </Container>
      </section>

      {/* Grid of All Client Cards */}
      <section className={styles.gridSection}>
        <Container size="wide">
          <div className={styles.clientsGrid}>
            {clients.map((client, index) => (
              <ClientCard key={client.id} client={client} index={index} />
            ))}
          </div>

          <div className={styles.statsWrapper}>
            <ProjectStats />
          </div>
        </Container>
      </section>

      {/* Conversion CTA */}
      <ServiceCTASection
        title="Ready to Build Your Flagship Business Platform?"
        description="Partner with our bilateral UK–India advisory and engineering team today for end-to-end technical execution."
        primaryCtaText="Consult With Our Team"
        secondaryCtaText="Explore Our Capabilities"
        secondaryCtaHref="/services"
      />
    </div>
  );
}

