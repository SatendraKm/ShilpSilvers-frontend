import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleCart = () => {
    setOpen(!open);
  };

  const value = { open, toggleCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
