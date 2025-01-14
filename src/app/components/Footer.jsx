'use client'
import useViewCountLogger from '@/utils/useViewCountLogger.js'
import React from 'react'

const Footer = () => {
    const viewCount = useViewCountLogger()
    return (
        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
            <div className="container p-12 flex justify-between">
                <span>
                    <svg className="w-14 sm:w-18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                        />
                    </svg>
                    <p className="text-slate-600">Profile Viewed: {viewCount} times</p>
                </span>
                <p className="text-slate-600">All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
