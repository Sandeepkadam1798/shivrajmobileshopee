import HeroSection from "@/components/HeroSection/HeroSection";
import MobileFooter from "@/components/MobileFooter/MobileFooter";
import Nav from "@/components/Navbarcomponents/Nav";
import CarouselDApiDemo from "@/components/OfferHeroCarousel/HeroCarousel";


export default function Home() {
  return (
    <div className="">

<Nav />
      <HeroSection/>
     <CarouselDApiDemo/>
     <MobileFooter/>
    </div>
  );
}
