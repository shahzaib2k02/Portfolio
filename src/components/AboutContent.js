import { Link } from 'react-router-dom'
import './AboutContent.css'

import React from 'react'
import react1 from '../assets/reactpic.png';
import node1 from '../assets/nodepic.png';

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>I am a web developer. I create dynamic and responsives websites for clients using mern stack.</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={react1} className='img' alt='true'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={node1} className='img' alt='true'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent