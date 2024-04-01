import {
  ComputerDesktopIcon,
  EyeIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'
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
            <Link target='blank' href={`${gitUrl[0]}`}>
              <ComputerDesktopIcon className='h-10 w-10 text-[#ADB7BE] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 cursor-none hover:text-white group-hover/link:text-white' />
            </Link>
          </div>
          <div
            className='tooltip h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
            data-tip='Server'
          >
            <Link target='blank' data-tip='Server' href={`${gitUrl[1]}`}>
              <GlobeAltIcon className='tooltip h-10 w-10 text-[#ADB7BE] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 cursor-none hover:text-white group-hover/link:text-white' />
            </Link>
          </div>
          <div
            className='tooltip h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
            data-tip='Live'
          >
            <Link target='blank' href={previewUrl}>
              <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 cursor-none hover:text-white group-hover/link:text-white' />
            </Link>
          </div>
        </div>
      </div>
      <div className='text-white rounded-b-3xl bg-[#181818] py-6 relative bottom-20 min-[375px]:bottom-9 lg:bottom-4 xl:bottom-0 px-4'>
        <h5 className='font-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </BackgroundGradient>
  )
}
export default ProjectCard
