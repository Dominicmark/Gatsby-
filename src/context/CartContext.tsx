import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../data/mockData";

export interface CartItem {
  product: Product;
  quantity: number;
  variation?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, variation?: string) => void;
  removeFromCart: (productId: string, variation?: string) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product, quantity = 1, variation?: string) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.variation === variation
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.variation === variation
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, variation }];
    });
    setIsCartOpen(true); // Open cart when adding an item
  };

  const removeFromCart = (productId: string, variation?: string) => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.variation === variation)
      )
    );
  };

  const clearCart = () => setItems([]);

  const cartTotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const cartCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
