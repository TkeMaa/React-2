import React, { createContext, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Za generisanje jedinstvenih ID-ova

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  const [price, setPrice] = useState(0);

  // Funkcija za dodavanje u korpu
  const addToCart = (item) => {
    //setCart([...cart, { ...item, id: uuidv4() }]); // Dodaj jedinstveni ID stavci
    setCart((prevCart) => [...prevCart, {...item, id: uuidv4() }]);
    setPrice((prevPrice) => prevPrice + item.price);
    console.log(price);
  };

  // Funkcija za uklanjanje iz korpe
  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== itemToRemove.id)
    );
    setPrice((prevPrice) => prevPrice - itemToRemove.price)
    console.log(price);
  };

  // Funkcija za čišćenje korpe
  const clearCart = () => {
    setCart([]); // Pražnjenje korpe
    setPrice(0);
    console.log(price);
  };

  return (
    <CartContext.Provider value={{ price, cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};