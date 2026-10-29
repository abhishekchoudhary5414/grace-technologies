'use client';

import React from 'react';
import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import Button from '@/components/common/Button/Button';
import ProjectCard, { ProjectItem } from './ProjectCard';
import projectsData from '@/config/projects.json';
import styles from './ProjectsSection.module.css';

interface ProjectsSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

export default function ProjectsSection({ limit, showViewAll = true }: ProjectsSectionProps) {
  const allProjects = projectsData.projects as ProjectItem[];
  const displayedProjects = limit ? allProjects.slice(0, limit) : allProjects;

  return (
    <section id="projects-section" className={styles.section}>
      <Container size="wide">
        <SectionHeading
          label="FEATURED CASE STUDIES & IMPLEMENTATIONS"
          title="Engineered for Measurable Impact."
          description="Explore our proven digital architectures, multi-currency merchant management platforms, autonomous AI workflows, and precision growth marketing implementations."
          align="center"
        />

        <div className={styles.grid}>
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {showViewAll && (
          <div className={styles.ctaRow}>
            <Button href="/projects" variant="secondary" size="lg" icon>
              View All Case Studies
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Discuss Your Project
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}

