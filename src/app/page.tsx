import Image from 'next/image'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Slider from './Components/Slider'
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'
import Card from './Components/Card'
import Acoordian from './Components/Acoordian'

export default function Home() {
  return (
  <>
    <div className="bg-[#fff] transition ease-in-out delay-150  transition-transform:background-red-900">
      <Header/>
      <Hero/>
      <Slider/>
      <SectionOne/>
      <SectionTwo/>
      <Card/>
      <Acoordian/>
      <Footer/>
    </div>  
  
  </>
  )
}
