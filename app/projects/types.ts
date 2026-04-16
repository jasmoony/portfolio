export interface KeyDecision {
  title: string;
  description: string;
}

export interface TechStackGroup {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  role: string;
  keyDecisions: KeyDecision[];
  techStack: TechStackGroup[];
  screenshots: string[];
  heroVideo?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  githubUrl?: string;
  learned?: string;
  cursorEmoji?: string;
  previewContain?: boolean;
}
