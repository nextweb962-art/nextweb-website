import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getDictionary, hasLocale, type Locale } from "@/lib/dictionaries";
import { readContent } from "@/lib/content";

function formatPlus(value: string, locale: Locale) {
  return locale === "ar" ? `+${value}` : `${value}+`;
}

export default async function Home({
  params,
}: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const content = await readContent();

  const heroStats = [
    {
      value: formatPlus(content?.stats?.projects || "40", lang),
      label: dict.hero.stats[0].label,
    },
    {
      value: formatPlus(content?.stats?.clients || "25", lang),
      label: dict.hero.stats[1].label,
    },
    {
      value: `${content?.stats?.onTime || "98"}%`,
      label: dict.hero.stats[2].label,
    },
  ];

  const projects =
    content && content.projects.length > 0 ? content.projects : dict.work.items;

  return (
    <>
      <Navbar dict={dict} locale={lang} />
      <main className="flex-1">
        <Hero dict={dict} stats={heroStats} />
        <Services dict={dict} />
        <Process dict={dict} />
        <Work dict={dict} projects={projects} />
        <Testimonials dict={dict} />
        <Faq dict={dict} />
        <CtaBand dict={dict} locale={lang} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} locale={lang} />
    </>
  );
}
