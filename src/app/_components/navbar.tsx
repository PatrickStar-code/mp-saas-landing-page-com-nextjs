"use client";
// Importações necessárias
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Funcionamento", href: "#funcionamento" },
    { name: "Preço", href: "#preco" },
  ];

  return (
    <nav className="w-full mt-6">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Image src="/images/icon.svg" alt="Logo" width={24} height={24} />
          <a href="#inicio">LivroSaaS</a>
        </motion.div>

        {/* Links grandes */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="font-GeistMono text-[14px] leading-[40px] font-normal hover:text-gray-600"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
            </motion.a>
          ))}
          <Button
            className="hidden md:block bg-white text-black hover:bg-gray-200  font-GeistSans rounded-lg text-[14px] border-[#CCCCCC] border-2 "
            size={"lg"}
          >
            Login
          </Button>
        </div>

        {/* Botão de Login */}

        {/* Botão de menu (mobile) */}
        <button
          className="md:hidden text-gray-800 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-transparent shadow-md"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            {links.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="font-GeistMono text-[14px] leading-[40px] font-normal hover:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <Button
                className="bg-white text-black hover:bg-gray-200 rounded-lg text-[14px] border-[#CCCCCC] font-GeistSans border-2 "
                onClick={() => setIsOpen(false)}
              >
                Login
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
