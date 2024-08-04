import Image from "next/image";
import CollectionSection from "./ui/component/CollectionSection";
import Footer from "./ui/component/Footer";
import HeroSection from "./ui/component/HeroSection";
import Navigator from "./ui/component/Navigator";
import { poppins } from "./ui/fonts";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Navigator/>
      <div className="p-4">
        <h1 className={`${poppins.className} font-bold text-xl`}>Gallery</h1>
        <div className="flex flex-wrap flex-row justify-between gap-3 pt-20 bg-gray-100 shadow-md ">
          <div className="h-64 w-96 hover:scale-125 hover:cursor-pointer shadow-md">
            <img
            src="gallery\basdnnm1000.png"
            alt="test"/>  
          </div>                                      
          <div className="h-64 w-96 hover:scale-125 hover:cursor-pointer shadow-md">
            <img
            src="gallery\refffd.png"
            alt="test"/>  
          </div>                   
          <div className="h-64 w-96 hover:scale-125 hover:cursor-pointer shadow-md">
            <img
            src="gallery\dr5ftlndscp.png"
            alt="test"/>  
          </div>                   
          <div className="h-64 w-96 hover:scale-125 hover:cursor-pointer shadow-md">
            <img
            src="gallery\wip.png"
            alt="test"/>  
          </div>                   
          <div className="h-64 w-96 hover:scale-125 hover:cursor-pointer overflow-hidden shadow-md">
            <img
            src="gallery\vsahwp.png"
            alt="test"/>  
          </div>                   
          <div className="h-64 w-96 hover:scale-125 hover:cursor-pointer overflow-hidden shadow-md">
            <img
            src="gallery\afs1000.png"
            alt="test"/>  
          </div>                   
        </div>
      </div>
      
      <div className="p-4 mt-20 h-auto">
        <h1>This will be component used</h1>

      </div>
      <Footer/>
    </main>    
  );
}