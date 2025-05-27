import BtnCadastrar from "./components/BtnCadastrar";
import { Search } from "lucide-react";


type CardData = {
  img: string;
  title: string;
  description: string;
};

const cards: CardData[] = [
  { 
    img: "Group1.png",
    title: "Escolha o formulário",
    description: "Mais de 200 opções de formulários disponíveis para você escolher.",
  },
  {
    img: "Group2.png",
    title: "Adicione os envolvidos",
    description: "Escolha os envolvidos e os convide para fazer parte do formulário.",
  },
  {
    img: "Group3.png",
    title: "Edite os termos",
    description: "Faça a edição cláusula a cláusula em conjunto com os envolvidos.",
  },
  {
    img: "Group4.png",
    title: "Assine e pronto!",
    description: "Assine e salve seu formulário eletrônico finalizado.",
  },
];

export default function Home() {
  return (
    <>

      <section className="bg-white py-32">
        <div className="max-w-[1158px] h-[363px] mx-auto flex justify-between px-4">
          <div className="w-1/2 flex flex-col justify-center">
            <h2 className="text-5xl font-bold font-roboto mb-4">
              Contrato <span className="text-[#104B64]">aqui</span>
            </h2>
            <p className="text-[20px] font-roboto text-gray-700 mr-8 mt-6 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel soluta ex nisi
              consequatur repellendus earum provident non obcaecati. Deserunt nam sint nulla cumque
              quasi nisi saepe eius consequuntur? Minima.
            </p>
            <BtnCadastrar href="#">Cadastrar</BtnCadastrar>

          </div>
          <div className="w-1/2 flex justify-end">
            <img src="/home.png" alt="mulher" className="w-[563px] h-[363px] object-cover" />
          </div>
        </div>
      </section>


      <section className="bg-[#f6f2fa] w-full py-12 flex items-center justify-center">
        <div className="w-full px-[18px] flex items-center justify-center">
          <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-12 w-full max-w-[1220px] h-auto md:h-[349px] mx-auto">
            {cards.map((card, idx) => (
              <article
                key={idx}
                className="bg-[#104B64] w-full md:w-[239px] h-auto md:h-[349px] text-white flex flex-col items-center p-4 rounded-lg"
              >
                <img
                  src={`/${card.img}`}
                  alt={card.title}
                  className="w-full h-[150px] object-cover mb-4 rounded-md"
                />
                <h2 className="text-[22px] font-bold mb-2 text-center">{card.title}</h2>
                <p className="text-[16px] font-roboto text-center">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12 flex flex-col items-center justify-center">
        <div className="w-full max-w-[1220px] px-[18px] flex flex-col items-center">
          <h2 className="text-[32px] font-bold mb-2 text-center">
            Formulários disponíveis
          </h2>
          <p className="text-[20px] font-roboto text-gray-700 mb-8 text-center">
            Escolha o seu formulário e comece a editar agora
          </p>


          <div className="relative w-[781px] h-[48px] mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Procure o seu formulário aqui"
              className="w-full h-full pl-10 pr-4 border-2 border-[#DFDFDF] rounded-[8px] placeholder-gray-400 focus:outline-none focus:border-[#104B64] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.08),_0px_0px_4px_0px_rgba(0,0,0,0.04)]"
            />
          </div>


          <div className="w-[781px] font-roboto text-[16px] flex justify-center gap-12">
            <div className="w-[781px] flex flex-col gap-2">
              <ul className="font-roboto font-normal text-[16px] leading-[36px] tracking-normal align-middle">
                <li><a href="arrendamento" className="hover:text-[#0990BA] transition">Arrendamento rural</a></li>
                <li><a href="baba" className="hover:text-[#0990BA] transition">Babá</a></li>
                <li><a href="cessao" className="hover:text-[#0990BA] transition">Cessão de posse de imóvel</a></li>
                <li><a href="compra" className="hover:text-[#0990BA] transition">Compra e venda </a></li>
                <li><a href="imovel" className="hover:text-[#0990BA] transition">Compra e venda de imóvel</a></li>
                <li><a href="rural" className="hover:text-[#0990BA] transition">Compra e venda de imóvel rural</a></li>
                <li><a href="terreno" className="hover:text-[#0990BA] transition">Compra e venda de terreno</a></li>
                <li><a href="veiculo" className="hover:text-[#0990BA] transition">Compra e venda de veículo</a></li>
                <li><a href="divida" className="hover:text-[#0990BA] transition">Confissão e renegociação de dívida</a></li>
                <li><a href="idoso" className="hover:text-[#0990BA] transition">Cuidador de idoso</a></li>
                <li><a href="dinheiro" className="hover:text-[#0990BA] transition">Doação de dinheiro</a></li>
                <li><a href="doacao" className="hover:text-[#0990BA] transition">Doação de imóvel</a></li>
                <li><a href="domestica" className="hover:text-[#0990BA] transition">Empregada doméstica</a></li>
                <li><a href="empreitada" className="hover:text-[#0990BA] transition">Empreitada</a></li>
                <li><a href="emprestimo" className="hover:text-[#0990BA] transition">Empréstimo</a></li>
              </ul>
            </div>

            <div className="w-[781px] flex flex-col gap-2">
              <ul className="font-roboto font-normal text-[16px] leading-[36px] tracking-normal align-middle">
                <li><a href="hospedagem" className="hover:text-[#0990BA] transition">Hospedagem</a></li>
                <li><a href="comercial" className="hover:text-[#0990BA] transition">Locação comercial</a></li>
                <li><a href="residencial" className="hover:text-[#0990BA] transition">Locação residencial</a></li>
                <li><a href="veiculo" className="hover:text-[#0990BA] transition">Locação de veículo</a></li>
                <li><a href="temporada" className="hover:text-[#0990BA] transition">Locação para temporada</a></li>
                <li><a href="extrajudicial" className="hover:text-[#0990BA] transition">Notificação extrajudicial</a></li>
                <li><a href="antenupcial" className="hover:text-[#0990BA] transition">Pacto antenupcial</a></li>
                <li><a href="empresarial" className="hover:text-[#0990BA] transition">Parceria empresarial</a></li>
                <li><a href="salao" className="hover:text-[#0990BA] transition">Parceria Salão</a></li>
                <li><a href="permuta" className="hover:text-[#0990BA] transition">Parceiro permuta de imoveis</a></li>
                <li><a href="servico" className="hover:text-[#0990BA] transition">Prestação de serviços</a></li>
                <li><a href="instrumento" className="hover:text-[#0990BA] transition">Procuração por instrumento</a></li>
                <li><a href="representacao" className="hover:text-[#0990BA] transition">Particular representação comercial</a></li>
                <li><a href="jogador" className="hover:text-[#0990BA] transition">Representação de jogador de futebol</a></li>
                <li><a href="testamento" className="hover:text-[#0990BA] transition">Sociedade limitada testamento união estável</a></li>
              </ul>
            </div>

          </div>
          <ul className="w-[332px] h-[48px] mt-[24px] rounded-xl bg-[#0990BA] text-white
                 flex items-center justify-center px-16 py-3 hover:bg-[#087ca2] transition">
            <li><a href="btn" className="hover:text-[#0990BA] transition">Veja mais formulários aqui</a></li>
          </ul>
        </div>
      </section>

      <section className="bg-[#104B64]/[0.1] w-full py-12 flex items-center justify-center">
        <div className="w-full  flex items-center justify-center">
          <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-12 w-full max-w-[1220px] h-auto md:h-[481px] mx-auto items-center">

            <img src="/Rectangle.png" alt="mesa de trabalho" className="w-[601px] h-[401px] -ml-50 " />

            <div className="flex flex-col justify-start md:items-start text-left max-w-[594px]">
              <h2 className="text-5xl font-bold font-roboto -mt-10 mb-4">
                Lorem ipsum dolor
              </h2>
              <p className="text-[20px] text-[#333]  mb-6 w-full max-w-[594px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non mi sed.
              </p>
              <BtnCadastrar href="#">Cadastrar</BtnCadastrar>

            </div>


          </div>
        </div>
      </section>




    </>
  );
}
