'use client';

import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

type Errors = {
  email: string;
  password: string;
};

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({ email: '', password: '' });

  const validateEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Errors = { email: '', password: '' };

    if (!validateEmail(email)) {
      newErrors.email = 'Email inválido';
    }

    if (password.length < 6) {
      newErrors.password = 'A senha deve ter pelo menos 6 caracteres';
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      alert('Login enviado com sucesso!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-10">
      <div
        className="bg-[#8568AC1A] p-8 rounded-lg w-full max-w-[744px] h-auto flex flex-col justify-center shadow-lg"
      >
        <h2 className="text-[48px] sm:text-[64px] text-[#104B64] font-bold mb-6 text-center font-[Core Sans D]">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="mb-4 w-full max-w-[472px]">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full h-[56px] px-4 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#0990BA]`}
              required
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-2 w-full max-w-[472px] relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full h-[56px] px-4 pr-12 border ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#0990BA]`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600"
                aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          <div className="mb-6 w-full max-w-[472px] text-left">
            <a href="#" className="text-sm text-[#0990BA] hover:underline">
              Esqueci minha senha
            </a>
          </div>

          <button
            type="submit"
            className="bg-transparent border border-[#0990BA] text-[#0990BA] text-[18px] font-bold px-16 py-3 rounded-[12px] hover:bg-[#0990BA1A] transition-colors duration-200"
          >
            Entrar
          </button>
        </form>
      </div>

      <div
        className="bg-[#8568AC1A] rounded-lg w-full max-w-[744px] h-[216px] flex flex-col items-center justify-center px-8 mt-10 shadow-lg"
      >
        <h3
          className="font-['Core Sans D'] font-bold text-[#104B64] text-[48px] leading-[100%] mb-6"
        >
          Não tem cadastro?
        </h3>
        <a
          href="cadastro"
          className="bg-[#0990BA] rounded-[12px] text-white text-[18px] font-bold px-[64px] py-[11px] shadow-md"
        >
          Cadastra-se aqui
        </a>
      </div>
    </div>
  );
}
