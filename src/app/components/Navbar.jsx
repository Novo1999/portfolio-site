"use client"
import Link from 'next/link'
import NavLink from './NavLink'
import { useContext, useRef, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import { ScrollContext } from '../page'

const navLinks = [
 {
  title: "About",
  path: 'about'
 },
 {
  title: "Projects",
  path: 'projects'
 },
 {
  title: "Contact",
  path: 'contact'
 },
]

const Navbar = () => {
 const [navbarOpen, setNavbarOpen] = useState(false)
 const { handleClickToScroll, sectionRefs } = useContext(ScrollContext)



 return (
  <nav className='fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-100'>
   <div className='flex container flex-wrap items-center justify-between mx-auto px-4 py-2 lg:py-4'>
    <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
     <div className='flex justify-center items-center gap-2'>
      <svg className='w-14 sm:w-18' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
      <p className='text-base sm:text-xl'>Novodip Mondal</p>
     </div>
    </Link>
    <div className='block mobile-menu md:hidden'>
     {
      !navbarOpen ? (
       <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'><Bars3Icon className='h-5 w-5' />
       </button>
      ) : <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'><XMarkIcon className='h-5 w-5' />
      </button>
     }
    </div>
    <div className="menu hidden md:block md:w-auto" id='navbar'>
     <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
      {
       navLinks.map((link, index) => {
        const { title, path } = link
        return <li key={index}>
         <NavLink onClick={(e) => handleClickToScroll(e, sectionRefs[link.path])} href={`#${path}`} title={title}></NavLink>
        </li>
       })
      }
     </ul>
    </div>
   </div>
   {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
  </nav>
 )
}
export default Navbar