import Footer from "@/components/footer";
import TopBar from "@/components/topnavbar";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export  default function Page(){
    return(
        <div>
            <TopBar/>
        <div className="flex justify-center items-center h-screen gap-3 bg-gradient-to-r from-blue-300 to-purple-700"> 
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    <SignInButton/>
</button>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">

    <SignUpButton/>
</button>
</div>
  <Footer/>
        </div>
    )
}