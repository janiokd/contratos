import React, { ReactNode } from 'react';

interface BtnComprarProps {
  children: ReactNode;
  href: string;
}

export default function BtnComprar({ children, href }: BtnComprarProps) {
  return (
    <a
      href={href}
      className="w-[158px] h-[48px] rounded-xl bg-[#0990BA] text-white flex items-center justify-center hover:bg-[#087ca2] transition"
    >
      {children}
    </a>
  );
}
