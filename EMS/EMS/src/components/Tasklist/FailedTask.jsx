import React from 'react'

const FailedTask = () => {
    const tasks = [
        { priority: 'High', date: '18 Oct 2025' },
        { priority: 'Medium', date: '19 Oct 2025' },
        { priority: 'Low', date: '20 Oct 2025' },
        { priority: 'High', date: '21 Oct 2025' },
        { priority: 'Medium', date: '22 Oct 2025' },
        { priority: 'High', date: '23 Oct 2025' },
        { priority: 'Low', date: '24 Oct 2025' }
    ];

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
    return (
        <div>


           
            <div id='tasklist' className='h-[45%] px-10 py-3 flex gap-6 justify-start items-center overflow-x-auto'>
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className={`h-full w-[280px] sm:w-[320px] rounded-2xl flex-shrink-0 flex flex-col p-5 border backdrop-blur-sm ${getCardColor(task.priority)} hover:transform hover:scale-105 transition-all duration-300 shadow-lg`}
                    >
                        <div className='flex justify-between items-center mb-4'>
                            <h3 className={`${getPriorityColor(task.priority)} rounded-full px-3 py-1 font-bold text-white text-xs`}>
                                {task.priority}
                            </h3>
                            <h4 className='font-semibold text-sm text-gray-300'>{task.date}</h4>
                        </div>

                        <h2 className='text-xl font-bold mb-3 break-words text-white'>{task.title}</h2>
                        <div className='flex-1 overflow-hidden'>
                            <p className='text-sm break-words overflow-y-auto max-h-full text-gray-300 leading-relaxed'>
                                {task.description}
                            </p>
                        </div>

                        <div className='mt-4 flex gap-2'>
                            <button className='bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-lg transition-colors'>
                                Edit
                            </button>
                            <button className='bg-gray-600 hover:bg-gray-700 text-white text-xs px-3 py-1 rounded-lg transition-colors'>
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FailedTask
