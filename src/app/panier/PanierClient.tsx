"use client";

import { useCart } from "@/context/CartContext";

export default function PanierClient() {
  const { cartItems, removeFromCart } = useCart();

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
                  className="w-24 h-24 object-cover rounded-md border"
                />
                <div className="flex-1 space-y-1">
                  <h2 className="text-base font-semibold">{item.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    {item.price} € × {item.quantity} ={" "}
                    {(
                      (parseFloat(String(item.price)) || 0) *
                      (parseInt(String(item.quantity)) || 0)
                    ).toFixed(2)}{" "}
                    €
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="mt-8 border-t pt-6 text-right space-y-2">
          <p className="text-sm text-muted-foreground">
            Sous-total :{" "}
            <span className="text-base font-semibold">
              {cartItems
                .reduce(
                  (total, item) =>
                    total +
                    (parseFloat(String(item.price)) || 0) *
                      (parseInt(String(item.quantity)) || 0),
                  0
                )
                .toFixed(2)}{" "}
              €
            </span>
          </p>
          <p className="text-sm text-muted-foreground">Livraison : Offerte</p>
          <button className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-opacity-80 transition">
            Passer au paiement
          </button>
        </div>
      )}
    </main>
  );
}
