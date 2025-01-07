import React from "react";
import { Button } from "./ui/button";

export default function Callout() {
  return (
    <div className="mt-[87px] flex items-center justify-center flex-col mb-12">
      <h1 className="font-GeistSans font-bold text-[60px] li leading-[87px] ">
        Simplique seus Estudos
      </h1>
      <h2 className="font-GeistSans font-normal text-[20px] leading-[35px] text-[´#6B7280] text-center break-words w-[50rem]">
        Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e
        receba todos os meses um ebook novo de programação.
      </h2>

      <div className="mt-[5rem] items-center flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <input
            type="email"
            placeholder="Coloque seu e-mail"
            className="w-[17.5rem] border-[#CCCCCC] h-[2.5rem] border-2 rouded-lg px-2"
          />
          <Button size={"lg"}>Assine Agora</Button>
        </div>
        <h4 className="font-light text-GeistSans text-[#6B7280] text-[0.7rem] leading-[2.188]">
          Comece sua assinatura agora mesmo. Cancele quando quiser
        </h4>
      </div>
    </div>
  );
}
