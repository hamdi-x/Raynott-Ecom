import React, { createContext, useContext, useEffect, useState } from 'react'
import API from '../services/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedToken = localStorage.getItem('raynott_token')
    const storedUser = localStorage.getItem('raynott_user')
    if (storedToken && storedUser) {
      setToken(storedToken)
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    const res = await API.post('/auth/login', { email, password })
    setUser(res.data.user)
    setToken(res.data.token)
    localStorage.setItem('raynott_token', res.data.token)
    localStorage.setItem('raynott_user', JSON.stringify(res.data.user))
    return res.data
  }

  const register = async (name, email, password) => {
    const res = await API.post('/auth/register', { name, email, password })
    setUser(res.data.user)
    setToken(res.data.token)
    localStorage.setItem('raynott_token', res.data.token)
    localStorage.setItem('raynott_user', JSON.stringify(res.data.user))
    return res.data
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('raynott_token')
    localStorage.removeItem('raynott_user')
  }

  const value = { user, token, login, register, logout, loading }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
