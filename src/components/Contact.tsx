"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

type ContactProps = {
  dict: Dictionary;
};

const inputClass =
  "w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500/20";

export default function Contact({ dict }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-slate-50 py-14 sm:py-20 lg:py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:shadow-black/30">
          <div className="grid lg:grid-cols-5">
            <div className="bg-slate-950 p-6 dark:border-e dark:border-slate-800 sm:p-8 lg:col-span-2 lg:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {dict.contact.title}
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                {dict.contact.subtitle}
              </p>

              <dl className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-300">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.2 5.2A2.2 2.2 0 0 1 4.4 3h2.4a2.2 2.2 0 0 1 2.2 1.8l.5 3a2.2 2.2 0 0 1-1 2.2l-1.3.7a13.6 13.6 0 0 0 6.1 6.1l.7-1.3a2.2 2.2 0 0 1 2.2-1l3 .5a2.2 2.2 0 0 1 1.8 2.2v2.4a2.2 2.2 0 0 1-2.2 2.2h-.6C9.6 21.8 2.2 14.4 2.2 5.8v-.6Z" />
                    </svg>
                  </span>
                  <div>
                    <dt className="text-xs text-slate-400">{dict.contact.phoneLabel}</dt>
                    <dd className="text-sm font-medium text-white" dir="ltr">
                      {dict.contact.phone}
                    </dd>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-300">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Zm0-8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    </svg>
                  </span>
                  <div>
                    <dt className="text-xs text-slate-400">{dict.contact.locationLabel}</dt>
                    <dd className="text-sm font-medium text-white">
                      {dict.contact.location}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="p-6 sm:p-8 lg:col-span-3 lg:p-10">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.7 5 5.2 10-11" />
                    </svg>
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                    {dict.contact.success.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-slate-600 dark:text-slate-300">
                    {dict.contact.success.body}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    {dict.contact.success.again}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                        {dict.contact.form.name}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder={dict.contact.form.namePlaceholder}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                        {dict.contact.form.email}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={dict.contact.form.emailPlaceholder}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="type" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                      {dict.contact.form.type}
                    </label>
                    <select
                      id="type"
                      name="type"
                      required
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>
                        {dict.contact.form.typePlaceholder}
                      </option>
                      {dict.contact.form.types.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                      {dict.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder={dict.contact.form.messagePlaceholder}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
                  >
                    {dict.contact.form.submit}
                  </button>
                  <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                    {dict.contact.form.note}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
