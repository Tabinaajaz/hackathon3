import Image from "next/image";
import cart1 from "@/public/images/product-cover-5 (1).png"
import cart2 from "@/public/images/fixed-height.png"
import cart3 from "@/public/images/fixed-height (1).png"
import cart4 from "@/public/images/product-cover-5.png"




export default function Product() {
    const products = [
      { id: 1, title: "Graphic Design", department: "English Department", oldPrice: "$16.48",
         newPrice: "$6.48", image: cart1  },
      { id: 2, title: "Graphic Design", department: "English Department", oldPrice: "$16.48",
         newPrice: "$6.48", image: cart2 },
      { id: 3, title: "Graphic Design", department: "English Department", oldPrice: "$16.48",
         newPrice: "$6.48", image: cart3 },
      { id: 4, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", 
        newPrice: "$6.48", image: cart4 },
      { id: 5, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", 
        
        newPrice: "$6.48", image: cart3 },
      { id: 6, title: "Graphic Design", department: "English Department", oldPrice: "$16.48",
        
        newPrice: "$6.48", image: cart4 },
      { id: 7, title: "Graphic Design", department: "English Department", oldPrice: "$16.48",
         newPrice: "$6.48", image: cart2 },
      { id: 8, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", 
        newPrice: "$6.48", image: cart1 },
    ];
  
    return (
      <div className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">BESTSELLER PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500">{product.department}</p>
                <div className="flex items-center mt-2">
                  <span className="text-gray-400 line-through mr-2">{product.oldPrice}</span>
                  <span className="text-green-600 font-bold">{product.newPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  