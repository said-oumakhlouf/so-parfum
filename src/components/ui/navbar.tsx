"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Home, Info, Package, Phone, ShoppingBag } from "lucide-react";
import { NavLink } from "./selya/NavLink";

export function Navbar() {
  return (
    <header className="w-full border-b shadow-sm px-4 py-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <NavLink href="/">
          <img
            src="/images/selya-logo.png"
            alt="Logo Sélya"
            className="w-24 h-24 object-contain hover:scale-105 transition-transform duration-300 bg-black p-1 rounded-full"
          />
        </NavLink>
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex gap-6">
            <NavigationMenuItem>
              <NavLink href="/">
                <Home className="w-4 h-4" />
                Accueil
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink href="/produits">
                <Package className="w-4 h-4" />
                Produits
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink href="/contact">
                <Phone className="w-4 h-4" />
                Contact
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink href="/about">
                <Info className="w-4 h-4" />À propos
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink href="/panier">
                <ShoppingBag className="w-4 h-4" />
                Panier
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
