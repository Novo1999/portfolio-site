import {
  ComputerDesktopIcon,
  EyeIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image.js'
import Link from 'next/link'
import { BackgroundGradient } from './ui/bg-gradients.jsx'

const ProjectCard = ({ project }) => {
  const { id, title, image, tag, description, gitUrl, previewUrl } = project

  return (
    <BackgroundGradient className='z-20'>
      <div
        className='h-[14rem] md:h-[15rem] lg:h-[12rem] xl:h-[20rem] 2xl:h-[19rem] relative rounded-t-xl group'
        style={{
          background: `url(${image})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='overlay items-center justify-center absolute space-x-2 top-0 left-0 w-full h-full hover:rounded-t-2xl bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-70 transition-all duration-500'>
          <div
            className='tooltip h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
            data-tip='Client'
          >
            <Link className='p-4' target='blank' href={`${gitUrl[0]}`}>
              <ComputerDesktopIcon className='h-10 w-10 text-[#ADB7BE] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 cursor-none hover:text-white group-hover/link:text-white' />
            </Link>
          </div>
          <div
            className='tooltip h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
            data-tip='Server'
          >
            <Link
              className='p-4'
              target='blank'
              data-tip='Server'
              href={`${gitUrl[1]}`}
            >
              <GlobeAltIcon className='tooltip h-10 w-10 text-[#ADB7BE] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 cursor-none hover:text-white group-hover/link:text-white' />
            </Link>
          </div>
          <div
            className='tooltip h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
            data-tip='Live'
          >
            <Link className='p-4' target='blank' href={previewUrl}>
              <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 cursor-none hover:text-white group-hover/link:text-white' />
            </Link>
          </div>
        </div>
      </div>
      <div className='text-white rounded-b-3xl bg-[#181818] py-6 relative bottom-20 min-[375px]:bottom-9 lg:bottom-4 xl:bottom-0 px-4'>
        <h5 className='font-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
        {/* tech */}
        <div className='mt-4 flex items-center gap-2'>
          {tag.includes('Next.js') && (
            <Image
              className='w-12 scale-150'
              src='/images/icons/nextjs.png'
              width={300}
              height={300}
              alt='tech'
            />
          )}

          {!tag.includes('Next.js') && (
            <Image
              className='w-12'
              src='/images/icons/react.png'
              width={200}
              height={200}
              alt='tech'
            />
          )}
          {title !== 'Kartigo' && (
            <>
              <Image
                className='w-12'
                src='/images/icons/tailwind.png'
                width={200}
                height={200}
                alt='tech'
              />
              <Image
                className='w-12'
                src='/images/icons/express.png'
                width={200}
                height={200}
                alt='tech'
              />
              <Image
                className='w-12'
                src='/images/icons/mongodb.png'
                width={200}
                height={200}
                alt='tech'
              />
            </>
          )}
        </div>
      </div>
    </BackgroundGradient>
  )
}
export default ProjectCard
