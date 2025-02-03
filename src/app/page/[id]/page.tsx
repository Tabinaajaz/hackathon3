'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaEye, FaStar} from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product, Review } from "../../../../type";
import { useParams } from "next/navigation";
import ReviewsClient from "@/components/Reviews_client";

export default function ProductPage() {
  const { id: productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [totalprice, setTotalprice] = useState(0);

  useEffect(() => {
    async function fetchProductAndReviews() {
      try {
        const productQuery = `*[_type == "product" && _id == $id][0]`;
        const reviewsQuery = `*[_type == "review" && product._ref == $id] | order(date desc)`;

        const fetchedProduct = await client.fetch(productQuery, { id: productId });
        const fetchedReviews = await client.fetch(reviewsQuery, { id: productId });

        setProduct(fetchedProduct);
        setReviews(fetchedReviews);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    if (productId) {
      fetchProductAndReviews();
    }
  }, [productId]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
    calculateTotalPrice(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    calculateTotalPrice(cart);
  }, [cart]);

  const handleAddToCart = () => {
    if (!product) return;
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);
      if (existingItem) {
        existingItem.quantity += 1;
        return [...prevCart];
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleAddToWishlist = () => {
    if (!product) return;
    let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    if (wishlist.find((item: any) => item._id === product._id)) {
      alert("Product is already in the wishlist!");
      return;
    }
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Product added to wishlist!");
  };

  const handleDecreaseQuantity = (productId: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };

  const calculateTotalPrice = (cartItems: Product[]) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalprice(total);
  };

  if (!product) return <div>Loading...</div>;

  const discountedPrice = product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <Image
            src={product.image?.asset ? urlFor(product.image.asset).url() : "/images/placeholder.jpg"}
            alt={product.title}
            width={450}
            height={500}
            className="rounded-lg shadow-lg hover:scale-105 transition"
            priority
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <div className="flex items-center space-x-2">
            {[...Array(4)].map((_, index) => <FaStar key={index} className="text-yellow-400" />)}
            <FaEye className="text-gray-300" />
            <span className="text-gray-500">(10 Reviews)</span>
          </div>

          <p className="text-gray-700">{product.description}</p>
          <div className="flex gap-4">
            <button onClick={handleAddToWishlist} className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
              💖 Add to Wishlist
            </button>
            <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              🛒 Add to Cart
            </button>
          </div>
          <div className="flex space-x-4">
            <span className="text-xl font-bold text-green-600">${discountedPrice.toFixed(2)}</span>
            <span className="line-through text-gray-500">${product.price.toFixed(2)}</span>
          </div>
          <div className="flex items-center ">
          <ReviewsClient reviews={reviews} /></div>
        </div>
      </div>
    </div>
  );
}
