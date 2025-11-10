import { NextRequest, NextResponse } from 'next/server'

const locales = ['ko', 'en']
const defaultLocale = 'ko'

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    
    // 루트 경로 처리
    if (pathname === '/') {
        console.log('🔄 Redirecting root to /ko')
        return NextResponse.redirect(new URL('/ko', request.url))
    }
    
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) {
        return
    }

    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url))
}

export const config = {
    matcher: [
        '/',
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ]
}