// src/app/shared/models/project.model.ts
export interface Project {
    title: string;
    description: string;
    technologies: string[];
    features: string[];
    image?: string;
  }
  
  export interface ProjectsResponse {
    projects: Project[];
  }