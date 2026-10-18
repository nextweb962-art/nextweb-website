"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import { saveContent } from "@/app/actions";
import { logout, uploadImage } from "./actions";
import type { ProjectItem, SiteStats } from "@/lib/content";

type AdminClientProps = {
  initialStats: SiteStats;
  initialProjects: ProjectItem[];
};

const inputClass =
  "w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20";

const fileClass =
  "block w-full cursor-pointer text-xs text-slate-500 file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-blue-50 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-blue-700 hover:file:bg-blue-100";

export default function AdminClient({
  initialStats,
  initialProjects,
}: AdminClientProps) {
  const [stats, setStats] = useState<SiteStats>(initialStats);
  const [projects, setProjects] = useState<ProjectItem[]>(initialProjects);
  const [form, setForm] = useState({
    name: "",
    tag: "",
    description: "",
    link: "",
  });
  const [newImage, setNewImage] = useState<File | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({
    name: "",
    tag: "",
    description: "",
    link: "",
  });
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  function flashSaved() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  function persist(nextStats: SiteStats, nextProjects: ProjectItem[]) {
    startTransition(async () => {
      try {
        await saveContent({ stats: nextStats, projects: nextProjects });
        setError(null);
        flashSaved();
      } catch {
        setError("Saving failed. Please try again.");
      }
    });
  }

  function addProject() {
    if (!form.name.trim() || !form.tag.trim() || !form.description.trim()) {
      return;
    }
    const project: ProjectItem = {
      name: form.name.trim(),
      tag: form.tag.trim(),
      description: form.description.trim(),
      ...(form.link.trim() ? { link: form.link.trim() } : {}),
    };
    startTransition(async () => {
      try {
        let image: string | undefined;
        if (newImage) image = await uploadImage(newImage);
        const finalProject = image ? { ...project, image } : project;
        const next = [...projects, finalProject];
        setProjects(next);
        setForm({ name: "", tag: "", description: "", link: "" });
        setNewImage(null);
        await saveContent({ stats, projects: next });
        setError(null);
        flashSaved();
      } catch {
        setError("Something went wrong. Please try again.");
      }
    });
  }

  function removeProject(index: number) {
    const next = projects.filter((_, i) => i !== index);
    setProjects(next);
    setEditingIndex(null);
    persist(stats, next);
  }

  function moveProject(index: number, direction: -1 | 1) {
    const target = index + direction;
    if (target < 0 || target >= projects.length) return;
    const next = [...projects];
    [next[index], next[target]] = [next[target], next[index]];
    setProjects(next);
    setEditingIndex(null);
    persist(stats, next);
  }

  function startEdit(index: number) {
    const project = projects[index];
    setEditingIndex(index);
    setEditForm({
      name: project.name,
      tag: project.tag,
      description: project.description,
      link: project.link ?? "",
    });
  }

  function saveEdit() {
    if (editingIndex === null) return;
    if (
      !editForm.name.trim() ||
      !editForm.tag.trim() ||
      !editForm.description.trim()
    ) {
      return;
    }
    const updated: ProjectItem = {
      ...projects[editingIndex],
      name: editForm.name.trim(),
      tag: editForm.tag.trim(),
      description: editForm.description.trim(),
      ...(editForm.link.trim()
        ? { link: editForm.link.trim() }
        : { link: undefined }),
    };
    const next = projects.map((p, i) => (i === editingIndex ? updated : p));
    setProjects(next);
    setEditingIndex(null);
    persist(stats, next);
  }

  function handleImageUpload(
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    startTransition(async () => {
      try {
        const image = await uploadImage(file);
        const next = projects.map((p, i) =>
          i === index ? { ...p, image } : p
        );
        setProjects(next);
        await saveContent({ stats, projects: next });
        setError(null);
        flashSaved();
      } catch {
        setError("Image upload failed. Use PNG, JPG or WebP under 5MB.");
      }
    });
  }

  function removeImage(index: number) {
    const next = projects.map((p, i) =>
      i === index ? { ...p, image: undefined } : p
    );
    setProjects(next);
    persist(stats, next);
  }

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Logo className="h-8 w-auto" />
          <div>
            <div className="text-lg font-bold tracking-tight text-slate-900">
              NextWeb Admin
            </div>
            <div className="text-xs text-slate-500">
              Manage your landing page content
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {saved && (
            <span className="text-sm font-semibold text-green-600">
              Saved — your site is updated
            </span>
          )}
          {error && (
            <span className="text-sm font-semibold text-red-600">{error}</span>
          )}
          <Link
            href="/"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
          >
            View site
          </Link>
          <button
            type="button"
            onClick={() =>
              startTransition(async () => {
                await logout();
                router.refresh();
              })
            }
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Log out
          </button>
        </div>
      </div>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Statistics</h2>
        <p className="mt-1 text-sm text-slate-500">
          The numbers shown in the hero section of the landing page.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div>
            <label
              htmlFor="stat-projects"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Projects delivered
            </label>
            <input
              id="stat-projects"
              type="number"
              min="0"
              value={stats.projects}
              onChange={(event) =>
                setStats({ ...stats, projects: event.target.value })
              }
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="stat-clients"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Happy clients
            </label>
            <input
              id="stat-clients"
              type="number"
              min="0"
              value={stats.clients}
              onChange={(event) =>
                setStats({ ...stats, clients: event.target.value })
              }
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="stat-ontime"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              On-time delivery (%)
            </label>
            <input
              id="stat-ontime"
              type="number"
              min="0"
              max="100"
              value={stats.onTime}
              onChange={(event) =>
                setStats({ ...stats, onTime: event.target.value })
              }
              className={inputClass}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => persist(stats, projects)}
          disabled={pending}
          className="mt-5 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 disabled:opacity-60"
        >
          {pending ? "Saving..." : "Save statistics"}
        </button>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">
          Portfolio projects
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          The websites shown in the Our Work section. Use the arrows to change
          their order.
        </p>

        <ul className="mt-5 divide-y divide-slate-100">
          {projects.map((project, index) => (
            <li
              key={`${project.name}-${index}`}
              className="py-5"
            >
              {editingIndex === index ? (
                <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4">
                  <h4 className="text-sm font-semibold text-slate-900">
                    Edit project
                  </h4>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Project name
                      </label>
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(event) =>
                          setEditForm({ ...editForm, name: event.target.value })
                        }
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Category
                      </label>
                      <input
                        type="text"
                        value={editForm.tag}
                        onChange={(event) =>
                          setEditForm({ ...editForm, tag: event.target.value })
                        }
                        className={inputClass}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Short description
                      </label>
                      <input
                        type="text"
                        value={editForm.description}
                        onChange={(event) =>
                          setEditForm({
                            ...editForm,
                            description: event.target.value,
                          })
                        }
                        className={inputClass}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Website link
                      </label>
                      <input
                        type="url"
                        value={editForm.link}
                        onChange={(event) =>
                          setEditForm({ ...editForm, link: event.target.value })
                        }
                        placeholder="https://..."
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      onClick={saveEdit}
                      disabled={pending}
                      className="rounded-lg bg-blue-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-800 disabled:opacity-60"
                    >
                      {pending ? "Saving..." : "Save changes"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingIndex(null)}
                      disabled={pending}
                      className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-slate-900">
                        {project.name}
                      </span>
                      <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-700">
                        {project.tag}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600">
                      {project.description}
                    </p>
                    {project.link && (
                      <p className="mt-1 text-xs text-blue-600">
                        {project.link}
                      </p>
                    )}
                  </div>
                  <div className="flex shrink-0 items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => moveProject(index, -1)}
                      disabled={pending || index === 0}
                      aria-label="Move up"
                      title="Move up"
                      className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-blue-300 hover:text-blue-700 disabled:opacity-40"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => moveProject(index, 1)}
                      disabled={pending || index === projects.length - 1}
                      aria-label="Move down"
                      title="Move down"
                      className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-blue-300 hover:text-blue-700 disabled:opacity-40"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => startEdit(index)}
                      disabled={pending}
                      className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 disabled:opacity-60"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => removeProject(index)}
                      disabled={pending}
                      className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-60"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}

              <div className="mt-3 flex flex-wrap items-center gap-3">
                {project.image && (
                  <>
                    <Image
                      src={project.image}
                      alt=""
                      width={96}
                      height={54}
                      className="h-auto w-24 rounded-lg border border-slate-200 object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      disabled={pending}
                      className="text-xs font-semibold text-red-600 transition hover:text-red-700 disabled:opacity-60"
                    >
                      Remove photo
                    </button>
                  </>
                )}
                <div className="min-w-0 flex-1">
                  <label className="mb-1 block text-xs font-medium text-slate-500">
                    {project.image ? "Change photo" : "Add thumbnail photo"}
                  </label>
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    disabled={pending}
                    onChange={(event) => handleImageUpload(event, index)}
                    className={fileClass}
                  />
                </div>
              </div>
            </li>
          ))}
          {projects.length === 0 && (
            <li className="py-4 text-sm text-slate-500">
              No projects yet. Add your first one below.
            </li>
          )}
        </ul>

        <div className="mt-6 rounded-xl bg-slate-50 p-5">
          <h3 className="text-sm font-semibold text-slate-900">
            Add a project
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="project-name"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Project name
              </label>
              <input
                id="project-name"
                type="text"
                value={form.name}
                onChange={(event) =>
                  setForm({ ...form, name: event.target.value })
                }
                placeholder="e.g. Nova Store"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="project-tag"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Category
              </label>
              <input
                id="project-tag"
                type="text"
                value={form.tag}
                onChange={(event) =>
                  setForm({ ...form, tag: event.target.value })
                }
                placeholder="e.g. E-commerce"
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="project-description"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Short description
              </label>
              <input
                id="project-description"
                type="text"
                value={form.description}
                onChange={(event) =>
                  setForm({ ...form, description: event.target.value })
                }
                placeholder="One sentence about the project"
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="project-link"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Website link (optional)
              </label>
              <input
                id="project-link"
                type="url"
                value={form.link}
                onChange={(event) =>
                  setForm({ ...form, link: event.target.value })
                }
                placeholder="https://..."
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="project-image"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Thumbnail image (optional)
              </label>
              <input
                id="project-image"
                type="file"
                accept="image/png,image/jpeg,image/webp"
                disabled={pending}
                onChange={(event) =>
                  setNewImage(event.target.files?.[0] ?? null)
                }
                className={fileClass}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={addProject}
            disabled={pending}
            className="mt-4 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
          >
            {pending ? "Saving..." : "Add project"}
          </button>
        </div>
      </section>

      <p className="mt-6 text-center text-xs text-slate-500">
        Changes save to data/content.json and update the live pages instantly.
        Keep this URL and password private.
      </p>
    </main>
  );
}
