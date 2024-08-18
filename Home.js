import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Time from '../components/Time'
import CL from '../components/CL'
import FaCup from '../components/FaCup'
import AnimatedPage from '../components/AnimatedPage'

const Home = () => {
  return (
    <AnimatedPage>
    <div>
      <Navbar />
      <HeroImg />
      <Time/>
      <CL/>
      <FaCup/>
      <Footer />
    </div>
    </AnimatedPage>
  )
}

export default Home