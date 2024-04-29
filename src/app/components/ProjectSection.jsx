'use client'
import { motion, useInView } from 'framer-motion'
import { useContext, useRef, useState } from 'react'
import { PROJECTS_DATA } from '../constant'
import { ScrollContext } from '../page'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const ProjectSection = () => {
  const [tag, setTag] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { sectionRefs } = useContext(ScrollContext)

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = PROJECTS_DATA.filter((project) =>
    project.tag.includes(tag)
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section ref={sectionRefs.projects}>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-6'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center flex-wrap items-center gap-2 py-6 '>
        <ProjectTag
          onClick={handleTagChange}
          name='All'
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='React'
          isSelected={tag === 'React'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Next.js'
          isSelected={tag === 'Next.js'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='MERN'
          isSelected={tag === 'MERN'}
        />
      </div>
      <ul
        ref={ref}
        className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'
      >
        {filteredProjects.map((project, index) => {
          return (
            <motion.li
              variants={cardVariants}
              initial='initial'
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 0.3, delay: index * 0.4 }}
              key={project.id}
            >
              <ProjectCard project={project} />
            </motion.li>
          )
        })}
      </ul>
    </section>
  )
}
export default ProjectSection
