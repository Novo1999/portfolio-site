const TabButton = ({ active, selectTab, children }) => {
 const buttonClasses = active ? "text-white border-b border-green-500" : 'text-[#ADB&BE]'
 return (
  <button onClick={selectTab}>
   <p className={`mr-3 font-semibold hover:text-white capitalize ${buttonClasses}`}>{children}</p>
  </button>
 )
}
export default TabButton