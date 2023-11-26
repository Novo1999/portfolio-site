'use client'
import { useState } from "react"
import { PROJECTS_DATA } from "../constant"
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag"

const ProjectSection = () => {
 const [tag, setTag] = useState("All")

 const handleTagChange = newTag => {
  setTag(newTag)
 }

 const filteredProjects = PROJECTS_DATA.filter(project =>
  project.tag.includes(tag)
 )

 return (
  <>
   <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-6">
    My Projects
   </h2>
   <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
    <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === 'All'} />
    <ProjectTag onClick={handleTagChange} name="React" isSelected={tag === 'React'} />
    <ProjectTag onClick={handleTagChange} name="MERN" isSelected={tag === 'MERN'} />
   </div>
   <div className="grid md:grid-cols-3 gap-8 md:gap-12">{filteredProjects.map(project => {
    const { id, title, image, tag, description, gitUrl, previewUrl } = project
    return (
     <ProjectCard key={id} title={title} description={description} imgUrl={image} tags={tag} gitUrl={gitUrl} previewUrl={previewUrl} />
    )

   })}</div>
  </>
 )
}
export default ProjectSection