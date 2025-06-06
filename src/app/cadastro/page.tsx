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

    if (tipoPessoa === 'fisica') {
      router.push('/cadastroFisica');
    } else {
      router.push('/cadastroJuridico');
    }
  };

  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-white px-[141px] py-[120px]">
      <div className="w-auto h-auto">
        <h2 className="font-[Core Sans D] font-bold font-[400] text-[64px] leading-[100%] tracking-[0%] text-[#104B64]">
          Cadastro
        </h2>

        <p className="font-roboto font-[400] text-[24px] leading-[40px] tracking-[0%] mt-[28px]">
          Comece aqui o seu cadastro para ter acesso à plataforma
        </p>

        <p className="w-[467px] font-roboto font-[700] text-[19px] mt-[28px]">
          Selecione abaixo a opção mais adequada para você
        </p>

        <div className="flex flex-col gap-2 -mt-[24px]">
          <label htmlFor="pessoa-fisica" className="flex items-center gap-2 w-[180px] h-[88px] font-roboto font-[500] text-[16px] leading-[40px] cursor-pointer">
            <input
              type="radio"
              id="pessoa-fisica"
              name="tipo-pessoa"
              value="fisica"
              className="w-5 h-5"
              onChange={(e) => {
                setTipoPessoa(e.target.value);
                if (erroTipoPessoa) setErroTipoPessoa(false);
              }}
            />
            Pessoa Física
          </label>

          <label htmlFor="pessoa-juridica" className="flex items-center gap-2 w-[180px] h-[88px] font-roboto font-[500] text-[16px] leading-[40px] cursor-pointer -mt-10">
            <input
              type="radio"
              id="pessoa-juridica"
              name="tipo-pessoa"
              value="juridica"
              className="w-5 h-5"
              onChange={(e) => {
                setTipoPessoa(e.target.value);
                if (erroTipoPessoa) setErroTipoPessoa(false);
              }}
            />
            Pessoa Jurídica
          </label>

          {erroTipoPessoa && (
            <span className="text-red-500 text-sm mt-[-8px]">Obrigatório</span>
          )}
        </div>
      </div>

      <p className="w-[467px] font-roboto font-[700] text-[16px] leading-[40px] tracking-[0%] mt-[24px]">
        Digite aqui seu e-mail
      </p>

      <div className="w-[472px] flex flex-col">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="nome@email.com"
          className={`h-[56px] rounded-[16px] px-4 shadow-[0px_8px_16px_0px_#00000014] shadow-[0px_0px_4px_0px_#0000000A] ${erroEmail ? 'border border-red-500' : ''}`}
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

      <div className="mt-4">
        <BtnComprar onClick={handleContinuar}>Continuar</BtnComprar>
      </div>
    </div>
  );
}
