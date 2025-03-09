"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  size?: string; // Optional, since Accessories may not have size
  selectedSize?: string; // Store the selected size separately
  quantity: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number, size?: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
        const existingProduct = prevCart.find(
            (item) => item.id === product.id && item.size === product.size // Match both ID & size
        );

        if (existingProduct) {
            return prevCart.map((item) =>
                item.id === product.id && item.size === product.size
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        }

        return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number, size?: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.selectedSize === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove if quantity reaches 0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}