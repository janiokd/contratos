'use client';

import { useState } from 'react';
import { Filter } from 'lucide-react';
import FormularioCard from './components/FormularioCard';


export default function PainelHome() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  // Exemplo de dados mockados doformulário
  const formularios = [
    {
      nomeContrato: 'Contrato de Prestação',
      numeroContrato: '0909090',
      diasRestantes: 10,
      dataAquisicao: '12/06/2025',
      horaAquisicao: '14:30',
      dataPagamento: '13/06/2025',
      horaPagamento: '10:00',
      dataFinalizacao: '22/06/2025',
      horaFinalizacao: '15:30',
      statusPagamento: 'pagamentoaceito' as const,
      progresso: 60,
      envolvidos: [
        { nome: 'João da Silva', papel: 'Cliente' },
        { nome: 'Maria Oliveira', papel: 'Advogada' },
      ],
    },
    {
      nomeContrato: 'Contrato de Locação',
      numeroContrato: '67890',
      diasRestantes: 5,
      dataAquisicao: '10/06/2025',
      horaAquisicao: '09:00',
      dataPagamento: '11/06/2025',
      horaPagamento: '16:45',
      dataFinalizacao: '15/06/2025',
      horaFinalizacao: '15:30',
      statusPagamento: 'aguardandopagamento' as const,
      progresso: 30,
      envolvidos: [
        { nome: 'Carlos Mendes', papel: 'Locador' },
        { nome: 'Ana Souza', papel: 'Inquilina' },
      ],
    },
    {
      nomeContrato: 'Contrato de Assessoria',
      numeroContrato: '78912',
      diasRestantes: 3,
      dataAquisicao: '15/06/2025',
      horaAquisicao: '11:00',
      dataPagamento: '16/06/2025',
      horaPagamento: '12:00',
      dataFinalizacao: '20/06/2025',
      horaFinalizacao: '15:30',
      statusPagamento: 'aguardandopagamento' as const,
      progresso: 45,
      envolvidos: [
        { nome: 'Paula Lima', papel: 'Cliente' },
        { nome: 'Lucas Nunes', papel: 'Consultor' },
      ],
    },
    {
      nomeContrato: 'Contrato de Consultoria',
      numeroContrato: '32145',
      diasRestantes: 7,
      dataAquisicao: '14/06/2025',
      horaAquisicao: '08:30',
      dataPagamento: '15/06/2025',
      horaPagamento: '09:15',
      dataFinalizacao: '21/06/2025',
      horaFinalizacao: '17:00',
      statusPagamento: 'pagamentoaceito' as const,
      progresso: 80,
      envolvidos: [
        { nome: 'Fernanda Silva', papel: 'Cliente' },
        { nome: 'Ricardo Melo', papel: 'Consultor' },
      ],
    },
  ];

  const totalPages = Math.ceil(formularios.length / itemsPerPage);

  const currentPageFormularios = formularios.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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


        <div className="relative w-full md:w-auto">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 border-2 border-[#0990BA] text-[#0990BA] bg-white font-semibold py-[11px] px-6 sm:px-8 md:px-[64px] rounded-[12px] hover:bg-[#f0faff] transition w-full md:w-auto"
          >
            <Filter size={20} />
            Filtrar
          </button>
        </div>
      </div>

      {isDropdownOpen && (
        <div className="mt-6 w-full bg-white px-4 sm:px-6 md:px-10 py-6 z-50 rounded-xl">

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="w-full sm:w-auto max-w-[100px]">
              <label className="block text-sm font-medium text-gray-700 mb-1">Nº</label>
              <input
                type="text"
                placeholder="123"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="w-full sm:w-[320px]">
              <label className="block text-sm font-medium text-gray-700 mb-1">Formulário</label>
              <select className="w-full border border-gray-300 rounded-md p-2">
                <option value="">Selecione</option>
                <option value="form1">Formulário</option>
                <option value="form2">Formulário</option>
              </select>
            </div>

            <div className="w-full sm:w-[320px]">
              <label className="block text-sm font-medium text-gray-700 mb-1">Cliente Envolvido</label>
              <input
                type="text"
                placeholder="Digite aqui"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="w-full sm:w-[320px]">
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select className="w-full border border-gray-300 rounded-md p-2">
                <option value="">Selecione</option>
                <option value="aguardando">Aguardando pagamento</option>
                <option value="pago">Pago</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-end gap-4">
            <div className="w-full sm:w-auto max-w-[220px]">
              <label className="block text-sm font-medium text-gray-700 mb-1">Período de:</label>
              <input type="date" className="w-full border border-gray-300 rounded-md p-2" />
            </div>

            <div className="w-full sm:w-auto max-w-[220px]">
              <label className="block text-sm font-medium text-gray-700 mb-1">Período até:</label>
              <input type="date" className="w-full border border-gray-300 rounded-md p-2" />
            </div>

            <div className="pt-2">
              <button className="border-2 border-[#0990BA] text-[#0990BA] bg-white font-semibold py-[11px] px-6 rounded-lg hover:bg-[#077aa2] hover:text-white transition">
                Buscar
              </button>
            </div>
          </div>
        </div>
      )}


      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentPageFormularios.map((formulario, index) => (
          <FormularioCard
            key={index}
            nomeContrato={formulario.nomeContrato}
            numeroContrato={formulario.numeroContrato}
            diasRestantes={formulario.diasRestantes}
            dataAquisicao={formulario.dataAquisicao}
            horaAquisicao={formulario.horaAquisicao}
            dataPagamento={formulario.dataPagamento}
            horaPagamento={formulario.horaPagamento}
            dataFinalizacao={formulario.dataFinalizacao}
            horaFinalizacao={formulario.horaFinalizacao}
            statusPagamento={formulario.statusPagamento}
            progresso={formulario.progresso}
            envolvidos={formulario.envolvidos}
          />



        ))}
      </div>


      <div className="flex gap-2 mt-8"> 
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded  text-black text-2xl "
        >
          &lt;
        </button>


        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded text-white text-sm transition-colors ${isActive
                  ? "bg-[#104B64] font-semibold"
                  : "bg-[#9392A3] hover:bg-[#78778f]"
                }`}
            >
              {page}
            </button>
          );
        })}


        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded  text-black text-2xl "
        >
          &gt;
        </button>
      </div>

    </div>
  );
}
