import React from 'react'

const Right = () => {
  return (
    <div className='w-full max-w-xs mx-auto lg:mx-0 lg:fixed lg:right-10 lg:top-8 top-0'>
      
      {/* Profile Section */}
      <div className='flex items-center justify-between top-0 mb-4 mt-0'>
        <div className='flex items-center space-x-3'>
          {/* Profile Avatar */}
          <div className='w-14 h-14 top-0 bg-linear-to-r from-purple-400 to-pink-500 rounded-full border-2 border-white shadow-sm'></div>
          <div>
            <h2 className='font-semibold text-sm'>iamjahir_09</h2>
            <p className='text-gray-500 text-xs'>★彡[JAHIR]彡★</p>
          </div>
        </div>
        <button className='text-xs text-blue-500 font-semibold hover:text-blue-400 transition-colors'>
          Switch
        </button>
      </div>

      {/* Suggested for you Header */}
      <div className='flex justify-between items-center mb-3'>
        <span className='text-gray-500 font-semibold text-sm'>Suggested for you</span>
        <button className='text-xs text-black font-semibold hover:text-gray-700 transition-colors'>
          See All
        </button>
      </div>

      {/* Suggested Users List */}
      <div className='space-y-4 mb-6'>
        {/* User 1 */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-8 h-8 bg-linear-to-r from-yellow-400 to-orange-500 rounded-full'></div>
            <div className='flex-1 min-w-0'>
              <h3 className='font-semibold text-sm truncate'>nagnathmadhorav</h3>
              <p className='text-gray-500 text-xs truncate'>Suggested for you</p>
            </div>
          </div>
          <button className='text-xs text-blue-500 font-semibold hover:text-blue-400 transition-colors'>
            Follow
          </button>
        </div>

        {/* User 2 */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-8 h-8 bg-linear-to-r from-green-400 to-blue-500 rounded-full'></div>
            <div className='flex-1 min-w-0'>
              <h3 className='font-semibold text-sm truncate'>ds_ke_bache</h3>
              <p className='text-gray-500 text-xs truncate'>Followed by pro.nawaz</p>
            </div>
          </div>
          <button className='text-xs text-blue-500 font-semibold hover:text-blue-400 transition-colors'>
            Follow
          </button>
        </div>

        {/* User 3 */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-8 h-8 bg-linear-to-r from-pink-400 to-red-500 rounded-full'></div>
            <div className='flex-1 min-w-0'>
              <h3 className='font-semibold text-sm truncate'>_arrshiaa_</h3>
              <p className='text-gray-500 text-xs truncate'>Followed by iman_navdekar + 2...</p>
            </div>
          </div>
          <button className='text-xs text-blue-500 font-semibold hover:text-blue-400 transition-colors'>
            Follow
          </button>
        </div>

        {/* User 4 */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-8 h-8 bg-linear-to-r from-purple-400 to-indigo-500 rounded-full'></div>
            <div className='flex-1 min-w-0'>
              <h3 className='font-semibold text-sm truncate'>hereiffrayyy02</h3>
              <p className='text-gray-500 text-xs truncate'>Suggested for you</p>
            </div>
          </div>
          <button className='text-xs text-blue-500 font-semibold hover:text-blue-400 transition-colors'>
            Follow
          </button>
        </div>

        {/* User 5 */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-8 h-8 bg-linear-to-r from-teal-400 to-cyan-500 rounded-full'></div>
            <div className='flex-1 min-w-0'>
              <h3 className='font-semibold text-sm truncate'>aeraxia.in</h3>
              <p className='text-gray-500 text-xs truncate'>Suggested for you</p>
            </div>
          </div>
          <button className='text-xs text-blue-500 font-semibold hover:text-blue-400 transition-colors'>
            Follow
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className='text-gray-400 text-xs space-y-2'>
        <div className='flex flex-wrap gap-2'>
          <span className='hover:text-gray-500 cursor-pointer'>About</span>
          <span className='hover:text-gray-500 cursor-pointer'>Help</span>
          <span className='hover:text-gray-500 cursor-pointer'>Press</span>
          <span className='hover:text-gray-500 cursor-pointer'>API</span>
          <span className='hover:text-gray-500 cursor-pointer'>Jobs</span>
          <span className='hover:text-gray-500 cursor-pointer'>Privacy</span>
          <span className='hover:text-gray-500 cursor-pointer'>Terms</span>
          <span className='hover:text-gray-500 cursor-pointer'>Locations</span>
          <span className='hover:text-gray-500 cursor-pointer'>Language</span>
          <span className='hover:text-gray-500 cursor-pointer'>Meta Verified</span>
        </div>
        
      </div>
    </div>
  )
}

export default Right