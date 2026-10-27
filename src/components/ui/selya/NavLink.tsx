"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
}

export function NavLink({
  href,
  children,
  onClick,
  className,
  "aria-label": ariaLabel,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "flex min-h-11 items-center gap-2 text-sm tracking-wide transition-colors duration-200 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
        isActive && "text-gold",
        className
      )}
    >
      {children}
    </Link>
  );
}
