import React from "react";

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
