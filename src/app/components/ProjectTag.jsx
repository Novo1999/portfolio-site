const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? 'text-white border-green-500'
    : 'text-[#ADB7BE] border-slate-600 hover:border-slate-200 transition-all duration-300'
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  )
}
export default ProjectTag
