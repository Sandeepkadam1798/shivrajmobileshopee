'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Iphone16 from "../../public/Images/Iphone16.png";
import Iphone15 from "../../public/Images/Iphone15.png";
import Iphone14 from "../../public/Images/Iphone14.png";
import Iphone13 from "../../public/Images/Iphone13.png";
import Iphone12 from "../../public/Images/Iphone12.png";
import Iphone11 from "../../public/Images/Iphone11.png";
import { Image } from '@nextui-org/react';

const initialOffers = [
  {
    id: 1,
    name: "iPhone 13 Pro(128GB)",
    category: "Mobiles",
    originalPrice: "59,999",
    discountedPrice: "49,999",
    image: Iphone16,
    discount: 10,
  },
  {
    id: 2,
    name: "Samsung Galaxy Tab S7 ",
    category: "Tablets",
    originalPrice: 649,
    discountedPrice: 549,
    image:Iphone14 ,
    discount: 15,
  },
  {
    id: 3,
    name: "Sony WH-1000XM4",
    category: "Electronics",
    originalPrice: 349,
    discountedPrice: 279,
    image: Iphone11,
    discount: 20,
  },
  {
    id: 4,
    name: "MacBook Air M1",
    category: "Laptops",
    originalPrice: "1,20,000",
    discountedPrice: 899,
    image: Iphone12,
    discount: 10,
  },
];

export function OffersSheet({ isOpen, onClose }) {
  const [currentOffer, setCurrentOffer] = useState(0);
  const [offers, setOffers] = useState(initialOffers);

  useEffect(() => {
    // Generate random hours for each offer on the initial render
    const updatedOffers = initialOffers.map((offer) => ({
      ...offer,
      hoursLeft: Math.floor(Math.random() * 48) + 1, // Random hours between 1 and 48
    }));
    setOffers(updatedOffers);
  }, []);

  const nextOffer = () => {
    setCurrentOffer((prev) => (prev + 1) % offers.length);
  };

  const prevOffer = () => {
    setCurrentOffer((prev) => (prev - 1 + offers.length) % offers.length);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose} >
      <SheetContent side="bottom" className=" overflow-y-auto ">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-center">Daily Hot Deals!</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="relative w-full max-w-md">
            {/* Image and content */}
            <div className="overflow-hidden rounded-lg shadow-lg bg-white">
              <div className="p-6 space-y-4">
                <Badge className="mb-2">{offers[currentOffer].category}</Badge>
                <Image
                  src={offers[currentOffer].image.src}
                  alt={offers[currentOffer].name}
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{offers[currentOffer].name}</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-green-600">
                      ₹{offers[currentOffer].discountedPrice}
                    </span>
                    <span className="ml-2 text-sm line-through text-gray-500">
                      ₹{offers[currentOffer].originalPrice}
                    </span>
                  </div>
                  <Badge variant="destructive" className="text-lg">
                    {offers[currentOffer].discount}% OFF
                  </Badge>
                </div>
                {/* Displaying Hours Left */}
                <div className="text-sm text-red-600">
                  Hurry, only {offers[currentOffer].hoursLeft} hours left!
                </div>
                <Button className="w-full mt-4 bg-orange-500" size="lg">
                  Buy Now
                </Button>
              </div>
            </div>

            <div className="flex justify-between px-4 py-2 z-10">
              <Button variant="outline" size="icon" onClick={prevOffer}>
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex justify-center mt-4 space-x-2">
                {offers.map((_, index) => (
                  <Button
                    key={index}
                    variant={currentOffer === index ? "default" : "outline"}
                    size="sm"
                    className="w-2 h-2 rounded-full p-0"
                    onClick={() => setCurrentOffer(index)}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={nextOffer}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
