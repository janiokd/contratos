'use client'

import { FiSearch, FiFilter } from 'react-icons/fi'


interface InfoContratoProps {
  nome: string
  numero: string
  diasRestantes: number
}


function InfoContrato({ nome, numero, diasRestantes }: InfoContratoProps) {
  return (
    <div className="max-w-[589px] w-full bg-white rounded-xl p-6 space-y-3 shadow-2xl border border-gray-200 mb-12">
      <div className="flex justify-between items-center">
        <h2 className="text-[#104B64] text-2xl font-semibold">{nome}</h2>
        <div className="bg-[#104B64] text-white px-3 py-1 rounded text-ls font-medium">
          #{numero}
        </div>
      </div>
      <p className="text-lg text-gray-600">
        Faltam <span className="font-semibold">{diasRestantes}</span> dias para a finalização deste formulário.
      </p>
    </div>
  )
}

export default function AddPartesPage() {
  return (
    <main className="p-17 w-full ">

      <InfoContrato nome="Contrato de Locação" numero="123456" diasRestantes={12} />

      
      <div className="mb-4">
        <h3 className="text-5xl font-semibold mb-5">Partes envolvidas</h3>
        <p className="text-2xl text-gray-500 mb-15">Administre aqui as partes envolvidas no formulário selecionado</p>
      </div>


      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">

        <div className="relative w-full sm:w-2/3">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="w-full max-w-[492px] mx-auto pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-lg"

          />
        </div>

        
        <button className="bg-white text-[#0990BA] text-lg font-semibold border border[#0990BA] px-4 py-2 rounded-lg flex items-center gap-4">
          <FiFilter className="text-lg" />
          Filtrar
        </button>

      </div>


      
      <div className="flex gap-2 mb-6">
        <button className="bg-[#0990BA] text-white font-semibold px-5 py-3 rounded-lg">
          Enviar novo convite
        </button>
        <button className="bg-white text-[#0990BA] border border-[#0990BA] font-semibold px-5 py-3 rounded-lg ml-6">
          Reenviar convites não aceitos
        </button>
      </div>

    </main>
  )
}
