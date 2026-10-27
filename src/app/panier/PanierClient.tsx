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
    <main className="mx-auto max-w-5xl px-4 py-10 pb-32 md:px-6 md:py-24 lg:pb-24">
      <h1 className="mb-8 text-center font-serif text-4xl font-light md:mb-12 md:text-6xl">
        Votre panier
      </h1>

      {cartItems.length === 0 ? (
        <div className="space-y-6 border border-border bg-card px-6 py-14 text-center md:py-20">
          <p className="text-sm text-muted-foreground">
            Votre panier est vide.
          </p>
          <SelyaButton asChild>
            <Link href="/produits">Découvrir nos parfums</Link>
          </SelyaButton>
        </div>
      ) : (
        <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
          <ul className="divide-y divide-border border border-border bg-card">
            {cartItems.map((item) => {
              const quantity = parseInt(String(item.quantity)) || 0;
              const unitPrice = parsePrice(item.price);
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-3 p-3 md:gap-6 md:p-5"
                >
                  <div className="relative size-16 shrink-0 overflow-hidden bg-secondary sm:size-20 md:size-28">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(min-width: 768px) 112px, 80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="truncate font-serif text-lg leading-tight font-medium md:text-2xl">
                      {item.name}
                    </h2>
                    <p className="mt-0.5 text-xs text-muted-foreground md:text-sm">
                      {formatPrice(unitPrice)} × {quantity}
                    </p>
                    <p className="mt-1 text-sm font-medium text-gold md:text-base">
                      {formatPrice(unitPrice * quantity)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Retirer ${item.name} du panier`}
                    className="flex size-10 shrink-0 items-center justify-center text-muted-foreground transition-colors duration-200 hover:text-destructive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:size-11"
                  >
                    <Trash2 className="size-[18px] md:size-5" aria-hidden="true" />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Récapitulatif complet : desktop */}
          <aside
            aria-label="Récapitulatif de la commande"
            className="hidden h-fit space-y-5 border border-border bg-card p-6 lg:block"
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

          {/* Barre compacte collée en bas : mobile et tablette */}
          <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
            <div className="mx-auto flex max-w-5xl items-center gap-4">
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">
                  Total · livraison offerte
                </p>
                <p className="text-lg leading-tight font-semibold">
                  {formatPrice(subtotal)}
                </p>
              </div>
              <SelyaButton className="ml-auto h-11 px-5">
                Payer
              </SelyaButton>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
