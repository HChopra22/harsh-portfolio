import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '@/sanity'

type Props = {
  projects: Project[]
}

function Projects({projects}: Props) {
  return (
    <motion.div
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}>


      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects?.map((project, i) => (
          <div key={project?._id}
          className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
            <motion.img
            initial={{y: -300, opacity: 0}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1.2}}
            viewport={{once: true}}
            src={urlFor(project.image).url()} alt=''/>

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]'> Project Showcase {i + 1} of {projects.length}:
                </span>{' '}
                {project?.title}
              </h4>

            <div className='flex items-center space-x-2 justify-center'>
              {project?.technologies.map(technology => (
                <img 
                className='h- w-10'
                key={technology._id}
                src={urlFor(technology.image).url()}
                alt=''
                />
              ))}
            </div>

              <p className='text-lg text-center md:text-left'>
                {project?.summary}
              </p>

              <p className='text-lg text-center md:text-left pt-5'>
                Link to build
                {project?.linkToBuild}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>

      </div>

    </motion.div>
  )
}

export default Projects