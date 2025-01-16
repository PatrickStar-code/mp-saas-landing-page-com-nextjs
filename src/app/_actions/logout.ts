import { signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function Logout() {
    try {
        await signOut();
        redirect('/');
    } catch (e) {
        throw e;
    }
}