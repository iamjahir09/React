import React from 'react'
import { MessageCircle } from 'lucide-react'

const Messages = () => {
  return (
    <button
      className="hidden lg:flex items-center gap-3 w-60 px-4 py-4 rounded-full 
                 bg-[#1b2129a8] hover:bg-[#8e8e8e] transition-colors 
                 shadow-lg text-white text-base font-medium"
    >
      <MessageCircle className="w-7 h-8" />
      <span className="text-base">Messages</span>
    </button>
  )
}

export default Messages
