import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Book, LogOut, Pencil, User } from "lucide-react";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import Link from "next/link";

export default function DropdownAvatar({ session }: { session: Session }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>
            {session.user?.name?.[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{session.user?.name ?? ""}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/user/perfil" replace>
          <DropdownMenuItem className="cursor-pointer">
            <User className="ml-2 h-4 w-4" /> Perfil
          </DropdownMenuItem>
        </Link>
        <Link href="/user/livroMes" replace>
          <DropdownMenuItem className="cursor-pointer">
            <Book className="ml-2 h-4 w-4" /> Livro do Mês
          </DropdownMenuItem>
        </Link>
        <Link href="/user/minhaAssinatura" replace>
          <DropdownMenuItem className="cursor-pointer">
            <Pencil className="ml-2 h-4 w-4" /> Minha Assinatura
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </Link>

        <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
          <LogOut className="ml-2 h-4 w-4" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
