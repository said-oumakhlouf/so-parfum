"use client";
import { useCart } from "@/context/CartContext";
import { Button } from "../button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../card";

interface Parfum {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export function SelyaProductCard({ parfum }: { parfum: Parfum }) {
  const { addToCart } = useCart();
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
        <p className="text-sm font-medium text-foreground">{parfum.price}</p>
        <Button
          size="sm"
          className="bg-primary text-primary-foreground"
          onClick={() => addToCart(parfum)}
        >
          Ajouter
        </Button>
      </CardFooter>
    </Card>
  );
}
