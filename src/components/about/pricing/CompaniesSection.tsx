import { FaHooli } from "react-icons/fa";
import { FaStripe } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { AiFillRedditCircle } from "react-icons/ai";
import { FaLyft } from "react-icons/fa6";



export default function PricingSection() {
    return (
      <section className="py-12 bg-gray-50">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-600">
          Trusted By Over 4000 Big Companies
          </h2>
         
        </div>
  
        {/* Company Logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-12">
  <FaHooli className="text-5xl sm:text-6xl md:text-7xl" />
  <FaLyft className="text-3xl sm:text-4xl md:text-5xl" />
  <FaStripe className="text-5xl sm:text-6xl md:text-7xl" />
  <FaAws className="text-4xl sm:text-5xl md:text-6xl" />
  <AiFillRedditCircle className="text-3xl sm:text-4xl md:text-5xl" />
</div>  </section>
    );
  }
  