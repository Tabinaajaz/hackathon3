import Image from "next/image";
import image from "@/public/background (1).png";

export default function Innerheader() {
  return (
    <div className="relative flex items-center justify-center bg-white">
      {/* <!-- Background Image --> */}
      <Image
        src={image}
        alt="Background"
        className="w-full h-[400px] md:h-[716px] object-cover "
      />

      {/* <!-- Text Overlay --> */}
      <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-0 px-6 md:items-start md:justify-center md:px-16 md:gap-6 text-black">
        <h5 className="text-[12px] uppercase tracking-[0.1px] font-montserrat font-bold leading-5 md:text-[16px]">
          ABOUT COMPANY
        </h5>
        <h1 className="text-[32px] leading-9 font-montserrat tracking-[0.2px] font-bold md:text-[58px] md:leading-[80px]">
          ABOUT US
        </h1>
        <h4 className="text-[14px] tracking-[0.2px] leading-6 text-center md:text-left md:w-[376px] md:text-[20px] md:leading-[30px]">
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="mt-4 bg-blue-500 text-white text-[12px] font-bold rounded-lg px-6 py-3 hover:bg-blue-600 md:mt-0 md:text-[14px] md:w-[195px] md:h-[52px]">
          Get Quote Now
        </button>
      </div>
    </div>
  );
}
