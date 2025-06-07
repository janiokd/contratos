'use client';

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import BtnCadastrar from './BtnCadastrar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre Nós' },
  { href: '/formulario', label: 'Formulários eletrônicos' },
  { href: '/faq', label: 'Perguntas frequentes' },
  { href: '/contato', label: 'Contato' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // 👈 pega o caminho atual

  return (
    <header className="bg-[#104B64] w-full h-[80px] flex items-center font-poppins relative z-50">
      <nav className="w-full px-6 md:px-8 lg:px-16 flex items-center justify-between">
      
        <Link href="#">
          <img src="/logo.png" alt="Logo" className="w-32 md:w-40 lg:w-60 h-auto cursor-pointer" />
        </Link>

       
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-3xl">
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

       
        <ul className="hidden lg:flex gap-16 text-white text-sm lg:text-lg items-center">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition hover:text-[#0990BA] ${
                    isActive ? 'text-[#0990BA] font-semibold' : ''
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        
        <div className="hidden lg:flex gap-4 items-center">
          <BtnCadastrar
            href="/login"
            className="min-w-[150px] border border-white text-white bg-transparent hover:bg-white hover:text-[#104B64]"
          >
            Entrar
          </BtnCadastrar>
          <BtnCadastrar
            href="/cadastro"
            className="min-w-[150px] bg-[#0990BA] text-white hover:bg-white hover:text-[#104B64]"
          >
            Cadastrar
          </BtnCadastrar>
        </div>
      </nav>

      
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[80px] left-0 w-full bg-[#104B64] flex flex-col items-center gap-6 py-6 text-white z-40 font-poppins text-base px-4">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`transition hover:text-[#0990BA] ${
                  isActive ? 'text-[#0990BA] font-semibold' : ''
                }`}
              >
                {label}
              </Link>
            );
          })}

          <Link
            href="/login"
            onClick={() => setIsMenuOpen(false)}
            className="min-w-[150px] h-[44px] rounded-xl border border-white text-white bg-transparent
                     flex items-center justify-center px-4 hover:bg-white hover:text-[#104B64] transition text-sm"
          >
            Entrar
          </Link>

          <BtnCadastrar href="/cadastro">Cadastrar</BtnCadastrar>
        </div>
      )}
    </header>
  );
}
