"use client"
import Image from 'next/image'
import { useState, useTransition } from 'react'
import TabButton from './TabButton'
import { TABS, TAB_DATA } from '../constant'
import { useContext } from 'react'
import { ScrollContext } from '../page'



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
    <section ref={sectionRefs.about} className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-0">
        <Image src="/images/folio-about.jpg" width={600} height={500} alt='about image' />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non optio ipsa magni recusandae ut in repellendus cumque laudantium! Accusamus rem eaque culpa nihil voluptatem ipsam facilis voluptate delectus in itaque vitae, libero et optio id dicta aliquam temporibus est nam!</p>
          <div className="flex flex-row justify-start mt-8">
            {TABS.map((tabName, index) =>
              <TabButton key={index} selectTab={() => handleTabChange(tabName)} active={tab === tabName} >
                {tabName}
              </TabButton>)}
          </div>
          <div className='mt-8'>{TAB_DATA.find(t => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection