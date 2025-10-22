import React, { useEffect, useState } from 'react'
import { getLocalStorage } from '../../utils/LocalStorage'

const Right = () => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem('loggedInUser'))
    if (loggedIn) {
      const users = getLocalStorage()
      const user = users.find(u => u.email === loggedIn.email)
      setCurrentUser(user)
    }
  }, [])

  if (!currentUser) return null

  const suggestions = [
    { name: 'nagnathmadhorav', info: 'Suggested for you', gradient: 'from-yellow-400 to-orange-500' },
    { name: 'ds_ke_bache', info: 'Followed by pro.nawaz', gradient: 'from-green-400 to-blue-500' },
    { name: '_arrshiaa_', info: 'Followed by iman_navdekar + 2...', gradient: 'from-pink-400 to-red-500' },
    { name: 'hereiffrayyy02', info: 'Suggested for you', gradient: 'from-purple-400 to-indigo-500' },
    { name: 'aeraxia.in', info: 'Suggested for you', gradient: 'from-teal-400 to-cyan-500' },
  ]

  return (
    <div className="w-full max-w-xs mx-auto lg:fixed lg:right-4 lg:top-8 mt-1 hidden lg:block">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={currentUser.profile_pic}
            alt={currentUser.username}
            className="w-12 h-12 rounded-full border-2 border-white shadow-md"
          />
          <div>
            <h2 className="font-semibold text-sm">{currentUser.username}</h2>
            <p className="text-gray-500 text-xs">{currentUser.name}</p>
          </div>
        </div>
        <button className="text-xs text-blue-500 font-semibold hover:text-blue-400 transition-colors">
          Switch
        </button>
      </div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-500 font-semibold text-sm">Suggested for you</span>
        <span className="text-xs text-white font-semibold cursor-pointer">See All</span>
      </div>
      <div className="space-y-4 mb-6">
        {suggestions.map((user, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 bg-gradient-to-r ${user.gradient} rounded-full`}></div>
              <div className="cursor-pointer">
                <h3 className="font-semibold text-sm truncate">{user.name}</h3>
                <p className="text-gray-500 text-xs truncate">{user.info}</p>
              </div>
            </div>
            <button className="text-xs text-blue-500 font-semibold hover:text-blue-400 transition-colors cursor-pointer">
              Follow
            </button>
          </div>
        ))}
      </div>
      <div className="text-gray-400 text-xs flex flex-wrap gap-2">
        {['About', 'Help', 'Press', 'API', 'Jobs', 'Privacy', 'Terms', 'Locations', 'Language'].map((item, i) => (
          <span key={i} className="hover:text-gray-500 cursor-pointer">{item}</span>
        ))}
      </div>
    </div>
  )
}

export default Right