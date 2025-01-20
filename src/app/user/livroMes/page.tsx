import React from "react";
import { auth } from "@/auth";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import { AlertTriangle } from "lucide-react";

export default async function LivroMesPage() {
  // Obtenha a sessão do usuário
  const session = await auth();

  // Verifique se a sessão e o usuário existem
  if (!session?.user?.id) {
    console.error("Sessão ou usuário ausente");
    redirect("/");
    return;
  }

  const user = await db.user.findUnique({
    where: {
      id: Number(session.user.id),
    },
  });
  return (
    <div
      className="min-h-screen w-full "
      style={{
        backgroundImage: "url('/images/Background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex flex-col px-4 py-4 justify-center">
        <h1 className="mt-[4.5rem] font-bold text-3xl">Livro do Mês</h1>
        {user?.Signature ? (
          <p>{user.Signature}</p>
        ) : (
          <div
            className="bg-[#FFC744] opacity-40 border text-black border-amber-400 w-full rounded flex  px-6 py-6 mt-4 mb-4"
            role="alert"
          >
            <AlertTriangle className="w-5 h-5 mr-2  opacity-100" />
            <p className="text-md ">
              Você não possui nenhuma assinatura ativa. Que tal assinar agora?
            </p>
          </div>
        )}
      </div>{" "}
    </div>
  );
}
