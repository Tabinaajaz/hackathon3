
import Footer from "@/components/footer";
import Header from "@/components/about/header";
import Innerheader from "@/components/about/innerheader";
import ProblemsSection from "@/components/about/content-9";
import Stats from "@/components/about/states"
import Video from "@/components/about/video";
import TeamSection from "@/components/about/team-section";
import CompaniesSection from "@/components/about/CompaniesSection";
import LastSection from "@/components/about/last-section";



export default function About(){
    return(
        <>
     <Header/>
     <Innerheader/>
     <ProblemsSection/>
     <Stats/>
     <Video/>
     <TeamSection/>
     <CompaniesSection/>
     <LastSection/>

        <Footer/>
        </>

    )
}