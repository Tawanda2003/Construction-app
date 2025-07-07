

import Banner from "./Banner"
import About from "./Components/About/page"
import Clients from "./Components/Clients/page"
import Project from "./Components/Project/Project"
import Yellow from "./Components/Yellow"
import Sumary from "./Components/Summary/Sumary"
import Footer from "@/Footer"




const Home = () => {
  return (
  
   <div>
    <section>
     <Banner/>
    </section>

    <section>
      <About/>
    </section>
      
      <section>
        <Clients/>
      </section>
      <Project/>

      <section>
        <Yellow/>
      </section>
      <section>
        <Sumary/>
      </section>

      <section>
        <Footer/>
      </section>
    </div>
    
  )
}

export default Home
