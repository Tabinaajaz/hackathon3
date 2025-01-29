'use client'
import React from "react";
import { Product } from "../../type";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";





const ProductsList = ({Product}:{Product:Product}) => {
  
  
  
  const { title, price, discountPercentage, image, description } = Product;
  

  
  
  return (

    <div className="bg-white  shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
       <Link href={`/page/${Product._id}`}>
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={urlFor(Product.image).url()}
          alt={Product.title}
          layout="responsive" // Adjusts image size dynamically
          width={800} // Expected width
          height={600} // Expected height
        />
    </Link>
      
       <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {Product.title}
        </h3>
             <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-lg font-bold text-gray-900">${Product.price}</p>
            {discountPercentage && (
              <p className="text-sm text-green-500">{Product.discountPercentage}% off</p>
            )}
          </div>
         </div>
      </div>
    </div>
    
  );
};

export default ProductsList;
