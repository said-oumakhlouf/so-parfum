"use client";

import QuantitySelector from "@/components/ui/quantity/QuantitySelector";
import { useCart } from "@/context/CartContext";
import { Parfum } from "@/types";
import { useState } from "react";
import { SelyaButton } from "./SelyaButton";

/** Bloc d'achat de la page produit : stock, quantité et ajout au panier. */
export function ProductPurchase({ parfum }: { parfum: Parfum }) {
  const { cartItems, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const inCart = cartItems.find((item) => item.id === parfum.id)?.quantity ?? 0;
  const remaining = Math.max(0, parfum.stock - inCart);
  const soldOut = remaining <= 0;
  const safeQuantity = Math.min(quantity, Math.max(remaining, 1));

  return (
    <div className="space-y-5">
      <p
        className={`flex items-center gap-2 text-sm font-medium ${
          soldOut
            ? "text-destructive"
            : remaining <= 2
              ? "text-amber-800"
              : "text-muted-foreground"
        }`}
      >
        <span
          aria-hidden="true"
          className={`size-2 rounded-full ${
            soldOut
              ? "bg-destructive"
              : remaining <= 2
                ? "bg-amber-700"
                : "bg-emerald-700"
          }`}
        />
        {soldOut
          ? "Épuisé"
          : remaining <= 2
            ? `Plus que ${remaining} en stock`
            : "En stock"}
      </p>

      <div className="max-w-xs">
        <QuantitySelector
          value={safeQuantity}
          onChange={setQuantity}
          max={remaining}
          disabled={soldOut}
          label={parfum.name}
        />
      </div>

      <SelyaButton
        className="w-full sm:w-auto sm:min-w-64"
        disabled={soldOut}
        onClick={() => {
          addToCart({ ...parfum, quantity: safeQuantity });
          setQuantity(1);
        }}
      >
        {soldOut ? "Indisponible" : "Ajouter au panier"}
      </SelyaButton>

      {inCart > 0 && (
        <p className="text-xs text-muted-foreground">
          {inCart} déjà dans votre panier
        </p>
      )}
    </div>
  );
}
