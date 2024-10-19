import HeroSection from "@/components/HeroSection/HeroSection";
import MobileFooter from "@/components/MobileFooter/MobileFooter";
import Nav from "@/components/Navbarcomponents/Nav";
import CarouselDApiDemo from "@/components/OfferHeroCarousel/HeroCarousel";
import ProductGrid from "../components/MobileProduct/MobileProduct";
import MobileViewProduct from "@/components/MobileProduct/MobileViewProduct";

export default function Home() {
  return (
    <div className="w-full ">
      <Nav />
      <HeroSection />
      <CarouselDApiDemo />
      <div className="overflow-hidden">

      <MobileViewProduct />
      </div>
      <ProductGrid />

      <MobileFooter />
    </div>
  );
}
