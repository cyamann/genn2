import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["tr", "en"] as const;
const defaultLocale = "en";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get("accept-language") || "";
  const locale = acceptLanguage.toLowerCase().includes("tr") ? "tr" : defaultLocale;

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
