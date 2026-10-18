"use client";

export default function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", !isDark);
    try {
      localStorage.setItem("theme", !isDark ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggle}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-500/40 dark:hover:text-blue-400"
    >
      <svg className="hidden h-5 w-5 dark:block" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
        <circle cx="12" cy="12" r="4" />
        <path strokeLinecap="round" d="M12 2.5v2m0 15v2M2.5 12h2m17 0h2M5.3 5.3l1.4 1.4m10.6 10.6 1.4 1.4m0-13.4-1.4 1.4M6.7 17.3l-1.4 1.4" />
      </svg>
      <svg className="h-5 w-5 dark:hidden" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.26-2.6.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
      </svg>
    </button>
  );
}
