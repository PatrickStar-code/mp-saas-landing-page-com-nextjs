import { Check } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function HowWorkSection() {
  return (
    <section className="bg-white flex flex-col items-center justify-center mb-[5.563rem]">
      <h2 className="font-GeistSans text-[40px] font-bold mt-[2.25rem]">
        Como Funciona?
      </h2>

      <div className="flex items-center gap-[3.875rem]">
        <Image
          src="/images/woman.svg"
          alt="woman"
          width={392}
          height={392}
        ></Image>
        <ul className="flex flex-col items-center font-geistSans font-normal text-[30px] gap-[2.188rem]">
          <li className="grid grid-cols-[auto_min-content] gap-6 items-center w-full max-w-[600px]">
            <span className="text-center">Acesso a 1 ebook por mês</span>
            <Check className="text-[#22C55E]" scale={1.5} strokeWidth={4} />
          </li>
          <li className="grid grid-cols-[auto_min-content] items-center w-full max-w-[600px]">
            <span className="text-center">Curadoria especial</span>
            <Check className="text-[#22C55E] font-bold" strokeWidth={4} />
          </li>
          <li className="grid grid-cols-[auto_min-content] items-center w-full max-w-[600px]">
            <span className="text-center">Cancele quando quiser</span>
            <Check className="text-[#22C55E] font-bold" strokeWidth={4} />
          </li>
        </ul>
      </div>
    </section>
  );
}
