import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary, hasLocale } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/terms">): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(hasLocale(lang) ? lang : "en");
  return {
    title: `${dict.terms.title} — NextWeb`,
    description: dict.terms.intro,
  };
}

export default async function TermsPage({
  params,
}: PageProps<"/[lang]/terms">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Navbar dict={dict} locale={lang} />
      <main className="flex-1 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {dict.terms.title}
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {dict.terms.updated}
          </p>
          <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
            {dict.terms.intro}
          </p>

          <div className="mt-10 space-y-10">
            {dict.terms.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {section.heading}
                </h2>
                <p className="mt-3 leading-8 text-slate-600 dark:text-slate-300">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer dict={dict} locale={lang} />
    </>
  );
}
