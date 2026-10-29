import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import ProjectCard, { ProjectItem } from '@/components/sections/ProjectsSection/ProjectCard';
import CTASection from '@/components/common/CTASection/CTASection';
import projectsData from '@/config/projects.json';
import styles from './projects.module.css';

export const metadata: Metadata = {
  title: 'Our Projects & Client Case Studies | Grace Technologies',
  description:
    'Explore featured case studies and production deployments delivered by Grace Technologies and Ank Square Private Limited across Web Development, Merchant Operations, AI Automation, and Digital Marketing.',
};

export default function ProjectsPage() {
  const allProjects = projectsData.projects as ProjectItem[];

  return (
    <div className={styles.page}>
      {/* Header section */}
      <section className={styles.heroSection}>
        <Container size="wide">
          <SectionHeading
            label="PROVEN COMMERCIAL EXCELLENCE"
            title="Featured Projects & Case Studies."
            description="A showcase of technical excellence, bespoke software architectures, multi-currency merchant ecosystems, and automated intelligence engineered for ambitious enterprises."
            align="center"
          />
        </Container>
      </section>

      {/* Grid section */}
      <section className={styles.gridSection}>
        <Container size="wide">
          <div className={styles.projectsGrid}>
            {allProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Conversion CTA */}
      <CTASection
        title="Have an Ambitious Project in Mind?"
        description="Connect with our UK consulting team to discuss your architectural roadmap, specifications, and commercial timeline."
        primaryCtaText="Initiate Project Discovery"
        primaryCtaHref="/contact"
      />
    </div>
  );
}

