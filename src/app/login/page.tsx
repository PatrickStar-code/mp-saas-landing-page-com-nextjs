"use ";

import Link from "next/link";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { ToastContainer } from "react-toastify";
import LoginForm from "../_components/loginForm";

export default async function LoginPage() {
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
      <LoginForm />
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
