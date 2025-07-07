import Image from 'next/image'
import image from '@/public/logo-regular-free-img.png'
import bbb from '@/public/bbb-logo.png'
import houzz from '@/public/houzz-2019.png'
import modeller from '@/public/top-modeller.png'
import yelp from '@/public/yelp-love.png'

import { FaPhoneAlt,FaEnvelope,FaMapMarkerAlt,FaAngleRight } from 'react-icons/fa'

const Sumary = () => {
  return (
    <div>
    <div className="bg-blue-950  flex justify-around pt-30 ">
        <div className='flex flex-col md:flex-row justify-between gap-50  px-20'>
        <div>

         <span><Image src={image} alt="Logo" width={150} height={300} className="object-contain ml-[50px]" /></span>
         <a href="tel:+263 77 989 0522" className="flex items-center gap-2 text-white hover:underline pt-10">
                   <FaPhoneAlt className='text-amber-400'/>
                   +263 77 989 0522
                 </a>
                
                <a href="email:gweshetawanda3@gmail.com" className="flex items-center gap-2 text-white hover:underline py-5">
                   <FaEnvelope className='text-amber-400'/>
                   gweshetawanda3@gmail.com
                 </a>

                 <a href="text:1211 ASPINDALE PARK" className="flex items-center gap-2 text-white hover:underline">
                   <FaMapMarkerAlt className='text-amber-400'/>
                   1211 APINDALE PARK
                 </a>
                 
        </div>

        <div>
            <h4 className='font-bold text-white'>OUR SERVICES</h4>
            <p className='flex items-center gap-2 text-white border-b-1 border-gray-500 w-40 pt-10'><FaAngleRight className='text-amber-400'/>General Contract </p>
            <p className='flex items-center gap-2 text-white border-b-1 border-gray-500 w-40 py-3'><FaAngleRight className='text-amber-400'/>Project Planning </p>
            <p className='flex items-center gap-2 text-white border-b-1 border-gray-500 w-40'><FaAngleRight className='text-amber-400'/>House Refurbishment </p>
             <p className='flex items-center gap-2 text-white border-b-1 border-gray-500 w-40 py-3'><FaAngleRight className='text-amber-400'/>Kitchen Remodeling </p>
              <p className='flex items-center gap-2 text-white border-b-1 border-gray-500 w-40 py-3'><FaAngleRight className='text-amber-400'/>Interior Design </p>
               <p className='flex items-center gap-2 text-white border-b-1 border-gray-500 w-30 py-3'><FaAngleRight className='text-amber-400'/>House Extension </p>
        </div>

        <div>
            <h4 className='font-bold text-white'>A FEW WORDS ABOUT US</h4>
            <p className='text-white pt-10'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br /> doloremque laudantium, totam rem aperiam.</p>
            <div className='flex pt-10 flex-col md:flex-row space-y-5 space-x-5'>
            <Image src={bbb} alt="Logo" width={70} height={70}  />
            <Image src={houzz} alt="Logo" width={70} height={70}  />
            <Image src={modeller} alt="Logo" width={70} height={70}  />
            <Image src={yelp} alt="Logo" width={70} height={70}  />
           </div>
        
        </div>
      </div>
  
    </div>
    </div>
  )
}

export default Sumary
