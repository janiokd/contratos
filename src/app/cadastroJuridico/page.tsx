'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../components/Input";

interface Errors {
  razaoSocial?: string;
  cnpj?: string;
  cep?: string;
  rua?: string;
  numero?: string;
  complemento?: string;
  cidade?: string;
  estado?: string;
  telefone?: string;
  nomeResponsavel?: string;
  cpfResponsavel?: string;
  whatsapp?: string;
  aceitaTermos?: string;
  aceitaPolitica?: string;
}

export default function CadastroJuridico() {
  const router = useRouter(); 
  const [razaoSocial, setRazaoSocial] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [telefone, setTelefone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [whatsappIgual, setWhatsappIgual] = useState<boolean | null>(null);
  const [nomeResponsavel, setNomeResponsavel] = useState('');
  const [cpfResponsavel, setCpfResponsavel] = useState('');
  const [termosUso, setTermosUso] = useState(false);
  const [politicaPrivacidade, setPoliticaPrivacidade] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Errors = {};
    if (!razaoSocial.trim()) newErrors.razaoSocial = "Obrigatório";
    if (!cnpj.trim()) newErrors.cnpj = "Obrigatório";
    if (!cep.trim()) newErrors.cep = "Obrigatório";
    if (!rua.trim()) newErrors.rua = "Obrigatório";
    if (!numero.trim()) newErrors.numero = "Obrigatório";
    if (!cidade.trim()) newErrors.cidade = "Obrigatório";
    if (!estado.trim()) newErrors.estado = "Obrigatório";
    if (!telefone.trim()) newErrors.telefone = "Obrigatório";
    if (!nomeResponsavel.trim()) newErrors.nomeResponsavel = "Obrigatório";
    if (!cpfResponsavel.trim()) newErrors.cpfResponsavel = "Obrigatório";
    if (!whatsapp.trim()) newErrors.whatsapp = "Obrigatório";
    if (!termosUso) newErrors.aceitaTermos = "Você precisa aceitar os termos";
    if (!politicaPrivacidade) newErrors.aceitaPolitica = "Você precisa aceitar a política";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
       router.push('/cadastroFinal');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start justify-start min-h-screen bg-white px-6 sm:px-16 py-10 sm:py-20"
    >
      <div className="w-full max-w-[600px]">
        <h2 className="font-bold text-6xl sm:text-6xl text-[#104B64]">Cadastro</h2>
        <p className="text-2xl mt-6">Você escolheu pessoa jurídica</p>

        <Input className="w-[472px]" label="Razão Social" id="razaoSocial" value={razaoSocial} onChange={setRazaoSocial} error={errors.razaoSocial} />
        <Input className="w-[230px]" label="CNPJ" id="cnpj" value={cnpj} onChange={setCnpj} error={errors.cnpj} />

        <Input className="w-[230px]" label="CEP" id="cep" value={cep} onChange={setCep} error={errors.cep} />
        <Input className="w-[472px]" label="Rua" id="rua" value={rua} onChange={setRua} error={errors.rua} />

        <div className="flex gap-4">
          <Input className="w-[130px]" label="Número" id="numero" value={numero} onChange={setNumero} error={errors.numero} />
          <Input className="w-[230px]" label="Complemento" id="complemento" value={complemento} onChange={setComplemento} />
        </div>

        <div className="flex gap-4">
          <Input label="Cidade" id="cidade" value={cidade} onChange={setCidade} error={errors.cidade} className="w-[230px]" />
          <div className="w-[230px] flex flex-col mt-6">
            <label className="font-bold text-xl">Estado</label>
            <select
              className="h-12 rounded-lg px-4 mt-2 shadow-md"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option value="">Selecione</option>
              {["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"].map(sigla => (
                <option key={sigla} value={sigla}>{sigla}</option>
              ))}
            </select>
            {errors.estado && <p className="text-sm text-red-500">{errors.estado}</p>}
          </div>
        </div>

        <Input className="w-[472px]" label="Telefone" id="telefone" value={telefone} onChange={setTelefone} error={errors.telefone} />


        <Input className="w-[472px]" label="Nome do Responsável" id="nomeResponsavel" value={nomeResponsavel} onChange={setNomeResponsavel} error={errors.nomeResponsavel} />
        <Input className="w-[472px]" label="CPF do Responsável" id="cpfResponsavel" value={cpfResponsavel} onChange={setCpfResponsavel} error={errors.cpfResponsavel} />


        <div className="mt-6">
          <p className="font-bold text-xl mb-2">Esse número também é WhatsApp?</p>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="whatsappIgual"
                onChange={() => {
                  setWhatsapp(telefone);
                  setWhatsappIgual(true);
                }}
                checked={whatsappIgual === true}
              />Sim
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="whatsappIgual"
                onChange={() => {
                  setWhatsapp('');
                  setWhatsappIgual(false);
                }}
                checked={whatsappIgual === false}
              />Não
            </label>
          </div>
        </div>

        <Input className="w-[472px]" label="WhatsApp" id="whatsapp" value={whatsapp} onChange={setWhatsapp} error={errors.whatsapp} />

        <div className="mt-6 flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={termosUso} onChange={() => setTermosUso(!termosUso)} />
            Aceito os termos de uso
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={politicaPrivacidade} onChange={() => setPoliticaPrivacidade(!politicaPrivacidade)} />
            Aceito a política de privacidade
          </label>
          {errors.aceitaTermos && <p className="text-sm text-red-500">{errors.aceitaTermos}</p>}
          {errors.aceitaPolitica && <p className="text-sm text-red-500">{errors.aceitaPolitica}</p>}
        </div>

        <button
          type="submit"
          className="mt-6 w-[158px] h-[48px] rounded-xl bg-[#0990BA] text-white flex items-center justify-center hover:bg-[#087ca2] transition"
        >Continuar</button>
      </div>
    </form>
  );
}
