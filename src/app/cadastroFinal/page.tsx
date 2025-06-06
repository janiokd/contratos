'use client';

import { useState } from "react";
import BtnComprar from "../components/BtnComprar";
import Input from "../components/Input";

interface Errors {
    senha?: string;
}

export default function Cadastrofinal() {
    const [manterCadastro, setManterCadastro] = useState<null | boolean>(null);
    const [senha, setSenha] = useState('');
    const [errors, setErrors] = useState<Errors>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: Errors = {};

        if (!senha) {
            newErrors.senha = 'Obrigatório';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {

            console.log('Cadastro finalizado com sucesso!');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start justify-start min-h-screen bg-white px-6 sm:px-16 py-10 sm:py-20"
        >
            <div className="w-full max-w-[600px]">
                <h2 className="font-bold text-6xl sm:text-6xl text-[#104B64]">Cadastro</h2>
                <p className="text-2xl mt-6">Agora falta pouco para você acessar a plataforma</p>

               

               
                <div className="mt-10">
                    <p className="text-xl mb-2">
                        Você deseja <span className="font-bold">manter o cadastro na plataforma</span> após finalizar o formulário que contratou ou está envolvido?
                    </p>

                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 text-xl">
                            <input
                                type="radio"
                                name="manterCadastro"
                                onChange={() => setManterCadastro(true)}
                                checked={manterCadastro === true}
                            />
                            Sim
                        </label>
                        <label className="flex items-center gap-2 text-xl">
                            <input
                                type="radio"
                                name="manterCadastro"
                                onChange={() => setManterCadastro(false)}
                                checked={manterCadastro === false}
                            />
                            Não
                        </label>
                    </div>

                    {/* MENSAGENS QUANDO SELECIONA O S/N */}
                    {manterCadastro === true && (
                        <div className="mt-4 text-gray-700 text-base">
                            <p className="mb-2">
                                Observação: Seus dados já ficarão registrados e você poderá utilizar esse cadastro para adquirir ou trabalhar em novos formulários no futuro, poupando o tempo de registro na plataforma.
                            </p>
                            <p>
                                Observação: A pessoa jurídica que optar por manter o cadastro, terá somente os dados relacionados ao CNPJ armazenados. Os dados de pessoa física responsável deverão ser reinseridos.
                            </p>
                        </div>
                    )}

                    {manterCadastro === false && (
                        <div className="mt-4 text-gray-700 text-sm">
                            <p>
                                Observação: No futuro, caso volte a trabalhar na plataforma, será necessário que você preencha todo o cadastro novamente.
                            </p>
                        </div>
                    )}
                </div>

                {/* SENHA */}
                <div className="mt-8 w-full">
                    <label htmlFor="senha" className="block font-bold mb-2 text-xl ">
                        Crie uma senha com letras e números
                    </label>
                    <input
                        type="password"
                        id="senha"
                        value={senha}
                        onChange={(e) => {
                            setSenha(e.target.value);
                            if (errors.senha && e.target.value !== '') {
                                setErrors(prev => ({ ...prev, senha: undefined }));
                            }
                        }}
                        placeholder="Digite sua senha"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.senha ? 'border-red-500' : 'border-gray-300'} shadow-sm`}
                    />
                    {errors.senha && (
                        <span className="text-red-500 text-sm mt-2 block">{errors.senha}</span>
                    )}
                </div>


                <div className="mt-8">
                    <BtnComprar href="#">Cadastrar</BtnComprar>
                </div>
            </div>
        </form>
    );
}
