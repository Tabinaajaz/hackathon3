"use client";

import Image from "next/image";
import card1 from "@/public/image2.jpg"
import card2 from "@/public/cardss2.jpg"
import card3 from "@/public/images/cardss3.jpeg"
import card4 from "@/public/images/cardss4.jpeg"
import card5 from "@/public/images/cardss5.jpg"


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Define images array  
const images = [
   card1,
  card2,
  card3,
  card4,
  card5
];

export default function Carousel() {
  return (
    <div className="relative md:items-center">
      {/* Swiper Component */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-[300px] md:h-[716px] relative z-10"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={500}
              height={300}
              layout="responsive"
              className="w-full h-[300px] md:h-[716px] object-cover object-center "
            />
          
      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col sm:grid-cols-1 items-center md:items-start justify-center text-center md:text-left px-6 md:px-24 md:py-28 gap-5 md:gap-10">
        <h5 className="text-sm md:text-[16px] uppercase tracking-wide font-bold text-white">
          Summer 2020
        </h5>
        <h1 className="text-3xl md:text-[58px] leading-tight md:leading-[80px] tracking-wide text-white font-bold">
          New Collection
        </h1>
        <h4 className="text-sm md:text-[20px] leading-relaxed md:leading-[30px] text-white max-w-[90%] md:max-w-[376px]">
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="px-6 py-3 md:px-[40px] md:py-[15px] bg-green-500 text-white rounded-lg hover:bg-green-600">
          <h3 className="text-sm md:text-[24px] font-bold">Shop Now</h3>
        </button>
        </div>
        </SwiperSlide>
    
      ))}
      </Swiper>

      </div>
  
  );
}
