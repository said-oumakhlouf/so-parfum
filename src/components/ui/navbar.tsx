"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ShoppingBag, Home, Info, Phone, Package } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="w-full border-b shadow-sm px-4 py-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-lg font-semibold">
          So Parfum
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex gap-6">
            <NavigationMenuItem>
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <Home className="w-4 h-4" />
                Accueil
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/produits"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <Package className="w-4 h-4" />
                Produits
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                Contact
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/about"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <Info className="w-4 h-4" />À propos
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/panier"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <ShoppingBag className="w-4 h-4" />
                Panier
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
