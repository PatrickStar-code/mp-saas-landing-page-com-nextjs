import React from "react";
import { Button } from "./ui/button";

export default function Callout() {
  return (
    <div className="mt-[87px] flex items-center justify-center flex-col mb-[7.375rem] px-4">
      <h1 className="font-GeistSans font-bold text-[40px] sm:text-[50px] md:text-[60px] leading-[1.2] text-center">
        Simplique seus Estudos
      </h1>
      <h2 className="font-GeistSans font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[1.5] text-[#6B7280] text-center break-words max-w-full md:max-w-[50rem]">
        Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e
        receba todos os meses um ebook novo de programação.
      </h2>

      <div className="mt-10 md:mt-[5rem] flex items-center flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-[20rem] sm:max-w-none">
          <input
            type="email"
            placeholder="Coloque seu e-mail"
            className="w-full sm:w-[17.5rem] border-[#CCCCCC] h-[2.5rem] border-2 rounded-lg px-2"
          />
          <Button size={"lg"}>Assine Agora</Button>
        </div>
        <h4 className="font-light text-GeistSans text-[#6B7280] text-[0.7rem] leading-[1.5] text-center">
          Comece sua assinatura agora mesmo. Cancele quando quiser
        </h4>
      </div>
    </div>
  );
}
