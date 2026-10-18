"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

type FaqProps = {
  dict: Dictionary;
};

export default function Faq({ dict }: FaqProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-white py-14 sm:py-20 lg:py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            {dict.faq.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {dict.faq.title}
          </h2>
        </div>

        <div className="mt-10 space-y-3 sm:mt-14">
          {dict.faq.items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.question}
                className="rounded-xl border border-slate-200 bg-white transition dark:border-slate-800 dark:bg-slate-900"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
                >
                  <span className="text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
                    {item.question}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
