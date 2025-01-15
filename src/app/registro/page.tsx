import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import RegisterForm from "../_components/registerForm";
import { ToastContainer } from "react-toastify";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function RegisterPage() {
  const session = await auth();
  if (session) {
    return redirect("/");
  }

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

      <RegisterForm />

      {/* Link para Login */}
      <p className="text-sm text-center mt-6">
        Já possui cadastro?{" "}
        <Link
          href="/login"
          className="text-bold text-black font-GeistMono underline"
        >
          Faça o Login
        </Link>
      </p>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </main>
  );
}
