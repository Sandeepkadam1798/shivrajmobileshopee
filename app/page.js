import HeroSection from "@/components/HeroSection/HeroSection";
import MobileFooter from "@/components/MobileFooter/MobileFooter";
import Nav from "@/components/Navbarcomponents/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">

<Nav />
      <HeroSection/>
     
     <MobileFooter/>
    </div>
  );
}
