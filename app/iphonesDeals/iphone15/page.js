'use client'
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, ChevronLeft, ChevronRight } from "lucide-react"
import Iphone16 from '../../../public/Images/Iphone16.png'
import Iphone15 from '../../../public/Images/Iphone15.png'
import ShivrajMobileLogo from '../../../public/Images/ShivrajMobileLogo.png'
import Iphone14 from '../../../public/Images/Iphone14.png'
import Iphone13 from '../../../public/Images/Iphone13.png'
import Apple15Hero from '../../../public/Images/Apple15Hero.png'
import Iphone12 from '../../../public/Images/Iphone12.png'
import Iphone11 from '../../../public/Images/Iphone11.png'
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
import MobileFooter from "@/components/MobileFooter/MobileFooter"
import Nav from "@/components/Navbarcomponents/Nav"


const iPhoneModels = [
  {
    name: "iPhone 15 Mini",
    price: "69,999",
    discountedPrice:"59,000",
    specs: {
      ram: "6GB",
      rom: "128GB",
      colors: ["Midnight", "Starlight", "Product RED", "Blue"],
    },
    images: [
        Iphone16,
        Iphone15,
        Iphone13
    ],
  },
  {
    name: "iPhone 15",
    price: "70,999",
    discountedPrice:"59,000",
    specs: {
      ram: "6GB",
      rom: "256GB",
      colors: ["Midnight", "Starlight", "Product RED", "Blue", "Purple"],
    },
    images: [
        Iphone16,
        Iphone15,
        Iphone13
    ],
  },
  {
    name: "iPhone 15 Pro",
    price: "1,50,999",
    discountedPrice:"59,000",
    
    specs: {
      ram: "8GB",
      rom: "256GB",
      colors: ["Graphite", "Gold", "Silver", "Sierra Blue"],
    },
    images: [
        Iphone16,
        Iphone15,
        Iphone13
    ],
  },
  {
    name: "iPhone 15 Pro Max",
    price: "1,51,999",
    discountedPrice:"59,000",
    specs: {
      ram: "8GB",
      rom: "512GB",
      colors: ["Graphite", "Gold", "Silver", "Sierra Blue", "Deep Purple"],
    },
    images: [
        Iphone16,
        Iphone15,
        Iphone13
    ],
  },
]

export default function IPhone15Series() {
  const [currentImageIndex, setCurrentImageIndex] = useState(iPhoneModels.map(() => 0))

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const nextImage = (index) => {
    setCurrentImageIndex((prev) => {
      const newIndexes = [...prev]
      newIndexes[index] = (newIndexes[index] + 1) % iPhoneModels[index].images.length
      return newIndexes
    })
  }

  const prevImage = (index) => {
    setCurrentImageIndex((prev) => {
      const newIndexes = [...prev]
      newIndexes[index] = (newIndexes[index] - 1 + iPhoneModels[index].images.length) % iPhoneModels[index].images.length
      return newIndexes
    })
  }

  const handleBuyNow = (model) => {
    setSelectedModel(model)
  }

  return ( 
    <>
      <Nav />
      <div className="min-h-screen"  style={{
      background: "linear-gradient(to right, #FFDEE9, #B5FFFC)",
    }}>

<section className="relative">
        <div className=" rounded-3xl overflow-hidden">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="mb-12 lg:mb-0 ml-4">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl lg:font-bold mb-6">
                Iphone 15 Series
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                  Experience the perfect blend of style and technology with our
                  cutting-edge wearable devices.
                </p>
                {/* <div className="mt-12 grid grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Watch className="h-6 w-6 text-primary mr-2" />
                    <span className="text-sm font-medium">Premium Design</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-6 w-6 text-primary mr-2" />
                    <span className="text-sm font-medium">Health Tracking</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-6 w-6 text-primary mr-2" />
                    <span className="text-sm font-medium">
                      Long Battery Life
                    </span>
                  </div>
                </div> */}
              </div>
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-96 ">
                <Image
                  src={Apple15Hero}
                  alt="OPPO Wearables"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto  px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {iPhoneModels.map((model, index) => (
            <Card key={index} className="flex flex-col justify-between">
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