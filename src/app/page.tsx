import CollectionSection from "./ui/component/CollectionSection";
import Footer from "./ui/component/Footer";
import HeroSection from "./ui/component/HeroSection";
import MainContent from "./ui/component/MainContent";
import TechSection from "./ui/component/Tech";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <MainContent/>
      {/* <CollectionSection/> */}
      <TechSection/>
      {/* <Footer/> */}
    </main>    
  );
}