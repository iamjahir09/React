// Employeedashboard.jsx - Updated
import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import Tasklist from '../Tasklist/Tasklist'

const Employeedashboard = ({data}) => {
  return (
    <div className='bg-gradient-to-br from-gray-900 via-black to-gray-800 h-screen text-white overflow-hidden'>
      <Header data={data} />
      <TaskListNumber data={data}/>
      <Tasklist data={data}/>
    </div>
  )
}

export default Employeedashboard