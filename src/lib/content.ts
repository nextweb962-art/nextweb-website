import { readRawContent } from "@/lib/store";

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

export async function readContent(): Promise<SiteContent | null> {
  const parsed = await readRawContent();
  if (!parsed || typeof parsed !== "object") return null;
  const data = parsed as Partial<SiteContent>;
  const projects = Array.isArray(data.projects)
    ? data.projects.filter(
        (project) =>
          typeof project?.name === "string" &&
          typeof project?.tag === "string" &&
          typeof project?.description === "string"
      )
    : [];
  if (!data.stats && projects.length === 0) return null;
  return {
    stats: data.stats ?? { projects: "", clients: "", onTime: "" },
    projects,
  };
}
