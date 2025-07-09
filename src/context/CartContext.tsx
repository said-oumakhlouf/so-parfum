import { createContext, useContext, useState, ReactNode } from "react";

// 1. Type d'un produit
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

// 2. Type des données du panier
interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
}

// 3. Création du contexte (avec valeur initiale undefined)
const CartContext = createContext<CartContextType | undefined>(undefined);

// 4. Provider
export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
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
