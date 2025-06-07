'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BtnComprar from "../components/BtnComprar";

export default function Cadastro() {
  const [tipoPessoa, setTipoPessoa] = useState('');
  const [email, setEmail] = useState('');
  const [erroEmail, setErroEmail] = useState(false);
  const [erroTipoPessoa, setErroTipoPessoa] = useState(false);
  const router = useRouter();

  const handleContinuar = () => {
    let temErro = false;

    if (!tipoPessoa) {
      setErroTipoPessoa(true);
      temErro = true;
    } else {
      setErroTipoPessoa(false);
    }

    if (!email) {
      setErroEmail(true);
      temErro = true;
    } else {
      setErroEmail(false);
    }

    if (temErro) return;

    router.push(tipoPessoa === 'fisica' ? '/cadastroFisica' : '/cadastroJuridico');
  };

  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-white px-4 sm:px-8 md:px-[80px] lg:px-[141px] py-12 md:py-[120px]">
      <div className="w-full max-w-[800px]">
        <h2 className="font-[Core Sans D] font-bold text-[32px] sm:text-[48px] lg:text-[64px] text-[#104B64] leading-[100%]">
          Cadastro
        </h2>

        <p className="font-roboto text-[18px] sm:text-[22px] lg:text-[24px] mt-6">
          Comece aqui o seu cadastro para ter acesso à plataforma
        </p>

        <p className="font-roboto font-bold text-[16px] sm:text-[18px] lg:text-[19px] mt-6">
          Selecione abaixo a opção mais adequada para você
        </p>

        <div className="flex flex-col gap-2 mt-2">
          <label className="flex items-center gap-2 h-[56px] sm:h-[64px] text-[16px]">
            <input
              type="radio"
              name="tipo-pessoa"
              value="fisica"
              className="w-5 h-5"
              onChange={(e) => {
                setTipoPessoa(e.target.value);
                setErroTipoPessoa(false);
              }}
            />
            Pessoa Física
          </label>

          <label className="flex items-center gap-2 h-[56px] sm:h-[64px] text-[16px]">
            <input
              type="radio"
              name="tipo-pessoa"
              value="juridica"
              className="w-5 h-5"
              onChange={(e) => {
                setTipoPessoa(e.target.value);
                setErroTipoPessoa(false);
              }}
            />
            Pessoa Jurídica
          </label>

          {erroTipoPessoa && (
            <span className="text-red-500 text-sm mt-[-8px]">Obrigatório</span>
          )}
        </div>

        <p className="font-roboto font-bold text-[16px] mt-6">
          Digite aqui seu e-mail
        </p>

        <div className="w-full max-w-[472px]">
          <input
            type="email"
            placeholder="nome@email.com"
            className={`w-full h-[56px] rounded-[16px] px-4 mt-2 shadow-[0px_8px_16px_0px_#00000014] shadow-[0px_0px_4px_0px_#0000000A] ${
              erroEmail ? 'border border-red-500' : ''
            }`}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (erroEmail && e.target.value !== '') setErroEmail(false);
            }}
          />
          {erroEmail && (
            <span className="text-red-500 text-sm mt-2">Obrigatório.</span>
          )}
        </div>

        <div className="mt-6">
          <BtnComprar onClick={handleContinuar}>Continuar</BtnComprar>
        </div>
      </div>
    </div>
  );
}
