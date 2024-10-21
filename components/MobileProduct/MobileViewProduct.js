// 'use client'

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';



// // import required modules
// import { EffectCards } from 'swiper/modules';

// export default function MobileViewProduct() {
//   return (
//     <>
//       <Swiper
//         effect={'cards'}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper overflow-hidden"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }


'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Iphone16 from '../../public/Images/Iphone16.png'
import Iphone15 from '../../public/Images/Iphone15.png'
import ShivrajMobileLogo from '../../public/Images/ShivrajMobileLogo.png'
import Iphone14 from '../../public/Images/Iphone14.png'
import Iphone13 from '../../public/Images/Iphone13.png'
import Iphone12 from '../../public/Images/Iphone12.png'
import Iphone11 from '../../public/Images/Iphone11.png'
import { Button } from '@nextui-org/react';
// Array of objects with image, title, and price
const tripData = [
  {
    id: 1,
    title: 'Iphone 16 Series',
    price: 'Starting Price Rs. 70,990/-',
    imageUrl: Iphone16, // Add actual image URLs here
  },
  {
    id: 2,
    title: 'Iphone 15  Series',
    price: 'Starting Price Rs. 69,990/-',
    imageUrl: Iphone15,
  },
  {
    id: 3,
    title: 'Iphone 14 Series',
    price: 'Starting Price Rs. 70,990/-',
    imageUrl: Iphone14, // Add actual image URLs here
  },
  {
    id: 4,
    title: 'Iphone 13 Series',
    price: 'Starting Price Rs. 50,990/-',
    imageUrl: Iphone13, // Add actual image URLs here
  },
  {
    id: 5,
    title: 'Iphone 12 Series',
    price: 'Starting Price Rs. 50,990/-',
    imageUrl: Iphone12, // Add actual image URLs here
  },
  {
    id: 6,
    title: 'Iphone 11 Series',
    price: 'Starting Price Rs. 50,990/-',
    imageUrl: Iphone11, // Add actual image URLs here
  },
  // Add more trip objects
];

export default function MobileViewProduct() {
  return (

    <div className="w-full text-center mt-4 ">
    {/* Heading Section */}
    <h2 className="text-2xl font-bold">Newly Launched iPhone </h2>
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
              <h3 className="text-lg font-bold">{trip.title}</h3>
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
