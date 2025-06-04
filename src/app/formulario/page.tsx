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
  {
    title: "Arrendamento Rural",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quae. Lorem ipsum quidem?",
    price: "R$9,90",
    imageSrc: "/contrato.png",
    btnHref: "#",
  },
  {
    title: "Babá",
    description: "Lorem ipsum dolor sit  quidem?",
    price: "R$9,90",
    imageSrc: "/contrato.png",
    btnHref: "#",
  },
  {
    title: "Caessão de posse de imóvel",
    description: "Lorem ipsum dolor quidem?",
    price: "R$9,90",
    imageSrc: "/contrato.png",
    btnHref: "#",
  },
  {
    title: "Compra e venda",
    description: "Lorem ipsum dolor sit  quidem?",
    price: "R$9,90",
    imageSrc: "/contrato.png",
    btnHref: "#",
  },
  {
    title: "Comodato",
    description: "Lorem ipsum dolor sit  quidem?",
    price: "R$9,90",
    imageSrc: "/contrato.png",
    btnHref: "#",
  },
  {
    title: "Contrato de trabalho",
    description: "Lorem ipsum dolor sit  quidem?",
    price: "R$9,90",
    imageSrc: "/contrato.png",
    btnHref: "#",
  },
  {
    title: "Contrato de empreitada",
    description: "Lorem ipsum dolor sit  quidem?",
    price: "R$9,90",
    imageSrc: "/contrato.png",
    btnHref: "#",
  },
  {
    title: "Contrato de locação",
    description: "Lorem ipsum dolor sit  quidem?",
    price: "R$9,90",
    imageSrc: "/contrato.png",
    btnHref: "#",
  },
  {
    title: "Contrato de parceria",
    description: "Lorem ipsum dolor sit  quidem?",
    price: "R$9,90",
    imageSrc: "/contrato.png",
    btnHref: "#",
  },
  {
    title: "Contrato de prestação de serviços",
    description: "Lorem ipsum dolor sit  quidem?",
    price: "R$9,90",
    imageSrc: "/contrato.png",
    btnHref: "#",
  },
  {
    title: "Contrato de seguro",
    description: "Lorem ipsum dolor sit  quidem?",
    price: "R$9,90",
    imageSrc: "/contrato.png",
    btnHref: "#",
  },
  {
    title: "Contrato social",
    description: "Lorem ipsum dolor sit  quidem?",
    price: "R$9,90",
    imageSrc: "/contrato.png",
    btnHref: "#",
  },
  {
    title: "Curatela",
    description: "Lorem ipsum dolor sit  quidem?",
    price: "R$9,90",
    imageSrc: "/contrato.png",
    btnHref: "#",
  },
  {
    title: "Declaração",
    description: "Lorem ipsum dolor sit  quidem?",
    price: "R$9,90",
    imageSrc: "/contrato.png",
    btnHref: "#",
  },
  {
    title: "Inventário",
    description: "Lorem ipsum dolor sit  quidem?",
    price: "R$9,90",
    imageSrc: "/contrato.png",
    btnHref: "#",
  },
  {
    title: "Procuração",
    description: "Lorem ipsum dolor sit  quidem?",
    price: "R$9,90",
    imageSrc: "/contrato.png",
    btnHref: "#",
  },
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
    <section className="bg-white py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-5xl font-bold font-roboto mb-4">
          Formulários <span className="text-[#104B64]">eletrônicos</span>
        </h2>
        <p className="text-[20px] font-roboto text-gray-700 mr-8 mt-6 mb-8 max-w-[466px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe voluptates, tempore placeat ea
          voluptatem quo quasi nostrum illo consectetur ducimus quas inventore ipsum quam unde sequi, commodi eaque sint.
        </p>

        <div className="flex max-w-[1200px] h-[48px] mx-auto mb-8 items-center">
          <div className="relative flex-grow h-full">
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
            className="w-[150px] h-full ml-5 rounded-xl bg-[#0990BA] text-white flex items-center justify-center hover:bg-[#087ca2] transition"
            onClick={() => {
              // Pode adicionar alguma ação se quiser
            }}
          >
            Buscar
          </button>
        </div>

        <div className="max-w-[1200px] mx-auto space-y-4">
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
