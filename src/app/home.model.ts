// home.model.ts
export interface SkillSet {
    frontend: string[];
    stateManagement: string[];
    uiux: string[];
    api: string[];
    testing: string[];
    tools: string[];
    build?: string[];
    methodologies?: string[];
    versionControl?: string[];
    cloud?: string[];
  }
  
  export interface ResumeData {
    summary: string;
    skills: SkillSet;
    // Add other properties as needed
  }
  
  export interface SkillCategory {
    title: string;
    skills: string[];
    icon?: string;
  }