import CTA from "@/components/about/pricing/cta";
import Header from "@/components/about/product/topnavbar";
import Product from "@/components/blog/product";
import Description from "@/components/blog/ProductDescription";
import ProductDetails from "@/components/blog/ProductDetails";
import { HiChevronRight } from "react-icons/hi";
import { FaHooli } from "react-icons/fa";
import { FaStripe } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { AiFillRedditCircle } from "react-icons/ai";
import { FaLyft } from "react-icons/fa6";
import Footer from "@/components/footer";

export default function blog(){

   return( <>
    <Header/>
   <div className="flex justify-left gap-2 mt-4 mx-48">
               <a href="/" className="text-xs sm:text-sm md:text-base font-montserrat font-bold text-gray-600">
                 HOME
               </a>
               <HiChevronRight className="text-gray-600" />
               <a href="/Shop" className="text-xs sm:text-sm md:text-base font-montserrat font-bold text-gray-600">
                 Shop
               </a>
             </div> 
             <ProductDetails/>
             <Description/>
             <Product/>
             {/* Company Logos */}
                     <div className="flex flex-wrap items-center text-slate-500 justify-center gap-4 sm:gap-6 md:gap-12">
               <FaHooli className="text-7xl sm:text-6xl md:text-8xl" />
               <FaLyft className="text-5xl sm:text-4xl md:text-6xl" />
               <FaStripe className="text-7xl sm:text-6xl md:text-9xl" />
               <FaAws className="text-6xl sm:text-5xl md:text-7xl" />
               <AiFillRedditCircle className="text-5xl sm:text-4xl md:text-6xl" />
             </div>
             <Footer/>
             </>)
}