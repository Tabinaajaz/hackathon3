'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { client } from '@/sanity/lib/client';
import { Product } from '../../../../type';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, variant = 'primary' }) => {
  const baseStyles = 'px-4 py-2 rounded-md text-sm font-medium transition duration-150';
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400',
  };
  const disabledStyles = 'bg-gray-300 text-gray-500 cursor-not-allowed';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${disabled ? disabledStyles : variantStyles[variant]}`}
    >
      {label}
    </button>
  );
};

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, Infinity]);

  const productsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] | order(_createdAt asc) {
        _id,
        title,
        price,
        discountPercentage,
        image
      }`;

      try {
        const data = await client.fetch(query);
        console.log('Fetched Products:', data); // Debugging log
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          product.price >= priceRange[0] &&
          product.price <= priceRange[1]
      );
      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [searchQuery, priceRange, products]);

  if (loading) {
    return <div>Loading products...</div>;
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-white py-8 px-4 md:px-8 lg:px-16">
      {/* Search and Filter Bar */}
      <div className="mb-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full md:w-1/3"
        />
        <div className="flex items-center space-x-4">
          <label className="text-gray-700">Price:</label>
          <input
            type="number"
            placeholder="Min"
            onChange={(e) => setPriceRange([+e.target.value || 0, priceRange[1]])}
            className="border border-gray-300 rounded-md p-2 w-20"
          />
          <input
            type="number"
            placeholder="Max"
            onChange={(e) => setPriceRange([priceRange[0], +e.target.value || Infinity])}
            className="border border-gray-300 rounded-md p-2 w-20"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product._id}
            className="flex flex-col items-center shadow-md overflow-hidden transform duration-300 hover:scale-105 text-center border rounded-lg p-4 hover:shadow-lg transition"
          >
            <Link href={`/page/${product._id}`}>
              <Image
                src={product.image ? urlFor(product.image).url() : "/images/placeholder.jpg"}
                alt={product.title}
                layout="responsive"
                width={800}
                height={600}
              />
            </Link>
            <h3 className="mt-4 text-lg font-medium text-gray-900">{product.title}</h3>
            <div className="mt-2">
              <span className="line-through text-gray-400">${product.price}</span>
              <span className="text-blue-600 font-bold">${product.discountPercentage}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-4 mt-8">
        <Button label="First" onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
        <Button label="Prev" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            label={(index + 1).toString()}
            onClick={() => handlePageChange(index + 1)}
            variant={currentPage === index + 1 ? 'primary' : 'secondary'}
          />
        ))}
        <Button label="Next" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
        <Button label="Last" onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
      </div>
    </div>
  );
};

export default ProductGrid;
