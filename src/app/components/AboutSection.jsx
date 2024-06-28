'use client'
import { useContext, useState, useTransition } from 'react'
import { TABS, TAB_DATA } from '../constant'
import { ScrollContext } from '../page'
import TabButton from './TabButton'

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()
  const { sectionRefs } = useContext(ScrollContext)

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section ref={sectionRefs.about} className='text-white'>
      <div className='md:grid lg:grid-cols-2 gap-8 lg:items-start py-8 px-4  xl:gap-16 sm:py-16 xl:px-0 h-fit justify-center lg:h-[42rem] '>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base flex flex-col gap-4'>
            Enthusiastic and aspiring web developer who is proficient in
            building user interfaces with React and also creating full stack web
            application with Next.JS, React, Node.js Express and MongoDB. I
            thrive on challenges and view each project as a chance to enhance my
            skills and contribute to innovative solutions.{' '}
            <span className='border border-white font-thin p-4 italic'>
              Eager to apply my knowledge in a real-world setting, I am
              passionate about creating engaging and responsive user interfaces
              that provides an intuitive experience to the end users.
            </span>
          </p>
          <div className='flex flex-row justify-start mt-8'>
            {TABS.map((tabName, index) => (
              <TabButton
                key={index}
                selectTab={() => handleTabChange(tabName)}
                active={tab === tabName}
              >
                {tabName}
              </TabButton>
            ))}
          </div>
          <div className='mt-8 mb-4'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
