"use client";

import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Product } from "../../../type";

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [totalprice, setTotalprice] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const cartData = JSON.parse(storedCart);
      console.log("Loaded Cart Data:", cartData); // ✅ Debugging log
      setCart(cartData);
      calculateTotalPrice(cartData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    calculateTotalPrice(cart);
  }, [cart]);

  const handleDecreaseQuantity = (productId: string) => {
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

  const handleIncreaseQuantity = (productId: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };

  const calculateTotalPrice = (cartItems: Product[]) => {
    const total = cartItems.reduce((sum, item) => sum + item.totalprice, 0);
    setTotalprice(total);
  };

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h3 className="text-2xl font-bold">Your Cart</h3>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item._id} className="flex justify-between items-center border-b py-2">
            <p>{item.title}</p>
            <div className="flex items-center gap-2">
              <button onClick={() => handleDecreaseQuantity(item._id)} className="text-red-500">
                <FaMinus />
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncreaseQuantity(item._id)} className="text-green-500">
                <FaPlus />
              </button>
              <button onClick={() => handleRemoveFromCart(item._id)} className="text-gray-500">
                <FaTrash />
              </button>
            </div>
          </div>
        ))
      )}
      <div className="text-right text-lg font-bold mt-4">Total Price: ${totalprice.toFixed(2)}</div>
    </div>
  );
};

export default CartPage;
