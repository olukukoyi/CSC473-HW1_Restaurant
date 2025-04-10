"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { MenuItem } from "./Menu/page";

type CartContextType = {
  cart: MenuItem[];
  addItems(menuItem: MenuItem): void;
  removeItem(name: string): void;
  clearCart(): void;
  calculateCart(): number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<MenuItem[]>([]);

  const addItems = (item: MenuItem) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((i) => i.name === item.name);

      if (itemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      } else {
        item.quantity = 1;
        return [...prevCart, item];
      }
    });
  };

  const removeItem = (name: string) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.name != name);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateCart = () => {
    let total = 0;
    for (const item of cart) {
      total = total + Number(item.price);
    }
    return total;
  };

  return (
    <CartContext.Provider
      value={{ cart, addItems, removeItem, clearCart, calculateCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
