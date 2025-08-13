"use client";
import QuantitySelector from "@/components/ui/quantity/QuantitySelector";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "../button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../card";

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

  return (
    <Card className="bg-muted">
      <img
        src={parfum.image}
        alt={parfum.name}
        className="w-full h-56 object-cover rounded-t-xl"
      />
      <CardHeader>
        <CardTitle className="text-base">{parfum.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{parfum.description}</p>
      </CardContent>
      <CardContent>
        <p className="text-sm text-muted-foreground">{parfum.price}</p>
        {quantityRemaining <= 0 ? (
          <p className="text-sm text-red-500 font-medium">Rupture de stock</p>
        ) : quantityRemaining <= 2 ? (
          <p className="text-sm text-orange-600">
            Plus que {quantityRemaining} en stock
          </p>
        ) : (
          <p className="text-sm text-green-600">
            En stock ({quantityRemaining})
          </p>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <QuantitySelector
          value={quantity}
          onChange={setQuantity}
          max={quantityRemaining}
          disabled={quantityRemaining <= 0}
        />
        <Button
          size="sm"
          className="bg-primary text-primary-foreground"
          onClick={() => {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            const existing = cart.find((item: Parfum) => item.id === parfum.id);
            const quantityInCart = existing?.quantity || 0;
            const remaining = parfum.stock - quantityInCart;

            if (quantity > remaining) {
              toast.error("Stock insuffisant pour cette quantité.");
              return;
            }

            addToCart({ ...parfum, quantity });
            setQuantity(1);
          }}
          disabled={quantityRemaining <= 0 || quantity > quantityRemaining}
        >
          Ajouter
        </Button>
      </CardFooter>
    </Card>
  );
}
