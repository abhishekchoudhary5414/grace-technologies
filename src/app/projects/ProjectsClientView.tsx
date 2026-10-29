'use client';

import React, { useState, useMemo } from 'react';
import Container from '@/components/common/Container/Container';
import ProjectFilters, { CategoryFilter } from '@/components/sections/Projects/ProjectFilters';
import ProjectCard from '@/components/sections/Projects/ProjectCard';
import ProjectStats from '@/components/sections/Projects/ProjectStats';
import { ProjectItem } from '@/data/projects';
import styles from './ProjectsClientView.module.css';

interface ProjectsClientViewProps {
  initialProjects: ProjectItem[];
}

export default function ProjectsClientView({ initialProjects }: ProjectsClientViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All Projects');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All Projects') {
      return initialProjects;
    }
    return initialProjects.filter((p) => p.category === selectedCategory);
  }, [initialProjects, selectedCategory]);

  return (
    <Container size="wide">
      {/* Category Filter Pills */}
      <div className={styles.filtersWrapper}>
        <ProjectFilters
          activeCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Grid Display */}
      <div className={styles.grid}>
        {filteredProjects.map((project, index) => (
          <div key={project.id} className={styles.gridItem}>
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

      {/* Trust & Delivery Pillars Strip */}
      <div className={styles.statsWrapper}>
        <ProjectStats />
      </div>
    </Container>
  );
}

