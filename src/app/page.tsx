import Carousel from "@/components/Carousel";
import CardShop from "@/components/card-shop";
import Greenpart from "@/components/green-part";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/topnavbar";
import Whitepart from "@/components/white-part";
import FeaturedCards from "@/components/featured";
import Footer from "@/components/footer";
import ProductsList from "@/components/cards";


export default function Home() {
  return (
   <div  className=" md:w-[1439px] md:h-[716px] md:top-[136px] md:left-[1px] ms:rounded-[5px] md:broder-[1px] bg-slate-200">
   <TopBar/>
   <Navbar/>
   <Carousel/>
   <CardShop/>
   <ProductsList/>
   <Greenpart/>
   <Whitepart/>
   <FeaturedCards/>
   <Footer/>
   </div>  
   )
};
