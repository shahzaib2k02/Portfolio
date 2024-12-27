import { Link } from 'react-router-dom'
import './AboutContent.css'
import React from 'react'
import { FaDownload } from 'react-icons/fa';
import react1 from '../assets/reactpic.png';
import node1 from '../assets/nodepic.png';

const AboutContent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who Am I?</h1>
        <p>
          I am a MERN Stack Developer with a strong foundation in web development. 
          Currently pursuing my Bachelor's in Software Engineering at FAST NUCES, I specialize in 
          building full-stack web applications using modern technologies.
        </p>
        <div className='cta-buttons'>
          <Link to='/project' className='btn'>View Projects</Link>
          <a href="/shahzaib_resume.pdf" className='btn btn-light' download>
            <FaDownload /> Resume
          </a>
        </div>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='img-stack top'>
            <img src={react1} className='img' alt='React Development'/>
          </div>
          <div className='img-stack bottom'>
            <img src={node1} className='img' alt='Node.js Development'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent