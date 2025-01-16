"use client";
import React from "react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Register } from "../_actions/register";
import { toast } from "react-toastify";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";

const registerSchema = z.object({
  name: z
    .string()
    .nonempty("O nome é obrigatório")
    .min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Formato de e-mail inválido"),
  password: z
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(20, "A senha deve ter no máximo 20 caracteres"),
});

export type RegisterType = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: RegisterType) {
    try {
      setLoading(true);
      await Register(data);
      toast.success("Conta criada com sucesso");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message as string);
    } finally {
      reset();
      setLoading(false);
    }
  }
  return (
    <>
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
      <motion.div
        className="bg-white p-8 rounded-lg border border-gray-300 shadow-lg w-full max-w-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Título */}
        <h2 className="text-2xl font-bold  mb-2 ">Cadastre-se</h2>
        <p className="text-sm text-gray-600  mb-6">
          Faça seu cadastro gratuitamente
        </p>

        {/* Formulário */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nome
            </label>
            <Input
              type="text"
              id="name"
              placeholder="Fulano de Tal"
              className="w-full"
              required
              {...register("name")}
            />

            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
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
              {...register("email")}
            />

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
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
              {...register("password")}
            />

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Cadastrando..." : "Cadastrar"}
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
    </>
  );
}
