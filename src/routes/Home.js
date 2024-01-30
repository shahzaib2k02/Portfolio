import React from 'react'
import Navbar from '../components/Navbar'
import Herosec from '../components/Herosec'
import Footer from '../components/Footer'
import Work from '../components/Work'
import Skill from '../components/Skill'
import AboutContent from '../components/AboutContent'
import Form from '../components/Form'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Herosec />
      <AboutContent />
      <Skill />
      <Work />
      <Form />
      <Footer />
    </div>
  )
}

export default Home