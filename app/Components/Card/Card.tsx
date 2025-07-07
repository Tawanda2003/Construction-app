import React from 'react'
import Icons from '../Icons/Icons'
import { FaYelp, FaFacebook,FaTwitter,FaHouzz } from 'react-icons/fa'

const Card = () => {
  return (
    <div>
    <div className='bg-amber-400  p-6  w-[360px] py-23'>
     <h1 className='bold font-serif text-[30px] text-white py-7'>PROFESSIONAL  <br /> AND RELIABLE <br /> SERVICES.</h1>
     <p className='border-2 w-15 text-white' ></p>
     <div className='flex text-white py-7'>
     <Icons Icon={<FaYelp/>} display='block' bg='bg-blue-950'/>
     <Icons Icon={<FaFacebook/>} display='block' bg='bg-blue-950'/> 
     <Icons Icon={<FaTwitter/>} display='block' bg='bg-blue-950'/> 
     <Icons Icon={<FaHouzz/>} display='block' bg='bg-blue-950'/> 
     <Icons Icon={<FaHouzz/>} display='block'bg='bg-blue-950'/>
     </div>  
    </div>
    </div>
  )
}

export default Card
