import projectsConfig from '@/config/projects.json';

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'Website Development' | 'Merchant Account Management' | 'AI Automation' | 'Digital Marketing';
  client: string;
  location: string;
  year: string;
  summary: string;
  metrics: string;
  tags: string[];
  deliverables: string[];
  visualType: 'web' | 'merchant' | 'ai' | 'marketing';
}

// All project records are loaded directly from src/config/projects.json
export const PROJECTS_DATA: ProjectItem[] = projectsConfig.projects as ProjectItem[];
