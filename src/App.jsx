import { useState } from 'react'
import './App.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Section1 from '../Components/Section1'
import Section3 from '../Components/Section3'
import Section4 from '../Components/Section4'
import Section5 from '../Components/Section5'
import Section6 from '../Components/Section6'
import Properties from '../Components/RentPage/Properties'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Navbar/>
       <Section1/>
       <Properties/>
       <Section3/>       
       <Section4/>       
       <Section5/>       
       <Section6/>       
       <Footer/>
    </div>
   
  )
}

export default App