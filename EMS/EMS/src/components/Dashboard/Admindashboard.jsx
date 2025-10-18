import React from 'react'
import Header from '../other/Header'

const Admindashboard = () => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
            <Header />

            <div className='flex justify-center items-start p-6'>
                <form className='bg-white/10 backdrop-blur-lg rounded-3xl p-8 w-full max-w-2xl border border-white/20 shadow-2xl'>
                    <h1 className='text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                        Create New Task
                    </h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* Task Title */}
                        <div className='md:col-span-2'>
                            <label className='block text-white font-semibold mb-3 text-lg'>
                                Task Title
                            </label>
                            <input
                                type="text"
                                placeholder='Make your design...'
                                className='w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition'
                            />
                        </div>

                        {/* Description */}
                        <div className='md:col-span-2'>
                            <label className='block text-white font-semibold mb-3 text-lg'>
                                Description
                            </label>
                            <textarea
                                rows="4"
                                placeholder='Describe the task details...'
                                className='w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition resize-none'
                            ></textarea>
                        </div>

                        {/* Date */}
                        <div>
                            <label className='block text-white font-semibold mb-3 text-lg'>
                                Due Date
                            </label>
                            <input
                                type="date"
                                className='w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition'
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className='block text-white font-semibold mb-3 text-lg'>
                                Category
                            </label>
                            <input className='w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition' type="text" placeholder='Design, Developemner,etc...' />

                        </div>

                        {/* Assign To */}
                        <div className='md:col-span-2'>
                            <label className='block text-white font-semibold mb-3 text-lg'>
                                Assign To
                            </label>

                        </div>
                    </div>
                    <div className='mt-8 flex gap-4'>
                        <button
                            type="submit"
                            className='flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl px-6 py-4 text-lg transition-all transform hover:scale-105 shadow-lg'
                        >
                            Create Task
                        </button>
                        <button
                            type="button"
                            className='flex-1 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-xl px-6 py-4 text-lg transition-all transform hover:scale-105'
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
            <div className='px-10 py-8 grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30'>
                    <h3 className='text-2xl font-bold text-white'>12</h3>
                    <p className='text-blue-300'>Total Tasks</p>
                </div>
                <div className='bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30'>
                    <h3 className='text-2xl font-bold text-white'>8</h3>
                    <p className='text-green-300'>Completed</p>
                </div>
                <div className='bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30'>
                    <h3 className='text-2xl font-bold text-white'>3</h3>
                    <p className='text-yellow-300'>In Progress</p>
                </div>
                <div className='bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-red-400/30'>
                    <h3 className='text-2xl font-bold text-white'>1</h3>
                    <p className='text-red-300'>Overdue</p>
                </div>
            </div>

        </div>
    )
}

export default Admindashboard