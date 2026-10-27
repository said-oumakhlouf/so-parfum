"use client";
import QuantitySelector from "@/components/ui/quantity/QuantitySelector";
import { useCart } from "@/context/CartContext";
import { formatPrice, parsePrice } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { SelyaButton } from "./SelyaButton";

interface Parfum {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  quantity?: number;
  stock: number; // Added stock property to track available stock
}

export function SelyaProductCard({ parfum }: { parfum: Parfum }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const [quantityAlreadyInCart, setQuantityAlreadyInCart] = useState(0);
  const [quantityRemaining, setQuantityRemaining] = useState(parfum.stock);

  useEffect(() => {
    const updateStockInfo = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
      const existingItem = cartItems.find(
        (item: Parfum) => item.id === parfum.id
      );
      const inCart = existingItem?.quantity || 0;

      setQuantityAlreadyInCart(inCart);
      setQuantityRemaining(parfum.stock - inCart);
    };

    updateStockInfo();

    window.addEventListener("storage", updateStockInfo);

    return () => {
      window.removeEventListener("storage", updateStockInfo);
    };
  }, [parfum.id, parfum.stock]);

  const soldOut = quantityRemaining <= 0;

  return (
    <article className="group flex h-full flex-col bg-card">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Image
          src={parfum.image}
          alt={parfum.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${
            soldOut ? "opacity-60 grayscale" : ""
          }`}
        />
        {soldOut && (
          <span className="absolute top-3 left-3 bg-primary px-3 py-1 text-[11px] font-medium tracking-[0.15em] uppercase text-primary-foreground">
            Épuisé
          </span>
        )}
        {!soldOut && quantityRemaining <= 2 && (
          <span className="absolute top-3 left-3 bg-gold px-3 py-1 text-[11px] font-medium tracking-[0.15em] uppercase text-gold-foreground">
            Plus que {quantityRemaining}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 border border-t-0 border-border p-5">
        <div className="space-y-2">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-serif text-2xl leading-tight font-medium">
              {parfum.name}
            </h3>
            <p className="shrink-0 text-base font-medium text-gold">
              {formatPrice(parsePrice(parfum.price))}
            </p>
          </div>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {parfum.description}
          </p>
        </div>

        <div className="mt-auto space-y-3">
          <QuantitySelector
            value={quantity}
            onChange={setQuantity}
            max={quantityRemaining}
            disabled={soldOut}
            label={parfum.name}
          />
          <SelyaButton
            className="w-full"
            onClick={() => {
              const cart = JSON.parse(localStorage.getItem("cart") || "[]");
              const existing = cart.find(
                (item: Parfum) => item.id === parfum.id
              );
              const quantityInCart = existing?.quantity || 0;
              const remaining = parfum.stock - quantityInCart;

              if (quantity > remaining) {
                toast.error("Stock insuffisant pour cette quantité.");
                return;
              }

              addToCart({ ...parfum, quantity });
              setQuantity(1);
            }}
            disabled={soldOut || quantity > quantityRemaining}
          >
            {soldOut ? "Indisponible" : "Ajouter au panier"}
          </SelyaButton>
          {quantityAlreadyInCart > 0 && (
            <p className="text-center text-xs text-muted-foreground">
              {quantityAlreadyInCart} déjà dans votre panier
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
