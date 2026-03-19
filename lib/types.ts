export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectStory = {
  problem: string;
  approach: string;
  architecture: string;
  results: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  metric: ProjectMetric;
  featured: boolean;
  story: ProjectStory;
};

export type AchievementItem = {
  title: string;
  detail: string;
  year: string;
};

export type AchievementGroup = {
  category: "Research" | "Performance" | "Hackathons";
  items: AchievementItem[];
};

export type AboutTimelineEntry = {
  phase: "Roots" | "Trunk" | "Branches";
  title: string;
  detail: string;
  period: string;
};

export type EducationEntry = {
  title: string;
  institute: string;
  period: string;
  score: string;
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export type ContactProfile = {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
};

export type AboutContent = {
  name: string;
  role: string;
  bio: string;
  focusAreas: string[];
  contacts: ContactProfile;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  timeline: AboutTimelineEntry[];
};

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
};

export type BlogSummary = BlogFrontmatter & {
  slug: string;
};
