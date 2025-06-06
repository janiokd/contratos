import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Meu Projeto',
  description: 'Meu site com Next.js e Tailwind CSS',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow w-full px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
