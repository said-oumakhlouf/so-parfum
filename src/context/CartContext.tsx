"use client";
import { Parfum } from "@/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";
// 1. Type d'un produit

type Product = Parfum;

// 2. Type des données du panier
interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  /** Fixe la quantité d'un article, limitée entre 1 et son stock. */
  updateQuantity: (productId: number, quantity: number) => void;
}

// 3. Création du contexte (avec valeur initiale undefined)
const CartContext = createContext<CartContextType | undefined>(undefined);

// 4. Provider
export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  // Évite d'écraser le panier enregistré avant de l'avoir chargé
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Charger les données du panier depuis le localStorage au démarrage
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch {
      // Panier illisible : on repart d'un panier vide
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems, hydrated]);

  const addToCart = (product: Product) => {
    const existing = cartItems.find((item) => item.id === product.id);
    const totalQuantity = (existing?.quantity || 0) + (product.quantity || 1);

    if (totalQuantity > product.stock) {
      toast.error("Stock insuffisant pour ce produit.");
      return;
    }

    setCartItems((prev) =>
      existing
        ? prev.map((item) =>
            item.id === product.id ? { ...item, quantity: totalQuantity } : item
          )
        : [...prev, { ...product, quantity: product.quantity || 1 }]
    );
    toast.success("Ajouté au panier !");
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, Math.min(quantity, item.stock)) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 5. Hook personnalisé pour accéder au contexte
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
