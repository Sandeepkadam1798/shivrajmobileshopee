




import Image from 'next/image'
import React from 'react'
import HomeAppliences from "../../public/Images/HomeAppliences.png"
import { Button } from '../ui/button'
import Link from 'next/link'

const ElectronicsDeals = () => {
  return (
    <div style={{ background: "linear-gradient(to right, #E0EAFC, #CFDEF3)" }}> <section className="relative">
    <div className="rounded-3xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className=" lg:mb-0 ml-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl lg:font-bold mb-6">
            Elevate Your Home with Premium Appliances
            </h1>


            <Link href={"/HomeAppliances"}>
            <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-md shadow-md hover:bg-orange-700 transition duration-200 hover:shadow-lg">
              View Products
            </button>
            </Link>
            
            {/* <p className="text-xl text-muted-foreground  max-w-2xl">
              {`Discover our latest range of home appliances, crafted to bring both elegance and efficiency to your everyday life. Designed with advanced technology and built for comfort and ease.`}
            </p> */}
          </div>
          <div className="relative h-64 sm:h-72 md:h-96 lg:h-96">
            <Image
              src={HomeAppliences} // Replace with actual image path
              alt="HP Pavilion & Spectre Series"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default ElectronicsDeals