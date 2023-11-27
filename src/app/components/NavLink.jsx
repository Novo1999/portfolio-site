import Link from 'next/link'

const NavLink = ({ href, title, onClick }) => {
 return (
  <Link onClick={onClick} className='block py-2 pl-3 pr-4 text-[#ADB&BE] sm:text-xl rounded md:p-0 hover:text-white' href={href}>{title}</Link>
 )
}
export default NavLink