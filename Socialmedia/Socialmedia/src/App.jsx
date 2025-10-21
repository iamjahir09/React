import React from 'react'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Left from './components/others/Left'
import Right from './components/others/Right'
import Story from './components/others/Story'
import Header from './components/others/Header'

const App = () => {
  return (
    <div className='flex bg-black text-white'>
      {/* <Login /> */}
      {/* <Signup /> */}
      <Left />
      <Right />
      
      <Header />
    </div>
  )
}

export default App
