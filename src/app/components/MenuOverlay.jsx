import NavLink from "./NavLink"

const MenuOverlay = ({ links }) => {
 return (
  <ul className="flex flex-col py-4 items-center">{links.map((link, index) => {
   const { path, title } = link
   return <li key={index} >
    <NavLink href={path} title={title} />
   </li>
  })}</ul>
 )
}
export default MenuOverlay