// TaskListNumber.jsx - Updated
import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='px-10 py-6 flex gap-6'>
      <div className='bg-gradient-to-br from-purple-500 to-blue-600 w-1/4 py-6 px-6 rounded-2xl shadow-lg border border-purple-400/30 hover:transform hover:scale-105 transition-all duration-300'>
        <h1 className='text-4xl font-bold text-white mb-2'>0</h1>
        <h1 className='text-xl font-medium text-white/90'>New Tasks</h1>
      </div>

      <div className='bg-gradient-to-br from-blue-500 to-cyan-600 w-1/4 py-6 px-6 rounded-2xl shadow-lg border border-blue-400/30 hover:transform hover:scale-105 transition-all duration-300'>
        <h1 className='text-4xl font-bold text-white mb-2'>0</h1>
        <h1 className='text-xl font-medium text-white/90'>In Progress</h1>
      </div>

      <div className='bg-gradient-to-br from-green-500 to-emerald-600 w-1/4 py-6 px-6 rounded-2xl shadow-lg border border-green-400/30 hover:transform hover:scale-105 transition-all duration-300'>
        <h1 className='text-4xl font-bold text-white mb-2'>0</h1>
        <h1 className='text-xl font-medium text-white/90'>Completed</h1>
      </div>

      <div className='bg-gradient-to-br from-orange-500 to-red-500 w-1/4 py-6 px-6 rounded-2xl shadow-lg border border-orange-400/30 hover:transform hover:scale-105 transition-all duration-300'>
        <h1 className='text-4xl font-bold text-white mb-2'>0</h1>
        <h1 className='text-xl font-medium text-white/90'>Overdue</h1>
      </div>
    </div>
  )
}

export default TaskListNumber