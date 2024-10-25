

// import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from '@nextui-org/react'
import HP from '../../public/Images/HP.png';
import Dell from '../../public/Images/Dell.png';
import Asus from '../../public/Images/Asus.png'
import Apple from '../../public/Images/Apple.png'
import { Info, Sparkles } from 'lucide-react';
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "HP Laptops",
    image: HP,
    discount: 28,
    price: "42,999  ",
    originalPrice: 59900,
  },
  {
    id: 2,
    name: "Dell Laptops",
    image: Dell,
    discount: 49,
    price: 75999,
    originalPrice: 149999,
  },
  {
    id: 3,
    name: "Asus Laptops",
    image: Asus,
    discount: 35,
    price: 59990,
    originalPrice: 92900,
  },
  {
    id: 4,
    name: "Apple MacBook",
    image: Apple,
    discount: 14,
    price: "98,998",
    originalPrice: 20999,
  },
]

export default function LaptopsDeal () {
  return (

    <div className='bg-gradient-to-b from-orange-100 to-orange-100   px-2  pb-4'>

<div className="flex gap-1 justify-between ">

<h2 className="text-2xl font-bold mt-2 "> Laptop Deals </h2>
<Sparkles  className="w-6 h-6 text-yellow-400  mt-2" />

</div>
<p className="text-orange-500 font-bold">Get the Best Deal on Apple MacBook & Hp Laptops..! </p>

 <div >
      <div className="grid grid-cols-2 gap-2  rounded-xl mt-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardContent className="p-2">
              <div className="relative mb-2">
                <Badge className="absolute top-1 left-1 bg-orange-600 text-white">
                  {product.discount}% off
                </Badge>
                <Image
                  src={product.image.src}
                  alt={product.name}
                  width={100}
                  height={100}
                  isZoomed
                 
                  className="w-full  h-40 object-fill rounded-md"
                />
              </div>
              {/* <Badge className="bg-red-600 text-white mb-2">Great Indian Festival</Badge> */}
              <div className="flex gap-2">

              <div className="text-sm font-medium truncate mt-1">{product.name}</div>
              {/* <div className="text-sm font-medium truncate mt-1">20% OFF</div> */}

              </div>
           
              <p className="text-sm">Starting from </p>
              <div className="text-lg font-bold">₹{product.price.toLocaleString()}</div>
              {/* <div className="text-sm text-gray-500 line-through">
                M.R.P: ₹{product.originalPrice.toLocaleString()}
              </div> */}
              
            </CardContent>
          </Card>
        ))}
      </div>
      {/* <div className=" text-center mt-5">
        <a href="#" className="text-orange-600 font-semibold">
         <Button className='bg-orange-400 text-white font-bold '>
         See more
          </Button> 
        </a>
      </div> */}
    </div>
    </div>
   
  )
}
