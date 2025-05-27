import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Meu Projeto',
  description: 'Meu site com Next.js e Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow w-full">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
