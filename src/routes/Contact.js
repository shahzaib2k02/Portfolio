import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Herosec2 from '../components/Herosec2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Herosec2 heading='Contact.' text='Lets have a chat'/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact