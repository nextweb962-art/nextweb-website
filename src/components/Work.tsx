import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import type { ProjectItem } from "@/lib/content";

type WorkProps = {
  dict: Dictionary;
  projects: ProjectItem[];
};

const gradients = [
  "from-blue-600 to-indigo-500",
  "from-sky-500 to-cyan-400",
  "from-indigo-700 to-blue-500",
  "from-blue-500 to-sky-600",
  "from-cyan-500 to-blue-600",
  "from-blue-700 to-sky-500",
];

export default function Work({ dict, projects }: WorkProps) {
  return (
    <section id="work" className="bg-slate-50 py-14 sm:py-20 lg:py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            {dict.work.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {dict.work.title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-slate-600 dark:text-slate-300">
            {dict.work.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const thumbnail = project.image ? (
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute start-4 top-4 rounded-full bg-slate-950/50 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                  {project.tag}
                </span>
              </div>
            ) : (
              <div className={`relative bg-gradient-to-br ${gradients[index % gradients.length]} px-6 pb-0 pt-6`}>
                <div className="rounded-t-lg bg-white/95 px-4 pt-2.5 shadow-sm">
                  <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2">
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                  </div>
                  <div className="space-y-2 py-4">
                    <div className="h-2.5 w-16 rounded bg-blue-600/80" />
                    <div className="h-4 w-4/5 rounded bg-slate-200" />
                    <div className="h-4 w-3/5 rounded bg-slate-200" />
                    <div className="flex gap-2 pt-1">
                      <div className="h-6 w-16 rounded bg-slate-900/85" />
                      <div className="h-6 w-16 rounded border border-slate-200" />
                    </div>
                  </div>
                </div>
                <span className="absolute start-4 top-4 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                  {project.tag}
                </span>
              </div>
            );

            const body = (
              <div className="p-6">
                <h3 className="flex items-center gap-1.5 text-lg font-semibold text-slate-900 dark:text-white">
                  {project.name}
                  {project.link && (
                    <svg
                      className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  )}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
              </div>
            );

            const cardClass =
              "group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-950 dark:hover:shadow-black/30";

            if (project.link) {
              return (
                <a
                  key={`${project.name}-${index}`}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {thumbnail}
                  {body}
                </a>
              );
            }

            return (
              <article key={`${project.name}-${index}`} className={cardClass}>
                {thumbnail}
                {body}
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-blue-500/40 dark:hover:text-blue-400"
          >
            {dict.work.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
