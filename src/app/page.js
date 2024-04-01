'use client'
import { createContext, useRef } from 'react'
import { Toaster } from 'react-hot-toast'
import AboutSection from './components/AboutSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection'
import { FollowerPointerCard } from './components/ui/following-pointer.jsx'
import { TracingBeam } from './components/ui/tracing-beam.jsx'
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
      <FollowerPointerCard>
        <main className='flex min-h-screen flex-col bg-black'>
          <Toaster />
          <Navbar />
          <TracingBeam className='container mx-auto mt-24 px-12 py-4'>
            <HeroSection />
            <ProjectSection />
            <AboutSection />
            <EmailSection />
            <Footer />
          </TracingBeam>
        </main>
      </FollowerPointerCard>
    </ScrollContext.Provider>
  )
}
