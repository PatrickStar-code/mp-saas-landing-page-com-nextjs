"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import DropdownAvatar from "./dropdownAvatar";
import { Session } from "next-auth";

// Define o tipo da sessão
export type UserSession = {
  user: {
    name: string;
    email: string;
    id: string;
  };
  expires: string;
};

type NavbarContainerProps = {
  session: Session | null;
};

export default function NavbarContainer({ session }: NavbarContainerProps) {
  const links = [
    { name: "Funcionamento", href: "#funcionamento" },
    { name: "Preço", href: "#preco" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            href="/"
            replace
            className="flex items-center gap-2 font-GeistMono text-bold text-[20px]  "
          >
            <Image src="/images/icon.svg" alt="Logo" width={24} height={24} />
            LivroSaaS
          </Link>
        </motion.div>

        {/* Links grandes */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((item, index) => (
            <Link href={item.href} key={item.name} replace>
              <motion.p
                className="font-GeistMono text-[14px] hover:underline leading-[40px] font-normal hover:text-gray-600"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </motion.p>
            </Link>
          ))}
          {session ? (
            <DropdownAvatar session={session} />
          ) : (
            <Link href="/login">
              <Button
                className="hidden md:block bg-white text-black hover:bg-gray-200  font-GeistSans rounded-lg text-[14px] border-[#CCCCCC] border-2 "
                size={"lg"}
              >
                Login
              </Button>
            </Link>
          )}
        </div>

        {/* Botão de Login */}

        {/* Botão de menu (mobile) */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Dropdown para Mobile */}
          {session && <DropdownAvatar session={session} />}
          {/* Botão de menu */}
          <button
            className="text-gray-800 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
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
            {!session && (
              <li>
                <Link href="/login">
                  <Button
                    className="bg-white text-black hover:bg-gray-200 rounded-lg text-[14px] border-[#CCCCCC] font-GeistSans border-2 "
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Button>
                </Link>
              </li>
            )}
          </ul>
        </motion.div>
      )}
    </>
  );
}
