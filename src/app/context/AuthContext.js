'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation.js'
import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/token`, { email, password })
      return res.data
    } catch (error) {
      throw new Error(error)
    }
  }

  const logout = () => {
    setIsAuthenticated(false)
    document.cookie = 'folio-login-status=; Max-Age=0; path=/; domain=' + location.hostname
    router.push('/admin')
  }

  useEffect(() => {
    const foundCookie = document.cookie.split(';').find((cookie) => cookie.trim() === 'folio-login-status=logged_in_nextfolio')
    setIsAuthenticated(!!foundCookie)
  }, [])

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
