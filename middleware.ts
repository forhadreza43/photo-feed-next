import  Negotiator  from 'negotiator';
import { match } from '@formatjs/intl-localematcher';
import { NextResponse, NextRequest } from 'next/server';
const locales = ['bn', 'en'];
const defaultLocale = 'en';

function getLocale(request: NextRequest) {
  const acceptedLanguage = request.headers.get('Accept-Language') ?? undefined;

  const headers = {'accept-language': acceptedLanguage};
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);

}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        return NextResponse.redirect(
          new URL(`/${locale}${pathname}`, request.url)
        );
    }
}
export const config = {
  matcher: ['/((?!api|assets|.*\\*|_next).*)'],
};