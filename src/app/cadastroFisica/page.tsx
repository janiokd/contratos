'use client';

import { useState } from "react";
import BtnComprar from "../components/BtnComprar";

interface Errors {
  nome?: string;
  cpf?: string;
}

export default function Cadastrofisica() {
  const [nome, setNome] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Errors = {};

    if (!nome.trim()) newErrors.nome = "Obrigatório";
    if (!cpf.trim()) newErrors.cpf = "Obrigatório";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Se não há erros, prossiga
      console.log("Campos validados:", { nome, cpf });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start justify-start min-h-screen bg-white px-[141px] py-[120px]"
    >
      <div className="w-auto h-auto">
        <h2 className="font-[Core Sans D] font-bold text-[64px] text-[#104B64]">Cadastro</h2>
        <p className="font-roboto text-[24px] mt-[28px]">Você escolheu pessoa física</p>
      </div>

      {/* Campo Nome */}
      <div className="w-[472px] flex flex-col">
        <label htmlFor="nome" className="font-roboto font-bold text-[20px] mt-[24px]">Nome</label>
        <div className="h-[56px] rounded-[16px] p-4 shadow-[0px_8px_16px_0px_#00000014] shadow-[0px_0px_4px_0px_#0000000A]">
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome Sobrenome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full h-full rounded-[16px] px-4"
          />
        </div>
        {errors.nome && (
          <p className="font-roboto text-[14px] text-[#C42D2D] mt-[20px] mb-[32px]">{errors.nome}</p>
        )}
      </div>

      {/* Campo CPF */}
      <div className="w-[472px] flex flex-col">
        <label htmlFor="cpf" className="font-roboto font-bold text-[20px] mt-[24px]">CPF</label>
        <div className="h-[56px] rounded-[16px] p-4 shadow-[0px_8px_16px_0px_#00000014] shadow-[0px_0px_4px_0px_#0000000A]">
          <input
            type="text"
            id="cpf"
            name="cpf"
            placeholder="999.999.999-99"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className="w-full h-full rounded-[16px] px-4"
          />
        </div>
        {errors.cpf && (
          <p className="font-roboto text-[14px] text-[#C42D2D] mt-[20px] mb-[32px]">{errors.cpf}</p>
        )}
      </div>

      <button type="submit">
        <BtnComprar href="#">Continuar</BtnComprar>
      </button>
    </form>
  );
}
