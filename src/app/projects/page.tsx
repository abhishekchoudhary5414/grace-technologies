import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ServiceCTASection from '@/components/sections/ServiceCTASection/ServiceCTASection';
import ClientSection from '@/components/sections/ClientSection/ClientSection';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { getBreadcrumbSchema } from '@/lib/seo/schema';
import { SEO_CONFIG } from '@/lib/seo/config';
import ProjectsClientView from './ProjectsClientView';
import projectsConfig from '@/config/projects.json';
import { ProjectItem } from '@/data/projects';
import styles from './projects.module.css';

export const metadata: Metadata = constructMetadata({
  title: 'Our Projects & Case Studies | Grace Technologies',
  description:
    'Browse Grace Technologies case studies for UK and international clients, from website development and merchant services to AI automation and marketing.',
  canonicalPath: '/projects',
  keywords: [
    'Grace Technologies projects',
    'Web development case studies',
    'Merchant management case studies',
    'AI automation examples UK',
    'Digital transformation portfolio',
  ],
});

export default function ProjectsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Projects', url: `${SEO_CONFIG.siteUrl}/projects` },
  ]);

  // Pass project data directly from the centralized JSON configuration
  const projectsData = projectsConfig.projects as ProjectItem[];

  return (
    <div className={styles.page}>
      <JsonLd data={breadcrumbSchema} />
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
            description="See how ideas become real digital solutions through our website development, merchant operations, AI automation and digital marketing projects."
            align="center"
            headingLevel="h1"
          />
        </Container>
      </section>

      {/* Interactive Filterable Projects Grid */}
      <section className={styles.gridSection}>
        <ProjectsClientView initialProjects={projectsData} />
      </section>

 
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
