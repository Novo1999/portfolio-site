'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useContext } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { ScrollContext } from '../page'
import { BackgroundGradient } from './ui/bg-gradients.jsx'

const HeroSection = () => {
  const { handleClickToScroll, sectionRefs } = useContext(ScrollContext)
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12 relative md:top-6'>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-7 place-self-center text-center sm:text-left'
        >
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold md:absolute top-0'>
            {' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-600'>
              Hello, I&apos;m{' '}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Novo',
                1000,
                'Web Developer',
                1000,
                'MERN Developer',
                1000,
                'React Developer',
                1000,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-gray text-base sm:text-lg lg:text-xl md:mt-20 mb-6'>
            Passionate and Aspiring Web Developer based in Bangladesh on a
            journey to turn creative visions into interactive digital realities.
          </p>
          <div>
            {/* Button */}
            <button
              onClick={(e) => handleClickToScroll(e, sectionRefs['contact'])}
              className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br cursor-none from-teal-500 via-blue-500 to-green-500 text-white bg-white hover:bg-slate-200 '
            >
              Hire Me
            </button>

            <button className='px-1 py-1 w-full relative sm:w-fit rounded-full bg-transparent cursor-none bg-gradient-to-br from-blue-500 via-teal-500 to-green-600 hover:bg-slate-800 text-white border mt-3'>
              <a
                href='Novo-CV.docx'
                className='block bg-[#121212] !cursor-none hover:bg-slate-800 rounded-full px-5 py-2 '
                download
              >
                Download CV
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-5 place-self-center mt-4 lg:mt-0'
        >
          <div className='rounded-full bg-gradient-to-b from-green-500 via-green-300 to-blue-500 md:bottom-6 md:left-4 relative w-[200px] h-[200px] min-[425px]:w-[300px] min-[425px]:h-[300px] lg:w-[400px] lg:h-[400px]'>
            <Image
              className='absolute animate-float-x left-6 right-0 top-0 bottom-0 m-auto object-cover h-[20rem] min-[425px]:h-[32rem] lg:h-[42rem] z-0 transform-gpu'
              src='/images/folio-hero.png'
              alt='hero image'
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default HeroSection
