import { auth } from "@/auth";
import NavbarContainer from "./navbarContainer";
import { redirect } from "next/navigation";

export default async function Navbar() {
  const session = await auth();

  if (!session) {
    return redirect("/Main");
  }

  return (
    <nav className="w-full mt-6">
      <NavbarContainer session={session} />
    </nav>
  );
}
