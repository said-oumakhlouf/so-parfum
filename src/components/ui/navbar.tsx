"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Home, Info, Menu, Package, Phone, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import { NavLink } from "./selya/NavLink";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b shadow-sm px-4 py-3">
      <div className="max-w-6xl mx-auto">
        {/* Version mobile */}
        <div className="flex items-center justify-between md:hidden">
          <div className="flex-1"></div> {/* espace vide pour centrer */}
          <NavLink href="/">
            <img
              src="/images/selya-logo.png"
              alt="Logo Sélya"
              className="w-24 h-24 object-contain hover:scale-105 transition-transform duration-300 bg-black p-1 rounded-full"
            />
          </NavLink>
          <div className="flex-1 flex justify-end">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-4 space-y-4">
                  <NavLink href="/" onClick={() => setOpen(false)}>
                    Accueil
                  </NavLink>
                  <NavLink href="/produits" onClick={() => setOpen(false)}>
                    Produits
                  </NavLink>
                  <NavLink href="/contact" onClick={() => setOpen(false)}>
                    Contact
                  </NavLink>
                  <NavLink href="/about" onClick={() => setOpen(false)}>
                    À propos
                  </NavLink>
                  <NavLink href="/panier" onClick={() => setOpen(false)}>
                    Panier
                  </NavLink>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Version desktop */}
        <div className="hidden md:flex items-center justify-between">
          <NavLink href="/">
            <img
              src="/images/selya-logo.png"
              alt="Logo Sélya"
              className="md:w-28 md:h-28 object-contain hover:scale-105 transition-transform duration-300 bg-black p-1 rounded-full"
            />
          </NavLink>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              <NavigationMenuItem>
                <NavLink href="/">
                  <Home className="w-5 h-5 mr-1" />
                  Accueil
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink href="/produits">
                  <Package className="w-5 h-5 mr-1" />
                  Produits
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink href="/contact">
                  <Phone className="w-5 h-5 mr-1" />
                  Contact
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink href="/about">
                  <Info className="w-5 h-5 mr-1" />À propos
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavLink href="/panier">
            <ShoppingBag className="w-5 h-5" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}
