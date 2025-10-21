import React from 'react'

const Tasklist = ({ data }) => {
  

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'Medium': return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'Low': return 'bg-gradient-to-r from-green-500 to-emerald-500';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const getCardColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-gradient-to-br from-red-500/10 to-pink-500/10 border-red-400/30';
      case 'Medium': return 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-400/30';
      case 'Low': return 'bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-400/30';
      default: return 'bg-gradient-to-br from-gray-500/10 to-gray-600/10 border-gray-400/30';
    }
  };

  // 🔹 If no tasks, show empty message
  const tasks = data?.tasks || [];
  if (tasks.length === 0) {
    return (
      <div className="text-gray-400 text-center py-10 text-lg">
        No tasks assigned yet.
      </div>
    );
  }

  return (
    <div id="tasklist" className="h-[45%] px-10 py-3 flex gap-6 justify-start items-center overflow-x-auto">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`h-full w-[280px] sm:w-[320px] rounded-2xl flex-shrink-0 flex flex-col p-5 border backdrop-blur-sm ${getCardColor(task.priority)} hover:transform hover:scale-105 transition-all duration-300 shadow-lg`}
        >
          {/* Header with priority & date */}
          <div className="flex justify-between items-center mb-4">
            <h3 className={`${getPriorityColor(task.priority)} rounded-full px-3 py-1 font-bold text-white text-xs`}>
              {task.category || task.priority}
            </h3>
            <h4 className="font-semibold text-sm text-gray-300">{task.taskDate}</h4>
          </div>

          {/* Task title */}
          <h2 className="text-xl font-bold mb-3 break-words text-white">
            {task.taskTitle}
          </h2>

          {/* Description */}
          <div className="flex-1 overflow-hidden">
            <p className="text-sm break-words overflow-y-auto max-h-full text-gray-300 leading-relaxed">
              {task.taskDescription}
            </p>
          </div>

          {/* Action Buttons */}
          
        </div>
      ))}
    </div>
  );
};

export default Tasklist;
