

// import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button, Image } from '@nextui-org/react'
import Iphone16 from '../../public/Images/Iphone16.png';
import Iphone15 from '../../public/Images/Iphone15.png';
import Iphone14 from '../../public/Images/Iphone14.png'
import Iphone13 from '../../public/Images/Iphone13.png'
import { Info, Sparkles } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Apple iPhone 13 (128GB)",
    image: Iphone16,
    discount: 28,
    price: 42999,
    originalPrice: 59900,
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra 5G",
    image: Iphone15,
    discount: 49,
    price: 75999,
    originalPrice: 149999,
  },
  {
    id: 3,
    name: "Apple MacBook Air Laptop",
    image: Iphone14,
    discount: 35,
    price: 59990,
    originalPrice: 92900,
  },
  {
    id: 4,
    name: "realme NARZO 70 Turbo",
    image: Iphone13,
    discount: 14,
    price: 17998,
    originalPrice: 20999,
  },
]

export default function LaptopsDeal () {
  return (

    <div className='bg-gradient-to-b from-orange-100 to-orange-100   px-2 pt-6 h-screen'>

<div className="flex gap-1 justify-between ">

<h2 className="text-2xl font-bold"> Laptop Deals </h2>
<Sparkles  className="w-6 h-6 text-yellow-400 -mt-2" />

</div>
<p className="text-orange-500 font-bold">Get the Best Deal on Apple MacBook & Hp Laptops..! </p>

 <div >
      <div className="grid grid-cols-2 gap-2 bg-white rounded-xl mt-6">
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
                  width={200}
                  height={200}
                  isZoomed
                 
                  className="w-full  h-40 object-cover"
                />
              </div>
              {/* <Badge className="bg-red-600 text-white mb-2">Great Indian Festival</Badge> */}
              <div className="text-lg font-bold">₹{product.price.toLocaleString()}</div>
              <div className="text-sm text-gray-500 line-through">
                M.R.P: ₹{product.originalPrice.toLocaleString()}
              </div>
              <div className="text-sm font-medium truncate mt-1">{product.name}</div>
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
