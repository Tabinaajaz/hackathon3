import Cards from "@/components/about/product/cart";
import FilterRow from "@/components/about/product/flip";
import ProductGrid from "@/components/about/product/product-section";
import Header from "@/components/about/product/topnavbar";
import Footer from "@/components/footer";

export default function (){
  return(
      <div>
          <Header/>
          <Cards/>
          <FilterRow/>
          <section/>
          <Footer/>
          <ProductGrid/>
      </div>
  )
} 