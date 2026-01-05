import { NextRequest, NextResponse } from 'next/server';

/**
 * Geo-detection middleware for Arizona expansion
 * Auto-routes Arizona visitors to Arizona content
 * Respects user preferences via cookies
 */

const ARIZONA_REDIRECT_COOKIE = 'preferred_state';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for static files, API routes, and special paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') // Files with extensions
  ) {
    return NextResponse.next();
  }

  // Check for existing state preference cookie
  const preferredState = request.cookies.get(ARIZONA_REDIRECT_COOKIE)?.value;

  // If user already has a preference, honor it (no redirect needed)
  if (preferredState) {
    return NextResponse.next();
  }

  // Only apply geo-detection to root homepage
  // Don't redirect if user is already on /arizona/* or /locations/*
  if (pathname !== '/') {
    return NextResponse.next();
  }

  // Get geolocation data from Vercel
  // https://vercel.com/docs/concepts/edge-network/headers#x-vercel-ip-country-region
  const region = request.geo?.region || request.headers.get('x-vercel-ip-country-region');
  const country = request.geo?.country || request.headers.get('x-vercel-ip-country');

  // Check if visitor is from Arizona
  const isArizona = country === 'US' && region === 'AZ';

  if (isArizona) {
    // Redirect Arizona visitors to Arizona homepage
    const url = request.nextUrl.clone();
    url.pathname = '/arizona';
    
    const response = NextResponse.redirect(url);
    
    // Set cookie to remember preference (prevent future auto-redirects)
    response.cookies.set(ARIZONA_REDIRECT_COOKIE, 'AZ', {
      maxAge: COOKIE_MAX_AGE,
      path: '/',
      sameSite: 'lax',
    });

    return response;
  }

  // Default: Texas visitors (or unknown location) stay on main site
  // Set TX preference cookie for consistency
  const response = NextResponse.next();
  response.cookies.set(ARIZONA_REDIRECT_COOKIE, 'TX', {
    maxAge: COOKIE_MAX_AGE,
    path: '/',
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     * - API routes
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)',
  ],
};
