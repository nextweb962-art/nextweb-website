import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "404 — Page not found",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" dir="ltr">
      <body className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-slate-950">
        <div className="px-6 text-center">
          <p className="text-sm font-bold tracking-widest text-blue-700 dark:text-blue-400">404</p>
          <h1 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
            Page not found
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300" dir="rtl">
            الصفحة غير موجودة
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Back to home
          </Link>
        </div>
      </body>
    </html>
  );
}
