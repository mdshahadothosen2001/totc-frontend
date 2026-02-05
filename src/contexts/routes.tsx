// Centralized route definitions and helpers for route guarding

// Public routes that don't require authentication
export const PUBLIC_ROUTES = [
  '/',
  '/home',
  '/login',
  '/register',
  '/blog',
  '/blog/details',
  '/search',
  '/course',
  '/course/details',
  '/course/literature',
  '/membership',
] as const;

// Auth routes that should redirect to main area when already authenticated
export const AUTH_ROUTES = ['/login', '/register'] as const;

// Routes that are always public (no redirect even when logged in)
export const ALWAYS_PUBLIC_ROUTES = ['/blog', '/search', '/public'] as const;

export const isPublicRoute = (pathname: string): boolean => {
  return PUBLIC_ROUTES.some((route) => {
    if (pathname === route) return true;
    if (pathname.startsWith(route + '/')) return true;
    return false;
  });
};

export const isAuthRoute = (pathname: string): boolean => {
  return AUTH_ROUTES.some((route) => pathname === route || pathname.startsWith(route + '/'));
};

export const isAlwaysPublicRoute = (pathname: string): boolean => {
  return ALWAYS_PUBLIC_ROUTES.some((route) => {
    if (pathname === route) return true;
    if (pathname.startsWith(route + '/')) return true;
    return false;
  });
};

export const REDIRECT_PATHS = {
  afterLogin: '/',
  afterLogout: '/login',
  unauthorized: '/login',
} as const;

export const PROTECTED_ROUTES = ['/meeting', '/checkout'] as const;
