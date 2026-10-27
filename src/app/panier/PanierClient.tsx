"use client";

import { SelyaButton } from "@/components/ui/selya/SelyaButton";
import { useCart } from "@/context/CartContext";
import { formatPrice, parsePrice } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PanierClient() {
  const { cartItems, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + parsePrice(item.price) * (parseInt(String(item.quantity)) || 0),
    0
  );

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
      <h1 className="mb-12 text-center font-serif text-5xl font-light md:text-6xl">
        Votre panier
      </h1>

      {cartItems.length === 0 ? (
        <div className="space-y-8 border border-border bg-card px-6 py-20 text-center">
          <p className="text-muted-foreground">Votre panier est vide.</p>
          <SelyaButton asChild>
            <Link href="/produits">Découvrir nos parfums</Link>
          </SelyaButton>
        </div>
      ) : (
        <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
          <ul className="divide-y divide-border border border-border bg-card">
            {cartItems.map((item) => {
              const quantity = parseInt(String(item.quantity)) || 0;
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-4 p-4 md:gap-6 md:p-5"
                >
                  <div className="relative size-24 shrink-0 overflow-hidden bg-secondary md:size-28">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h2 className="font-serif text-xl font-medium md:text-2xl">
                      {item.name}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {formatPrice(parsePrice(item.price))} × {quantity}
                    </p>
                    <p className="text-base font-medium text-gold">
                      {formatPrice(parsePrice(item.price) * quantity)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Retirer ${item.name} du panier`}
                    className="flex size-11 shrink-0 items-center justify-center text-muted-foreground transition-colors duration-200 hover:text-destructive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    <Trash2 className="size-5" aria-hidden="true" />
                  </button>
                </li>
              );
            })}
          </ul>

          <aside
            aria-label="Récapitulatif de la commande"
            className="h-fit space-y-5 border border-border bg-card p-6"
          >
            <h2 className="font-serif text-2xl font-medium">Récapitulatif</h2>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Sous-total</dt>
                <dd className="font-medium">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Livraison</dt>
                <dd className="font-medium">Offerte</dd>
              </div>
              <div className="flex justify-between border-t border-border pt-3 text-base">
                <dt className="font-medium">Total</dt>
                <dd className="font-semibold">{formatPrice(subtotal)}</dd>
              </div>
            </dl>
            <SelyaButton className="w-full">Passer au paiement</SelyaButton>
          </aside>
        </div>
      )}
    </main>
  );
}
