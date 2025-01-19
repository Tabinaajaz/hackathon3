import Image from "next/image";
import couple from "@/public/images/asian-woman-man-with-winter-clothes 1.png";

export default function Whitepart() {
  return (
    <div className="flex flex-col items-center bg-white md:flex-row md:h-[682px] px-4 md:px-[112px] gap-8 md:gap-[80px]">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={couple}
          alt="product"
          className="object-cover max-w-full h-auto md:w-[632px] md:h-[492px]"
        />
      </div>

      {/* Right Section: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4 md:gap-6 text-left">
        <h5 className="text-sm font-bold text-gray-400 md:text-base">
          SUMMER 2020
        </h5>
        <h1 className="text-2xl font-bold text-gray-900 md:text-[40px] md:leading-[50px]">
          Part of the Neural Universe
        </h1>
        <p className="text-sm text-gray-500 md:text-[20px] md:leading-[30px]">
          We know how large objects will act, We know how are objects will act,
          We know
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-3 text-sm font-bold text-white bg-green-600 rounded md:text-base md:px-8 md:py-4">
            BUY NOW
          </button>
          <button className="px-6 py-3 text-sm font-bold text-green-600 border border-green-600 rounded md:text-base md:px-8 md:py-4">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
