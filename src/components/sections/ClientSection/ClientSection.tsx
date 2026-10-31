'use client';

import React from 'react';
import Container from '@/components/common/Container/Container';
import ProjectsHeader from '@/components/sections/Projects/ProjectsHeader';
import ProjectStats from '@/components/sections/Projects/ProjectStats';
import ClientCarousel from './ClientCarousel';
import clientsData from '@/config/clients.json';
import { ClientItem } from './ClientCard';
import styles from './ClientSection.module.css';

interface ClientSectionProps {
  label?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  viewAllHref?: string;
  viewAllText?: string;
}

export default function ClientSection({
  label = 'OUR CLIENTS',
  title = 'Proven Partnerships &',
  highlightText = 'Enterprise Success',
  description = 'Explore commercial projects and digital transformations delivered for real-world clients through the bilateral synergy of Grace Technologies and Ank Square.',
  viewAllHref = '/client',
  viewAllText = 'View All Clients',
}: ClientSectionProps) {
  const clients = clientsData.clients as ClientItem[];

  return (
    <section id="clients-section" className={styles.section} aria-label="Our Clients & Commercial Engagements">
      <div className={styles.backgroundDecor} />
      <div className={styles.ambientOrbitalLine} />

      <Container size="wide">
        {/* Editorial Header matching Projects Section */}
        <ProjectsHeader
          label={label}
          title={title}
          highlightText={highlightText}
          description={description}
          viewAllHref={viewAllHref}
          viewAllText={viewAllText}
        />

        {/* 4-Card Responsive Carousel Showcase */}
        <ClientCarousel clients={clients} />

        {/* Bottom Refined Information Strip */}
        {/* <ProjectStats /> */}
      </Container>
    </section>
  );
}
