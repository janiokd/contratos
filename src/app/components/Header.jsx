import BtnCadastrar from './BtnCadastrar';

export default function Header() {
  return (
    <header className="bg-[#104B64] w-full h-[80px] flex items-center font-poppins">
      <nav className="w-full px-[18px] flex items-center justify-between">

        <img src="/logo.png" alt="Logo" className="w-[247px] h-[246px]" />

        <ul className="flex space-x-[64px] w-[955px] text-white text-xl leading-6 font-bold">
          <li><a href="/" className="hover:text-[#0990BA] transition">Home</a></li>
          <li><a href="/sobre" className="hover:text-[#0990BA] transition">Sobre Nós</a></li>
          <li><a href="/formulario" className="hover:text-[#0990BA] transition">Formulários eletrônicos</a></li>
          <li><a href="/faq" className="hover:text-[#0990BA] transition">Perguntas frequentes</a></li>
          <li><a href="/contato" className="hover:text-[#0990BA] transition">Contato</a></li>
        </ul>

        <div className="flex gap-[19px]">

          <button className="w-[179px] h-[48px] rounded-xl border border-white text-white bg-transparent
                       flex items-center justify-center px-16 py-3 hover:bg-white hover:text-[#104B64] transition"
          >Entrar</button>

         <BtnCadastrar href="#">Cadastrar</BtnCadastrar>
        </div>
      </nav>
    </header>
  );
}
