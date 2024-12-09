'use client'
import { useAuth } from '@/app/context/AuthContext.js'
import axios from 'axios'
import { notFound } from 'next/navigation.js'
import { useEffect, useState } from 'react'

const DashboardPage = () => {
  const [resumeUrl, setResumeUrl] = useState('')

  const { isAuthenticated, logout } = useAuth()

  useEffect(() => {
    let timeoutId
    if (!isAuthenticated) {
      timeoutId = setTimeout(() => {
        if (!isAuthenticated) notFound()
      }, 3000)
    }
    return () => clearTimeout(timeoutId)
  }, [isAuthenticated])

  const postUrl = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/url`, { url: resumeUrl })
      return res.data
    } catch (error) {
      throw new Error(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await postUrl()
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <button onClick={logout} className="btn btn-primary w-fit absolute top-4 right-4">
        LOG OUT
      </button>

      <form onSubmit={handleSubmit} className="card w-full max-w-sm shadow-xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Change URL</h2>
        <div className="form-control mb-4">
          <label htmlFor="email" className="label">
            <span className="label-text">Resume Url</span>
          </label>
          <input type="resumeUrl" id="resumeUrl" value={resumeUrl} onChange={(e) => setResumeUrl(e.target.value)} placeholder="Enter your url" className="input input-bordered w-full" required />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
  )
}

export default DashboardPage
