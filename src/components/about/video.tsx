import Image from "next/image"
import image from "@/public/desktop-video-3.png"
export default function Video(){
return(
    <div className="w-[423px] h-[300px]  md:w-[144opx] md:h-[764px]  bg-white sm:items-center">
        <div className=" w-[307px] h-[316px] my-36 md:w-[1050px] md:h-[764px] md:left-[195px] md:items-center sm:mx-56  sm:items-center md:mx-32 sm:w-[307px]sm:h-[316px] sm:top-[81px]  sm:left-[54px] ">
            <Image src={image} alt="pic"className=" md:items-center md:w-[989px] md:h-[540px] sm:w-[307px]sm:h-[316px] sm:mx- sm:rounded-[12.3px] top-[112px] left-[31px] rounded-[20px] bg-white"/>
        </div>
    </div>
    )
};