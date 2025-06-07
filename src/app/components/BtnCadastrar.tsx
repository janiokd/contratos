'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

type BtnCadastrarProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

export default function BtnCadastrar({ children, href, className = '' }: BtnCadastrarProps) {
  return (
    <Link
      href={href}
      className={`h-[44px] rounded-xl flex items-center justify-center text-sm px-6
                 transition duration-200 bg-[#0990BA] text-white hover:bg-white hover:text-[#104B64]
                 ${className}`}
    >
      {children}
    </Link>
  );
}

