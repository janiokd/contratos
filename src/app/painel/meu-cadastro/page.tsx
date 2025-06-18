'use client';

import { useState } from 'react';

export default function MeuCadastro() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    cpf: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados cadastrados:', form);
    alert('Cadastro salvo com sucesso!');
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6 flex justify-center items-center font-poppins">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-[#104B64]">Meu Cadastro</h1>

        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
            Nome completo
          </label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={form.nome}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#104B64] focus:border-[#104B64]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#104B64] focus:border-[#104B64]"
          />
        </div>

        <div>
          <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
            CPF
          </label>
          <input
            type="text"
            name="cpf"
            id="cpf"
            value={form.cpf}
            onChange={handleChange}
            required
            pattern="\d{11}"
            maxLength={11}
            title="Digite apenas os 11 números do CPF"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#104B64] focus:border-[#104B64]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#104B64] hover:bg-[#0c3d52] text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Salvar
        </button>
      </form>
    </main>
  );
}
