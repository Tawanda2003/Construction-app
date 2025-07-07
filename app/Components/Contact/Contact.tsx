import Button from "../Button/Button"


const Contact = () => {
  return (
    <div>
    <div className=" flex-col justify-center  text-center items-center m-12">
        <div className="border-2 border-gray-600 w-12 ml-38 md:ml-[350px] "></div>
      <h2 className="text-white font-serif font-bold text-[80px]">Let's Build Your</h2>
      <h2 className="text-white font-serif font-bold text-[80px]">Dreams!</h2>
      <p className="text-gray-600 py-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam <br /> rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
      <Button
      text='CONTACT US'/>
    </div>
    </div>
  )
}

export default Contact
