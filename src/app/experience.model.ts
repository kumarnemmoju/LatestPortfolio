// experience.model.ts
export interface Experience {
    company: string;
    position: string;
    period: string;
    responsibilities: string[];
    techStack?: string[]; // Optional as we'll add it later
  }
  
  export interface ResumeData {
    experience: Experience[];
    // Add other properties from your full resume data if needed
  }