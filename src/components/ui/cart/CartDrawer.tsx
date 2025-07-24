"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export function CartDrawer() {
  const [open, setOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-sm font-medium" onClick={() => setOpen(true)}>
          Voir le panier ({cartItems.length})
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md fixed right-0 top-0 h-full w-[350px] p-6 overflow-auto rounded-none shadow-lg border-l bg-white">
        <h2 className="text-lg font-semibold mb-4">Votre panier</h2>
        {cartItems.length === 0 ? (
          <p className="text-sm text-muted-foreground">Panier vide.</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name}</span>
                <span>{item.price} €</span>
              </li>
            ))}
          </ul>
        )}
      </DialogContent>
    </Dialog>
  );
}
