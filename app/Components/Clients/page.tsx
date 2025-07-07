import ClientCard from "../../ClientCard"
import pic from '@/public/jamie.jpg'
import joe from '@/public/joe.jpg'
import alba from '@/public/alba.jpg'


const Clients = () => {
  return (
    <div>
    <div className="py-10">
      <h2 className="text-[60px] text-blue-900 flex justify-center pb-[40px]">Our Happy Clients!</h2>
      <div className="border-2 border-text-[#00000080] w-12 ml-40 md:ml-160"></div>

      <div className="ml-5 md:flex pt-[40px] justify-center gap-8">
      <ClientCard 
      image={pic}
      text='JEMMA STONE'/>

       <ClientCard 
      image={joe}
      text='JOE KELLY'/>

       <ClientCard 
      image={alba}
      text='STELLAR ALBA'/>
      </div>
    </div>
    </div>
  )
}

export default Clients
