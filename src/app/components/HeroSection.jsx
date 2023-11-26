'use client'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
 return (
  <section>
   <div className="grid grid-cols-1 sm:grid-cols-12">
    <div className="col-span-7 place-self-center text-center sm:text-left">
     <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-600'>Hello, I&apos;m {" "}</span>
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
     <p className='text-gray text-base sm:text-lg lg:text-xl mb-6'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam rerum
      consequuntur cupiditate, laudantium neque illo, officiis
     </p>
     <div>
      {/* Buttons */}
      <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-teal-500 via-blue-500 to-green-500 text-white bg-white hover:bg-slate-200 '>Hire Me</button>

      <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-teal-500 to-green-500 hover:bg-slate-800 text-white border mt-3'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
     </div>
    </div>
    <div className="col-span-5 place-self-center mt-4 lg:mt-0">
     <div className='rounded-full bg-black relative w-[300px] h-[300px] lg:w-[300px] lg:h-[300px]'>
      <Image className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 left-[10rem] sm:scale-150 sm:left-[17.1rem]' src="/images/folio-hero.png" alt='hero image' width={800} height={800} />
     </div>
    </div>
   </div>
  </section>
 )
}
export default HeroSection