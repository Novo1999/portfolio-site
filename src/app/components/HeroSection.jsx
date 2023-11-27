'use client'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import useWindowDimensions from '../hooks/useWindowDimension'


const HeroSection = () => {
 const { width } = useWindowDimensions()
 console.log(width)

 return (
  <section>
   <div className="grid grid-cols-1 sm:grid-cols-12 relative md:top-6">
    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-7 place-self-center text-center sm:text-left">
     <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold md:absolute top-0'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-600'>Hello, I&apos;m {" "}</span>
      <br />
      <TypeAnimation
       sequence={[
        // Same substring at the start will only be typed out once, initially
        'Novo',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'MERN Developer',
        1000,
        'React Developer',
        1000
       ]}
       wrapper="span"
       speed={50}
       repeat={Infinity}
      /></h1>
     <p className='text-gray text-base sm:text-lg lg:text-xl md:mt-20 mb-6'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam rerum
      consequuntur cupiditate, laudantium neque illo, officiis
     </p>
     <div>
      {/* Button */}
      <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-teal-500 via-blue-500 to-green-500 text-white bg-white hover:bg-slate-200 '>Hire Me</button>

      <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-teal-500 to-green-500 hover:bg-slate-800 text-white border mt-3'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
     </div>
    </motion.div>
    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-5 place-self-center mt-4 lg:mt-0">
     <div className='rounded-full bg-gradient-to-b from-green-200 via-green-300 to-blue-500 md:bottom-6 md:left-4 relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]'>
      <motion.div initial={{ x: 0, y: width <= 425 ? 100 : 200 }} animate={{ x: [0, 20] }} transition={{
       duration: 2,
       repeat: Infinity,
       // repeatDelay: 0.2,
       repeatType: "reverse",
      }}>
       <Image
        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 scale-110 sm:scale-125'
        src="/images/folio-hero.png"
        alt='hero image'
        width={1200}
        height={1600}
       />
      </motion.div>
     </div>
    </motion.div>
   </div>
  </section>
 )
}
export default HeroSection