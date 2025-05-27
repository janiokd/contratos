'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import BtnComprar from './BtnComprar';

export default function DropdownCard({ 
  title, 
  description, 
  price, 
  imageSrc, 
  imageAlt = 'Imagem do produto' 
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <div
        className="mx-auto flex justify-between items-center w-[1458px] h-[64px] mb-5 rounded-[39px] px-6 cursor-pointer select-none transition-colors duration-300"
        style={{ backgroundColor: dropdownOpen ? '#104B64' : '#8568AC1A' }}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span
          className={`font-medium text-xl transition-colors duration-300 ${
            dropdownOpen ? 'text-white' : 'text-[#000]'
          }`}
        >
          {title}
        </span>
        <FaChevronDown
          className={`w-6 h-6 transition-transform duration-300 ${
            dropdownOpen ? 'rotate-180 text-white' : 'text-[#000]'
          }`}
        />
      </div>

      {dropdownOpen && (
        <div
          className="mx-auto w-[1258px] h-[613px] bg-white rounded-[16px] pt-4 pr-4 pl-4 text-gray-700 shadow-[0px_8px_16px_rgba(0,0,0,0.08)] flex justify-between"
        >
          <div className="w-[672px] flex flex-col ml-5 gap-6">
            <p className="text-[20px] leading-relaxed">{description}</p>
            <h2 className="font-bold text-[24px]">Valor: {price}</h2>

            <BtnComprar href="#">Comprar</BtnComprar>
          </div>

          <div className="w-[334px] h-[573px] ml-auto">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      )}
    </>
  );
}
