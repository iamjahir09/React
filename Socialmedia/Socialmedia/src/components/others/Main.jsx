import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { getLocalStorage } from '../../utils/LocalStorage'
import Left from './Left'
import Right from './Right'
import Story from './Story'
import Messages from './Messages'

const Main = () => {
    const [userdata] = useContext(AuthContext)
    const [user, setUser] = useState(null)
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('loggedInUser'))
        if (storedUser) setUser(storedUser)


        const usersFromLocal = getLocalStorage()
        setAllUsers(usersFromLocal)
    }, [])

    return (
        <div className="bg-black text-white flex justify-between relative min-h-screen overflow-x-hidden">
            <div className="fixed top-0 left-0 h-full z-50">
                <Left data={userdata} />
            </div>

            <div className="flex-1 mx-auto lg:ml-72 lg:mr-80 md:ml-64 md:mr-64 sm:ml-20 sm:mr-20 mt-5 overflow-y-auto">

                <Story data={allUsers} />
            </div>

            <div className="fixed top-8 right-10 hidden lg:block z-40">
                <Right data={userdata ? userdata[0] : null} />
            </div>

            <div className="fixed bottom-6 right-6 z-50">
                <Messages />
            </div>
        </div>
    )
}

export default Main
