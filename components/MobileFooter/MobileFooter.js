'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Search, Menu,Home,  Flag, Phone, Play } from "lucide-react";

export default function MobileFooter() {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handlePlayClick = () => {
    setIsLoading(true);
    router.push('/video');
  };

  return (
    <div className="flex flex-col h-screen bg-orange-50 relative lg:hidden">


    <nav className="bg-orange-50 border-t border-gray-200 flex justify-around p-2 fixed bottom-0 left-0 right-0 lg:hidden">
      <button className="flex flex-col items-center text-orange-500">
        <Home className="w-6 h-6" />
        <span className="text-xs">Home</span>
      </button>
      <button className="flex flex-col items-center ">
        <Flag className="w-6 h-6" />
        <span className="text-xs">Offers</span>
      </button>
      <button 
      onClick={handlePlayClick}
      disabled={isLoading}
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white rounded-full p-4 shadow-lg transition-all duration-300 ease-in-out hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
    >
      {isLoading ? (
        <div className="w-8 h-8 border-t-2 border-white rounded-full animate-spin"></div>
      ) : (
        <Play className="w-8 h-8" />
      )}
    </button>
      <div className="w-16"></div>
      <button className="flex flex-col items-center">
        <Search className="w-6 h-6" />
        <span className="text-xs">Search</span>
      </button>
      <button className="flex flex-col items-center">
        <Phone className="w-6 h-6" />
        <span className="text-xs">Contact</span>
      </button>
    </nav>

 
  </div>
  );
}
