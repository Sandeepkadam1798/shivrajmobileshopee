

'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Samsung from '../../public/Images/Samsung.png'
import Vivo from '../../public/Images/Vivo.png'
import Oppo from '../../public/Images/Oppo.png'
import Realme from '../../public/Images/Realme.png'
import Mi from '../../public/Images/Mi.png'
import Poco from '../../public/Images/Poco.png'
import Iphone12 from '../../public/Images/Iphone12.png'
import Iphone11 from '../../public/Images/Iphone11.png'
import { Button } from '@nextui-org/react';
// Array of objects with image, title, and price
const tripData = [
  {
    id: 1,
    title: 'Samsung Mobiles',
    price: 'Starting Price Rs. 20,990/-',
    imageUrl: Samsung, // Add actual image URLs here
  },
  {
    id: 2,
    title: 'Vivo Mobiles',
    price: 'Starting Price Rs. 8,990/-',
    imageUrl: Vivo,
  },
  {
    id: 3,
    title: 'Oppo Mobiles',
    price: 'Starting Price Rs. 8,990/-',
    imageUrl: Oppo, // Add actual image URLs here
  },
  {
    id: 4,
    title: 'Realme Mobiles',
    price: 'Starting Price Rs. 8,990/-',
    imageUrl: Realme, // Add actual image URLs here
  },
  {
    id: 5,
    title: 'Xiaomi Mi Mobiles',
    price: 'Starting Price Rs. 10,990/-',
    imageUrl: Mi, // Add actual image URLs here
  },
  {
    id: 6,
    title: 'Poco Mobiles',
    price: 'Starting Price Rs. 50,990/-',
    imageUrl: Poco, // Add actual image URLs here
  },
  // Add more trip objects
];

export default function OtherDealsForMobile() {
  return (

    <div className="w-full text-center mt-4 ">
    {/* Heading Section */}
    <h2 className="text-2xl font-bold">Newly Launched Android </h2>
    <h2 className="text-2xl font-bold mb-4">Deals</h2>
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper overflow-hidden "
    >
      {tripData.map((trip) => (
        <SwiperSlide key={trip.id}>
          <div
            className="relative w-full h-full bg-cover bg-center rounded-xl bg-white"
            style={{ backgroundImage: `url(${trip.imageUrl.src})` }}
          >
            {/* Overlay for gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>

            {/* Title and price at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
              <h3 className="text-2xl font-bold">{trip.title}</h3>
              <p className="text-sm">{trip.price}</p>
              <Button radius="full"  className="bg-gradient-to-tr text-sm font-bold p-0 mt-1 from-pink-500 to-yellow-500 text-white shadow-lg">
      View
    </Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}
