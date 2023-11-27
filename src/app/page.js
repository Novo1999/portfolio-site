'use client'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import { createContext, useRef } from 'react'

export const ScrollContext = createContext(null)

export default function Home() {
  const sectionRefs = {
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  }

  const handleClickToScroll = (e, ref) => {
    e.preventDefault()
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  return (
    <ScrollContext.Provider value={{ sectionRefs, handleClickToScroll }}>
      <main className='flex min-h-screen flex-col bg-black'>
        <Navbar />
        <div className='container mx-auto mt-24 px-12 py-4'>
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <EmailSection />
          <Footer />
        </div>
      </main>
    </ScrollContext.Provider>
  )
}
