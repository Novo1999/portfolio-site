'use client'
import { useState, useRef, useContext } from "react"
import { PROJECTS_DATA } from "../constant"
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag"
import { motion, useInView } from 'framer-motion'
import { ScrollContext } from "../page"

const ProjectSection = () => {
  const [tag, setTag] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { sectionRefs } = useContext(ScrollContext)

  const handleTagChange = newTag => {
    setTag(newTag)
  }

  const filteredProjects = PROJECTS_DATA.filter(project =>
    project.tag.includes(tag)
  )



  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section ref={sectionRefs.projects}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-6">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === 'All'} />
        <ProjectTag onClick={handleTagChange} name="React" isSelected={tag === 'React'} />
        <ProjectTag onClick={handleTagChange} name="MERN" isSelected={tag === 'MERN'} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => {
          const { id, title, image, tag, description, gitUrl, previewUrl } = project
          return (
            <motion.li variants={cardVariants} initial="initial" animate={isInView ? 'animate' : 'initial'} transition={{ duration: 0.3, delay: index * 0.4 }} key={id}>
              <ProjectCard title={title} description={description} imgUrl={image} tags={tag} gitUrl={gitUrl} previewUrl={previewUrl} />
            </motion.li>
          )
        })}</ul>
    </section>
  )
}
export default ProjectSection