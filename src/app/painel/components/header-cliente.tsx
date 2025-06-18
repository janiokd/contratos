'use client';

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { BellIcon, ChevronDown, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Voltar à Página principal' },
  { href: '/painel', label: 'Meus formulários' },
  { href: '/painel/meu-cadastro', label: 'Meu cadastro' },
  { href: '/painel/adquirir', label: 'Adquirir novos formulários' },
  { href: '/painel/partes', label: 'Partes envolvidas' },
];

export default function HeaderCliente() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);
  const pathname = usePathname();

  const nomeUsuario = 'João Silva'; // Substituir depois por valor real

  return (
    <header className="bg-[#104B64] w-full font-poppins relative z-50">

      {/* Primeiro nav - topo com logo, título, menu hamburguer e dropdown */}
      <nav className="h-[80px] w-full px-6 md:px-8 lg:px-16 flex items-center justify-between relative z-50">

        <Link href="/">
          <img src="/logo.png" alt="Logo" className="w-32 md:w-40 lg:w-60 h-auto cursor-pointer" />
        </Link>

        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-white text-4xl font-semibold hidden md:block">
          Painel do Cliente
        </h1>

        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-3xl">
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <div className="hidden lg:flex gap-4 items-center">

          <button className="text-white hover:text-[#0990BA]">
            <BellIcon size={24} />
          </button>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-[#27275A] text-white font-semibold px-4 py-1 rounded-l hover:bg-[#1e1e4d] flex items-center gap-2"
            >
              {nomeUsuario}
              <ChevronDown size={18} />
            </button>

            {/* Dropdown com z-index alto para ficar acima do segundo nav */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-l z-60 text-sm">

                <ul className="text-[#104B64]">
                  <li>
                    <Link href="/painel/area" className="block px-4 py-2 hover:bg-gray-100">
                      Minha área
                    </Link>

                    <button
                      onClick={() => setSubDropdownOpen(!subDropdownOpen)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
                    >
                      Meus Formulários
                      <ChevronDown
                        size={16}
                        className={`${subDropdownOpen ? 'rotate-180' : ''} transition-transform`}
                      />
                    </button>

                    {subDropdownOpen && (
                      <ul className="bg-[#124B64] text-white text-sm">
                        <li>
                          <Link
                            href="/painel/formularios/adquiridos"
                            className="block px-4 py-2 hover:bg-[#0f3d52]"
                          >
                            Adquiridos
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/painel/formularios/disponiveis"
                            className="block px-4 py-2 hover:bg-[#0f3d52]"
                          >
                            Disponíveis
                          </Link>
                        </li>
                      </ul>
                    )}

                    <Link href="/painel/partes" className="block px-4 py-2 hover:bg-gray-100">
                      Partes envolvidas
                    </Link>
                    <Link href="/painel/meu-cadastro" className="block px-4 py-2 hover:bg-gray-100">
                      Meu Cadastro
                    </Link>
                  </li>
                  <li>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                      Sair
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <button
            title="Sair"
            className="text-white hover:text-red-500 transition"
            onClick={() => {
              console.log('Logout');
            }}
          >
            <LogOut size={24} />
          </button>

        </div>
      </nav>

      {/* Menu hamburguer mobile aberto */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[80px] left-0 w-full bg-[#104B64] flex flex-col items-center gap-6 py-6 text-white z-[9999] font-poppins text-base px-4 pointer-events-auto">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`transition hover:text-[#0990BA] ${isActive ? 'text-[#0990BA] font-semibold' : ''} cursor-pointer z-50`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}

      <div className="h-[2px] bg-white w-full" />

      {/* Segundo nav com links principais */}
      <nav className="relative z-40 bg-[#104B64] w-full flex justify-between items-center py-4 px-4 md:px-16 text-white font-poppins text-sm md:text-base">

        <div>
          <Link
            href="/"
            className={`transition hover:text-[#0990BA] ${pathname === '/' ? 'text-[#0990BA] font-semibold' : ''}`}
          >
            Voltar à Página principal
          </Link>
        </div>

        <div className="flex text-xl gap-4 items-center">
          {navLinks.slice(1, 4).map(({ href, label }, index) => {
            const isActive = pathname === href;
            return (
              <div key={href} className="flex items-center">

                <Link
                  href={href}
                  className={`transition hover:text-[#0990BA] ${isActive ? 'text-[#0990BA] font-semibold' : ''}`}
                >
                  {label}
                </Link>

                {index < 2 && <span className="mx-2 select-none">|</span>}
              </div>
            );
          })}
        </div>

        <div>
          <Link
            href="/painel/partes"
            className={`transition hover:text-[#0990BA] ${pathname === '/painel/partes' ? 'text-[#0990BA] font-semibold' : ''}`}
          >
            Partes envolvidas
          </Link>
        </div>
      </nav>

    </header>
  );
}
