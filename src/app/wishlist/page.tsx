"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../../type";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  const handleRemoveFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h3 className="text-2xl font-bold mb-4">Your Wishlist</h3>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="w-full border rounded-lg overflow-hidden shadow-md">
          <div className="divide-y divide-gray-300">
            {wishlist.map((item) => (
              <div key={item._id} className="flex items-center justify-between p-4">
                {/* Product Image */}
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image?.asset ? urlFor(item.image.asset).url() : "/images/placeholder.jpg"}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md"
                    width={80}
                    height={80}
                  />
                  {/* Product Name & Link */}
                  <Link href={`/page/${item._id}`} className="text-lg font-bold text-blue-600 hover:underline">
                    {item.title}
                  </Link>
                </div>

                {/* Action Button */}
                <button onClick={() => handleRemoveFromWishlist(item._id)} className="text-red-500 hover:text-red-700">
                  <FaTrash size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
