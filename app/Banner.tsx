import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Button from './Components/Button/Button'
import MainCard from './Components/Services/page'

const Banner = () => {
  return (
    <div>
      <div className=" bg-fixed inset-0 bg-[url('/pexels-rezwan-1216589.jpg')] bg-cover  h-[840px]">
      <div className=" bg-[#0000ff5b]  h-[840px] w-[100%]">

      <div className="relative z-10 ">
      <Navbar/>
      <div className="p-20 md:p-[120px]">
        <h5 className="text-gray-200 font-bold text-[12px] font-serif pb-5">CONSTRUCTION SERVICES</h5>
        <div className="border-2 w-15 text-gray-200 "></div>
        <h1 className=" text-[50px]  text-white font-serif md:text-[100px]">BUILDING YOUR <br /> DREAMS</h1>
        <Button text='GET QUOTE'/>
      </div>
      </div>
      </div>
      </div>
      <div className='w-full relative bottom-45'>
        <MainCard/>
      </div>
      
    </div>
  )
}

export default Banner
