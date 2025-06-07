import { FaWhatsapp } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#104B64] text-white py-12">
      <div className="max-w-[1320px] mx-auto px-4 flex flex-col md:flex-row gap-[38px]">


        <div className="flex-1">
          <h2 className="text-xl  font-bold mb-4">Contrato aqui</h2>
          <p className="mb-2 max-w-[136px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ducimus odit ratione fugiat distinctio laboriosam voluptas mollitia qui architecto. </p>

        </div>


        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <ul className="mb-4 space-y-2">
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
            <li>
              <Link href="#" className="hover:text-[#0990BA] transition">Área administrativa</Link>
            </li>
          </ul>

        </div>


        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Contato</h2>
          <ul className="mb-4 space-y-2">
            <a href="#" className="flex items-center  gap-2  hover:text-[#0990BA] transition">
              <FaWhatsapp size={24} />Whatsapp</a>

            <a href="#" className="flex items-center gap-2 hover:text-[#0990BA] transition"        >
              <FaEnvelope size={24} />contato@contatoaqui.com.br</a>

          </ul>
        </div>
      </div>
      <div className="text-center text-sm mt-6 text-white/70 px-4">
        <p className="flex flex-wrap justify-center items-center gap-2">
          <span>Copyright©2022, Contrato aqui.</span>
          <span>|</span>
          <span>Todos os direitos reservados</span>
          <span>|</span>
          <span className="underline cursor-pointer hover:text-[#0990BA] transition">
            Política de privacidade
          </span>
          <span>|</span>
          <span>
            Desenvolvido por <span className="font-semibold">CloudOpss</span>
          </span>
        </p>
      </div>

    </footer>
  )
}
