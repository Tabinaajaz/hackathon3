import { FaHooli } from "react-icons/fa";
import { FaStripe } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { AiFillRedditCircle } from "react-icons/ai";
import { FaLyft } from "react-icons/fa6";




export default function section (){
    return(
        <section className="py-12 bg-gray-50">
         <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-12">
          <FaHooli className="text-5xl sm:text-6xl md:text-7xl" />
          <FaLyft className="text-3xl sm:text-4xl md:text-5xl" />
          <FaStripe className="text-5xl sm:text-6xl md:text-7xl" />
          <FaAws className="text-4xl sm:text-5xl md:text-6xl" />
          <AiFillRedditCircle className="text-3xl sm:text-4xl md:text-5xl" />
        </div> 
        </section>
    )
}