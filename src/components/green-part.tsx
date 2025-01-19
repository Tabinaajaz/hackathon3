import Image from "next/image";
import green from "@/public/images/shop-hero-2-png-picture-1.png";

export default function Greenpart() {
    return (
        <div className="relative flex justify-center px-4 md:px-0">
            <div className="bg-green-800 w-full max-w-[1440px] h-auto flex flex-col md:flex-row items-center px-8 py-16">
                
                <div className="relative w-full flex flex-col md:flex-row gap-8">

                    {/* Image */}
                    <div className="relative w-full md:flex-1 flex justify-center">
                        <div className="relative w-full max-w-[400px] h-auto">
                            <Image 
                                src={green} 
                                alt="man" 
                                className="w-full h-auto object-contain"
                                priority={true}
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center items-center md:items-start gap-8 text-center md:text-left">
                        <h5 className="font-montserrat text-white text-[20px] leading-[30px] tracking-[0.2px] font-normal">
                            SUMMER 2020
                        </h5>
                        <h1 className="text-white font-montserrat font-bold text-[40px] sm:text-[50px] md:text-[58px]">
                            Vita Classic Product
                        </h1>
                        <h4 className="text-white text-[14px] font-normal">
                            We know how large objects will act, We know how objects will act, We know
                        </h4>
                        <div className="flex justify-center md:justify-start gap-8 mt-4">
                            <h5 className="text-white text-2xl font-bold">$16.48</h5>
                            <button className="bg-green-600 px-10 py-4 rounded-full">
                                <p className="text-white font-montserrat font-bold text-[14px] tracking-[0.2px] text-center">
                                    ADD TO CART
                                </p>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
