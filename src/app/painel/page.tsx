'use client';

import { useState } from 'react';
import { Filter } from 'lucide-react';

export default function PainelHome() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-6">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="w-full md:w-auto text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-roboto">
            Meus Formulários
          </h2>
          <p className="text-lg sm:text-xl font-roboto mt-4">
            Administre aqui seus formulários adquiridos.
          </p>
        </div>


        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 border-2 border-[#0990BA] text-[#0990BA] bg-white font-semibold py-[11px] px-6 sm:px-8 md:px-[64px] rounded-[12px] hover:bg-[#f0faff] transition"
          >
            <Filter size={20} />
            Filtrar
          </button>

         
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-[90vw] sm:w-72 md:w-80 bg-white rounded-md shadow-lg border border-gray-200 p-4 z-50">
              <p className="text-[#104B64] font-semibold">Filtros aqui</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
