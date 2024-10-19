import HeroSection from "@/components/HeroSection/HeroSection";
import MobileFooter from "@/components/MobileFooter/MobileFooter";
import Nav from "@/components/Navbarcomponents/Nav";
import CarouselDApiDemo from "@/components/OfferHeroCarousel/HeroCarousel";
import ProductGrid from "../components/MobileProduct/MobileProduct";
import MobileViewProduct from "@/components/MobileProduct/MobileViewProduct";
import BrandMarquee from "@/components/BrandMarquee/BrandMarquee";
import OtherDealsForMobile from "@/components/MobileProduct/OtherDealsForMobile";
import WatchSlider from "@/components/WatchSlider/WatchSlider";

export default function Home() {
  return (
    <div className="w-full ">
         <div className="lg:flex hidden">
      <BrandMarquee/>
      </div>
      
      <Nav />
   
      <HeroSection />
      <CarouselDApiDemo />
      <div className="lg:hidden">
      <BrandMarquee/>
      </div>
      <div className="overflow-hidden back mt-6 lg:hidden">
      
      <MobileViewProduct />
    
      </div>
      <div className="overflow-hidden back2 mt-6 lg:hidden mb-8">
      
      <OtherDealsForMobile/>
    
      </div>

      <div className=" back ">
      
      <WatchSlider/>
    
      </div>

      
      <div className=" hidden lg:flex">
      <ProductGrid />

      </div>
      

      <MobileFooter />
    </div>
  );
}
