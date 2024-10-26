import React from 'react';
import LEDTV from '../../public/Images/LEDTV.png';
import Bridge from '../../public/Images/Bridge.png';
import AirColler from '../../public/Images/AirColler.png';
import Fan from '../../public/Images/Fan.png';
import Iphone13 from '../../public/Images/Iphone13.png';
import Iphone12 from '../../public/Images/Iphone12.png';
import RORefrigerater from '../../public/Images/RORefrigerater.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Nav from '@/components/Navbarcomponents/Nav';
import MobileFooter from '@/components/MobileFooter/MobileFooter';



const products = [
  {
    id: 1,
    name: "SMART LED TV",
    description: "Triply Fry Pan, 3 Layer Stainless Steel",
    originalPrice: 2560,
    discountedPrice: 6669,
    discountLabel: "Top Discount of the Sale",
    image: LEDTV,
  },
  {
    id: 2,
    name: "Style FRIDGE",
    description: "Stove & | 3 Layer Coating",
    originalPrice: 2095,
    discountedPrice: 15539,
    discountLabel: "Lowest price in the year",
    image: Bridge,
  },
  {
    id: 3,
    name: "Air Coller",
    description: "Induction Friendly Saucepan",
    originalPrice: 1500,
    discountedPrice: 1799,
    discountLabel: "Great Value",
    image: AirColler,
  },
  {
    id: 4,
    name: "Water Filter",
    description: "Non-Stick Fry Pan with Glass Lid",
    originalPrice: 1795,
    discountedPrice: 1999,
    discountLabel: "Best Seller",
    image: RORefrigerater,
  },
  {
    id: 5,
    name: "Fans",
    description: "Non-Stick Fry Pan with Glass Lid",
    originalPrice: 1795,
    discountedPrice: 1999,
    discountLabel: "Best Seller",
    image: Fan,
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className=" border rounded-lg shadow-sm flex flex-col h-full ">
      <div className="w-full h-40 md:h-48 lg:h-52 flex items-center justify-center mb-4">
        <Image src={product.image} alt={product.name} className="w-full h-full object-contain" />
      </div>
      <div className="flex-grow px-1">
        <div className="text-sm md:text-base font-semibold mb-1">{product.name}</div>
        <p className="text-xs md:text-sm text-gray-500 truncate mb-3">{product.description}</p>
        <div className="flex items-start my-2 flex-col">
          {/* <span className="text-gray-400 line-through text-sm md:text-base">₹{product.originalPrice}</span> */}
          <p>Starting Price</p>
          <span className="text-lg font-bold text-black ">₹{product.discountedPrice}</span>
        </div>
        <span className="text-xs font-medium text-white bg-purple-400 rounded px-2 py-1 inline-block mb-4">
          {product.discountLabel}
        </span>
        <button className="w-full mb-2 mt-auto underline  text-orange-500 rounded-md py-2 text-sm md:text-base font-medium hover:bg-blue-100 transition">
      View 
      </button>
      </div>
   
    </div>
  );
};

const ProductList = () => {
  return (
    <>
    <Nav/>
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button className="flex-grow border px-4 py-2 rounded-lg text-sm">Sort By</button>
        <button className="flex-grow border px-4 py-2 rounded-lg text-sm">Filter</button>
        <button className="flex-grow border px-4 py-2 rounded-lg text-sm">Price</button>
        <button className="flex-grow border px-4 py-2 rounded-lg text-sm">Brand</button>
        <button className="flex-grow border px-4 py-2 rounded-lg text-sm">Material</button>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pb-10">
        {products.map((product) => (
          <div key={product.id} className="h-full">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>

    <MobileFooter/>
    </>
  
  );
};

export default ProductList;
