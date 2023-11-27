'use client'
import GithubIcon from "../../../public/images/icons/GithubIcon.svg"
import FacebookIcon from "../../../public/images/icons/FacebookIcon.svg"
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from "react"
import { ScrollContext } from "../page"


const EmailSection = () => {
 const { sectionRefs } = useContext(ScrollContext)

 // const [emailSubmitted, setEmailSubmitted] = useState(false)
 // const handleSubmit = async (e) => {
 //  e.preventDefault()
 //  const data = {
 //   email: e.target.email.value,
 //   subject: e.target.subject.value,
 //   message: e.target.message.value,
 //  };
 //  const JSONdata = JSON.stringify(data)
 //  const endpoint = "/api/send"


 //  const options = {
 //   method: "POST",
 //   headers: {
 //    "Content-Type": "application/json",
 //   },
 //   body: JSONdata,
 //  };

 //  const response = await fetch(endpoint, options)
 //  const resData = await response.json()
 //  if (response.status === 200) {
 //   setEmailSubmitted(true)
 //  }
 // };

 return (
  <section ref={sectionRefs.contact} className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
   <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
   <div className="z-0">
    <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
    <p className="text-[#ADB7BE] mb-4 max-w-md">
     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sit voluptas facilis rerum vitae eos velit culpa porro quas explicabo.
    </p>
    <div className="socials flex flex-row gap-2">
     <Link href="github.com">
      <Image className="bg-gray-300 w-10 rounded-full" src={GithubIcon} alt="github icon" />
     </Link>
     <Link href="facebook.com">
      <Image className="bg-gray-300 w-10 rounded-full" src={FacebookIcon} alt="github icon" />
     </Link>
    </div>
   </div>
   <div>
    <form className="flex flex-col">
     <div className="mb-6">
      <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your Email</label>
      <input name="email" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" type="email" id="email" required placeholder="sam@gmail.com" />
     </div>

     <div className="mb-6">
      <label htmlFor="subject" className="text-white mb-2 block text-sm font-medium">Subject</label>
      <input name="subject" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" type="text" id="email" required placeholder="Just Saying Hi" />
     </div>
     <div className="mb-6">
      <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
      <textarea name="message" id="message" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Let's talk about..."></textarea>
     </div>
    </form>
    <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">Send Message</button>
   </div>
   {
    // emailSubmitted && (
    //  <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
    // )
   }
  </section>
 )
}
export default EmailSection