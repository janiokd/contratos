'use client';

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import BtnCadastrar from './BtnCadastrar';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#104B64] w-full h-[80px] flex items-center font-poppins relative z-50">
      <nav className="w-full px-4 md:px-8 lg:px-16 flex items-center justify-between">
        <img src="/logo.png" alt="Logo" className="w-32 md:w-40 lg:w-60 h-auto" />

        
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-3xl">
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

      
        <ul className="hidden lg:flex gap-20 text-white text-base lg:text-lg font-poppins">
          <li><Link href="/" className="hover:text-[#0990BA] transition">Home</Link></li>
          <li><Link href="/sobre" className="hover:text-[#0990BA] transition">Sobre Nós</Link></li>
          <li><Link href="/formulario" className="hover:text-[#0990BA] transition">Formulários eletrônicos</Link></li>
          <li><Link href="/faq" className="hover:text-[#0990BA] transition">Perguntas frequentes</Link></li>
          <li><Link href="/contato" className="hover:text-[#0990BA] transition">Contato</Link></li>
        </ul>

       
        <div className="hidden lg:flex gap-4">
          <a
            href="/login"
            className="min-w-[179px] h-[48px] rounded-xl border border-white text-white bg-transparent
                       flex items-center justify-center px-4 md:px-6 py-2 hover:bg-white hover:text-[#104B64] transition text-sm md:text-base"
          >
            Entrar
          </a>
          <BtnCadastrar href="/cadastro">Cadastrar</BtnCadastrar>
        </div>
      </nav>

      
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[80px] left-0 w-full bg-[#104B64] flex flex-col items-center gap-6 py-6 text-white text-base z-40 font-poppins">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/sobre" onClick={() => setIsMenuOpen(false)}>Sobre Nós</Link>
          <Link href="/formulario" onClick={() => setIsMenuOpen(false)}>Formulários eletrônicos</Link>
          <Link href="/faq" onClick={() => setIsMenuOpen(false)}>Perguntas frequentes</Link>
          <Link href="/contato" onClick={() => setIsMenuOpen(false)}>Contato</Link>
          <a href="/login" className="min-w-[179px] h-[48px] rounded-xl border border-white text-white bg-transparent
                       flex items-center justify-center px-4 md:px-6 py-2 hover:bg-white hover:text-[#104B64] transition text-sm md:text-base" onClick={() => setIsMenuOpen(false)}>Entrar</a>
          <BtnCadastrar href="/cadastro">Cadastrar</BtnCadastrar>
        </div>
      )}
    </header>
  );
}
