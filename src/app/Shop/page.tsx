import Header from "@/components/about/header";
import CTA from "@/components/about/pricing/cta";
import Footer from "@/components/footer";
import Gallery from "@/components/Shop/gallery";
import Shopping from "@/components/Shop/shopping";
import Team from "@/components/Shop/team";


export default function Shop(){
    return(
        <>
        <Header/>
        <Shopping/>
        <Gallery/>
        <Team/>
        <CTA/>
        <Footer/>
        </>
    )
}