import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Watch, Heart, Zap } from "lucide-react";

import AppleSmartWatchHero from "../../../public/Images/AppleSmartWatchHero.png";
import Iphone16 from "../../../public/Images/Iphone16.png";
import Iphone15 from "../../../public/Images/Iphone15.png";
import Nav from "@/components/Navbarcomponents/Nav";
import MobileFooter from "@/components/MobileFooter/MobileFooter";

export default function WearablesShowcase() {
  const products = [
    {
      id: 1,
      name: "Apple Watch Series 8",
      description: "Advanced Health Features & Crash Detection",
      image: Iphone16,
      price: "$399.99",
      colors: ["Midnight", "Starlight", "Silver", "Product Red"],
      features: ["Blood Oxygen Sensor", "ECG App", "Crash Detection"],
    },
    {
      id: 2,
      name: "Apple Watch SE (2nd Gen)",
      description: "Essential Features at a Great Value",
      image: Iphone15,
      price: "$249.99",
      colors: ["Midnight", "Starlight", "Silver"],
      features: [
        "Fall Detection",
        "Water Resistant to 50m",
        "Heart Rate Monitoring",
      ],
    },
    {
      id: 3,
      name: "Apple Watch Ultra",
      description: "Designed for Endurance & Adventure",
      image: Iphone16,
      price: "$799.99",
      colors: ["Titanium"],
      features: [
        "Dual-Frequency GPS",
        "Depth Gauge",
        "Up to 36 hours battery life",
      ],
    },
    {
      id: 4,
      name: "Apple Watch Series 7",
      description: "Larger Display, Faster Charging",
      image: Iphone15,
      price: "$349.99",
      colors: ["Midnight", "Starlight", "Green", "Blue", "Red"],
      features: [
        "Always-On Retina Display",
        "Dust Resistant",
        "Blood Oxygen App",
      ],
    },
  ];

  return (
    <>
    <Nav/>

    <div className=" mx-auto px-4 py-8">
      <section className="relative">
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background rounded-3xl overflow-hidden">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="mb-12 lg:mb-0">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl lg:font-bold mb-6">
                  Discover Apple Smart Watch..!
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                  Experience the perfect blend of style and technology with our
                  cutting-edge wearable devices.
                </p>
                <div className="mt-12 grid grid-cols-3 gap-4">
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
                </div>
              </div>
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-96 ">
                <Image
                  src={AppleSmartWatchHero}
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

      <div className="mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="z-0"
                />
                <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-bl-lg text-lg font-bold z-10">
                  {product.price}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-500 mb-4">{product.description}</p>
                <ul className="mb-4 flex-grow">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-700 text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="hover:scale-105 hover:shadow-2xl w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 mt-auto">
                  Get Enquiry
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <MobileFooter/>
    </>
  
  );
}
