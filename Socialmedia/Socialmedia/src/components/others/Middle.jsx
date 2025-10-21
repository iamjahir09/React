import React from 'react'
import { Search, Bookmark, Ellipsis, Send, Compass, House, SquarePlay, MessageCircle, Heart, SquarePlus, EllipsisVertical, Blocks } from 'lucide-react';

const Middle = () => {
  return (

    <div className='h-full w-150'>
      <div>
        <div className='p-8 ml-15 h-full mt-5  w-120'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-linear-to-r from-teal-400 to-cyan-500 rounded-full'></div>
              <div className='justify-between flex space-x-70'>
                <div className='flex min-w-0 space-x-1'>
                  <h3 className='font-semibold text-sm truncate'>aeraxia.in</h3>
                  <p className='text-gray-500 text-sm  truncate'>• 3h</p>
                </div>
                <div>
                  <Ellipsis />
                </div>
              </div>
            </div>
          </div>
          <div className='aspect-4/5 mt-3 hover:cursor-pointer'>
            <img src="https://imgv3.fotor.com/images/videoImage/Fotor-Instagram-post-maker-banner-image.png" alt="" className='aspect-4/5' />
            <div className='justify-between flex'>
              <div className=' mt-3'>
                <div className=' flex gap-4'>
                  <div className='flex items-center cursor-pointer'>
                    <Heart className='cursor-pointer hover:text-gray-600'/>
                    <span className='ml-1'>31.2k</span>
                  </div>
                  <div className='flex items-center cursor-pointer hover:text-gray-600 rounded-full p-1  '>
                    <MessageCircle/>
                    <span className='ml-1'>79</span>
                  </div>
                  <div className='flex items-center cursor-pointer hover:text-gray-600 rounded-full p-1'>
                    <Send className='cursor-pointer'/>
                  </div>
                </div>
              </div>
              <div className='mt-3 cursor-pointer'>
                <Bookmark className='cursor-pointer hover:text-gray-600'/>
              </div>
            </div>
            <div className='mt-3 flex'>
              
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore rem, consequatur quas consequuntur error ipsum! Enim molestiae cumque hic vitae.<button className='text-[#8e8e8e]'>...more</button></p>
              
            </div>
            <div className='mt-3'>
              <span><input type="text" placeholder='Add a comment...' className='text-[#8e8e8e] border-none outline-none' /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Middle