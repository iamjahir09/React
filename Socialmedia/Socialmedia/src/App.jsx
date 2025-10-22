import React, { useContext, useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Left from './components/others/Left'
import Right from './components/others/Right'
import Story from './components/others/Story'
import Messages from './components/others/Messages'
import { AuthContext } from './context/AuthProvider'
import Main from './components/others/Main'

const App = () => {
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
    <Routes>
      <Route path="/Login" element={<Login handleLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Feed */}
      <Route
        path="/main"
        element={
          user ?< Main /> : (
            <Navigate to="/Login" />
          )
        }
      />
    </Routes>
  )
}

export default App
