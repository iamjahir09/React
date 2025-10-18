// Header.jsx - Updated
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-6 px-10 bg-gradient-to-r from-gray-900 to-black border-b border-gray-700'>
        <div>
            <h1 className='text-2xl text-gray-300'>Welcome back,</h1>
            <span className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>Jahir 👋</span>
        </div>
        <button className='bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-xl px-6 py-3 transition-all transform hover:scale-105 shadow-lg'>
          Logout
        </button>
    </div>
  )
}

export default Header