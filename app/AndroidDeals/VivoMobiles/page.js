'use client'
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, ChevronLeft, ChevronRight } from "lucide-react"
import Iphone16 from '../../../public/Images/Iphone16.png'
import SamSungHero from '../../../public/Images/SamSungHero.png'
import Iphone15 from '../../../public/Images/Iphone15.png'
import ShivrajMobileLogo from '../../../public/Images/ShivrajMobileLogo.png'
import Iphone14 from '../../../public/Images/Iphone14.png'
import Iphone13 from '../../../public/Images/Iphone13.png'
import Iphone12 from '../../../public/Images/Iphone12.png'
import Iphone11 from '../../../public/Images/Iphone11.png'
import { ArrowRight, Watch, Heart, Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { useDisclosure } from "@nextui-org/react"
import ContactFormModal from "@/components/ContactFormModal/ContactFormModal"
import SamsungSmartWatchHero from "../../../public/Images/SamsungSmartWatchHero.png";
import VivoMobilesHero from "../../../public/Images/VivoMobilesHero.png";
import Nav from "@/components/Navbarcomponents/Nav"
import MobileFooter from "@/components/MobileFooter/MobileFooter"

  const samsungModels = [
    {
      name: "Vivo X90",
      price: "54,999",
      discountedPrice: "49,999",
      specs: {
        ram: "12GB",
        rom: "256GB",
        colors: ["Astro Black", "Ice Blue", "Sunny Orange"],
      },
      images: [
        Iphone14, // Replace with actual image variables or paths
        Iphone14,
        Iphone14
      ],
    },
    {
      name: "Vivo X90 Pro",
      price: "74,999",
      discountedPrice: "69,000",
      specs: {
        ram: "12GB",
        rom: "512GB",
        colors: ["Legendary Black", "Deep Blue", "Rose Gold"],
      },
      images: [
        Iphone14, // Replace with actual image variables or paths
        Iphone14,
        Iphone14
      ],
    },
    {
      name: "Vivo V29",
      price: "39,999",
      discountedPrice: "34,999",
      specs: {
        ram: "8GB",
        rom: "128GB",
        colors: ["Majestic Purple", "Starry Black", "Pearl White"],
      },
      images: [
        Iphone14, // Replace with actual image variables or paths
        Iphone14,
        Iphone14
      ],
    },
    {
      name: "Vivo V29 Pro",
      price: "49,999",
      discountedPrice: "44,999",
      specs: {
        ram: "12GB",
        rom: "256GB",
        colors: ["Celestial Blue", "Twilight Gray", "Cherry Blossom"],
      },
      images: [
        Iphone14, // Replace with actual image variables or paths
        Iphone14,
        Iphone14
      ],
    },
    {
      name: "Vivo Y100",
      price: "24,999",
      discountedPrice: "21,999",
      specs: {
        ram: "8GB",
        rom: "128GB",
        colors: ["Pacific Blue", "Sunset Orange", "Aurora Green"],
      },
      images: [
        Iphone14, // Replace with actual image variables or paths
        Iphone14,
        Iphone14
      ],
    }
  ];
  

export default function SamsungDeals() {
  const [currentImageIndex, setCurrentImageIndex] = useState(samsungModels.map(() => 0))

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const nextImage = (index) => {
    setCurrentImageIndex((prev) => {
      const newIndexes = [...prev]
      newIndexes[index] = (newIndexes[index] + 1) % samsungModels[index].images.length
      return newIndexes
    })
  }

  const prevImage = (index) => {
    setCurrentImageIndex((prev) => {
      const newIndexes = [...prev]
      newIndexes[index] = (newIndexes[index] - 1 + samsungModels[index].images.length) % samsungModels[index].images.length
      return newIndexes
    })
  }

  const handleBuyNow = (model) => {
    setSelectedModel(model)
  }

  return ( 


    <>
    <Nav/>
    <div className="min-h-screen"  style={{
        background: "linear-gradient(to right, #FFDEE9, #B5FFFC)",
      }}>
  
  <section className="relative">
    <div className="rounded-3xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0 ml-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl lg:font-bold mb-6">
            Vivo X90 Series
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Unleash your creativity and capture every detail with the Vivo X90 series, featuring cutting-edge camera technology and innovative design.
            </p>
            {/* Uncomment and modify this section if needed
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="flex items-center">
                <Sparkles className="h-6 w-6 text-primary mr-2" />
                <span className="text-sm font-medium">Dynamic AMOLED Display</span>
              </div>
              <div className="flex items-center">
                <Camera className="h-6 w-6 text-primary mr-2" />
                <span className="text-sm font-medium">High-Resolution Camera</span>
              </div>
              <div className="flex items-center">
                <BatteryCharging className="h-6 w-6 text-primary mr-2" />
                <span className="text-sm font-medium">Long Battery Life</span>
              </div>
            </div> */}
          </div>
          <div className="relative h-64 sm:h-72 md:h-96 lg:h-96">
            <Image
              src={VivoMobilesHero} // Replace with actual image variable or path
              alt="Samsung Galaxy S24 Series"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  
        <div className="max-w-7xl mx-auto  px-4  pb-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Products
          </h1>
        {/* <h1 className="text-5xl font-extrabold text-center mb-16">Iphone 16 Series</h1> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {samsungModels.map((model, index) => (
              <Card key={index} className="flex flex-col justify-between ">
                {/* <CardHeader>
                                </CardHeader> */}
                <CardContent className="py-4 ">
                  
                  <div className="relative">
                    <Image
                      src={model.images[currentImageIndex[index]]}
                      alt={`${model.name} - Image ${currentImageIndex[index] + 1}`}
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
  
                  <CardTitle className="text-2xl font-bold">{model.name}</CardTitle>
                  {/* <p className="text-3xl font-semibold text-primary mt-2">{model.price}</p> */}
                  <div>
                      <span className="text-2xl font-bold text-green-600">
                        ₹{model.price}
                      </span>
                      <span className="ml-2 text-sm line-through text-gray-500">
                        ₹{model.discountedPrice}
                      </span>
                    </div>
  
                    <div className="flex items-center">
                      <Smartphone className="w-5 h-5 mr-2 text-gray-500" />
                      <span>RAM: {model.specs.ram}</span>
                    </div>
                    <div className="flex items-center">
                      <Smartphone className="w-5 h-5 mr-2 text-gray-500" />
                      <span>Storage: {model.specs.rom}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {model.specs.colors.map((color, colorIndex) => (
                        <Badge key={colorIndex} variant="secondary">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
        
                      <Button className="w-full bg-orange-500" onClick={onOpen} >Get Enquiry</Button>
             
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <ContactFormModal isOpen={isOpen} onOpenChange={onOpenChange} />
      </div>
    <MobileFooter/>
    
    
    </>
    
 
  )
}