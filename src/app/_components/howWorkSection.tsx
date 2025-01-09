import { Check } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function HowWorkSection() {
  return (
    <section className="bg-white h-auto md:h-[36.813rem] flex flex-col items-center justify-center px-4 mb-8">
      <h2 className="font-GeistSans text-[28px] sm:text-[35px] md:text-[40px] font-bold mt-8 sm:mt-[2.25rem] text-center">
        Como Funciona?
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-[3.875rem] mt-8">
        <Image
          src="/images/woman.svg"
          alt="woman"
          width={300}
          height={300}
          className="md:w-[392px] md:h-[392px]"
        />
        <ul className="flex flex-col items-start md:items-center font-GeistSans font-normal text-[20px] sm:text-[25px] md:text-[30px] gap-6 md:gap-[2.188rem]">
          <li className="grid grid-cols-[auto_min-content] gap-6 items-center w-full max-w-[600px]">
            <span className="text-left md:text-center">
              Acesso a 1 ebook por mês
            </span>
            <Check className="text-[#22C55E]" scale={1.5} strokeWidth={4} />
          </li>
          <li className="grid grid-cols-[auto_min-content] items-center w-full max-w-[600px]">
            <span className="text-left md:text-center">Curadoria especial</span>
            <Check className="text-[#22C55E] font-bold" strokeWidth={4} />
          </li>
          <li className="grid grid-cols-[auto_min-content] items-center w-full max-w-[600px]">
            <span className="text-left md:text-center">
              Cancele quando quiser
            </span>
            <Check className="text-[#22C55E] font-bold" strokeWidth={4} />
          </li>
        </ul>
      </div>
    </section>
  );
}
