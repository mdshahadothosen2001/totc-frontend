import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './useAuth';
import { isPublicRoute, isAuthRoute, REDIRECT_PATHS } from './routes';

// Lightweight loading component (avoids external UI deps)
const LoadingScreen: React.FC = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div>Loading...</div>
  </div>
);

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading, user } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingScreen />;

  if (!isAuthenticated) {
    return <Navigate to={REDIRECT_PATHS.unauthorized} state={{ from: location }} replace />;
  }

  // Example role-based redirect preserved from reference
  if (user?.type === 'contact_person' && location.pathname.startsWith('/dashboard/booker')) {
    return <Navigate to="/dashboard/timesheet-list" replace />;
  }

  return <>{children}</>;
};

export const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingScreen />;

  if (isAuthenticated && isAuthRoute(location.pathname)) {
    const from =
      location.state && typeof location.state === 'object' && 'from' in location.state
        ? (location.state as { from?: { pathname?: string } })?.from?.pathname
        : undefined;
    return <Navigate to={from || REDIRECT_PATHS.afterLogin} replace />;
  }

  return <>{children}</>;
};

export const RouteGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading, user } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingScreen />;

  const isPublic = isPublicRoute(location.pathname);

  if (isPublic) {
    if (isAuthenticated && isAuthRoute(location.pathname)) {
      return <Navigate to={REDIRECT_PATHS.afterLogin} replace />;
    }
    return <>{children}</>;
  }

  if (!isAuthenticated) {
    return <Navigate to={REDIRECT_PATHS.unauthorized} state={{ from: location }} replace />;
  }

  if (user?.type === 'contact_person' && location.pathname.startsWith('/dashboard/booker')) {
    return <Navigate to="/dashboard/timesheet-list" replace />;
  }

  return <>{children}</>;
};

export default RouteGuard;
