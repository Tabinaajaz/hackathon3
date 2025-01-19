import Image from "next/image";
import product1 from "@/public/images/single-product-1-cover-2.jpg";
import product2 from "@/public/images/single-product-1-thumb-1.jpg";
import product3 from "@/public/images/single-product-1-thumb-2.jpg";

export default function ProductDetails() {
  return (
    <div className="container mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {/* Left: Image Gallery */}
      <div>
        {/* Main Product Image */}
        <div className="relative">
          <Image
            src={product1}
            alt="Product"
            className="w-full h-auto rounded-lg object-cover"
          />
          {/* Navigation Arrows */}
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
            ←
          </button>
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
            →
          </button>
        </div>

        {/* Thumbnail Gallery */}
        <div className="flex gap-2 mt-4 justify-center md:justify-start">
          <Image
            src={product2}
            alt="Thumbnail 1"
            className="w-20 h-20 rounded-lg border border-gray-300 cursor-pointer hover:shadow-md"
          />
          <Image
            src={product3}
            alt="Thumbnail 2"
            className="w-20 h-20 rounded-lg border border-gray-300 cursor-pointer hover:shadow-md"
          />
        </div>
      </div>

      {/* Right: Product Info */}
      <div>
        {/* Product Title */}
        <h1 className="text-xl md:text-2xl font-bold mb-4">Floating Phone</h1>

        {/* Ratings */}
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-500 text-lg">
            ★★★★☆
          </div>
          <span className="ml-2 text-gray-600">(10 Reviews)</span>
        </div>

        {/* Price */}
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          $1,139.33
        </p>
        <p className="text-green-600 font-medium mb-4">
          Availability: In Stock
        </p>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>

        {/* Color Options */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-gray-600">Colors:</span>
          <div className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer"></div>
          <div className="w-6 h-6 rounded-full bg-green-500 cursor-pointer"></div>
          <div className="w-6 h-6 rounded-full bg-orange-500 cursor-pointer"></div>
          <div className="w-6 h-6 rounded-full bg-black cursor-pointer"></div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Select Options
          </button>
          <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300">
            ♥
          </button>
          <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300">
            🛒
          </button>
          <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300">
            👁️
          </button>
        </div>
      </div>
    </div>
  );
}
