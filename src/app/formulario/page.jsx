'use client';

import { useState } from 'react';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import DropdownCard from '../components/DropdownCard'; 

export default function Formulario() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <>
            <section className="bg-white py-32">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-bold font-roboto mb-4">
                        Formulários <span className="text-[#104B64]">eletrônicos</span>
                    </h2>
                    <p className="text-[20px] font-roboto text-gray-700 mr-8 mt-6 mb-8 max-w-[466px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe voluptates, tempore placeat ea
                        voluptatem quo quasi nostrum illo consectetur ducimus quas inventore ipsum quam unde sequi, commodi eaque sint.
                    </p>
                </div>
                <div className="flex w-[1452px] h-[48px] mx-auto mb-4 items-center">
                    <div className="relative w-[1210px] h-full">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Digite aqui"
                            className="w-full h-full pl-10 pr-4 border-2 border-[#DFDFDF] rounded-[8px] placeholder-gray-400 focus:outline-none focus:border-[#104B64] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.08),_0px_0px_4px_0px_rgba(0,0,0,0.04)]"
                        />
                    </div>
                    <ul className="w-[258px] h-full ml-4 rounded-xl bg-[#0990BA] ml-5 text-white flex items-center justify-center hover:bg-[#087ca2] transition">
                        <li>
                            <a href="btn" className="hover:text-[#0990BA] transition">
                                Buscar
                            </a>
                        </li>
                    </ul>
                </div>


                <DropdownCard 
                    title="Arrendamento Rural"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Babá"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Caessão de posse de imóvel"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Compra e venda"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Compra e venda de imóvel"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Compra e venda de imóvel rural"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Compra e venda de terreno"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Compra e venda de veículo"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Confissão e renegociação de dívida"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Cuidador de idoso"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Doação  de dinheiro"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Empregada doméstica"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Empreitada"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Emprestimo de dinheiro"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Hospedagem"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Locação comercial"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Locação residencial"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Locação de veículo"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Locação de temporada"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Notificação extrajudicial"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Pacto antenupcial"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Parceria empresarial"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Parceria salão"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Parceria permuta de imóveis"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Prestação de serviço"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Procuração por instrumento"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Particular representação"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Representação de jogador de futebol"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />

                <DropdownCard 
                    title="Sociedade limitada testamento união estável"
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam quibusdam error recusandae magni officiis, quos, dolor voluptas dolorem ea deserunt sequi dolorum nostrum tempore doloribus facilis vitae voluptates cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, in consequatur. Tempora ad omnis voluptatum, fuga atque ipsum est necessitatibus laudantium, quia blanditiis ut praesentium saepe odio totam et dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor odio fuga. Nostrum, autem! Amet mollitia ut id tenetur quia recusandae quo cumque perferendis, eum accusamus. Maiores nam eaque quidem?`}
                    price="R$9,90"
                    imageSrc="/contrato.png"
                    btnHref="#"
                />








            </section>
        </>
    );
}
