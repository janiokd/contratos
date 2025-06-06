import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import type { ReactNode } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});


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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
     <body className={`flex flex-col min-h-screen ${poppins.className}`}>

        <Header />
        <main className="flex-grow w-full px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
