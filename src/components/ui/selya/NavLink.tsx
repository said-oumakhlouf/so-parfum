"use client";

import Link from "next/link";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors duration-200"
    >
      {children}
    </Link>
  );
}
