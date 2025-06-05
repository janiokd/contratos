'use client';

import { useState, ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';
import DropdownCard from '../components/DropdownCard';

interface Contrato {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  btnHref: string;
}

const contratos: Contrato[] = [
  { title: "Arrendamento Rural", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Babá", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Caessão de posse de imóvel", description: "Lorem ipsum dolor quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Compra e venda", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Compra e venda de imóvel", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Compra e venda de imóvel rural", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Compra e venda de terreno", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Compra e venda de veículo", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Confissão e renegociação de dívida", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Cuidador de Idoso", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Doação de dinheiro", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Empregada doméstica", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Empreitada", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Empréstimo de dinheiro", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Hospedagem", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Locação Comercial", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Locação residencial", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Locação de veículo", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Locação para temporada", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Notificação extrajudicial", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Pacto antenupcial", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Parceria empresarial", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Parceria salão", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Parceria permuta de imóveis", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Prestação de serviços", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
  { title: "Procuração por instrumento", description: "Lorem ipsum dolor sit  quidem?", price: "R$9,90", imageSrc: "/contrato.png", btnHref: "#" },
];

export default function Formulario() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredContratos = contratos.filter((contrato) =>
    contrato.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold font-roboto mb-4">
          Formulários <span className="text-[#104B64]">eletrônicos</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-700 font-roboto mt-6 mb-8 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe voluptates, tempore placeat ea
          voluptatem quo quasi nostrum illo consectetur ducimus quas inventore ipsum quam unde sequi, commodi eaque sint.
        </p>

        <div className="flex flex-col sm:flex-row w-full max-w-7xl h-auto sm:h-[48px] mx-auto mb-8 gap-4 sm:gap-5 items-stretch">
          <div className="relative flex-grow h-[48px]">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Digite aqui"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full h-full pl-10 pr-4 border-2 border-[#DFDFDF] rounded-[8px] placeholder-gray-400 focus:outline-none focus:border-[#104B64] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.08),_0px_0px_4px_0px_rgba(0,0,0,0.04)]"
            />
          </div>

          <button
            type="button"
            className="w-full sm:w-[150px] h-[48px] rounded-xl bg-[#0990BA] text-white flex items-center justify-center hover:bg-[#087ca2] transition"
            onClick={() => {
              
            }}
          >
            Buscar
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredContratos.length > 0 ? (
            filteredContratos.map((contrato, idx) => (
              <DropdownCard
                key={idx}
                title={contrato.title}
                description={contrato.description}
                price={contrato.price}
                imageSrc={contrato.imageSrc}
                btnHref={contrato.btnHref}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">Nenhum contrato encontrado.</p>
          )}
        </div>
      </div>
    </section>
  );
}
