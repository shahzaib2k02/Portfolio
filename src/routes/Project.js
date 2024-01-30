import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Herosec2 from '../components/Herosec2'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Herosec2 heading='Projects.' text='Some of my most recent works' />
      <Work />
      <Footer />
    </div>
  )
}

export default Project