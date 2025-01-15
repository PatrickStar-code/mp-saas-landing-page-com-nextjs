"use server"
import { signIn } from "@/auth";

import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { LoginType } from "../_components/loginForm";

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