'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

type BtnCadastrarProps = {
  children: ReactNode;
  href: string;
};

export default function BtnCadastrar({ children, href }: BtnCadastrarProps) {
  return (
    <Link
      href={href}
      className="min-w-[150px] h-[44px] rounded-xl bg-[#0990BA]  text-white 
                 flex items-center justify-center px-4 hover:bg-white hover:text-[#104B64] transition text-sm"
    >
      {children}
    </Link>
  );
}
