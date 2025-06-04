import BtnCadastrar from './BtnCadastrar';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#104B64] w-full h-[80px] flex items-center font-poppins">
      <nav className="w-full px-[18px] flex items-center justify-between">
        <img src="/logo.png" alt="Logo" className="w-[247px] h-[246px]" />

        <ul className="flex space-x-[64px] w-[955px] text-white text-xl leading-6">
          <li>
            <Link href="/" className="hover:text-[#0990BA] transition">Home</Link>
          </li>
          <li>
            <Link href="/sobre" className="hover:text-[#0990BA] transition">Sobre Nós</Link>
          </li>
          <li>
            <Link href="/formulario" className="hover:text-[#0990BA] transition">Formulários eletrônicos</Link>
          </li>
          <li>
            <Link href="/faq" className="hover:text-[#0990BA] transition">Perguntas frequentes</Link>
          </li>
          <li>
            <Link href="/contato" className="hover:text-[#0990BA] transition">Contato</Link>
          </li>
        </ul>

        <div className="flex gap-[19px]">       
          <a
            href="/login"
            className="w-[179px] h-[48px] rounded-xl border border-white text-white bg-transparent
                       flex items-center justify-center px-16 py-3 hover:bg-white hover:text-[#104B64] transition"
          >
            Entrar
          </a>

          <BtnCadastrar href="/cadastro">Cadastrar</BtnCadastrar>
        </div>
      </nav>
    </header>
  );
}
