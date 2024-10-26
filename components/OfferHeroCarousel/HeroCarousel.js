

// 'use client';

// import { useEffect, useState } from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// import HeroImage1 from "../../public/Images/Offer1.jpg";
// import HeroImage2 from "../../public/Images/Offer1.jpg";
// import HeroImage3 from "../../public/Images/Offer1.jpg";
// import HeroImage4 from "../../public/Images/Offer4.jpeg";
// import HeroImage5 from "../../public/Images/Offer5.jpeg";
// import Image from "next/image";

// export default function CarouselDApiDemo() {
//   const [api, setApi] = useState(null);
//   const [current, setCurrent] = useState(0);
//   const [count, setCount] = useState(0);

//   const slides = [
//     {
//       id: 1,
//       imageUrl: HeroImage1,
//       caption: "Gaming PC Find the Perfect Gaming Laptop From ₹46,990",
//     },
//     {
//       id: 2,
//       imageUrl: HeroImage2,
//       caption: "Slide 2: Best Deals on Laptops",
//     },
//     {
//       id: 3,
//       imageUrl: HeroImage3,
//       caption: "Slide 3: Latest Smartphone Offers",
//     },
//     {
//       id: 4,
//       imageUrl: HeroImage4,
//       caption: "Slide 4: Discover New Gadgets",
//     },
//     {
//       id: 5,
//       imageUrl: HeroImage5,
//       caption: "Slide 5: Accessories and More",
//     },
//   ];

//   useEffect(() => {
//     if (!api) return;

//     setCount(api.scrollSnapList().length);
//     setCurrent(api.selectedScrollSnap() + 1);

//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap() + 1);
//     });

//     // Remove the autoplay functionality
//     // const autoplay = setInterval(() => {
//     //   api.scrollNext();
//     // }, 7000); // Autoplay interval

//     // return () => clearInterval(autoplay);
//   }, [api]);

//   return (
//     <div className="relative lg:mx-16 mx-4 my-3 2xl:my-6 mt-4 lg:mt-10 ">
//       <Carousel setApi={setApi} className="w-full h-auto">
//         <CarouselContent>
//           {slides.map((slide) => (
//             <CarouselItem key={slide.id}>
//               <div className="relative w-full h-full lg:h-[550px] md:h-96 ">
//                 <Image
//                   src={slide.imageUrl}
//                   alt={`Slide ${slide.id}`}
//                   quality={100}
//                   className="w-full h-72 lg:h-full 2xl:h-80 lg:object-contain object-fill rounded-md"
//                 />
//                 {/* <span className="absolute  left-4 text-black bottom-14 text-xl font-semibold">
//                   {slide.caption}
//                 </span> */}
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
        
//         <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded h-20 cursor-pointer border-none" />
//         <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded h-20 cursor-pointer border-none" />
//       </Carousel>
//     </div>
//   );
// }



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
import HeroImage4 from "../../public/Images/Offer4.jpeg";
import VivoOffer from "../../public/Images/VivoOffer.jpeg";
import SamsungOffer from "../../public/Images/SamsungOffer.jpeg";
import HeroImage5 from "../../public/Images/Offer5.jpeg";
import Image from "next/image";

export default function CarouselDApiDemo() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [zoomImage, setZoomImage] = useState(null);  // For modal image
  const [zoomLevel, setZoomLevel] = useState(1);     // For zoom control

  const slides = [
    {
      id: 1,
      imageUrl: HeroImage1,
      caption: "Gaming PC Find the Perfect Gaming Laptop From ₹46,990",
    },
   
    {
      id: 2,
      imageUrl: VivoOffer,
      caption: "Slide 4: Discover New Gadgets",
    },
    {
      id: 3,
      imageUrl: SamsungOffer,
      caption: "Slide 4: Discover New Gadgets",
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
  }, [api]);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, 3)); // Max zoom level 3x
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, 1)); // Min zoom level 1x (original size)
  };

  const handleImageClick = (slide) => {
    setZoomImage(slide.imageUrl);
    setZoomLevel(1); // Reset zoom level when opening modal
  };

  const closeModal = () => {
    setZoomImage(null); // Close modal
  };

  return (
    <div className="relative lg:mx-16 mx-4 my-3 2xl:my-6 mt-4 lg:mt-10">
      <Carousel setApi={setApi} className="w-full h-auto">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative w-full h-full lg:h-[550px] md:h-96" onClick={() => handleImageClick(slide)}>
                <Image
                  src={slide.imageUrl}
                  alt={`Slide ${slide.id}`}
                  quality={100}
                  className="w-full h-72 lg:h-full 2xl:h-80 lg:object-contain object-fill rounded-md cursor-pointer"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded h-20 cursor-pointer border-none" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded h-20 cursor-pointer border-none" />
      </Carousel>

      {/* Modal for Zoom Image */}
      {zoomImage && (
        <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative">
            <Image
              src={zoomImage}
              alt="Zoomed image"
              quality={100}
              style={{ transform: `scale(${zoomLevel})` }}
              className="w-auto h-auto max-w-full max-h-screen object-contain"
            />
            <button
              className="absolute -top-14 right-2 lg:top-2 rounded-full lg:-right-20 bg-black/80 text-white px-4 py-2 "
              onClick={closeModal}
            >
              X
            </button>
            {/* <div className="absolute bottom-2 left-2 flex space-x-4">
              <button
                className="bg-white text-black px-4 py-2 rounded"
                onClick={handleZoomIn}
              >
                Zoom In
              </button>
              <button
                className="bg-white text-black px-4 py-2 rounded"
                onClick={handleZoomOut}
              >
                Zoom Out
              </button>
            </div>  */}
          </div>
        </div>
      )}
    </div>
  );
}
