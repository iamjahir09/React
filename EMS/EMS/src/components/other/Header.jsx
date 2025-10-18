import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-15'>
        <div>
            <h1 className='text-4xl'>Hello</h1>
            <span className='text-5xl'>Jahir 👋</span>
        </div>
        <button className='bg-red-500 rounded-lg p-2'>Logout</button>
    </div>
  )
}

export default Header
