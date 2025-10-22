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
    <div className="w-full max-w-lg mx-auto overflow-y-auto border-none">
      <div className="p-4">
        {posts && posts.length > 0 ? (
          posts.map((item, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full">
                    <img src={item.profile_pic} className="w-8 h-8 rounded-full cursor-pointer object-cover" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-sm truncate cursor-pointer">{item.name}</h3>
                    <p className="text-gray-500 text-sm">• 3h</p>
                  </div>
                </div>
                <Ellipsis className="cursor-pointer w-5 h-5" />
              </div>
              <div className="mt-3 cursor-pointer">
                <img src={item.post_image} className="w-full aspect-4/5 object-cover rounded-md" />
                <div className="flex justify-between mt-3">
                  <div className="flex gap-4">
                    <div className="flex items-center cursor-pointer">
                      <Heart className="w-5 h-5 hover:text-gray-600" />
                      <span className="ml-1 text-sm">31.2k</span>
                    </div>
                    <div className="flex items-center cursor-pointer">
                      <MessageCircle className="w-5 h-5 hover:text-gray-600" />
                      <span className="ml-1 text-sm">79</span>
                    </div>
                    <div className="flex items-center cursor-pointer">
                      <Send className="w-5 h-5 hover:text-gray-600" />
                    </div>
                  </div>
                  <Bookmark className="w-5 h-5 cursor-pointer hover:text-gray-600" />
                </div>
                <div className="mt-3">
                  <p className="text-sm">
                    {expanded[index] ? item.description : `${item.description.slice(0, 50)}...`}
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-gray-500 ml-1 cursor-pointer text-sm"
                    >
                      {expanded[index] ? 'less' : 'more'}
                    </button>
                  </p>
                </div>
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="text-gray-500 border-none outline-none w-full text-sm bg-black"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center text-sm">No posts available 😅</p>
        )}
      </div>
    </div>
  )
}

export default Middle