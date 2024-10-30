'use client'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import Link from 'next/link.js'
import { useContext, useRef } from 'react'
import { ScrollContext } from '../page'

const ExperienceSection = () => {
    const ref = useRef(null)
    const { sectionRefs } = useContext(ScrollContext)

    return (
        <section ref={sectionRefs.experience}>
            <h2 ref={ref} className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-6">
                My Experience
            </h2>
            {myExperience.map(({ companyName, technologies, timeline, position, website }) => (
                <div key={companyName} className="card lg:card-side bg-base-500 shadow-xl border">
                    <div className="card-body">
                        <div className="flex gap-2 items-center">
                            <h2 className="card-title">{position} at</h2>
                            <Link target="_blank" href={website} className="btn btn-primary font-thin rounded-full text-white">
                                {companyName}
                                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                            </Link>
                        </div>
                        <p>{timeline}</p>

                        <div className="flex gap-2">
                            {technologies.map((tech) => (
                                <div key={tech} className="badge badge-accent p-3">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
export default ExperienceSection

class ExperienceCreator {
    constructor(companyName, technologies, website, timeline, position) {
        this.companyName = companyName
        this.technologies = technologies
        this.website = website
        this.timeline = timeline
        this.position = position
    }
}

const myExperience = [new ExperienceCreator('Wensyve', ['React', 'Next.js', 'TypeScript'], 'https://wensyve.com/', '2024 - Present', 'Junior Frontend Developer')]
