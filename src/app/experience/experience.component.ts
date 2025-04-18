import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Experience, ResumeData } from '../experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = [];
  
  private readonly techStackMap: Record<string, string[]> = {
    "Tech Data, USA": [
      "Angular 15", "TypeScript", "RxJS", "REST APIs", 
      "HTML5/CSS3", "Bootstrap", "MySQL", "MS SQL",
      "Git", "Agile/Scrum", "Jenkins", "AWS"
    ],
    "Zyoin Web Pvt. Ltd., Chennai, India": [
      "Angular 14", "TypeScript", "RxJS", "Tailwind CSS",
      "Angular Material", "REST APIs", "NgRx", "Jasmine",
      "Git", "Agile", "Cypress", "Microservices"
    ],
    "Cognizant Technology Solutions, Hyderabad, India": [
      "Angular 12", "TypeScript", "Bootstrap", "REST APIs",
      "Angular Material", "Microservices", "Git", "Agile",
      "Jenkins", "AWS", "Docker", "Azure DevOps"
    ],
    "Sage Softech, India": [
      "Angular", "TypeScript", "Tailwind CSS", "Node.js",
      "Express.js", "MySQL", "MongoDB", "REST APIs",
      "jQuery", "AWS", "Jenkins", "Jira", "GitHub Actions"
    ]
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getResumeData().subscribe((data: ResumeData) => {
      this.experience = data.experience.map(exp => ({
        ...exp,
        techStack: this.getTechStackForCompany(exp.company)
      }));
    });
  }

  private getTechStackForCompany(company: string): string[] {
    return this.techStackMap[company] || [];
  }

  
}