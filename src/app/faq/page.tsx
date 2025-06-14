'use client';

import DropdownFAQ from '.././components/DropdownFAQ';

export default function Faq() {
  return (
    <>
      <section className="bg-white py-16 md:py-32">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          
          <div className="md:flex md:items-center md:gap-8">
          
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold font-roboto mb-4">
                Perguntas <br /> <span className="text-[#104B64]">frequentes</span>
              </h2>
              <p className="text-[18px] md:text-[20px] font-roboto text-gray-700 mt-4 md:mt-6 mb-6 md:mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel soluta ex nisi
                consequatur repellendus earum provident non obcaecati. Deserunt nam sint nulla cumque
                quasi nisi saepe eius consequuntur? Minima.
              </p>
            </div>

          
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
              <img
                src="/faq.png"
                alt="Imagem de FAQ"
                className="w-full max-w-[563px] h-auto object-cover rounded-md"
              />
            </div>
          </div>

          
          <div className="mt-16 space-y-8">
            <DropdownFAQ
              title="Lorem ipsum"
              description={`Lorem ipsum dolor sit amet...`}
            />
            <DropdownFAQ
              title="Lorem ipsum"
              description={`Lorem ipsum dolor sit amet...`}
            />
          </div>
        </div>
      </section>

    </>
  );
}
