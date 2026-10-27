"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { Menu, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";
import { NavLink } from "./selya/NavLink";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/produits", label: "Nos parfums" },
];

function CartLink({ onClick }: { onClick?: () => void }) {
  const { cartItems } = useCart();
  const count = cartItems.reduce((sum, item) => sum + (item.quantity ?? 0), 0);

  return (
    <NavLink
      href="/panier"
      onClick={onClick}
      aria-label={
        count > 0 ? `Panier, ${count} article${count > 1 ? "s" : ""}` : "Panier"
      }
      className="relative min-w-11 justify-center"
    >
      <ShoppingBag className="size-5" aria-hidden="true" />
      {count > 0 && (
        <span className="absolute top-1 right-0 flex size-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-gold-foreground">
          {count}
        </span>
      )}
    </NavLink>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
        {/* Logo + nom */}
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          <Image
            src="/images/selya-logo.png"
            alt=""
            width={44}
            height={44}
            className="size-10 rounded-full bg-black object-contain p-0.5 md:size-11"
          />
          <span className="font-serif text-2xl font-medium tracking-[0.25em] uppercase">
            Sélya
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <CartLink />

          {/* Menu mobile */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Ouvrir le menu"
                  className="size-11"
                >
                  <Menu className="size-6" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle className="font-serif text-2xl tracking-[0.2em] uppercase">
                    Sélya
                  </SheetTitle>
                </SheetHeader>
                <nav aria-label="Menu mobile" className="mt-2 px-4">
                  <ul className="divide-y divide-border">
                    {[...links, { href: "/panier", label: "Panier" }].map(
                      (link) => (
                        <li key={link.href}>
                          <NavLink
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="py-3 text-base"
                          >
                            {link.label}
                          </NavLink>
                        </li>
                      )
                    )}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
