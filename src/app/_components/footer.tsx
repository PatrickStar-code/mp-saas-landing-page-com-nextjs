import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white flex  flex-col items-center justify-center mt-[2.625rem] mb-[2.563rem] h-[9.875rem] gap-4">
      <div className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
        <Image src="/images/icon.svg" alt="Logo" width={24} height={24} />
        <a href="#inicio" className="font-GeistMono">
          LivroSaaS
        </a>
      </div>
      <span className="text-[#6B7280] font-light text-[12px]">
        © 2024 LivroSaaS. Todos os direitos reservados.
      </span>
    </footer>
  );
}
