

'use client';

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import HeroImage1 from "../../public/Images/Offer1.jpg";
import HeroImage2 from "../../public/Images/Offer1.jpg";
import HeroImage3 from "../../public/Images/Offer1.jpg";
import HeroImage4 from "../../public/Images/Offer1.jpg";
import HeroImage5 from "../../public/Images/Offer1.jpg";
import Image from "next/image";

export default function CarouselDApiDemo() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const slides = [
    {
      id: 1,
      imageUrl: HeroImage1,
      caption: "Gaming PC Find the Perfect Gaming Laptop From ₹46,990",
    },
    {
      id: 2,
      imageUrl: HeroImage2,
      caption: "Slide 2: Best Deals on Laptops",
    },
    {
      id: 3,
      imageUrl: HeroImage3,
      caption: "Slide 3: Latest Smartphone Offers",
    },
    {
      id: 4,
      imageUrl: HeroImage4,
      caption: "Slide 4: Discover New Gadgets",
    },
    {
      id: 5,
      imageUrl: HeroImage5,
      caption: "Slide 5: Accessories and More",
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Remove the autoplay functionality
    // const autoplay = setInterval(() => {
    //   api.scrollNext();
    // }, 7000); // Autoplay interval

    // return () => clearInterval(autoplay);
  }, [api]);

  return (
    <div className="relative lg:mx-16 mx-4 my-3 2xl:my-6 mt-4 lg:mt-10 ">
      <Carousel setApi={setApi} className="w-full h-auto">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative w-full  lg:h-[550px] md:h-96 ">
                <Image
                  src={slide.imageUrl}
                  alt={`Slide ${slide.id}`}
                  quality={100}
                  className="w-full h-64 lg:h-full 2xl:h-80 lg:object-contain object-fill rounded-md"
                />
                {/* <span className="absolute  left-4 text-black bottom-14 text-xl font-semibold">
                  {slide.caption}
                </span> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded h-20 cursor-pointer border-none" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded h-20 cursor-pointer border-none" />
      </Carousel>
    </div>
  );
}

