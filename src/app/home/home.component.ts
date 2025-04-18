import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { 
  faCode, 
  faLayerGroup, 
  faPalette, 
  faServer, 
  faFlask, 
  faTools,
  faEnvelope,
  faUser,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

// Define valid icon names as a type
type IconName = 'frontend' | 'stateManagement' | 'uiux' | 'api' | 'testing' | 'tools' | 'contact' | 'about';

interface SkillCategory {
  title: string;
  skills: string[];
  icon: IconName; // Now strictly typed
}

interface ResumeData {
  summary: string;
  skills: {
    frontend: string[];
    stateManagement: string[];
    uiux: string[];
    api: string[];
    testing: string[];
    tools: string[];
    [key: string]: string[]; // Index signature for other possible properties
  };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  summary: string = '';
  skillCategories: SkillCategory[] = [];
  
  // Strongly typed icons object
  icons: Record<IconName, IconDefinition> = {
    frontend: faCode,
    stateManagement: faLayerGroup,
    uiux: faPalette,
    api: faServer,
    testing: faFlask,
    tools: faTools,
    contact: faEnvelope,
    about: faUser
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getResumeData().subscribe((data: ResumeData) => {
      this.summary = data.summary;
      this.skillCategories = this.createSkillCategories(data.skills);
    });
  }

  private createSkillCategories(skills: ResumeData['skills']): SkillCategory[] {
    return [
      { 
        title: 'Frontend Development', 
        skills: skills.frontend,
        icon: 'frontend'
      },
      { 
        title: 'State Management', 
        skills: skills.stateManagement,
        icon: 'stateManagement'
      },
      { 
        title: 'UI/UX Design', 
        skills: skills.uiux,
        icon: 'uiux'
      },
      { 
        title: 'API Integration', 
        skills: skills.api,
        icon: 'api'
      },
      { 
        title: 'Testing', 
        skills: skills.testing,
        icon: 'testing'
      },
      { 
        title: 'Development Tools', 
        skills: skills.tools,
        icon: 'tools'
      }
    ];
  }
}