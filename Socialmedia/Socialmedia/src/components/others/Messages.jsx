import React from 'react'
import { MessageCircle } from 'lucide-react'

const Messages = () => {
  return (
    <button
      className="flex items-center gap-2 w-full sm:w-65 px-3 sm:px-4 py-3 sm:py-4 rounded-full 
                 bg-[#1b2129a8] hover:bg-[#8e8e8e] transition-colors
                 shadow-md text-white text-sm font-medium
                 justify-start cursor-pointer"
    >
      <MessageCircle className="w-5 h-5" />
      <span className='text-sm sm:text-lg'>Messages</span>
    </button>
  )
}

export default Messages