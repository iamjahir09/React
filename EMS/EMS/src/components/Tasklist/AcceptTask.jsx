import React from 'react'

const AcceptTask = ({ data }) => {

  // 🔹 Function to get gradient color for category
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'Medium': return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'Low': return 'bg-gradient-to-r from-green-500 to-emerald-500';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  // 🔹 Function to get background gradient for card
  const getCardColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-gradient-to-br from-red-500/10 to-pink-500/10 border-red-400/30';
      case 'Medium': return 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-400/30';
      case 'Low': return 'bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-400/30';
      default: return 'bg-gradient-to-br from-gray-500/10 to-gray-600/10 border-gray-400/30';
    }
  };

  // 🔹 Default fallback data to prevent crashes
  const task = data || {
    category: "General",
    taskDate: "N/A",
    taskTitle: "Untitled Task",
    taskDescription: "No description provided.",
    priority: "Low"
  };

  return (
    <div
      className={`flex-shrink-0 h-full w-[280px] sm:w-[320px] rounded-2xl flex flex-col p-5 border backdrop-blur-sm 
      ${getCardColor(task.priority)} hover:transform hover:scale-105 transition-all duration-300 shadow-lg`}
    >
      {/* Header with category & date */}
      <div className='flex justify-between items-center mb-4'>
        <h3 className={`${getPriorityColor(task.priority)} rounded-full px-3 py-1 font-bold text-white text-xs`}>
          {task.category || task.priority}
        </h3>
        <h4 className='font-semibold text-sm text-gray-300'>{task.taskDate}</h4>
      </div>

      {/* Task Title */}
      <h2 className='text-xl font-bold mb-3 break-words text-white'>
        {task.taskTitle}
      </h2>

      {/* Description */}
      <div className='flex-1 overflow-hidden'>
        <p className='text-sm break-words overflow-y-auto max-h-full text-gray-300 leading-relaxed'>
          {task.taskDescription}
        </p>
      </div>

      {/* Action Buttons */}
      <div className='mt-5 flex justify-between'>
        <button className='bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded-lg transition-colors shadow-md'>
          Mark as Completed
        </button>
        <button className='bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-lg transition-colors shadow-md'>
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
