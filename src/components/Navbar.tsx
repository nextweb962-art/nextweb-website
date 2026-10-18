"use client";

import { useState } from "react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import type { Dictionary, Locale } from "@/lib/dictionaries";

type NavbarProps = {
  dict: Dictionary;
  locale: Locale;
};

export default function Navbar({ dict, locale }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const switchLabel = locale === "ar" ? "English" : "العربية";
  const switchHref = locale === "ar" ? "/en" : "/ar";

  const links = [
    { href: `/${locale}#services`, label: dict.nav.services },
    { href: `/${locale}#work`, label: dict.nav.work },
    { href: `/${locale}#testimonials`, label: dict.nav.testimonials },
    { href: `/${locale}#faq`, label: dict.nav.faq },
    { href: `/${locale}#contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-900/85">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href={`/${locale}`} className="flex items-center gap-2">
          <Logo className="h-8 w-auto" />
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            NextWeb
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nw-link text-sm font-medium text-slate-600 transition-colors hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={switchHref}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-500/40 dark:hover:text-blue-400"
          >
            {switchLabel}
          </a>
          <a
            href={`/${locale}#contact`}
            className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-800"
          >
            {dict.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 dark:border-slate-800 dark:bg-slate-900">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-700 dark:text-slate-200 dark:hover:bg-slate-800/60 dark:hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href={switchHref}
            className="mt-1 block rounded-lg border border-slate-200 px-3 py-2.5 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60"
          >
            {switchLabel}
          </a>
          <a
            href={`/${locale}#contact`}
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-lg bg-blue-700 px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-800"
          >
            {dict.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
