import type { Dictionary } from "@/lib/dictionaries";

type ProcessProps = {
  dict: Dictionary;
};

export default function Process({ dict }: ProcessProps) {
  return (
    <section
      id="process"
      className="bg-white py-14 sm:py-20 lg:py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            {dict.process.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {dict.process.title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-slate-600 dark:text-slate-300">
            {dict.process.subtitle}
          </p>
        </div>

        <div className="relative mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {dict.process.steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/30 dark:hover:shadow-blue-500/10"
            >
              <span className="text-3xl font-bold text-blue-600/20 dark:text-blue-400/15">
                0{index + 1}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
