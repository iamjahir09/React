import React from 'react'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Left from './components/others/Left'
import Right from './components/others/Right'
import Story from './components/others/Story'
import Messages from './components/others/Messages'

const App = () => {
  return (
    <div className="bg-black text-white flex justify-between relative min-h-screen overflow-x-hidden">

      {/* 🔹 Left Sidebar */}
      <div className="fixed top-0 left-0 h-full z-50">
        <Left />
      </div>

      {/* 🔹 Center Main Content */}
      <div className="flex-1 mx-auto lg:ml-72 lg:mr-80 md:ml-64 md:mr-64 sm:ml-20 sm:mr-20 mt-5 overflow-y-auto">
        <Story />
      </div>

      {/* 🔹 Right Sidebar */}
      <div className="fixed top-8 right-10 hidden lg:block z-40">
        <Right />
      </div>

      {/* 🔹 Messages Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Messages />
      </div>


    </div>
  )
}

export default App
