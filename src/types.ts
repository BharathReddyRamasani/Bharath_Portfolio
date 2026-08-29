export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryType: 'primary' | 'secondary' | 'error';
  imageAlt: string;
  imageUrl: string;
  tech: string[];
  link?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface TimelineEvent {
  period: string;
  title: string;
  institution: string;
  description?: string;
  bulletPoints?: string[];
  highlight?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
