'use client';

import DropdownFAQ from '../components/DropdownFAQ';

export default function Faq() {
  return (
    <>
      <section className="bg-white py-16 md:py-32">
        <div className="max-w-[1458px] mx-auto flex flex-col md:flex-row items-center mb-10 px-4 gap-10">
          <div className="w-full md:w-1/2 flex flex-col justify-center md:pr-8 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-roboto mb-4">
              Perguntas <br /> <span className="text-[#104B64]">frequentes</span>
            </h2>
            <p className="text-[18px] md:text-[20px] font-roboto text-gray-700 mt-4 md:mt-6 mb-6 md:mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel soluta ex nisi
              consequatur repellendus earum provident non obcaecati. Deserunt nam sint nulla cumque
              quasi nisi saepe eius consequuntur? Minima.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/faq.png"
              alt="Imagem de FAQ"
              className="w-full max-w-[563px] h-auto object-cover rounded-md"
            />
          </div>
        </div>

        <DropdownFAQ
          title="Lorem ipsum"
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
        />

        <DropdownFAQ
          title="Lorem ipsum"
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
        />
      </section>
    </>
  );
}
