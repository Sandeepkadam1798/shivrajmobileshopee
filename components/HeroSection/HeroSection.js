// import React from 'react'

// const HeroSection = () => {
//   return (
//     <div>HeroSection</div>
//   )
// }

// export default HeroSection





"use client";
import React from "react";
// import Socialmediafollow from "../Crouselcomponents/Socialmediafollow";


const HeroSection = () => {


  return (
    <div className="md:h-[30rem] lg:h-[30rem] overflow-hidden relative w-full ">
      <video
        muted
        loop
        autoPlay
        className="object-cover brightness-50 w-full h-full"
        src="https://d1c8wbldjj3tey.cloudfront.net/header-video+(1080p).mp4"
      />
      <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 justify-center items-center px-4 text-center">
        <h1 className="text-white font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl  leading-tight sm:leading-snug md:leading-snug lg:leading-snug w-80 md:w-11/12 lg:w-11/12">
        Welcome to Shivraj Mobile Shopee
        </h1>
        <p className="text-white text-sm sm:text-3xl md:text-4xl lg:text-xl leading-tight sm:leading-snug md:leading-snug lg:leading-snug w-80 md:w-11/12 lg:w-11/12">{ `Your one-stop shop for the latest mobiles and stylish furniture. Check out our daily offers!` }</p>
        {/* <h2 className="text-[#fee60b] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium h-12">
          {text} <Cursor cursorColor="white" />
        </h2> */}

      

      </div>
      {/* <Socialmediafollow/> */}

    </div>
  );
};

export default HeroSection;
