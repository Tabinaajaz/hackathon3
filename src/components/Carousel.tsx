import Image from "next/image";
import image from "@/public/image2.jpg";

export default function Carousel() {
  return (
    <div className="relative md:items-center">
      {/* <!-- Image --> */}
      <Image
        src={image}
        alt="Background"
        className="w-full h-[300px] md:h-[716px] object-cover bg-sky-400"
      />

      {/* <!-- Text Overlay --> */}
      <div className="absolute inset-0 flex flex-col sm:grid-cols-1 items-center md:items-start justify-center text-center md:text-left px-24 md:py-28 md:gap-20">
        <h5 className="text-sm md:text-[16px] uppercase tracking-wide font-montserrat font-bold text-white">
          Summer 2020
        </h5>
        <h1 className="text-3xl md:text-[58px] leading-tight md:leading-[80px] font-montserrat tracking-wide text-white font-bold">
          New Collection
        </h1>
        <h4 className="text-sm md:text-[20px] leading-relaxed md:leading-[30px] text-white max-w-[90%] md:max-w-[376px]">
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="px-6 py-3 md:px-[40px] md:py-[15px] bg-green-500 text-white rounded-lg hover:bg-green-600">
          <h3 className="text-sm md:text-[24px] font-montserrat font-bold">
            Shop Now
          </h3>
        </button>
      </div>
    </div>
  );
}
