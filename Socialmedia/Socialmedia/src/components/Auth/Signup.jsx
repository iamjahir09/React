import React from 'react'

const Signup = () => {
  return (
    <div className='bg-black min-h-screen flex items-center justify-center p-4'>
            <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8'>
                {/* Image Section - Left Side */}
                <div className='w-full md:w-1/2 flex justify-center'>
                    <img 
                        src="https://bcdn.mindler.com/bloglive/wp-content/uploads/2024/09/18135206/Empowering-Teens_How-to-Use-Social-Media-for-Good_blog-770x385.png" 
                        className='w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300'
                        alt="Social Media"
                    />
                </div>

                {/* Form Section - Right Side */}
                <div className='w-full md:w-1/2'>
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                    }}>
                        <div className='bg-white/90 backdrop-blur-sm border-2 border-white/20 shadow-2xl rounded-3xl py-8 px-6'>
                            {/* Header */}
                            <div className='text-center mb-8'>
                                <h2 className='text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent'>Login</h2>
                            </div>

                            {/* Form Fields */}
                            <div className='space-y-6'>
                                {/* First Name */}
                                <div className='space-y-2'>
                                    <h2 className='text-lg font-semibold text-gray-700 px-2'>Enter your first name</h2>
                                    <input 
                                        type="text" 
                                        placeholder='Enter your first name' 
                                        className='w-full border-2 border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 bg-white/50' 
                                    />
                                </div>

                                {/* Last Name */}
                                <div className='space-y-2'>
                                    <h2 className='text-lg font-semibold text-gray-700 px-2'>Enter your last name</h2>
                                    <input 
                                        type="text" 
                                        placeholder='Enter your last name' 
                                        className='w-full border-2 border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 bg-white/50' 
                                    />
                                </div>

                                {/* Email */}
                                <div className='space-y-2'>
                                    <h2 className='text-lg font-semibold text-gray-700 px-2'>Enter your email address</h2>
                                    <input 
                                        type="email" 
                                        placeholder='Enter your email address' 
                                        className='w-full border-2 border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 bg-white/50' 
                                    />
                                </div>

                                {/* Password */}
                                <div className='space-y-2'>
                                    <div className='flex justify-between px-2'>
                                        <h2 className='text-lg font-semibold text-gray-700'>Enter your password</h2>
                                        <p className='text-orange-500 font-semibold cursor-pointer hover:text-orange-600 transition-colors text-sm'>
                                            Forgot your password?
                                        </p>
                                    </div>
                                    <input 
                                        type="password" 
                                        placeholder='Enter your password' 
                                        className='w-full border-2 border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 bg-white/50' 
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className='text-center mt-8'>
                                <button  onClick={onsubmit} className='bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-12 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 outline-none'>
                                    Submit
                                </button>
                            </div>

                            {/* Additional Links */}
                            <div className='text-center mt-6 space-y-2'>
                                <p className='text-gray-600'>
                                    already have an account? 
                                    <span className='text-orange-500 font-semibold ml-1 cursor-pointer hover:text-orange-600 transition-colors'>
                                        Log in
                                    </span>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Signup
