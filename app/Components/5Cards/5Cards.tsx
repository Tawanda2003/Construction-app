import React from 'react'
import Image, { StaticImageData } from "next/image"
import { FaPlus } from 'react-icons/fa'

interface CardProps{
    image:StaticImageData
    name:string
    text:string
}

const VCards = ({image, name, text}: CardProps) => {
  return (
    <div>
    <div className= "  bg-white p-6 shadow-2xl w-[360px] border-2 border-white ">
      <Image height={250} width={350} src={image} alt="" />
      <div className='p-[30px]'>
      <h1 className='text-blue-800 font-serif font-bold text-[20px]'>{name}</h1>
      <p>{text}</p>
     <div className='text-blue-800  pt-4'><FaPlus/></div>
     </div> 

    </div>
    </div>
  )
}

export default VCards
