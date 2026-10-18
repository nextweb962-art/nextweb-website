import Logo from "@/components/Logo";
import type { Dictionary, Locale } from "@/lib/dictionaries";

type FooterProps = {
  dict: Dictionary;
  locale: Locale;
};

export default function Footer({ dict, locale }: FooterProps) {
  const switchLabel = locale === "ar" ? "English" : "العربية";
  const switchHref = locale === "ar" ? "/en" : "/ar";

  const navLinks = [
    { href: `/${locale}#services`, label: dict.nav.services },
    { href: `/${locale}#work`, label: dict.nav.work },
    { href: `/${locale}#testimonials`, label: dict.nav.testimonials },
    { href: `/${locale}#faq`, label: dict.nav.faq },
    { href: `/${locale}#contact`, label: dict.nav.contact },
  ];

  const serviceLinks = dict.services.items.map((item) => item.title);

  return (
    <footer className="bg-slate-950 dark:border-t dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href={`/${locale}`} className="flex items-center gap-2">
              <Logo className="h-9 w-auto" />
              <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-yellow-500 bg-clip-text text-lg font-bold tracking-tight text-transparent">
                NextWeb
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              {dict.footer.tagline}
            </p>
            <a
              href={switchHref}
              className="mt-5 inline-block rounded-lg border border-white/15 px-3.5 py-1.5 text-sm font-semibold text-slate-300 transition hover:border-blue-400/40 hover:text-blue-300"
            >
              {switchLabel}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              {dict.footer.menu}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nw-link text-sm text-slate-400 transition hover:text-blue-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`/${locale}/terms`}
                  className="nw-link text-sm text-slate-400 transition hover:text-blue-300"
                >
                  {dict.terms.title}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              {dict.footer.services}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service} className="text-sm text-slate-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} NextWeb. {dict.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`/${locale}/terms`}
              className="nw-link text-xs text-slate-500 transition hover:text-blue-300"
            >
              {dict.terms.title}
            </a>
            <span className="text-xs text-slate-500" dir="ltr">
              {dict.contact.phone}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
