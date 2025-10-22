import React, { useContext, useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import { AuthContext } from './context/AuthProvider'
import Main from './components/others/Main'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {
  const [userdata] = useContext(AuthContext)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Initialize users in localStorage if not already present
    const users = getLocalStorage()
    if (!users || users.length === 0) {
      setLocalStorage()
    }

    // Load currently logged-in user
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'))
    if (storedUser) setUser(storedUser)
  }, [])

  const handleLogin = (email, password) => {
    const users = getLocalStorage() // Get users from localStorage

    // Check if user exists with email and password
    const loggedInUser = users.find(
      u => u.email === email && u.password === password
    )

    if (loggedInUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
      setUser(loggedInUser)
      return true
    } else {
      alert('Invalid credentials')
      return false
    }
  }

  return (
    <Routes>
      <Route path="/Login" element={<Login handleLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/main"
        element={user ? <Main /> : <Navigate to="/Login" />}
      />
      {/* Optional: Redirect any unknown route to login */}
      <Route path="*" element={<Navigate to="/Login" />} />
    </Routes>
  )
}

export default App
