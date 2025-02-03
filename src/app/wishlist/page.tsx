"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../../type";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";

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
      <h3 className="text-2xl font-bold">Your Wishlist</h3>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        wishlist.map((item) => (
          <div key={item._id} className="flex justify-between items-center border-b py-2">
            <p>{item.title}</p>
            <div className="flex items-center gap-2">
              <Link href={`/page/${item._id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  View Product
                </button>
              </Link>
              <button onClick={() => handleRemoveFromWishlist(item._id)} className="text-red-500">
                <FaTrash />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default WishlistPage;
