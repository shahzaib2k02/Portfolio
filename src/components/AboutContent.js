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
        <div className='about-content'>
          <p>I am a passionate MERN Stack Developer with expertise in building scalable web applications. My journey in web development started with a strong foundation in Computer Science, and I've since specialized in modern JavaScript technologies.</p>
          
          <div className='key-points'>
            <h3>What I Offer:</h3>
            <ul>
              <li>Full-stack web development using MERN technologies</li>
              <li>Responsive and mobile-first design implementation</li>
              <li>RESTful API development and integration</li>
              <li>Database design and optimization</li>
              <li>Performance optimization and best practices</li>
            </ul>
          </div>

          <div className='experience'>
            <h3>Experience Highlights:</h3>
            <ul>
              <li>Developed multiple full-stack web applications</li>
              <li>Collaborated with cross-functional teams</li>
              <li>Implemented secure authentication systems</li>
              <li>Optimized application performance</li>
            </ul>
          </div>
        </div>
        <div className='cta-buttons'>
          <Link to='/contact' className='btn'>Hire Me</Link>
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