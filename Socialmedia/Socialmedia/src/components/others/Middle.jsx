import React, { useState, useEffect } from 'react'
import { Bookmark, Ellipsis, Send, MessageCircle, Heart } from 'lucide-react'

const Middle = ({ datas }) => {
  const [posts, setPosts] = useState([])
  const [expanded, setExpanded] = useState({})


  useEffect(() => {
    if (datas && datas.length > 0) {
      const shuffled = [...datas].sort(() => Math.random() - 0.5)
      setPosts(shuffled)
    }
  }, [datas])

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <div className='h-full w-150 overflow-y-auto'>
      <div className='p-8 ml-15 h-full mt-5 w-120'>
        {posts && posts.length > 0 ? (
          posts.map((item, index) => (
            <div key={index} className='mb-10'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2'>
                  <div className='w-8 h-8 rounded-full'>
                    <img src={item.profile_pic} className='w-10 h-8 rounded-full cursor-pointer' />
                  </div>
                  <div className='justify-between flex space-x-70'>
                    <div className='flex min-w-0 space-x-1'>
                      <h3 className='font-semibold text-sm truncate cursor-pointer'>{item.name}</h3>
                      <p className='text-gray-500 text-sm truncate cursor-pointer'>• 3h</p>
                    </div>
                    <div>
                      <Ellipsis className='cursor-pointer' />
                    </div>
                  </div>
                </div>
              </div>


              <div className='aspect-4/5 mt-3 hover:cursor-pointer'>
                <img src={item.post_image} alt='' className='aspect-4/5' />
                <div className='justify-between flex'>
                  <div className='mt-3'>
                    <div className='flex gap-4'>
                      <div className='flex items-center cursor-pointer'>
                        <Heart className='cursor-pointer hover:text-gray-600' />
                        <span className='ml-1'>31.2k</span>
                      </div>
                      <div className='flex items-center cursor-pointer hover:text-gray-600 rounded-full p-1'>
                        <MessageCircle />
                        <span className='ml-1'>79</span>
                      </div>
                      <div className='flex items-center cursor-pointer hover:text-gray-600 rounded-full p-1'>
                        <Send className='cursor-pointer' />
                      </div>
                    </div>
                  </div>
                  <div className='mt-3 cursor-pointer'>
                    <Bookmark className='cursor-pointer hover:text-gray-600' />
                  </div>
                </div>


                <div className='mt-3 flex'>
                  <p>
                    {expanded[index] ? item.description : `${item.description.slice(0, 50)}...`}
                    <button
                      onClick={() => toggleExpand(index)}
                      className='text-[#8e8e8e] ml-1 cursor-pointer'
                    >
                      {expanded[index] ? 'less' : 'more'}
                    </button>
                  </p>
                </div>


                <div className='mt-3'>
                  <input
                    type='text'
                    placeholder='Add a comment...'
                    className='text-[#8e8e8e] border-none outline-none w-full'
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='text-gray-500 text-center'>No posts available 😅</p>
        )}
      </div>
    </div>
  )
}

export default Middle
