import React from 'react'
import '../../App.css';

const Story = () => {
  const stories = [
    { id: 1, username: 'iamjahir_09', isLive: true },
    { id: 2, username: 'creative_mind', isLive: false },
    { id: 3, username: 'travel_diaries', isLive: true },
    { id: 4, username: 'tech_guru', isLive: false },
    { id: 5, username: 'food_lover', isLive: false },
    { id: 6, username: 'fitness_freak', isLive: true },
    { id: 7, username: 'music_lover', isLive: false },
    { id: 8, username: 'art_gallery', isLive: true },
  ]

  return (
    <div className='w-160 h-31 rounded-lg p-4 flex flex-nowrap' id='stories'>
      <div className='flex space-x-4 overflow-x-auto'>
        {stories.map((story) => (
          <div key={story.id} className='flex flex-col items-center space-y-1 shrink-0'>
            
            <div className={`p-0.5 rounded-full ${
              story.isLive 
                ? 'bg-linear-to-r from-red-500 to-pink-500' 
                : 'bg-linear-to-r from-yellow-400 to-purple-600'
            }`}>
              <div className='bg-white p-0.5 rounded-full'>
                <div className='w-16 h-16 bg-linear-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                  {story.username.charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
            
            <span className='text-xs text-gray-600 truncate max-w-16'>
              {story.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Story