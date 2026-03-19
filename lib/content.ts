import { promises as fs } from "fs";
import path from "path";
import type {
  AboutContent,
  AchievementGroup,
  Project,
} from "@/lib/types";

const contentRoot = path.join(process.cwd(), "content");

async function readJson<T>(absolutePath: string): Promise<T> {
  const raw = await fs.readFile(absolutePath, "utf8");
  return JSON.parse(raw) as T;
}

export async function getAllProjects(): Promise<Project[]> {
  const projectsDir = path.join(contentRoot, "projects");
  const entries = await fs.readdir(projectsDir);
  const projectFiles = entries.filter((entry) => entry.endsWith(".json"));

  const projects = await Promise.all(
    projectFiles.map(async (fileName) => {
      const absolutePath = path.join(projectsDir, fileName);
      return readJson<Project>(absolutePath);
    })
  );

  return projects.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects.filter((project) => project.featured);
}

export async function getProjectById(id: string): Promise<Project | null> {
  const projects = await getAllProjects();
  return projects.find((project) => project.id === id) ?? null;
}

export async function getProjectIds(): Promise<string[]> {
  const projects = await getAllProjects();
  return projects.map((project) => project.id);
}

export async function getAchievements(): Promise<AchievementGroup[]> {
  const absolutePath = path.join(contentRoot, "achievements", "achievements.json");
  return readJson<AchievementGroup[]>(absolutePath);
}

export async function getAboutContent(): Promise<AboutContent> {
  const absolutePath = path.join(contentRoot, "about", "about.json");
  return readJson<AboutContent>(absolutePath);
}
