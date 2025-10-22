import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userdata, setuserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const users = getLocalStorage()
    setuserData(users)
  }, [])

  return (
    <AuthContext.Provider value={[userdata, setuserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
