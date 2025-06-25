"use client";

import { useState, useRef, useEffect } from "react";
import {
  FaPlus, FaTrash, FaList, FaPen,
  FaEllipsisV, FaEye, FaSignature
} from "react-icons/fa";
import EnvolvidoItem from "./EnvolvidoItem";

interface FormularioCardProps {
  nomeContrato: string;
  numeroContrato: string;
  diasRestantes: number;
  dataAquisicao: string;
  horaAquisicao: string;
  dataPagamento: string;
  horaPagamento: string;
  dataFinalizacao: string;
  horaFinalizacao?: string;
  statusPagamento: "pagamentoaceito" | "aguardandopagamento";
  progresso: number;
  envolvidos: { nome: string; papel: string }[];
}

export default function FormularioCard({
  nomeContrato,
  numeroContrato,
  diasRestantes,
  dataAquisicao,
  horaAquisicao,
  dataPagamento,
  horaPagamento,
  dataFinalizacao,
  horaFinalizacao,
  statusPagamento,
  progresso,
  envolvidos: envolvidosInit,
}: FormularioCardProps) {
  const [envolvidos, setEnvolvidos] = useState(envolvidosInit);
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const [mostrarModalExcluir, setMostrarModalExcluir] = useState(false);
  const [mostrarModalResetar, setMostrarModalResetar] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickFora(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownAberto(false);
      }
    }
    document.addEventListener("mousedown", handleClickFora);
    return () => document.removeEventListener("mousedown", handleClickFora);
  }, []);

  return (
    <div className="max-w-[869px] w-full bg-white rounded-xl p-6 space-y-3 shadow-2xl border border-gray-200 mb-12">
      <div className="flex justify-between items-center">
        <h2 className="text-[#104B64] text-2xl font-semibold">{nomeContrato}</h2>
        <div className="bg-[#104B64] text-white px-3 py-1 rounded text-sm font-medium">
          #{numeroContrato}
        </div>
      </div>

      <p className="text-lg text-gray-600">
        Faltam <span className="font-semibold">{diasRestantes}</span> dias para a finalização deste formulário.
      </p>

      <div className="mt-10 text-sm text-gray-700">
        <p className="text-2xl font-semibold mb-2">Informações Gerais:</p>
        <div className="space-x-16 flex flex-wrap items-start gap-4">
          <div>
            <span className="font-semibold text-base">Aquisição:</span>
            <div className="text-base text-gray-600 mb-5">
              {dataAquisicao}, às {horaAquisicao}
            </div>
          </div>
          <div className="w-px h-12 bg-gray-300" />
          <div>
            <span className="font-semibold text-base">Pagamento:</span>
            <div className="text-base text-gray-600 mb-5">
              {dataPagamento}, às {horaPagamento}
            </div>
          </div>
          <div className="w-px h-12 bg-gray-300" />
          <div>
            <span className="font-semibold text-base">Finalização:</span>
            <div className="text-base text-gray-600 mb-5">
              {dataFinalizacao}, às {horaFinalizacao}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="font-semibold text-base mb-1">Status:</p>
          <div
            className={`inline-block px-3 py-1 rounded-md text-base font-medium mb-5 ${
              statusPagamento === "pagamentoaceito"
                ? "bg-[#8CB55F] text-white"
                : "bg-yellow-400 text-white"
            }`}
          >
            {statusPagamento === "pagamentoaceito"
              ? "Pagamento Aceito"
              : "Aguardando Pagamento"}
          </div>
        </div>
      </div>

      <div>
        <p className="font-semibold text-base mb-1">Andamento</p>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#8569AB] transition-all duration-500 mb-10"
            style={{ width: `${progresso}%` }}
          />
        </div>
      </div>

      <hr className="border-gray-300 my-5" />

      <div>
        <p className="text-2xl font-semibold mb-2">Envolvidos:</p>
        {envolvidos.map((envolvido, index) => (
          <EnvolvidoItem
            key={index}
            nome={envolvido.nome}
            funcao={envolvido.papel}
            status="aceito"
            onExcluir={() => {
              const novos = envolvidos.filter((_, i) => i !== index);
              setEnvolvidos(novos);
            }}
            onCancelarConvite={() => {
              const novos = envolvidos.filter((_, i) => i !== index);
              setEnvolvidos(novos);
            }}
          />
        ))}
        <button className="flex items-center text-sm text-[#104B64] hover:underline shadow-md bg-white px-3 py-2 rounded-md mb-4">
          <FaPlus className="mr-1" /> Adicionar
        </button>
      </div>

      <hr className="border-gray-300" />

      <div>
        <p className="text-sm font-semibold text-gray-700 mb-2">Ações:</p>
        <div className="flex flex-wrap gap-2 mb-3">
          <button className="flex items-center gap-1 text-sm border border-gray-200 shadow-xl px-3 py-1 rounded hover:bg-gray-100">
            <FaList /> Status das Cláusulas
          </button>
          <button className="flex items-center gap-1 text-sm border border-gray-200 shadow-xl px-3 py-1 rounded hover:bg-gray-100">
            <FaPen /> Editar Formulário
          </button>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownAberto(!dropdownAberto)}
              className="flex items-center gap-1 text-sm border border-gray-200 shadow-xl px-3 py-1 rounded hover:bg-gray-100 w-[160px]"
            >
              <FaEllipsisV /> Mais opções
            </button>

            {dropdownAberto && (
              <div className="absolute left-0 mt-1 w-[160px] bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                <button className="w-full text-left px-4 py-2 text-sm hover:text-blue-400">Concluir formulário</button>
                <hr className="border-gray-200" />
                <button className="w-full text-left px-4 py-2 text-sm hover:text-blue-400">Pedir prorrogação</button>
                <hr className="border-gray-200" />
                <button className="w-full text-left px-4 py-2 text-sm hover:text-blue-400">Imprimir</button>
                <hr className="border-gray-200" />
                <button
                  onClick={() => {
                    setDropdownAberto(false);
                    setMostrarModalResetar(true);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:text-blue-400"
                >
                  Resetar
                </button>
                <hr className="border-gray-200" />
                <button
                  onClick={() => {
                    setDropdownAberto(false);
                    setMostrarModalExcluir(true);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:text-blue-400"
                >
                  Excluir
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-1 text-sm border border-gray-200 shadow-xl px-3 py-1 rounded hover:bg-gray-100">
            <FaEye /> Pré-visualizar
          </button>
          <button className="flex items-center gap-1 text-sm border border-gray-200 shadow-xl px-3 py-1 rounded hover:bg-gray-100">
            <FaSignature /> Assinar
          </button>
        </div>
      </div>


      {mostrarModalExcluir && (
        <div className="fixed inset-0 bg-blue-950/30 flex items-center justify-center z-50">
          <div className="bg-[#27275A] text-white rounded-xl p-6 w-[90%] max-w-md shadow-2xl text-center">
            <FaTrash className="text-red-500 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-5">Tem certeza que deseja excluir?</h2>
            <p className="text-lg text-white  mb-6">
             Ao clicar em excluir, o formulário será excluído do site e do sistema.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setMostrarModalExcluir(false)}
                className="px-10 py-2 rounded-xl bg-[#34346D] text-semibold text-white"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setMostrarModalExcluir(false);
                  
                }}
                className="px-10 py-2 rounded-xl bg-red-600 text-semibold text-white"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}

      
      {mostrarModalResetar && (
        <div className="fixed inset-0 bg-blue-950/30 flex items-center justify-center z-50">
          <div className="bg-[#27275A] text-white rounded-xl p-6 w-[90%] max-w-md shadow-2xl text-center">
            <FaTrash className="text-red-500 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-5">Tem certeza que deseja resetar?</h2>
            <p className="text-lg text-white  mb-6">
            Ao clicar em resetar, o formulário será resetado do site e do sistema.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setMostrarModalResetar(false)}
                className="px-10 py-2 rounded-xl bg-[#34346D] text-semibold text-white"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  
                  setMostrarModalResetar(false);
                }}
                className="px-10 py-2 rounded-xl bg-red-600 text-semibold text-white"
              >
                Resetar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
