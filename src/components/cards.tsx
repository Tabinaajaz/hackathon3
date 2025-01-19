'use client';

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import Card from '@/components/card';

type Product = {
  _id: string;
  title: string;
  price: number;
  discountPercentage: number;
  imageUrl:any;
};

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        *[_type == "product"] | order(_createdAt asc) [0...6] {
          title,
          price,
          discountPercentage,
          "imageUrl": productImage.asset->url
        }
      `;
      try {
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40">
        <div className="loader border-t-transparent border-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
      </div>
    );
  }

  if (products.length === 0) {
    return <div className="text-center text-gray-500">No products available at the moment.</div>;
  }

  return (
    <div className="text-black py-20 max-w-screen-xl mx-auto  px-4">
          <div className="text-center mb-16">
           <h2 className="text-xl my-8">Featured Products</h2>
         <h1 className="text-3xl font-bold my-6">BESTSELLER PRODUCTS</h1>
         <p className="text-gray-400 my-6">
             Problems trying to resolve the conflict between
          </p>
         </div>
      
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card
          key={product._id}
          image={product.imageUrl}
          title={product.title}
          subtitle=""
          price={product.price}
          discountPercentage={product.price - (product.price * product.discountPercentage) / 100}
          colors={[]} // Add color data if needed
        />
      ))}
    </div>
    </div>
  );
};

export default ProductsList;
