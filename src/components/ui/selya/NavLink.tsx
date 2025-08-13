import Link from "next/link";
import React from "react";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void; // ✅ On ajoute cette ligne
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick} // ✅ On passe l'événement
      className="flex items-center gap-2 hover:text-pink-500 transition-colors"
    >
      {children}
    </Link>
  );
}
