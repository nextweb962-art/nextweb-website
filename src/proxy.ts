import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ar"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin962" || pathname.startsWith("/admin962/")) return;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;

  request.nextUrl.pathname = `/ar${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
