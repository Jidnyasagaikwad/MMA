import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PlayerCard from '../components/PlayerCard'
import AnimatedPage from '../components/AnimatedPage'

const About = () => {
  return (
    <AnimatedPage>
    <div>
      
      <Navbar />
      <HeroImg2 heading="Our Squad" text="Welcome to the Team."/>
      <PlayerCard />
      <Footer />
    </div>
    </AnimatedPage>
  )
}

export default About