import React from 'react'

const Login = () => {
  return (
    <div className='bg-cyan-500 h-screen text-white flex flex-col items-center gap-5'>
      <div className=' h-150 mt-15 rounded-2xl px-10 mb-20 bg-pink-800'>
        <h1 className='text-4xl font-bold py-5 px-5 ml-15'>LogIn</h1>
        <form className='mt-30 outline-none flex flex-col items-center gap-5'>
          <input required type="email" placeholder='Enter Your Email' className='bg-transparent rounded-full items-start px-5 py-3 w-75 outline-none' />
          <input required type="password" placeholder='Enter Your Password' className='bg-transparent rounded-full items-center px-5 py-3 w-75 outline-none' />
          <h3 className='text-white hover:text-blue-500 cursor-pointer'>Forgot password?</h3>
          <div className='flex gap-3'>
            <input required type="checkbox" className='items-start' />
            <h3>I Agree to Terms and Services</h3>
          </div>
          <button className='bg-green-600 rounded-full items-center px-5 py-3 outline-none mt-10 mb-5 w-40 text-lg'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
