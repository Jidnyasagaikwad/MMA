import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from "../components/Form";
import AnimatedPage from '../components/AnimatedPage'

const Contact = () => {
  return (
    <AnimatedPage>
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Hello ! This is a website made by Jidnyasa Gaikwad. Feel
      free to drop any suggetions or queries."/>
      <Form/>
      <Footer />
    </div>
    </AnimatedPage>
  )
}

export default Contact