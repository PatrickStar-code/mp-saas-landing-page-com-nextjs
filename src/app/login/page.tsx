"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../_components/ui/button";
import { Input } from "../_components/ui/input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main
      className="h-screen w-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/images/Background.png')",
        backgroundSize: "cover",
      }}
    >
      {/* Logo com animação */}
      <motion.div
        className="flex items-center gap-2 font-GeistMono font-semibold text-lg mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="flex gap-1 items-center">
          <Image src="/images/icon.svg" alt="Logo" width={32} height={32} />
          <span className="text-black">LivroSaaS</span>
        </Link>
      </motion.div>

      {/* Card de Login */}
      <motion.div
        className="bg-white p-8 rounded-lg border border-gray-300 shadow-lg w-full max-w-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Título */}
        <h2 className="text-2xl font-bold  mb-2 ">Boas Vindas</h2>
        <p className="text-sm text-gray-600  mb-6">
          Faça seu login com email e senha
        </p>

        {/* Formulário */}
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              placeholder="eu@exemplo.com.br"
              className="w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Senha
            </label>
            <Input
              type="password"
              id="password"
              placeholder="********"
              className="w-full"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Login
          </Button>
        </form>

        {/* Termos */}
        <p className="text-xs text-gray-500 text-center mt-8 ">
          Ao continuar, você concorda com nossos{" "}
          <a href="#" className="text-blue-500 underline">
            Termos de Uso
          </a>{" "}
          e nossa{" "}
          <a href="#" className="text-blue-500 underline">
            Política de Privacidade
          </a>
          .
        </p>
      </motion.div>

      {/* Link para registro */}
      <p className="text-sm text-center mt-6">
        Não possui cadastro?{" "}
        <Link
          href="/registro"
          className="text-bold text-black font-GeistMono underline"
        >
          Registre-se
        </Link>
      </p>
    </main>
  );
}
