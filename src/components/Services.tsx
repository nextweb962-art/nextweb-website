import type { Dictionary } from "@/lib/dictionaries";

type ServicesProps = {
  dict: Dictionary;
};

const icons = [
  "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-18c-2.5 2.2-4 5.4-4 9s1.5 6.8 4 9m0-18c2.5 2.2 4 5.4 4 9s-1.5 6.8-4 9M3.5 9h17m-17 6h17",
  "M8 9l-4 3 4 3m8-6 4 3-4 3m-3-9-2 12",
  "M3 5h2l2.2 11.2A2 2 0 0 0 9.2 18h8.6a2 2 0 0 0 2-1.6L21.5 9H6M9 21.5h.01M17 21.5h.01",
  "M21 21l-4.3-4.3M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z",
  "M11.4 6.6a4.5 4.5 0 0 1 6 6l3.6 3.6-2.8 2.8-3.6-3.6a4.5 4.5 0 0 1-6-6L4.5 5.5 2.6 8.3",
  "M12 3l2.4 4.9 5.4.8-3.9 3.3.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 8.7l5.4-.8L12 3Z",
];

export default function Services({ dict }: ServicesProps) {
  return (
    <section id="services" className="bg-white py-14 sm:py-20 lg:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            {dict.services.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {dict.services.title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-slate-600 dark:text-slate-300">
            {dict.services.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((service, index) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/30 dark:hover:shadow-blue-500/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d={icons[index]} />
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
