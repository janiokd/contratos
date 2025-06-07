'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

type DropdownCardProps = {
  title: string;
  description: string;
};
 
export default function DropdownCard({ title, description }: DropdownCardProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      
      <div
        className={`mx-auto flex justify-between items-center w-full max-w-7xl h-[64px] mb-4 px-6 rounded-[39px] cursor-pointer select-none transition-colors duration-300 ${
          dropdownOpen ? 'bg-[#104B64]' : 'bg-[#8568AC1A]'
        }`}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span
          className={`font-medium text-lg sm:text-xl transition-colors duration-300 ${
            dropdownOpen ? 'text-white' : 'text-[#000]'
          }`}
        >
          {title}
        </span>
        <FaChevronDown
          className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
            dropdownOpen ? 'rotate-180 text-white' : 'text-[#000]'
          }`}
        />
      </div>

      
      {dropdownOpen && (
        <div className="mx-auto w-full max-w-7xl bg-white rounded-[16px] p-6 text-gray-700 shadow-[0px_8px_16px_rgba(0,0,0,0.08)]">
          <p className="text-base sm:text-lg leading-relaxed">{description}</p>
        </div>
      )}
    </>
  );
}
