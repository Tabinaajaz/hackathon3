'use client';

import React, { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client'; // Make sure the path is correct

type Product = {
  _id: string;
  title: string;
  department: string;
  price: string;
  dicountPercentage: string;
  imageUrl: string;
};

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const productsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] | order(_createdAt asc) {
        _id,
        title,
        price,
        dicountPercentage,
        "imageUrl": productImage.asset->url
      }`;

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
    return <div>Loading products...</div>;
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-white py-8 px-4 md:px-8 lg:px-16">
      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product._id}
            className="flex flex-col items-center text-center border rounded-lg p-4 hover:shadow-lg transition"
          >
            {/* Product Image */}
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-auto object-cover rounded-lg"
            />
            {/* Product Details */}
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              {product.title}
            </h3>
            
            {/* Price */}
            <div className="mt-2">
              <span className="line-through text-gray-400">
                {product.price}
              </span>{' '}
              <span className="text-blue-600 font-bold">
                {product.dicountPercentage}
              </span>
            </div>
            {/* Color Options */}
            <div className="flex mt-3 space-x-2">
              <span className="w-4 h-4 rounded-full bg-blue-500"></span>
              <span className="w-4 h-4 rounded-full bg-green-500"></span>
              <span className="w-4 h-4 rounded-full bg-orange-500"></span>
              <span className="w-4 h-4 rounded-full bg-gray-500"></span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-4 mt-8">
        {/* First Page */}
        <button
          className={`px-4 py-2 rounded-md ${
            currentPage === 1
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(1)}
        >
          First
        </button>

        {/* Previous Page */}
        <button
          className={`px-4 py-2 rounded-md ${
            currentPage === 1
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md ${
              currentPage === index + 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Page */}
        <button
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>

        {/* Last Page */}
        <button
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(totalPages)}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
