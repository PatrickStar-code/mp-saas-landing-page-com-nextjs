import { auth } from "@/auth";
import NavbarContainer from "./navbarContainer";

export default async function Navbar() {
  const session = await auth();

  if (!session) {
  }

  return (
    <nav className="w-full mt-6">
      <NavbarContainer session={session} />
    </nav>
  );
}
