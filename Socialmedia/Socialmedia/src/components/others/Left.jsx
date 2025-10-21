import React from 'react'
import { Search, Compass, House, SquarePlay, MessageCircle, Heart, SquarePlus, EllipsisVertical, Blocks } from 'lucide-react';

const Left = () => {
    return (
        <div className='flex bg-black h-full text-white relative'>

            {/* 🔹 Sidebar (Desktop + Tablet View) */}
            <div className='hidden sm:flex flex-col justify-between bg-black text-white w-70 min-h-screen'>
                <div>
                    <div className='px-10 py-5'>
                        <h2 className='text-2xl'>Instagram</h2>
                    </div>
                    <div className="text-white flex flex-col gap-8 p-6 sm:p-8 md:p-10 text-base sm:text-lg md:text-xl font-semibold h-auto">
                        <div className='flex gap-3 items-center'>
                            <House /><h1>Home</h1>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <Search /><h1>Search</h1>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <Compass /><h1>Explore</h1>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <SquarePlay /><h1>Reels</h1>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <MessageCircle /><h1>Messages</h1>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <Heart /><h1>Notifications</h1>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <SquarePlus /><h1>Create</h1>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <SquarePlay /><h1>Profile</h1>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <EllipsisVertical /><h1>More</h1>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <Blocks /><h1>Also form Meta</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* 🔹 Mobile Bottom Navbar */}
            <div className='sm:hidden fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 flex justify-around items-center py-3'>
                <House className='text-white w-6 h-6' />
                <SquarePlay className='text-white w-6 h-6' />
                <SquarePlus className='text-white w-6 h-6' />
                <MessageCircle className='text-white w-6 h-6' />
                <Compass className='text-white w-6 h-6' />
            </div>

            <div className='border-l border-gray-900 h-screen'></div>
        </div>
    )
}

export default Left
