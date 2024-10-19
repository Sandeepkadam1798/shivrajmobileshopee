'use client'
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Iphone16 from '../../public/Images/Iphone16.png';
import Iphone15 from '../../public/Images/Iphone15.png';
import Iphone14 from '../../public/Images/Iphone14.png'
import Iphone13 from '../../public/Images/Iphone13.png'
import Iphone12 from '../../public/Images/Iphone12.png'
import Iphone11 from '../../public/Images/Iphone11.png'

const products = [
  { id: 1, name: 'SuperPhone X', color: 'Midnight Black', price: 999, image: Iphone16 },
  { id: 2, name: 'SuperPhone X', color: 'Stellar Silver', price: 999, image: Iphone15 },
  { id: 3, name: 'SuperPhone X', color: 'Cosmic Gold', price: 999, image: Iphone16 },
  { id: 4, name: 'SuperPhone X', color: 'Aurora Green', price: 999, image: Iphone13 },
  { id: 5, name: 'SuperPhone X', color: 'Ocean Blue', price: 999, image: Iphone15 },
]

export default function WatchUI() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen back4 p-4">

<h2 className="text-2xl font-bold">Newly Launched SmartWatch </h2>
<h2 className="text-2xl font-bold mb-4">Deals</h2>
      
      {/* Top Belt */}
      <div className="w-32 h-14 bg-orange-500 rounded-b-lg mb-[-8px]"></div>

      <div className="relative w-64 h-80 bg-black rounded-[40px] border-8 border-gray-800 shadow-xl overflow-hidden">
        {/* Belt notch */}
        <div className="absolute right-[-8px] top-16 w-2 h-12 bg-gray-800 rounded-l-md" />

        <div className="w-full h-full bg-white rounded-[32px] p-4 flex flex-col justify-between">
          <div className="text-center text-sm font-semibold text-gray-500">Watch UI</div>
          
          {/* Card for Product */}
          <Card className="w-full h-[180px] border-none shadow-none">
            <CardContent className="p-2">
              <Image
                src={products[currentIndex].image}
                alt={products[currentIndex].name}
                className="w-full h-24 object-cover rounded-md mb-2"
              />
              <h3 className="text-sm font-semibold">{products[currentIndex].name}</h3>
              <p className="text-xs text-gray-500">{products[currentIndex].color}</p>
              <p className="text-sm font-bold mt-1">${products[currentIndex].price}</p>
            </CardContent>
          </Card>

          {/* Buttons for slide navigation */}
          <div className="flex justify-between items-center">
            <Button variant="ghost" size="icon" onClick={prevSlide} className="p-0">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="text-xs font-semibold">{currentIndex + 1} / {products.length}</div>
            <Button variant="ghost" size="icon" onClick={nextSlide} className="p-0">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Extra Button UI on the Watch */}
          <div className="flex justify-center mt-2">
            <Button variant="ghost" size="icon" className="p-0 border border-gray-500 rounded-full w-8 h-8">
              <div className="h-2 w-2 bg-black rounded-full" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Belt */}
      <div className="w-32 h-12 bg-orange-500 rounded-t-lg mt-[-8px]"></div>
    </div>
  )
}
