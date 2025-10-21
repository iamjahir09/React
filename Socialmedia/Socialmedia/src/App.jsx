import React from 'react'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Left from './components/others/Left'
import Right from './components/others/Right'

const App = () => {
  return (
    <div className='flex bg-black text-white'>
      {/* <Login /> */}
      {/* <Signup /> */}
      <Left />
      <Right />
    </div>
  )
}

export default App
