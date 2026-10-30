import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /admin routes
  if (pathname.startsWith('/admin')) {
    const sessionCookie = request.cookies.get('gt_admin_session')?.value;
    const isLoginPage = pathname === '/admin/login';

    // If authenticated user visits login, redirect to dashboard
    if (isLoginPage && sessionCookie) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }

    // If unauthenticated user visits any protected admin route, redirect to login
    if (!isLoginPage && !sessionCookie) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};

