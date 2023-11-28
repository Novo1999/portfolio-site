import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"
import { useMediaQuery } from "@uidotdev/usehooks";
import Link from 'next/link'


const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
 const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

 return (
  <div>
   <div className="h-[13rem] md:h-[7.9rem] xl:h-[24rem] lg:h-48 relative rounded-t-xl group" style={{ background: `url(${imgUrl})`, backgroundSize: isSmallDevice ? 'cover' : 'contain', backgroundRepeat: 'no-repeat' }}>
    <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
     <Link target="blank" href={`${gitUrl[0]}`} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
      <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 cursor-pointer hover:text-white group-hover/link:text-white" />
     </Link>
     <Link target="blank" data-tip="Server" href={`${gitUrl[1]}`} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
      <CodeBracketIcon className="tooltip h-10 w-10 text-[#ADB7BE] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 cursor-pointer hover:text-white group-hover/link:text-white" />
     </Link>
     <Link target="blank" href={previewUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
      <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 cursor-pointer hover:text-white group-hover/link:text-white" />
     </Link>
    </div>
   </div>
   <div className="text-white rounded-b-xl bg-[#181818] py-6 relative lg:bottom-4 xl:bottom-24 px-4">
    <h5 className="font-xl font-semibold mb-2">{title}</h5>
    <p className="text-[#ADB7BE]">{description}</p>
   </div>
  </div>
 )
}
export default ProjectCard