import { createContext, useContext, useEffect, useState } from "react";
import API from "../api/axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // 🔄 Load Cart from Backend
  const fetchCart = async () => {
    try {
      const { data } = await API.get("/cart");
      setCartItems(data.items || []);
    } catch (error) {
      console.log("Cart fetch error:", error.response?.data);
    }
  };

  // ➕ Add to Cart
  const addToCart = async (product) => {
    try {
      const { data } = await API.post("/cart", {
        productId: product._id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });

      setCartItems(data.items);
    } catch (error) {
      console.log("Add to cart error:", error.response?.data);
    }
  };

  // ❌ Remove from Cart
  const removeFromCart = async (itemId) => {
    try {
      const { data } = await API.delete(`/cart/${itemId}`);
      setCartItems(data.items);
    } catch (error) {
      console.log("Remove error:", error.response?.data);
    }
  };

  // 🔄 Load cart on mount
  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = async (itemId, quantity) => {
    try {
      const { data } = await API.put(`/cart/${itemId}`, { quantity });
      setCartItems(data.items);
    } catch (error) {
      console.log("Update error:", error.response?.data);
    }
  };
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, fetchCart }}
    >
      {children}
    </CartContext.Provider>
  );
  
};


export const useCart = () => useContext(CartContext);