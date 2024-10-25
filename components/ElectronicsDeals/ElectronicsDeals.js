import React from 'react';
import { Info, Sparkles } from 'lucide-react';
import Iphone16 from "../../public/Images/Iphone16.png";
import Iphone15 from "../../public/Images/Iphone15.png";
import Iphone14 from "../../public/Images/Iphone14.png";
import Iphone13 from "../../public/Images/Iphone13.png";
import Iphone12 from "../../public/Images/Iphone12.png";
import Iphone11 from "../../public/Images/Iphone11.png";
import { Button, } from '@nextui-org/react';
import Image from 'next/image';



const products = [
  {
    image: Iphone16, // Replace with actual image URL
    discount: '20%',
  },
  {
    image: Iphone15, // Replace with actual image URL
    discount: '15%',
  },
  {
    image: Iphone12, // Replace with actual image URL
    discount: '10%',
  },
  {
    image:Iphone11, // Replace with actual image URL
    discount: '25%',
  },
];

function ElectronicsDeals() {
  return (
    <div className="bg-gradient-to-b from-orange-200 to-pink-200 p-4 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Deals in Electronics</h2>
        {/* <div className="flex items-center text-sm text-gray-600">
          Sponsored <Info className="w-4 h-4 ml-1" />
        </div> */}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {products.map((item, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image src={item.image.src} height={100} width={100} alt="Product" className="w-full h-32 object-cover" />
            <div className="p-2">
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm">{item.discount} off</span>
              <p className="text-xs mt-1">Great Indian Festival</p>
            </div>
          </div>
        ))}
      </div>
      <Button className="w-full bg-orange-600 text-white py-2 rounded-md font-medium">See all deals in Electronics</Button>
      <div className="mt-6 flex items-center">
        {/* <h2 className="text-xl font-bold flex-grow">4+ star deals in Kitchen and Dining</h2> */}
        <Sparkles className="w-6 h-6 text-yellow-400" />
      </div>
    </div>
  );
}

export default ElectronicsDeals;
