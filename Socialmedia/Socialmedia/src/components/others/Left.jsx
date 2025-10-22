import React from 'react';
import { Search, Compass, House, SquarePlay, MessageCircle, Heart, SquarePlus, EllipsisVertical, Blocks } from 'lucide-react';

const Left = () => {
  return (
    <div className="flex bg-black text-white h-screen relative">
      {/* Left panel for medium and larger screens */}
      <div className="hidden sm:flex flex-col justify-between bg-black w-16 md:w-64 min-h-screen fixed transition-all duration-300 ease-in-out">
        <div>
          <div className="px-4 py-5 md:px-10">
  <h2 className="text-[34px] md:text-[42px] font-bold text-center md:text-left select-none antialiased leading-none" style={{ fontFamily: "'Great Vibes', cursive" }}>
    Blyntrex
  </h2>
</div>
          <div className="flex flex-col gap-4 p-4 md:p-8 text-sm md:text-lg font-semibold">
            <div className="flex gap-3 items-center hover:bg-gray-800 p-2 rounded-md cursor-pointer transition-colors">
              <House className="w-6 h-6" />
              <span className="hidden md:block">Home</span>
            </div>
            <div className="flex gap-3 items-center hover:bg-gray-800 p-2 rounded-md cursor-pointer transition-colors">
              <Search className="w-6 h-6" />
              <span className="hidden md:block">Search</span>
            </div>
            <div className="flex gap-3 items-center hover:bg-gray-800 p-2 rounded-md cursor-pointer transition-colors">
              <Compass className="w-6 h-6" />
              <span className="hidden md:block">Explore</span>
            </div>
            <div className="flex gap-3 items-center hover:bg-gray-800 p-2 rounded-md cursor-pointer transition-colors">
              <SquarePlay className="w-6 h-6" />
              <span className="hidden md:block">Reels</span>
            </div>
            <div className="flex gap-3 items-center hover:bg-gray-800 p-2 rounded-md cursor-pointer transition-colors">
              <MessageCircle className="w-6 h-6" />
              <span className="hidden md:block">Messages</span>
            </div>
            <div className="flex gap-3 items-center hover:bg-gray-800 p-2 rounded-md cursor-pointer transition-colors">
              <Heart className="w-6 h-6" />
              <span className="hidden md:block">Notifications</span>
            </div>
            <div className="flex gap-3 items-center hover:bg-gray-800 p-2 rounded-md cursor-pointer transition-colors">
              <SquarePlus className="w-6 h-6" />
              <span className="hidden md:block">Create</span>
            </div>
            <div className="flex gap-3 items-center hover:bg-gray-800 p-2 rounded-md cursor-pointer transition-colors">
              <SquarePlay className="w-6 h-6" />
              <span className="hidden md:block">Profile</span>
            </div>
            <div className="flex gap-3 items-center hover:bg-gray-800 p-2 rounded-md cursor-pointer transition-colors">
              <EllipsisVertical className="w-6 h-6" />
              <span className="hidden md:block">More</span>
            </div>
            <div className="flex gap-3 items-center hover:bg-gray-800 p-2 rounded-md cursor-pointer transition-colors">
              <Blocks className="w-6 h-6" />
              <span className="hidden md:block">Also from Meta</span>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom icons for small screens */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 flex justify-around items-center py-3 z-50">
        <House className="text-white w-7 h-7 hover:text-gray-300 transition-colors" />
        <Search className="text-white w-7 h-7 hover:text-gray-300 transition-colors" />
        <SquarePlus className="text-white w-7 h-7 hover:text-gray-300 transition-colors" />
        <SquarePlay className="text-white w-7 h-7 hover:text-gray-300 transition-colors" />
        <MessageCircle className="text-white w-7 h-7 hover:text-gray-300 transition-colors" />
      </div>
      <div className="border-l border-gray-900 h-screen sm:flex hidden"></div>
    </div>
  );
};

export default Left;