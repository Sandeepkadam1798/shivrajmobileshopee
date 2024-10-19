import { Phone, Battery, Cpu, HardDrive } from "lucide-react";

import Iphone16 from '../../public/Images/Iphone16.png';
import Iphone15 from '../../public/Images/Iphone15.png';
import Iphone14 from '../../public/Images/Iphone14.png'
import Iphone13 from '../../public/Images/Iphone13.png'
import Iphone12 from '../../public/Images/Iphone12.png'
import Iphone11 from '../../public/Images/Iphone11.png'
import Image from "next/image";

const phones = [
  {
    id: 1,
    name: "SuperPhone X",
    price: 999,
    image: Iphone16,
    specs: {
      storage: "128GB",
      ram: "8GB",
      battery: "4000mAh",
      processor: "Octa-core",
    },
    color: "Midnight Black",
  },
  {
    id: 2,
    name: "SuperPhone X",
    price: 999,
    image: Iphone15,
    specs: {
      storage: "128GB",
      ram: "8GB",
      battery: "4000mAh",
      processor: "Octa-core",
    },
    color: "Midnight Black",
  },
  {
    id: 3,
    name: "SuperPhone X",
    price: 999,
    image: Iphone14,
    specs: {
      storage: "128GB",
      ram: "8GB",
      battery: "4000mAh",
      processor: "Octa-core",
    },
    color: "Midnight Black",
  },
  {
    id: 4,
    name: "SuperPhone X",
    price: 999,
    image: Iphone13,
    specs: {
      storage: "128GB",
      ram: "8GB",
      battery: "4000mAh",
      processor: "Octa-core",
    },
    color: "Midnight Black",
  },
  {
    id: 5,
    name: "SuperPhone X",
    price: 999,
    image: Iphone13,
    specs: {
      storage: "128GB",
      ram: "8GB",
      battery: "4000mAh",
      processor: "Octa-core",
    },
    color: "Midnight Black",
  },
  {
    id: 6,
    name: "SuperPhone X",
    price: 999,
    image: Iphone14,
    specs: {
      storage: "128GB",
      ram: "8GB",
      battery: "4000mAh",
      processor: "Octa-core",
    },
    color: "Midnight Black",
  },
  
];

export default function ProductGrid() {
  return (
    <div className=" mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold  mb-8 text-center text-gray-800">Featured Phones</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-8">
        {phones.map((phone) => (
          <div key={phone.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative w-full h-64"> {/* Adjusted height for better layout */}
              <Image
                src={phone.image}
                alt={phone.name}
                layout="fill" // Ensure the image fills the container
                objectFit="cover" // Ensures the image covers the entire area without distortion
                className="z-0"
                isZoomed
              />
              <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-bl-lg text-lg font-bold z-10">
                ${phone.price}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{phone.name}</h2>
              <p className="text-gray-500 mb-4">{phone.color}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <HardDrive className="w-5 h-5 mr-2 text-orange-500" />
                  <span className="text-gray-700">{phone.specs.storage}</span>
                </div>
                <div className="flex items-center">
                  <Cpu className="w-5 h-5 mr-2 text-orange-500" />
                  <span className="text-gray-700">{phone.specs.ram} RAM</span>
                </div>
                <div className="flex items-center">
                  <Battery className="w-5 h-5 mr-2 text-orange-500" />
                  <span className="text-gray-700">{phone.specs.battery}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-orange-500" />
                  <span className="text-gray-700">{phone.specs.processor}</span>
                </div>
              </div>
              <button className="hover:scale-105 hover:shadow-2xl w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
