'use client'

import { FiSearch, FiFilter } from 'react-icons/fi'
import { useState } from 'react'

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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [convites, setConvites] = useState<any[]>([])

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [qualificacao, setQualificacao] = useState('')

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  const totalPages = Math.ceil(convites.length / itemsPerPage)
  const convitesPaginados = convites.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )





  const [erros, setErros] = useState({
    nome: false,
    email: false,
    telefone: false,
  })

  const abrirModal = () => setIsModalOpen(true)
  const fecharModal = () => {
    setIsModalOpen(false)
    limparCampos()
    setErros({ nome: false, email: false, telefone: false })
  }

  const limparCampos = () => {
    setNome('')
    setEmail('')
    setTelefone('')
    setQualificacao('')
  }

  const enviarConvite = () => {

    const novoErros = {
      nome: nome.trim() === '',
      email: email.trim() === '',
      telefone: telefone.trim() === '',
    }
    setErros(novoErros)


    if (Object.values(novoErros).some((erro) => erro)) {
      return
    }

    const novoConvite = {
      nome,
      email,
      telefone,
      qualificacao,
      dataEnvio: new Date(),
      status: false
    }

    setConvites([...convites, novoConvite])
    fecharModal()
  }

  return (
    <main className="p-17 w-full">
      <InfoContrato nome="Contrato de Locação" numero="123456" diasRestantes={12} />

      <div className="mb-4">
        <h3 className="text-5xl font-semibold mb-5">Partes envolvidas</h3>
        <p className="text-2xl text-gray-500 mb-15">
          Administre aqui as partes envolvidas no formulário selecionado
        </p>
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

        <button className="bg-white text-[#0990BA] text-lg font-semibold border border-[#0990BA] px-4 py-2 rounded-lg flex items-center gap-4">
          <FiFilter className="text-lg" />
          Filtrar
        </button>
      </div>

      <div className="flex gap-2 mb-6">
        <button
          onClick={abrirModal}
          className="bg-[#0990BA] text-white font-semibold px-5 py-3 rounded-lg"
        >
          Enviar novo convite
        </button>
        <button className="bg-white text-[#0990BA] border border-[#0990BA] font-semibold px-5 py-3 rounded-lg ml-6">
          Reenviar convites não aceitos
        </button>
      </div>

      {/* Tabela de convites */}
      <table className="w-full mt-6 text-left border border-gray-300 shadow-2xl rounded-xl overflow-hidden">
        <thead className="bg-[#27275A] text-white">
          <tr>
            <th className="p-3">Nome</th>
            <th className="p-3">Qualificação</th>
            <th className="p-3">Assinar Cláusulas</th>
            <th className="p-3">Email</th>
            <th className="p-3">Telefone</th>
            <th className="p-3">Data</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {convitesPaginados.map((convite, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="p-3">{convite.nome}</td>
              <td className="p-3">{convite.qualificacao}</td>
              <td className="p-3">Sim</td>
              <td className="p-3">{convite.email}</td>
              <td className="p-3">{convite.telefone}</td>

              <td className="p-3">
                <div className="flex flex-col leading-tight">
                  <span className="text-gray-500 text-sm">Convite enviado</span>
                  <span className="text-gray-800">
                    {new Date(convite.dataEnvio).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}, às {new Date(convite.dataEnvio).toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </td>

              <td className="p-3">
                {convite.status ? (
                  <span className="text-green-600 font-medium flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Aceito
                  </span>
                ) : (
                  <span className="text-red-600">Convite não aceito</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>

      </table>

      <div className="flex gap-2 mt-8 justify-start">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded text-black text-2xl disabled:opacity-30"
        >
          &lt;
        </button>

        {Array.from({ length: Math.max(totalPages, 1) }, (_, index) => {
          const page = index + 1
          const isActive = page === currentPage

          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded text-white text-sm transition-colors ${isActive ? "bg-[#104B64] font-semibold" : "bg-[#9392A3] hover:bg-[#78778f]"
                }`}
            >
              {page}
            </button>
          )
        })}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages || 1))}
          disabled={currentPage === totalPages || totalPages === 0}
          className="px-3 py-1 rounded text-black text-2xl disabled:opacity-30"
        >
          &gt;
        </button>
      </div>




      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#0990BA]/20 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Nome</h3>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl shadow-2xl ${erros.nome ? 'border-red-600' : 'border-gray-200'
                  }`}
              />
              {erros.nome && <p className="text-red-600 mt-1">*Obrigatório</p>}
            </div>

            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl shadow-2xl ${erros.email ? 'border-red-600' : 'border-gray-200'
                  }`}
              />
              {erros.email && <p className="text-red-600 mt-1">*Obrigatório</p>}
            </div>

            <div>
              <h3 className="text-xl font-semibold">Telefone</h3>
              <input
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl shadow-2xl ${erros.telefone ? 'border-red-600' : 'border-gray-200'
                  }`}
              />
              {erros.telefone && <p className="text-red-600 mt-1">*Obrigatório</p>}
            </div>

            <div>
              <h3 className="text-xl font-semibold">Qualificação</h3>
              <input
                type="text"
                value={qualificacao}
                onChange={(e) => setQualificacao(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 shadow-2xl rounded-xl"
              />
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button
                onClick={fecharModal}
                className="px-4 py-2 rounded border border-[#0990BA] bg-white hover:bg-gray-400 text-[#0990BA] hover:text-white transition"
              >
                Cancelar
              </button>
              <button
                onClick={enviarConvite}
                className="px-4 py-2 rounded bg-[#0990BA] text-white hover:bg-[#077da3]"
              >
                Enviar convite
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-4xl font-semibold mt-6 mb-5 ">Relatório</h3>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
          <div className="relative w-full sm:w-2/3">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search"
              className="w-full max-w-[492px] mx-auto pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-lg"
            />
          </div>

          <button className="bg-white text-[#0990BA] text-lg font-semibold border border-[#0990BA] px-4 py-2 rounded-lg flex items-center gap-4">
            <FiFilter className="text-lg" />
            Filtrar
          </button>
        </div>
      </div>


      {/* Tabela de Relatório de Modificações */}
      <div className="mt-12">
        <h3 className="text-3xl font-semibold mb-4">Relatório de alterações</h3>

        <table className="w-full text-left border border-gray-300 shadow-2xl rounded-xl overflow-hidden">
          <thead className="bg-[#27275A] text-white">
            <tr>
              <th className="p-3">Status</th>
              <th className="p-3">Data e Hora</th>
            </tr>
          </thead>
          <tbody>
            {/* Dados mockados por enquanto */}
            {[
              {
                status: 'Adicionado novo envolvido: João da Silva',
                dataHora: new Date().toISOString(),
              },
              {
                status: 'Editado telefone de Maria Oliveira',
                dataHora: new Date().toISOString(),
              },
              {
                status: 'Excluído envolvido: Pedro Santos',
                dataHora: new Date().toISOString(),
              },
            ].map((registro, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="p-3 text-gray-700">{registro.status}</td>
                <td className="p-3 text-gray-800">
                  {new Date(registro.dataHora).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })}{' '}
                  às{' '}
                  {new Date(registro.dataHora).toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex gap-2 mt-8 justify-start">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded text-black text-2xl disabled:opacity-30"
          >
            &lt;
          </button>

          {Array.from({ length: Math.max(totalPages, 1) }, (_, index) => {
            const page = index + 1
            const isActive = page === currentPage

            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded text-white text-sm transition-colors ${isActive ? "bg-[#104B64] font-semibold" : "bg-[#9392A3] hover:bg-[#78778f]"
                  }`}
              >
                {page}
              </button>
            )
          })}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages || 1))}
            disabled={currentPage === totalPages || totalPages === 0}
            className="px-3 py-1 rounded text-black text-2xl disabled:opacity-30"
          >
            &gt;
          </button>
        </div>
      </div>


    </main>

  )
}
