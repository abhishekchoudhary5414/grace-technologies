import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import ClientSection from '@/components/sections/ClientSection/ClientSection';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import ProjectsClientView from './ProjectsClientView';
import projectsConfig from '@/config/projects.json';
import { ProjectItem } from '@/data/projects';
import styles from './projects.module.css';

export const metadata: Metadata = {
  title: 'Our Projects & Client Case Studies | Grace Technologies',
  description:
    'Explore featured case studies and production deployments delivered by Grace Technologies and Ank Square Private Limited across Web Development, Merchant Operations, AI Automation, and Digital Marketing.',
};

export default function ProjectsPage() {
  // Pass project data directly from the centralized JSON configuration
  const projectsData = projectsConfig.projects as ProjectItem[];

  return (
    <div className={styles.page}>
      <Breadcrumb
        items={[{ label: 'Projects' }]}
        backHref="/"
        backLabel="Back to Home"
      />

      {/* Header section */}
      <section className={styles.heroSection}>
        <Container size="wide">
          <SectionHeading
            label="OUR PORTFOLIO"
            title="Ideas Into Real Digital Solutions."
            description="Explore our proven digital architectures, multi-currency merchant ecosystems, automated AI systems, and precision growth marketing implementations."
            align="center"
          />
        </Container>
      </section>

      {/* Interactive Filterable Projects Grid */}
      <section className={styles.gridSection}>
        <ProjectsClientView initialProjects={projectsData} />
      </section>

      {/* Proven Client Case Studies Section with Logos & Full Detail Links */}
      <ClientSection
        label="VERIFIED CLIENT CASE STUDIES"
        title="Enterprise Implementations & Deliverables"
        description="Detailed project scopes, live web applications, presentations, and brand collateral delivered across corporate engineering and architecture sectors."
      />

      {/* Conversion CTA with modal trigger */}
      <ServiceCTASection
        title="Have an Ambitious Project in Mind?"
        description="Connect with our UK consulting team to discuss your architectural roadmap, specifications, and commercial timeline."
        primaryCtaText="Initiate Project Discovery"
        secondaryCtaText="Explore Capabilities"
        secondaryCtaHref="/services"
      />
    </div>
  );
}
