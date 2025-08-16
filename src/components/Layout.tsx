import React, { ReactNode } from 'react';
import Header from './Header';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {children}
      </main>
    </div>
  );
}