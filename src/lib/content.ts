import { readFile } from "node:fs/promises";
import path from "node:path";

export type ProjectItem = {
  name: string;
  tag: string;
  description: string;
  link?: string;
  image?: string;
};

export type SiteStats = {
  projects: string;
  clients: string;
  onTime: string;
};

export type SiteContent = {
  stats: SiteStats;
  projects: ProjectItem[];
};

const dataFile = path.join(process.cwd(), "data", "content.json");

export async function readContent(): Promise<SiteContent | null> {
  try {
    const raw = await readFile(dataFile, "utf8");
    const parsed = JSON.parse(raw) as Partial<SiteContent>;
    const projects = Array.isArray(parsed.projects)
      ? parsed.projects.filter(
          (project) =>
            typeof project?.name === "string" &&
            typeof project?.tag === "string" &&
            typeof project?.description === "string"
        )
      : [];
    if (!parsed.stats && projects.length === 0) return null;
    return {
      stats: parsed.stats ?? { projects: "", clients: "", onTime: "" },
      projects,
    };
  } catch {
    return null;
  }
}
