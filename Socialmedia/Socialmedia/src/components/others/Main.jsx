
import Header from './Header'
import Left from './Left'
import Right from './Right'
import Middle from './Middle'
import Messages from './Messages'
import Story from './Story'
import { AuthContext } from '../../context/AuthProvider'
import React,{ useContext, useState, useEffect } from 'react'


const Main = () => {
    const [userdata] = useContext(AuthContext)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('loggedInUser'))
        if (storedUser) setUser(storedUser)
    }, [])

    const handleLogin = (email, password) => {
        if (email === 'admin@123.com' && password === '123') {
            const newUser = { role: 'admin', email }
            localStorage.setItem('loggedInUser', JSON.stringify(newUser))
            setUser(newUser)
        } else {
            alert('Invalid credentials')
        }
    }
    return (
        <div className="bg-black text-white flex justify-between relative min-h-screen overflow-x-hidden">
            <div className="fixed top-0 left-0 h-full z-50">
                <Left data={userdata} />
            </div>

            <div className="flex-1 mx-auto lg:ml-72 lg:mr-80 md:ml-64 md:mr-64 sm:ml-20 sm:mr-20 mt-5 overflow-y-auto">
                <Story data={userdata ? userdata[0] : null} />
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
