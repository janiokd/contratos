'use client';

import { MdEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contato() {
  return (
    <> 
      <section className="bg-white py-16 md:py-32">
        <div className="max-w-[1458px] mx-auto flex flex-col md:flex-row items-center mb-10 px-4 gap-10">
          <div className="w-full md:w-1/2 flex flex-col justify-center md:pr-8 text-center md:text-left">
            <h2 className="text-4xl text-[#104B64] md:text-5xl font-bold font-roboto mb-4">
              Contato
            </h2>
            <p className="text-[24px] md:text-[20px] font-roboto text-gray-700 mt-4 md:mt-6 mb-6 md:mb-8">
              Ainda ficou com dúvidas? Entre em contato com a gente através dos canais abaixo e vamos conversar.
            </p>
 
            <div className="flex flex-col items-center md:items-start gap-4">
              <a
                href="mailto:contato@exemplo.com"
                className=" text-[24px] md:text-[20px] font-roboto text-gray-700   flex items-center  hover:underline"
              >
                <MdEmail className="text-2xl mr-2 text-[#0990BA]" />
                contato@exemplo.com
              </a>

              <a
                href="https://wa.me/5599999999999"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-[24px] md:text-[20px] font-roboto text-gray-700 flex items-center  hover:underline"
              >
                <FaWhatsapp className="text-2xl mr-2 text-[#0990BA]" />
                (99) 99999-9999
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
