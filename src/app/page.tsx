'use client'
import Carousel from "@/components/Carousel";
import CardShop from "@/components/card-shop";
import Greenpart from "@/components/green-part";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/topnavbar";
import Whitepart from "@/components/white-part";
import FeaturedCards from "@/components/featured";
import Footer from "@/components/footer";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import ProductsList from "@/components/productList";
import { Product } from "../../type"; // Assuming a proper Product type is defined in your type file

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]); // State for storing products
  const [loading, setLoading] = useState<boolean>(true); // State for loading status

  const fetchProducts = async () => {
    try {
      setLoading(true); // Set loading to true before fetching
      const query = `*[_type == "product"]| order(_createdAt asc)[0..5]{
        _id,
        title,
        price,
        dicountPercentage,
        "image": image.asset->url,
        description,}`;
      const data: Product[] = await client.fetch(query); // Fetch products from Sanity
      setProducts(data); // Update the products state
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch data on component mount

    // Fetch data every 10 minutes
    const interval = setInterval(() => {
      console.log("Fetching data...");
      fetchProducts();
    }, 600000); // 600000 ms = 10 minutes

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="md:w-[1439px] md:h-[716px] md:top-[136px] md:left-[1px] ms:rounded-[5px] md:border-[1px] bg-slate-200">
      <TopBar />
      <Navbar />
      <Carousel />
      <CardShop />
      <div className="text-black py-4 max-w-screen-xl  mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xl my-8">Featured Products</h2>
          <h1 className="text-3xl font-bold my-6">BESTSELLER PRODUCTS</h1>
          <p className="text-gray-400 my-6">
            Problems trying to resolve the conflict between
          </p>
        </div>
        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {products.map((product) => (
              <ProductsList Product={product} key={product.title} />
            ))}
          </div>
        )}
        <Greenpart />
        <Whitepart />
        <FeaturedCards />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
