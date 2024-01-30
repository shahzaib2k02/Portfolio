import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Herosec2 from '../components/Herosec2'
import AboutContent from '../components/AboutContent'
import Skill from '../components/Skill'

const About = () => {
  return (
    <div>
      <Navbar />
      <Herosec2 heading='About.' text='I am a web developer'/>
      <AboutContent />
      <Skill />
      <Footer />
    </div>
  )
}

export default About