"use server"

import db from "@/lib/db";
import { redirect } from "next/navigation";
import { hashSync } from "bcrypt-ts";
import { RegisterType } from "../_components/registerForm";


export async function Register(formData: RegisterType) {
    const { name, email, password } = formData;
    const passwordHash = await hashSync(password, 10);

    const existingUser = await db.user.findUnique({
        where: { email },
    });

    if (existingUser) {
        throw new Error("Email ja existe");
    }

    const user = await db.user.create({
        data: {
            name,
            email,
            password: passwordHash,
        },
    });

    setTimeout(() => {
        redirect("/login");
    }, 3000);

    return user;



}
