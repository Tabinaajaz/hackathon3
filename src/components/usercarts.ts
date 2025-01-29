import { useState, useEffect } from "react";
import { Product } from "../../type";

export const useCart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  // Load cart from Local Storage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to Local Storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Add item to cart or increase quantity
  const addToCart = (item: Omit<Product, "quantity" | "totalPrice">) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem._id === item._id);

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        updatedCart[existingItemIndex].totalprice =
          updatedCart[existingItemIndex].quantity * updatedCart[existingItemIndex].price;
        return updatedCart;
      } else {
        return [
          ...prevCart,
          { ...item, quantity: 1, totalPrice: item.price },
        ];
      }
    });
  };

  // ✅ Remove an item completely from the cart
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };

  // ✅ Decrease quantity or remove item if quantity reaches zero
  const decreaseQuantity = (productId: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item._id === productId
            ? { ...item, quantity: item.quantity - 1, totalPrice: (item.quantity - 1) * item.price }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ✅ Calculate total price of all items
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.totalprice, 0);
  };

  return { cart, addToCart, removeFromCart, decreaseQuantity, getTotalPrice };
};
