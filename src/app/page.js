'use client'
import { createContext, useRef } from 'react'
import { Toaster } from 'react-hot-toast'
import AboutSection from './components/AboutSection'
import EmailSection from './components/EmailSection'
import ExperienceSection from './components/ExperienceSection.jsx'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection'
import { TracingBeam } from './components/ui/tracing-beam.jsx'
export const ScrollContext = createContext(null)

export default function Home() {
  const sectionRefs = {
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
    experience: useRef(null),
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
        <main className='flex min-h-screen flex-col bg-slate-900'>
          <Toaster />
          <Navbar />
          <TracingBeam className='container mx-auto mt-24 px-12 py-4'>
            <HeroSection />
            <ExperienceSection />
            <ProjectSection />
            <AboutSection />
            <EmailSection />
            <Footer />
          </TracingBeam>
        </main>
    </ScrollContext.Provider>
  )
}
