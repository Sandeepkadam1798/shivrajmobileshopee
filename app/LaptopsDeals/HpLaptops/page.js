
'use client';
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Laptop, ChevronLeft, ChevronRight } from "lucide-react";

import { Dialog } from "@/components/ui/dialog";
import Image from "next/image";
import { useDisclosure } from "@nextui-org/react";
import ContactFormModal from "@/components/ContactFormModal/ContactFormModal";
import Iphone14 from '../../../public/Images/Iphone14.png'
import HPLaptopHero from '../../../public/Images/HPLaptopHero.png'
import Iphone13 from '../../../public/Images/Iphone13.png'
import Iphone12 from '../../../public/Images/Iphone12.png'
import Nav from "@/components/Navbarcomponents/Nav";
import MobileFooter from "@/components/MobileFooter/MobileFooter";

// Define HP laptop models
const hpLaptops = [
  {
    name: "HP Pavilion x360",
    price: "74,999",
    discountedPrice: "69,999",
    specs: {
      processor: "Intel i7",
      ram: "16GB",
      storage: "512GB SSD",
      colors: ["Silver", "Black", "Blue"],
    },
    images: [Iphone14, Iphone13, Iphone12], // Replace with actual image paths
  },
  {
    name: "HP Spectre x360",
    price: "1,19,999",
    discountedPrice: "1,09,999",
    specs: {
      processor: "Intel i7",
      ram: "16GB",
      storage: "1TB SSD",
      colors: ["Silver", "Dark Ash", "Blue"],
    },
    images: [Iphone14, Iphone13, Iphone12],
  },
  {
    name: "HP Envy 13",
    price: "89,999",
    discountedPrice: "84,999",
    specs: {
      processor: "Intel i5",
      ram: "8GB",
      storage: "512GB SSD",
      colors: ["Silver", "Gold", "Black"],
    },
    images: [Iphone14, Iphone13, Iphone12],
  }
];

export default function HpLaptopDeals() {
  const [currentImageIndex, setCurrentImageIndex] = useState(hpLaptops.map(() => 0));
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const nextImage = (index) => {
    setCurrentImageIndex((prev) => {
      const newIndexes = [...prev];
      newIndexes[index] = (newIndexes[index] + 1) % hpLaptops[index].images.length;
      return newIndexes;
    });
  };

  const prevImage = (index) => {
    setCurrentImageIndex((prev) => {
      const newIndexes = [...prev];
      newIndexes[index] = (newIndexes[index] - 1 + hpLaptops[index].images.length) % hpLaptops[index].images.length;
      return newIndexes;
    });
  };

  return (
    <>
       <Nav />

       <div className="min-h-screen" style={{ background: "linear-gradient(to right, #E0EAFC, #CFDEF3)" }}>
      {/* Hero Section */}
      <section className="relative">
        <div className="rounded-3xl overflow-hidden">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="mb-12 lg:mb-0 ml-4">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl lg:font-bold mb-6">
                  HP Pavilion & Spectre Series
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                  Experience innovation and versatility with HP Pavilion and Spectre series, perfect for productivity and entertainment.
                </p>
              </div>
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-96">
                <Image
                  src={HPLaptopHero} // Replace with actual image path
                  alt="HP Pavilion & Spectre Series"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Available Laptops</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hpLaptops.map((laptop, index) => (
            <Card key={index} className="flex flex-col justify-between shadow-lg hover:shadow-2xl transition-shadow">
              <CardContent className="py-4">
                <div className="relative">
                  <Image
                    src={laptop.images[currentImageIndex[index]]}
                    alt={`${laptop.name} - Image ${currentImageIndex[index] + 1}`}
                    className="w-full h-64 object-cover rounded-md"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 left-2 transform -translate-y-1/2"
                    onClick={() => prevImage(index)}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2"
                    onClick={() => nextImage(index)}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-2 mt-4">
                  <CardTitle className="text-2xl font-bold">{laptop.name}</CardTitle>
                  <div>
                    <span className="text-2xl font-bold text-green-600">₹{laptop.price}</span>
                    <span className="ml-2 text-sm line-through text-gray-500">₹{laptop.discountedPrice}</span>
                  </div>
                  <div className="flex items-center">
                    <Laptop className="w-5 h-5 mr-2 text-gray-500" />
                    <span>Processor: {laptop.specs.processor}</span>
                  </div>
                  <div className="flex items-center">
                    <Laptop className="w-5 h-5 mr-2 text-gray-500" />
                    <span>RAM: {laptop.specs.ram}</span>
                  </div>
                  <div className="flex items-center">
                    <Laptop className="w-5 h-5 mr-2 text-gray-500" />
                    <span>Storage: {laptop.specs.storage}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {laptop.specs.colors.map((color, colorIndex) => (
                      <Badge key={colorIndex} variant="secondary">
                        {color}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-500" onClick={onOpen}>Get Enquiry</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <ContactFormModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
       <MobileFooter/>

    </>
  
  );
}
