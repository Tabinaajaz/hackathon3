//   import Image from "next/image"
//   import man from"@/public/card-1.png"
//   import woman from "@/public/card-2.jpg"
//   import pic from"@/public/images/card-3.jpg"
//   import kids from "@/public/images/card-4.jpg"
//   export default function CardShop() {
//     return (
//       <div className=" md:items-center md:w-[1050px] md:h-[770px] md:left-48 md:gap-12 mx-auto py-20 px-4 text-center">
//         {/* Header Section */}
//         <div className="mb-12 md:w-[607px] md:h-[62px] md:gap-[10px] w-full px-4">
//   <h3 className="text-2xl md:text-[24px] font-montserrat text-black md:font-bold md:tracking-[0.1px]">
//     EDITOR'S PICK
//   </h3>
//   <p className="text-sm md:text-[14px] text-gray-600 mt-2 md:tracking-[0.2px] md:leading-5 font-montserrat md:font-normal">
//     Problems trying to resolve the conflict between
//   </p>
// </div>

//         {/* Categories Grid */}
//         <>
//         <div className="grid grid-flow-col sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-4 md:w-[1050px]  md:h-[500px]  gap-[30px]">
//           {/* Men */}
//           <div className="relative group md:px-7  md:gap-12 grid md:grid-cols-1 md:grid-rows-2 md:w-[509px]  space-x-2 md:h-[500px] ">
//            <div className="md:top[426px] md:left-[31px] ">
//             <Image
//               src={man}
//               alt="Men"
//               className="h-[500px] w-[509px] md:left-[1px] rounded-lg"
//             />
//             <div className="absolute  md:w-[170px] md:h-[48px] md:top-[426px] md:left:[31px] bg-white text-black shadow-md group-hover:bg-black group-hover:text-white ">
//               <h2 className="md:w-10 md:h-6 md:top-6 left-[46px] px-  md:my-3 font-montserrat md:font-bold  md:text-[24px] md:tracking-[0.1px] md:leading-6  md:items-center md:text-center ">
//                 MAN</h2>    </div>
//           </div>
//            </div>
//           {/* Women */}
//           <div className="grid md:grid-cols-1  md:px-3 md:mx-32 md:gap-7">

//           <div className="relative group gap-11  md:w-[240px] md:h-[500px]  ">
       
//             <Image
//               src={woman} // image path
//               alt="Women"
//               className="md:w-[240px] md:h-[500px] left-[1px] "
//             />
//             <div className=" absolute md:w-[136px] md:h-[48px]
//             md:top-[434px] md:left-[21px] md:py-3 md:px-12 gap-[10px] bg-white">
// <h5 className=" md:w-[69px]  h-[24px] font-montserrat font-bold md:text-center text-black md:tracking-[0.1px] md:text-[16px] md:leading-6 ">WOMAN</h5>
//               </div>
//             </div>
//             </div>
          
//           {/* Accessories */}
//           <div className=" grid  space-x-3 md:mx-6 md:grid-cols-2 md:grid-rows-2 px-3 py-0 mb-0 gap-4 ">
//           <div className="relative  md:w-[240px] md:h-[500px] md:gap-3  ">
//             <div className="md:w-[240px] md:h-[242] mb-3 bg-slate-100">
//             <Image
//               src={pic}
//               alt="Accessories"
//               className="w-[239] h-[242px] left-[1px]"
//             />
//             <div className="absolute  bottom-4 px-[26px]  md:gap-[10px] py-3 transform -translate-x-1/2
//             md:w-[170px] md:h-[48px] top-[171px] left-32 bg-white text-black font-semibold 
//               shadow-md group-hover:bg-black group-hover:text-white transition">
//              <h5 className=" md:w-[118px] md:h-[24px] font-montserrat font-bold md:text-[16px]  md:text-center tracking-[0.1px] text-black md:leading-6 ">ACCESSORIES</h5> 
//             </div>
        
          
  
//           {/* Kids */}
        
//           <div className="relative w-full h-auto sm:w-[240px] sm:h-[242px]">
//   <Image
//     src={kids}
//     alt="Kids"
//     className="w-full h-full object-cover rounded-md"
//   />
//   <div
//     className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black 
//       font-semibold px-4 py-2 rounded-md shadow-md group-hover:bg-black group-hover:text-white 
//       transition duration-300"
//   >
//     <h2 className="font-montserrat font-bold text-sm sm:text-base tracking-[0.1px] text-center">
//       KIDS
//     </h2>
//   </div>
// </div>
// </div> 
//           </div>
//           </div>
      
//         </div>
// </>
//         </div>
        
      
//     )
//   };
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
        <h3 className="text-2xl font-bold text-black">EDITOR'S PICK</h3>
        <p className="text-sm text-gray-600 mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {/* Men */}
        <div className="relative">
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
        <div className="relative px-0">
          <Image
            src={woman}
            alt="Women"
            className="w-[240px] h-[500px] rounded-md"
          />
          {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 shadow-md font-semibold group-hover:bg-black group-hover:text-white transition"> */}
            {/* WOMEN */}
          {/* </div> */}
        </div>

        {/* Accessories and Kids */}
        <div className="grid grid-rows-2  px-0  gap-6 w-[240px] h-[500px]">
          {/* Accessories */}
          <div className="relative ">
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
          <div className="relative px-0">
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
