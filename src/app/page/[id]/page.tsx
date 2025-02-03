'use client'

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../../type";
import { FaEye, FaStar, FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import ReviewsClient from "@/components/Reviews_client";

type Props = {
  params: { id: string };
};

export default function CartPage({ params: { id } }: Props) {
  const productId = id;
  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // ⬇️ Fetch product and reviews on mount
  useEffect(() => {
    async function fetchProductAndReviews() {
      try {
        const productQuery = `*[_type == "product" && _id == $id][0]{
          _id, title, price, discountPercentage, image, description
        }`;
        const reviewsQuery = `*[_type == "review" && product._ref == $id] | order(date desc)`;

        const fetchedProduct = await client.fetch(productQuery, { id: productId });
        const fetchedReviews = await client.fetch(reviewsQuery, { id: productId });

        setProduct(fetchedProduct);
        setReviews(fetchedReviews);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProductAndReviews();
  }, [productId]);

  // ⬇️ Load cart from LocalStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
    calculateTotalPrice(storedCart);
  }, []);

  // ⬇️ Save cart to LocalStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    calculateTotalPrice(cart);
  }, [cart]);

  const handleAddToCart = () => {
    if (!product) return;

    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item._id === product._id);
      if (existingItemIndex > -1) {
        prevCart[existingItemIndex].quantity += 1;
        prevCart[existingItemIndex].totalprice =
          prevCart[existingItemIndex].quantity * prevCart[existingItemIndex].price;
        return [...prevCart];
      } else {
        return [...prevCart, { ...product, quantity: 1, totalPrice: product.price }];
      }
    });
  };

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

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };

  const calculateTotalPrice = (cartItems: Product[]) => {
    const total = cartItems.reduce((sum, item) => sum + item.totalprice, 0);
    setTotalPrice(total);
  };

  if (!product) return <div>Loading...</div>;

  const discountedPrice = product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" key={product._id}>
        {/* Left Section */}
        <div className="flex flex-col items-center space-y-4">
          <Image
            src={product.image?.asset ? urlFor(product.image.asset).url() : "/images/placeholder.jpg"}
            alt={product.title}
            className="w-full h-auto lg:w-[450px] lg:h-[500px] rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            width={450}
            height={500}
            priority
          />
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800">{product.title}</h2>
          <div className="flex items-center space-x-2">
            {[...Array(4)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400" />
            ))}
            <FaEye className="text-gray-300" />
            <span className="text-gray-500">(10 Reviews)</span>
          </div>

          <p className="text-gray-700 text-sm lg:text-base">{product.description}</p>
          <div className="flex flex-wrap gap-4">
            <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300">♥</button>

            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
            >
              🛒 Add to Cart
            </button>

           
            <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300">👁️</button>
          </div>
          <div className="flex space-x-4">
            <span className="text-xl font-bold text-green-600">${discountedPrice.toFixed(2)}</span>
            <span className="line-through text-gray-500 text-lg">${product.price.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Cart Section */}
      <div className="mt-6">
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
                <button onClick={() => handleAddToCart()} className="text-green-500">
                  <FaPlus />
                </button>
                <button onClick={() => handleRemoveFromCart(item._id)} className="text-gray-500">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}

        <div className="text-right text-lg font-bold mt-4">Total Price: ${totalPrice.toFixed(2)}</div>
      </div>

      {/* Reviews Section */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold">Customer Reviews</h3>
        <ReviewsClient initialReviews={reviews} />
      </div>
    </div>
  );
}
