'use client';
import React, { ReactNode } from 'react';
import Link from 'next/link';

interface BtnComprarProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}

export default function BtnComprar({ children, href, onClick }: BtnComprarProps) {
  const commonClasses = "w-[158px] h-[48px] rounded-xl bg-[#0990BA] text-white flex items-center justify-center hover:bg-[#087ca2] transition";

  if (href) {
    return (
      <Link href={href} className={commonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={commonClasses}>
      {children}
    </button>
  );
}
