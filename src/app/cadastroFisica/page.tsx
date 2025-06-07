'use client';

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import Input from "../components/Input";

interface Errors {
  nome?: string;
  cpf?: string; 
  rg?: string;
  dataNascimento?: string;
  estadoCivil?: string;
  cep?: string;
  endereco?: string;
  numero?: string;
  complemento?: string;
  cidade?: string;
  estado?: string;
  telefone?: string;
  whatsapp?: string;
}

export default function Cadastrofisica() {
  const router = useRouter(); 
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [telefone, setTelefone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [whatsappIgual, setWhatsappIgual] = useState<boolean | null>(null);
  const [termosUso, setTermosUso] = useState(false);
  const [politicaPrivacidade, setPoliticaPrivacidade] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    const newErrors: Errors = {};

    
    if (!nome.trim()) newErrors.nome = "Obrigatório";
    if (!cpf.trim()) newErrors.cpf = "Obrigatório";
    if (!rg.trim()) newErrors.rg = "Obrigatório";
    if (!dataNascimento.trim()) newErrors.dataNascimento = "Obrigatório";
    if (!estadoCivil.trim()) newErrors.estadoCivil = "Obrigatório";
    if (!cep.trim()) newErrors.cep = "Obrigatório";
    if (!endereco.trim()) newErrors.endereco = "Obrigatório";
    if (!numero.trim()) newErrors.numero = "Obrigatório";
    if (!cidade.trim()) newErrors.cidade = "Obrigatório";
    if (!estado.trim()) newErrors.estado = "Obrigatório";
    if (!telefone.trim()) newErrors.telefone = "Obrigatório";
    if (!whatsapp.trim()) newErrors.whatsapp = "Obrigatório";

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
        <p className="text-2xl mt-6">Você escolheu pessoa física</p>

        <Input className="w-[472px]" label="Nome" id="nome" value={nome} onChange={setNome} error={errors.nome} placeholder="Nome completo" />
        <Input className="w-[230px]" label="CPF" id="cpf" value={cpf} onChange={setCpf} error={errors.cpf} placeholder="999.999.999-99" />
        <Input className="w-[230px]" label="RG" id="rg" value={rg} onChange={setRg} error={errors.rg} placeholder="12.345.678-9" />
        <Input className="w-[230px]" label="Data de Nascimento" id="dataNascimento" type="date" value={dataNascimento} onChange={setDataNascimento} error={errors.dataNascimento} />

        <div className=" w-[230px] flex flex-col mt-6">
          <label className="font-bold text-xl">Estado Civil</label>
          <select
            className="h-12 rounded-lg px-4 mt-1 shadow-md"
            value={estadoCivil}
            onChange={(e) => setEstadoCivil(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="solteiro">Solteiro(a)</option>
            <option value="casado">Casado(a)</option>
            <option value="divorciado">Divorciado(a)</option>
            <option value="viuvo">Viúvo(a)</option>
          </select>
          {errors.estadoCivil && <p className="text-sm text-red-500">{errors.estadoCivil}</p>}
        </div>

        <Input className="w-[230px]" label="CEP" id="cep" value={cep} onChange={setCep} error={errors.cep} placeholder="00000-000" />
        <Input className="w-[472px]" label="Endereço" id="endereco" value={endereco} onChange={setEndereco} error={errors.endereco} placeholder="Rua, Avenida..." />

        <div className="flex gap-4">
          <Input className="w-[130px]" label="Número" id="numero" value={numero} onChange={setNumero} error={errors.numero} />
          <Input className="w-[230px]" label="Complemento" id="complemento" value={complemento} onChange={setComplemento} />
        </div>

        <div className="flex gap-4">
          <Input className="w-[230px]" label="Cidade" id="cidade" value={cidade} onChange={setCidade} error={errors.cidade} />
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

        <Input label="Telefone" id="telefone" value={telefone} onChange={setTelefone} error={errors.telefone} placeholder="(99) 99999-9999" />

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

        <Input label="WhatsApp" id="whatsapp" value={whatsapp} onChange={setWhatsapp} error={errors.whatsapp} placeholder="(99) 99999-9999" />

        <div className="mt-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={termosUso} onChange={() => setTermosUso(!termosUso)} />
            Aceito os termos de uso
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={politicaPrivacidade} onChange={() => setPoliticaPrivacidade(!politicaPrivacidade)} />
            Aceito a política de privacidade
          </label>
        </div>

        
        <button
          type="submit"
          className="mt-6 w-[158px] h-[48px] rounded-xl bg-[#0990BA] text-white flex items-center justify-center hover:bg-[#087ca2] transition"
        >Continuar</button>
      </div>
    </form>
  );
}
