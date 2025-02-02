import Image from "next/image";
import man from "@/public/card-1.png";
import woman from "@/public/card-2.jpg";
import accessories from "@/public/images/card-3.jpg";
import kids from "@/public/images/card-4.jpg";

export default function CardShop() {
  return (
    <div className="container mx-auto py-20 text-center">
      {/* Header Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-black">EDITOR S PICK</h3>
        <p className="text-sm text-gray-600 mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Categories Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:items-center mx-28 hover:direction-reverse">
        {/* Men */}
        <div className="relative  shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <Image
            src={man}
            alt="Men"
            className="w-[540px] h-[500px]  rounded-md " 
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 shadow-md font-semibold group-hover:bg-black group-hover:text-white transition">
            MEN
          </div>
        </div>

{/* Women */}
<div className="relative shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
  <Image
    src={woman}
    alt="Women"
    className="w-[540px] h-[500px] rounded-md"
  />
  {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 shadow-md font-semibold group-hover:bg-black group-hover:text-white transition">
    WOMEN
  </div> */}
</div>

{/* Accessories and Kids */}
<div className="grid grid-rows-2 px-0 gap-4 w-[240px] h-[500px]">
  {/* Accessories */}
  <div className="relative shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
    <Image
      src={accessories}
      alt="Accessories"
      className="w-[240px] h-[242px] rounded-md"
    />
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 shadow-md font-semibold group-hover:bg-black group-hover:text-white transition">
      ACCESSORIES
    </div>
  </div>

  {/* Kids */}
  <div className="relative shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
    <Image
      src={kids}
      alt="Kids"
      className="w-[240px] h-[242px] rounded-md"
    />
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 shadow-md font-semibold group-hover:bg-black group-hover:text-white transition">
      KIDS
    </div>
  </div>
</div>
</div>
    </div>
  );
}