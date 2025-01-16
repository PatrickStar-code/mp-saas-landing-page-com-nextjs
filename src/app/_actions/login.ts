"use server"
import { signIn } from "@/auth";

import { AuthError } from "next-auth";
import { LoginType } from "../_components/loginForm";
import { redirect } from "next/navigation";

export default async function Login(data: LoginType) {
    const { email, password } = data;

    try {
        await signIn("credentials", {
            email,
            password,
        });
    } catch (e) {
        console.error(e);
        if (e instanceof AuthError && e.type === "CredentialsSignin") {
            throw new Error("Credenciais inválidas");
        }
    }
    redirect("/");


}