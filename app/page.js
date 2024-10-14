'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Search, Menu,Home,  Flag, Phone, Play } from "lucide-react";

export default function App() {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handlePlayClick = () => {
    setIsLoading(true);
    router.push('/video');
  };

  return (
    <div className="flex flex-col h-screen bg-white relative">
    <header className="bg-cyan-500 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Image src="/placeholder.svg" alt="Logo" width={32} height={32} className="w-8 h-8" />
        <span className="font-bold">WANDERON</span>
      </div>
      <div className="flex items-center space-x-4">
        <span>+91-9090403075</span>
        <Search className="w-6 h-6" />
        <Menu className="w-6 h-6" />
      </div>
    </header>

    <main className="flex-1 overflow-y-auto pb-16">
      <div className="relative h-48">
        <Image
          src="/placeholder.svg?height=200&width=400"
          alt="Coastal Landscape"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
          <h1 className="text-2xl font-bold">Global Community for Travelers</h1>
          <p className="text-xl text-yellow-300">Creating Stories</p>
        </div>
      </div>

      <div className="flex justify-around p-4 bg-gray-100">
        <div className="flex items-center">
          <Image src="/placeholder.svg" alt="Google" width={24} height={24} className="w-6 h-6 mr-2" />
          <span className="font-bold">4.9</span>
          <span className="text-sm text-gray-600">(11320 reviews)</span>
        </div>
        <div className="flex items-center">
          <Image src="/placeholder.svg" alt="TripAdvisor" width={24} height={24} className="w-6 h-6 mr-2" />
          <span className="font-bold">5.0</span>
          <span className="text-sm text-gray-600">(3375 reviews)</span>
        </div>
        <div className="flex items-center">
          <Image src="/placeholder.svg" alt="Facebook" width={24} height={24} className="w-6 h-6 mr-2" />
          <span className="font-bold">4.9</span>
          <span className="text-sm text-gray-600">(1031 reviews)</span>
        </div>
      </div>

      <section className="p-4">
        <h2 className="text-xl font-bold mb-4">Destinations</h2>
        <div className="grid grid-cols-5 gap-4">
          {["Europe", "Bali", "Thailand", "Vietnam", "Almora", "Meghalaya", "Andaman", "Kashmir", "Spiti Valley", "Kerala"].map((destination) => (
            <div key={destination} className="flex flex-col items-center">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt={destination}
                width={80}
                height={80}
                className="rounded-full mb-2"
              />
              <span className="text-sm text-center">{destination}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-red-100 p-4 mt-4">
        <h3 className="text-xl text-red-600 font-bold">New Year, New Adventures</h3>
      </div>
    </main>

    <nav className="bg-white border-t border-gray-200 flex justify-around p-2 fixed bottom-0 left-0 right-0 lg:hidden">
      <button className="flex flex-col items-center text-cyan-500">
        <Home className="w-6 h-6" />
        <span className="text-xs">Home</span>
      </button>
      <button className="flex flex-col items-center ">
        <Flag className="w-6 h-6" />
        <span className="text-xs">Trips</span>
      </button>
      <button 
      onClick={handlePlayClick}
      disabled={isLoading}
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white rounded-full p-4 shadow-lg transition-all duration-300 ease-in-out hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
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
