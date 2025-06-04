'use client';
import BtnComprar from "../components/BtnComprar";

export default function Cadastro() {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-white px-[141px] py-[120px]">
      
      <div className="w-auto h-auto">
         <h2
          className="font-[Core Sans D] font-bold font-[400] text-[64px] leading-[100%] tracking-[0%] text-[#104B64]"
          >Cadastro
          </h2>

        <p
          className="font-roboto font-[400] text-[24px] leading-[40px] tracking-[0%]  mt-[28px]"
         
        >Comece aqui o seu cadastro para ter acesso a plataforma
        </p>

        
        <p
          className="w-[467px] font-roboto font-[700] text-[19px]  mt-[28px]"
          
        >Selecione abaixo a opção mais adequada para você
        </p>

        
        <div className="flex flex-col gap-2 -mt-[24px]">
          <label
            htmlFor="pessoa-fisica"
            className="flex items-center gap-2 w-[180px] h-[88px] font-roboto font-[500] text-[16px] leading-[40px] cursor-pointer"
          >
            <input
              type="radio"
              id="pessoa-fisica"
              name="tipo-pessoa"
              className="w-5 h-5"
            />Pessoa Física
          </label>

          <label
            htmlFor="pessoa-juridica"
            className="flex items-center gap-2 w-[180px] h-[88px] font-roboto font-[500] text-[16px] leading-[40px] cursor-pointer -mt-10"
          >
            <input
              type="radio"
              id="pessoa-juridica"
              name="tipo-pessoa"
              className="w-5 h-5"
            />Pessoa Jurídica
          </label>
        </div>
        <p className="w-[467px] font-roboto font-[400] text-[14px]  text-[#C42D2D] -mt-[22px]">
            Obrigatório
        </p>
      </div>

      <p className="w-[467px] font-roboto font-[700] text-[16px] leading-[40px] tracking-[0%] mt-[24px]"
          
        >Digite aqui seu e-mail
        </p>
      
      <div className="w-[472px] h-[56px] rounded-[16px] p-4 flex flex-col justify-start shadow-[0px_8px_16px_0px_#00000014] shadow-[0px_0px_4px_0px_#0000000A]">
  
        <input
          type="email"
          id="email"
          name="email"
          placeholder="nome@email.com"
          className="w-full h-[56px] rounded-[16px] px-4"
          
        />
      </div>
      <p className="w-[467px] font-roboto font-[400] text-[14px]  text-[#C42D2D] mt-[20px] mb-[32px]">
            Obrigatório
        </p>

        <BtnComprar href="cadastroFisica">Continuar</BtnComprar>
      
    </div>
  );
}
