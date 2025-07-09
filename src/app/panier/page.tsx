"use client";

import { useCart } from "@/context/CartContext";

export default function PanierPage() {
  const { cartItems } = useCart();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Votre panier</h1>

      {cartItems.length === 0 ? (
        <p className="text-muted-foreground">Votre panier est vide.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.id} className="border p-4 rounded-lg bg-muted">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-muted-foreground">{item.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}