'use client';

import { ChangeEvent } from 'react';

interface InputProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  className?: string;
}

export default function Input({
  label,
  id,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
  className = '',
}: InputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`flex flex-col mt-[24px] ${className}`}>
      <label htmlFor={id} className="font-roboto font-bold text-[20px]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`h-[56px] px-4 rounded-[16px] shadow-[0px_8px_16px_0px_#00000014] mt-1 ${
          error ? 'border border-[#C42D2D]' : ''
        }`}
      />
      {error && <p className="text-sm text-[#C42D2D] mt-1">{error}</p>}
    </div>
  );
}
