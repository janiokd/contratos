import { MoreVertical, UserCheck } from 'lucide-react';
import { useState } from 'react';

interface EnvolvidoProps {
  nome: string;
  funcao: string;
  status: 'pendente' | 'aceito';
  onExcluir: () => void;
  onCancelarConvite: () => void;
}

export default function EnvolvidoItem({
  nome,
  funcao,
  status,
  onExcluir,
  onCancelarConvite
}: EnvolvidoProps) {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  return (
    <div className="flex items-start justify-between bg-gray-100 rounded-xl p-3 mb-2">
      <div>
        <p className="text-sm font-semibold">{nome}</p>
        <p className="text-xs text-gray-500">{funcao}</p>
      </div>

      <div className="flex items-center gap-2 relative">
        {status === 'aceito' && (
          <span title="Convite aceito">
            <UserCheck className="w-6 h-6 text-green-500" />
          </span>
        )}

        <button onClick={() => setMostrarMenu(!mostrarMenu)}>
          <MoreVertical className="w-4 h-4 text-gray-700" />
        </button>

        {mostrarMenu && (
          <div className="absolute right-0 top-6 bg-white shadow-lg rounded-lg p-2 z-50 w-44">
            {status === 'aceito' ? (
              <button
                onClick={onExcluir}
                className="text-red-500 text-sm hover:underline"
              >
                Excluir envolvido
              </button>
            ) : (
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-black font-bold">Convite pendente</span>
                <button
                  onClick={onCancelarConvite}
                  className="text-yellow-500 hover:underline"
                >
                  Cancelar convite
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
