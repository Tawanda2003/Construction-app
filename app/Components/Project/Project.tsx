import React from 'react'
import Image from 'next/image'
import pic from '@/public/whyUs.jpg'
import ProjectCard from './ProjectCard'
import { FaMedal,FaUserTie,FaBuilding } from 'react-icons/fa'
import Contact from '../Contact/Contact'

const Project = () => {
  return (
    <div>
    <div className='flex flex-col justify-center items-center mt-[150]'>
        <h2 className='  md: text-blue-700 text-[60px] font-extrabold mb-[50px]'>WHY US?</h2>
        <div className=' md:border-2 text-amber-400 border-1 w-[50px]  mb-[50px]'></div>
        <div className='w-[90px] h-[10px] text-blue-700'></div>
        <Image src={pic} alt="" height={500} className='w-[80%] z-11 -mb-52' />


        <div className='flex w-[100%] flex-col justify-center items-center bg-blue-700 mt-15'>
            <div className='flex flex-col justify-center  md:flex-row  w-[90%] pt-60 text-center '>
                <ProjectCard
                icon={FaMedal}
                name='20+ YEARS EXPERIENCE'
                text='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'/>

                  <ProjectCard
                icon={FaUserTie}
                name='PROFESSIONAL SERVICES'
                text='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'/>

                  <ProjectCard
                icon={FaBuilding}
                name='100+ COMPLETED PROJECTS'
                text='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'/>
            </div>
            <div className='border-1 w-31 text-gray-300 my-[60px]'></div>
            <div className=''>
            <Contact/>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default Project
