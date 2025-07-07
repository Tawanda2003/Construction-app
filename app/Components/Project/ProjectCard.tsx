import React from 'react'
import { IconType } from 'react-icons'

interface ProjectProps{
    icon:IconType
    name:string
    text:string
}

const ProjectCard = ({icon:Icons, name, text }:ProjectProps) => {
  return (
    <div>
    <div className='w-[24%] text-center flex items-center flex-col pt-10 pl-30 md:mr-20'>
        <div className='flex items-center justify-center w-[90px] h-[90px] mt-[25px] rounded-full bg-white '>
            <Icons size={30} className='text-amber-400'/>
        </div>
        <h4 className='text-center text-[23px] font-extrabold text-white my-[20px]'>{name}</h4>
        <p className='text-center text-white/50'>{text}</p>
      
    </div>
    </div>
  )
}

export default ProjectCard
