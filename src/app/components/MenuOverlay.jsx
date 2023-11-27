import { useContext } from "react"
import NavLink from "./NavLink"
import { ScrollContext } from "../page"

const MenuOverlay = ({ links, setNavbarOpen }) => {
 const { handleClickToScroll, sectionRefs } = useContext(ScrollContext)

 return (
  <ul className="flex flex-col py-4 items-center">{links.map((link, index) => {
   const { path, title } = link
   return <li key={index} >
    <NavLink onClick={(e) => {
     handleClickToScroll(e, sectionRefs[link.path])
     setNavbarOpen(false)
    }} href={`#${path}`} title={title} />
   </li>
  })}</ul>
 )
}
export default MenuOverlay