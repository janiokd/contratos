import './global.css';
import type { ReactNode } from 'react';
import ClientLayout from './components/ClientLayout';

export const metadata = {
  title: 'Meu Projeto',
  description: 'Meu site com Next.js e Tailwind CSS',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
