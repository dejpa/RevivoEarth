import { NextRequest, NextResponse } from 'next/server';

const defaultLocale = 'en';
const locales = ['en', 'fa', 'ar'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log("📍 Middleware executed on path:", pathname);

  // فایل‌های استاتیک یا _next رو نادیده بگیر
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.match(/\.(ico|png|jpg|svg|css|js|woff2?)$/)
  ) {
    return NextResponse.next();
  }

  // اگر مسیر اصلی هست، ریدایرکت به /en
  if (pathname === '/') {
    console.log("🔄 Redirecting root path to /en");
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url);
  }

  // اگر مسیر بدون locale هست (مثل /about-us)، ریدایرکت به /en/about-us
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    console.log(`🔄 Redirecting ${pathname} to /${defaultLocale}${pathname}`);
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match the root path specifically
    '/',
    // Match all other paths except static files
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

