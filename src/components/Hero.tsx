import type { Dictionary } from "@/lib/dictionaries";

type HeroProps = {
  dict: Dictionary;
  stats: { value: string; label: string }[];
};

export default function Hero({ dict, stats }: HeroProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-slate-950 dark:border-b dark:border-slate-800 dark:bg-slate-900"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px]"
      />
      <div
        aria-hidden
        className="nw-glow absolute inset-x-0 top-[-10rem] mx-auto h-[500px] w-[900px] rounded-full bg-blue-600/25 blur-[140px]"
      />
      <div
        aria-hidden
        className="nw-glow absolute -bottom-40 -end-24 h-[400px] w-[600px] rounded-full bg-indigo-500/15 blur-[120px]"
        style={{ animationDelay: "2.5s" }}
      />
      <span aria-hidden className="nw-float absolute start-[12%] top-[22%] h-1.5 w-1.5 rounded-full bg-blue-400/60" />
      <span
        aria-hidden
        className="nw-float absolute start-[45%] top-[14%] h-1 w-1 rounded-full bg-sky-300/50"
        style={{ animationDelay: "1.5s" }}
      />
      <span
        aria-hidden
        className="nw-float absolute start-[75%] top-[30%] h-1.5 w-1.5 rounded-full bg-indigo-400/50"
        style={{ animationDelay: "3s" }}
      />
      <span
        aria-hidden
        className="nw-float absolute start-[20%] top-[65%] h-1 w-1 rounded-full bg-blue-400/40"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:gap-14 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold text-blue-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-400" />
            </span>
            {dict.hero.badge}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            {dict.hero.titleStart}{" "}
            <span className="nw-shimmer bg-gradient-to-r from-blue-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              {dict.hero.titleHighlight}
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
            {dict.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
            >
              {dict.hero.primaryCta}
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              {dict.hero.secondaryCta}
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6 sm:mt-12 sm:gap-6 sm:pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold text-white">{stat.value}</dd>
                <dd className="mt-1 text-xs text-slate-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none" aria-hidden>
          <div className="absolute -inset-6 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl dark:bg-slate-950">
            <svg viewBox="0 0 640 400" className="block h-auto w-full">
              <defs>
                <linearGradient id="nw-backdrop" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#b06b46" />
                  <stop offset="1" stopColor="#8f5436" />
                </linearGradient>
                <linearGradient id="nw-wall-left" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#5a6a85" />
                  <stop offset="1" stopColor="#3f4b60" />
                </linearGradient>
                <linearGradient id="nw-wall-right" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#f2eee4" />
                  <stop offset="1" stopColor="#ddd6c6" />
                </linearGradient>
                <linearGradient id="nw-floor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#dcbf92" />
                  <stop offset="1" stopColor="#c39f6c" />
                </linearGradient>
                <linearGradient id="nw-glass" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#f2f7fb" />
                  <stop offset="1" stopColor="#c9d9e8" />
                </linearGradient>
                <linearGradient id="nw-beam" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#ffffff" stopOpacity="0.45" />
                  <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>

              <rect x="0" y="0" width="640" height="96" fill="url(#nw-backdrop)" />
              <rect x="0" y="96" width="640" height="7" fill="#c06a45" />

              <rect x="0" y="103" width="250" height="230" fill="url(#nw-wall-left)" />
              <rect x="250" y="103" width="390" height="230" fill="url(#nw-wall-right)" />
              <rect x="248" y="103" width="5" height="230" fill="#ffffff" opacity="0.08" />
              <rect x="0" y="103" width="5" height="230" fill="#ffffff" opacity="0.1" />

              <rect x="62" y="132" width="170" height="150" rx="4" fill="#b9613c" />
              <rect x="72" y="142" width="150" height="130" fill="url(#nw-glass)" />
              <rect x="143" y="142" width="8" height="130" fill="#b9613c" />
              <rect x="72" y="203" width="150" height="8" fill="#b9613c" />
              <rect x="72" y="142" width="150" height="130" fill="url(#nw-beam)" opacity="0.4" />

              <rect x="392" y="146" width="86" height="92" rx="3" fill="#b9613c" />
              <rect x="400" y="154" width="70" height="76" fill="#efe9dd" />
              <circle cx="424" cy="182" r="13" fill="#c95f38" />
              <rect x="440" y="170" width="17" height="36" rx="2" fill="#5f8d86" />
              <rect x="410" y="204" width="48" height="7" rx="1" fill="#2f3a4d" />

              <polygon points="0,333 640,333 640,400 0,400" fill="url(#nw-floor)" />
              <rect x="0" y="326" width="640" height="8" fill="#b9613c" />
              <rect x="46" y="334" width="190" height="66" fill="#ffffff" opacity="0.07" />
              <g stroke="#b08a58" strokeWidth="1" opacity="0.55">
                <path d="M0 350 H640" />
                <path d="M0 367 H640" />
                <path d="M0 385 H640" />
                <path d="M90 333 V350 M210 350 V367 M330 333 V350 M470 350 V367 M580 333 V350" />
              </g>

              <ellipse cx="388" cy="337" rx="108" ry="9" fill="#000000" opacity="0.18" />

              <rect x="300" y="240" width="170" height="62" rx="14" fill="#4e5b73" />
              <rect x="286" y="266" width="30" height="60" rx="12" fill="#3f4b60" />
              <rect x="454" y="266" width="30" height="60" rx="12" fill="#3f4b60" />
              <rect x="296" y="286" width="178" height="40" rx="12" fill="#46536a" />
              <rect x="322" y="268" width="52" height="50" rx="12" fill="#c9603f" transform="rotate(-3 348 293)" />
              <rect x="380" y="266" width="52" height="50" rx="12" fill="#e9e6dd" transform="rotate(2 406 291)" />
              <rect x="306" y="324" width="9" height="14" rx="2" fill="#2f3a4d" />
              <rect x="452" y="324" width="9" height="14" rx="2" fill="#2f3a4d" />

              <ellipse cx="386" cy="390" rx="112" ry="8" fill="#000000" opacity="0.12" />
              <rect x="286" y="344" width="200" height="40" rx="14" fill="#e9e0cd" stroke="#c06a45" strokeWidth="5" />
              <rect x="300" y="354" width="172" height="12" rx="6" fill="#f6efe3" opacity="0.9" />

              <ellipse cx="557" cy="348" rx="36" ry="6" fill="#000000" opacity="0.15" />
              <path d="M556 306 C553 288 549 282 540 274" stroke="#3f7038" strokeWidth="3" fill="none" />
              <path d="M557 306 C558 288 563 280 572 272" stroke="#3f7038" strokeWidth="3" fill="none" />
              <path d="M557 306 C557 292 557 286 557 278" stroke="#3f7038" strokeWidth="3" fill="none" />
              <ellipse cx="538" cy="270" rx="12" ry="19" fill="#61a35a" transform="rotate(-25 538 270)" />
              <ellipse cx="574" cy="268" rx="12" ry="19" fill="#61a35a" transform="rotate(25 574 268)" />
              <ellipse cx="557" cy="264" rx="13" ry="21" fill="#4f8c49" />
              <rect x="530" y="304" width="54" height="11" rx="3" fill="#a9532f" />
              <polygon points="536,315 578,315 573,346 541,346" fill="#b9613c" />
              <polygon points="541,315 573,315 569,346 545,346" fill="#c46f4a" opacity="0.5" />
            </svg>

            <div
              aria-hidden
              className="nw-shine pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
            />

            <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-lg bg-slate-950/80 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
                  </span>
                  {dict.hero.livePreview}
                </span>
                <span className="rounded-lg bg-white/90 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-800 backdrop-blur">
                  {dict.hero.daylightLabel}
                </span>
              </div>
              <div className="flex items-end justify-between gap-2">
                <span className="flex items-center gap-1.5 rounded-lg bg-slate-950/80 px-2.5 py-1.5 text-[10px] font-semibold text-white backdrop-blur">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5 12 3 3 7.5m18 0-9 4.5m9-4.5v9L12 21m0-9v9m0-9L3 7.5m0 0v9L12 21M3 7.5l9 4.5" />
                  </svg>
                  {dict.hero.furnitureLabel}
                </span>
                <span className="flex items-center gap-1.5 rounded-lg bg-slate-950/80 px-2.5 py-1.5 text-[10px] font-semibold text-white backdrop-blur">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.04 12.32a1 1 0 0 1 0-.64C3.4 8.5 7.36 5.5 12 5.5s8.6 3 9.96 6.18a1 1 0 0 1 0 .64C20.6 15.5 16.64 18.5 12 18.5s-8.6-3-9.96-6.18Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  {dict.hero.compareLabel}
                </span>
              </div>
            </div>
          </div>

          <div className="nw-float absolute -top-5 -end-3 rounded-xl border border-white/10 bg-slate-800/95 px-4 py-3 shadow-xl backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/15 text-green-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5 15 9m0 0H8.5M15 9v6.5" />
                </svg>
              </span>
              <div>
                <div className="text-sm font-bold text-white" dir="ltr">
                  {dict.hero.floatValue}
                </div>
                <div className="text-[11px] text-slate-400">
                  {dict.hero.floatLabel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
