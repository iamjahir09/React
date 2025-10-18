import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='px-10 py-3 flex gap-5'>
      <div className='bg-red-400 w-1/4 py-5 px-10 rounded-lg'>
        <h1 className='text-3xl font-semibold'>0</h1>
        <h1 className='text-3xl font-medium'>New Task</h1>
      </div>

      <div className='bg-blue-400 w-1/4 py-5 px-10 rounded-lg'>
        <h1 className='text-3xl font-semibold'>0</h1>
        <h1 className='text-3xl font-medium'>New Task</h1>
      </div>

      <div className='bg-green-400 w-1/4 py-5 px-10 rounded-lg'>
        <h1 className='text-3xl font-semibold'>0</h1>
        <h1 className='text-3xl font-medium'>New Task</h1>
      </div>

      <div className='bg-yellow-400 w-1/4 py-5 px-10 rounded-lg'>
        <h1 className='text-3xl font-semibold'>0</h1>
        <h1 className='text-3xl font-medium'>New Task</h1>
      </div>
    </div>
  )
}

export default TaskListNumber
