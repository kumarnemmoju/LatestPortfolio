import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image?: string;
  expanded?: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getResumeData().subscribe((data: any) => {
      this.projects = data.projects.map((project: Project) => ({
        ...project,
        image: project.image || this.generateProjectImage(project.title),
        expanded: false
      }));
    });
  }

  toggleProject(project: Project): void {
    project.expanded = !project.expanded;
  }

  private generateProjectImage(title: string): string {
    const slug = title.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '');
    return `assets/images/projects/${slug}.jpg`;
  }
}