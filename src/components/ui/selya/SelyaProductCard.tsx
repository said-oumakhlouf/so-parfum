"use client";
import { toast } from "sonner";
import QuantitySelector from "@/components/ui/quantity/QuantitySelector";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Button } from "../button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../card";

interface Parfum {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  quantity?: number;
}

export function SelyaProductCard({ parfum }: { parfum: Parfum }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
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
      <CardFooter className="flex items-center justify-between">
        <QuantitySelector value={quantity} onChange={setQuantity} />
        <Button
          size="sm"
          className="bg-primary text-primary-foreground"
          onClick={() => {
            addToCart({ ...parfum, quantity });
            toast.success("Ajouté au panier !");
          }}
        >
          Ajouter
        </Button>
      </CardFooter>
    </Card>
  );
}
