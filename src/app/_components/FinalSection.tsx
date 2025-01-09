import React from "react";
import { Button } from "./ui/button";

export default function FinalSection() {
  return (
    <div className="w-full bg-white flex items-center justify-center flex-col mt-16 md:mt-[6.75rem] gap-6 md:gap-[2.625rem] px-4">
      <div className="text-center">
        <h1 className="font-bold text-[32px] sm:text-[45px] md:text-[60px]">
          Pronto Para Mudar Sua Vida
        </h1>
        <h2 className="font-normal text-[16px] sm:text-[18px] md:text-[20px] mt-4 md:mt-[9px] text-center break-words">
          Faça como milhares de pessoas. Assine nosso produto e <br />
          tenha garantido seus estudos
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <Button className="w-full max-w-[20.75rem]">Assine Agora</Button>
        <h4 className="mt-4 md:mt-[9px] font-light text-[10px] sm:text-[12px] md:text-[0.625rem] text-center">
          Comece sua assinatura agora mesmo. Cancele quando quiser
        </h4>
      </div>
    </div>
  );
}
