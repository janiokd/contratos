'use client';

import Link from "next/link";
import BtnCadastrar from "./components/BtnCadastrar";
import { FaSearch } from 'react-icons/fa';

type CardData = {
  img: string;
  title: string;
  description: string;
};

const cards: CardData[] = [
  {
    img: "Group1.png",
    title: "Escolha o formulário",
    description: "Mais de 200 opções de formulários disponíveis para você escolher.",
  },
  {
    img: "Group2.png",
    title: "Adicione os envolvidos",
    description: "Escolha os envolvidos e os convide para fazer parte do formulário.",
  },
  {
    img: "Group3.png",
    title: "Edite os termos",
    description: "Faça a edição cláusula a cláusula em conjunto com os envolvidos.",
  },
  {
    img: "Group4.png",
    title: "Assine e pronto!",
    description: "Assine e salve seu formulário eletrônico finalizado.",
  },
];

export default function Home() {
  return (
    <>

      <section className="w-full bg-white py-20">
        <div className="max-w-[1458px] mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-roboto mb-4">
              Contrato <span className="text-[#104B64]">aqui</span>
            </h2>
            <p className="text-lg font-roboto text-gray-700 mt-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel soluta ex nisi
              consequatur repellendus earum provident non obcaecati.
            </p>
            <BtnCadastrar
              href="cadastro"
              className="w-[220px] sm:w-[180px] text-base sm:text-sm px-6 sm:px-4"

            >
              Cadastrar
            </BtnCadastrar>



          </div>
          <div className="md:w-1/2">
            <img src="/home.png" alt="mulher" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>


      <section className="w-full bg-[#f6f2fa] py-20">
        <div className="max-w-[1220px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="bg-[#104B64] text-white flex flex-col items-center p-6 rounded-lg"
            >
              <img
                src={`/${card.img}`}
                alt={card.title}
                className="w-full h-auto max-h-[150px] object-contain mb-4"
              />
              <h2 className="text-lg font-bold text-center mb-2">{card.title}</h2>
              <p className="text-sm text-center">{card.description}</p>
            </article>
          ))}
        </div>
      </section>


      <section className="w-full bg-white py-20">
        <div className="max-w-[1220px] mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-2">Formulários disponíveis</h2>
          <p className="text-lg font-poppins text-gray-700 mb-8">
            Escolha o seu formulário e comece a editar agora
          </p>

          <div className="w-full max-w-[781px] mx-auto mb-10">

            <div className="relative w-full h-[48px] mb-6">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Procure o seu formulário aqui"
                className="w-full h-full pl-10 pr-4 border border-[#DFDFDF] rounded-lg 
                 placeholder-gray-400 focus:outline-none focus:border-[#104B64] 
                 shadow-sm text-sm sm:text-base"
              />
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <ul className="space-y-2">
                {[
                  "Arrendamento rural", "Babá", "Cessão de posse de imóvel", "Compra e venda",
                  "Compra e venda de imóvel", "Compra e venda de imóvel rural", "Compra e venda de terreno",
                  "Compra e venda de veículo", "Confissão e renegociação de dívida", "Cuidador de idoso",
                  "Doação de dinheiro", "Doação de imóvel", "Empregada doméstica", "Empreitada", "Empréstimo"
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-[#0990BA] transition">{item}</a>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2">
                {[
                  "Hospedagem", "Locação comercial", "Locação residencial", "Locação de veículo",
                  "Locação para temporada", "Notificação extrajudicial", "Pacto antenupcial",
                  "Parceria empresarial", "Parceria Salão", "Parceiro permuta de imóveis",
                  "Prestação de serviços", "Procuração por instrumento", "Representação comercial",
                  "Representação jogador", "Testamento união estável"
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-[#0990BA] transition">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>


          <div className="mt-10">
            <Link
              href="#"
              className="inline-block bg-[#0990BA] hover:bg-[#087ca2] text-white rounded-xl px-8 py-3 transition"
            >
              Veja mais formulários aqui
            </Link>
          </div>
        </div>
      </section>


      <section className="w-full bg-[#104B64]/10 py-20">
        <div className="max-w-[1320px] mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">

            <img
              src="/Rectangle.png"
              alt="mesa de trabalho"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold font-roboto mb-4">Lorem ipsum dolor</h2>
            <p className="text-lg text-[#333] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non mi sed. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, magni at aliquam hic maxime iure aperiam dolorem similique distinctio amet dolore deleniti assumenda. Asperiores expedita laborum perspiciatis, explicabo corrupti sint?
            </p>
            <BtnCadastrar href="cadastro" className="w-[220px] sm:w-[180px] text-base sm:text-sm px-6 sm:px-4">
              Cadastrar
            </BtnCadastrar>
          </div>
        </div>
      </section>

    </>
  );
}