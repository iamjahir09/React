import React from 'react'
import Navbar from './components/Navbar'
import Firstelement from './components/Firstelement'
import Deals from './components/Deals'
import Banners from './components/Banners'
import Appliances from './components/Appliances'
import Banners2 from './components/Banners2'
import Login from './components/Login'

const App = () => {
  return (
    <div className='bg-gray-300 flex flex-col cursor-pointer'>
      <Navbar/>
      <Firstelement/>
      <Deals/>
      <Banners/>
      <Appliances />
      <Banners2/>
    </div>
  )
}

export default App
