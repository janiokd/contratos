'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useAuthStore } from '@/store/useAuth';
import { usePathname } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderCliente from '../painel/components/header-cliente';
import CookieBanner from './CookieBanner';

export default function ClientLayout({ children }: { children: ReactNode }) {
  
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const [hasMounted, setHasMounted] = useState(false);

  
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {isLoggedIn ? <HeaderCliente /> : <Header />}
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
