import Image, { StaticImageData } from "next/image"
import Icons from "./Components/Icons/Icons"
import { FaQuoteLeft, FaStar } from "react-icons/fa"

interface CardProps{
  image:StaticImageData
  text:string  
}

const ClientCard = ({image, text}:CardProps) => {
  return (
    <div>
    <div className="bg-white p-12 shadow-2xl w-[360px]">
      <FaQuoteLeft size={30} className="text-blue-700"/>
      <p className="pt-[30px]">Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elelit tellus.</p>
      <div className="text-amber-300 flex pt-[10px]">
      <FaStar/>
       <FaStar/>
        <FaStar/>
         <FaStar/>
          <FaStar/>
           </div>

          <div className="flex pt-[40px]">
          <Image className=" rounded-full" width={55} height={55} src={image} alt="" />
          <h4 className="pl-[20px] text-blue-900 font-bold">{text}</h4>
          
      </div>
    </div>
    </div>
  )
}

export default ClientCard
