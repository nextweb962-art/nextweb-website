import type { Dictionary, Locale } from "@/lib/dictionaries";

type CtaBandProps = {
  dict: Dictionary;
  locale: Locale;
};

export default function CtaBand({ dict, locale }: CtaBandProps) {
  return (
    <section className="bg-white pb-14 sm:pb-20 lg:pb-24 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 px-6 py-14 text-center shadow-2xl shadow-blue-600/20 sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"
          />
          <div
            aria-hidden
            className="nw-glow absolute -top-24 left-1/2 h-64 w-[500px] -translate-x-1/2 rounded-full bg-sky-400/20 blur-[100px]"
          />
          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              {dict.ctaBand.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100">
              {dict.ctaBand.subtitle}
            </p>
            <a
              href={`/${locale}#contact`}
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 text-sm font-semibold text-blue-800 shadow-lg transition hover:bg-blue-50"
            >
              {dict.ctaBand.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
