"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/Logo";
import { verifyPassword } from "./actions";

const inputClass =
  "w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    startTransition(async () => {
      const ok = await verifyPassword(password);
      if (ok) {
        router.refresh();
      } else {
        setError(true);
      }
    });
  }

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <Logo className="h-10 w-auto" />
          <h1 className="mt-4 text-xl font-bold text-slate-900">
            Admin access
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Enter the password to manage your content.
          </p>
        </div>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="admin-password"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className={inputClass}
            />
          </div>
          {error && (
            <p className="text-sm font-medium text-red-600">
              Wrong password. Try again.
            </p>
          )}
          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 disabled:opacity-60"
          >
            {pending ? "Checking..." : "Unlock dashboard"}
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-slate-400">
          <Link href="/" className="transition hover:text-blue-600">
            Back to site
          </Link>
        </p>
      </div>
    </main>
  );
}
