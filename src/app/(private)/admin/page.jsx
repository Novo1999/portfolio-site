'use client'
import { useAuth } from '@/app/context/AuthContext.js'
import { useRouter } from 'next/navigation.js'
import React, { useEffect, useState } from 'react'

const AdminPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isAuthenticated, setIsAuthenticated } = useAuth()
  const { push } = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await login(email, password)
    if (!data?.status) return
    setIsAuthenticated(data?.status)
    document.cookie = 'folio-login-status=logged_in_nextfolio'
  }

  useEffect(() => {
    if (isAuthenticated) push('/admin/dashboard')
  }, [isAuthenticated, push])

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <form onSubmit={handleSubmit} className="card w-full max-w-sm shadow-xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <div className="form-control mb-4">
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="input input-bordered w-full" required />
        </div>
        <div className="form-control mb-6">
          <label htmlFor="password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="input input-bordered w-full" required />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>
      </form>
    </div>
  )
}

export default AdminPage
