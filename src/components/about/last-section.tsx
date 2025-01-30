import Image from "next/image";
import modelImage from "@/public/images/about-last.png"; 

export default function LastSection() {
  return (
    <div className="bg-blue-600">
      <div className="flex flex-col md:flex-row items-center md:justify-between text-white px-6 md:px-16">
        {/* Left Content */}
        <div className="flex-1 py-[112px] px-6 md:px-16 space-y-6">
          <h5 className="text-sm uppercase tracking-wider">Work With Us</h5>
          <h1 className="text-3xl md:text-5xl font-bold">Now Lets grow Yours</h1>
          <p className="text-sm md:text-base py-4 leading-relaxed w-full md\:w-[400px]">
            The gradual accumulation of information about atomic and small scale
            behavior during the first quarter of the 20th
          </p>
          <button className="px-6 py-2 border border-white rounded-lg bg-blue-600 hover:bg-white hover:text-blue-500 transition">
            Button
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 w-[690px]  max-w-md md:max-w-none h-[900px] left-[950px]  bg-slate-200">
          <Image
            src={modelImage}
            alt="Model"
            className="rounded-md object-cover w-[690px] h-full"
          />
        </div>
      </div>
    </div>
  );
}
