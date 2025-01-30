import Header from "@/components/about/header";
import PricingSection from "@/components/about/pricing/CompaniesSection";
import CTA from "@/components/about/pricing/cta";
import PricingFaq from "@/components/about/pricing/faq";
import Pricing from "@/components/about/pricing/pricing";
import Pricinglist from "@/components/about/pricing/pricing-list";
import Footer from "@/components/footer";

export default function  pricing (){
    return(
        <div>
            <Header/>
            <Pricing/>
            <Pricinglist/>
            <PricingSection/>
            <PricingFaq/>
            <CTA/>
            <Footer/>
        </div>
    )
}; 
