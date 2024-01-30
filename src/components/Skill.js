import './Skill.css'

import React from 'react'
import { FaReact, FaJs, FaHtml5, FaCss3, FaBootstrap, FaNode, FaNodeJs, FaBolt, FaEnvelope } from 'react-icons/fa';

const Skill = () => {
  return (
    <div className='skill-section'>
      <div className='card left'>
        <h4>Frontend Skills</h4>
        <ul>
            <li><p><FaReact /> React.js</p></li>
            <li><p><FaJs /> JavaScript</p></li>
            <li><p><FaHtml5 /> HTML</p></li>
            <li><p><FaCss3 /> CSS</p></li>
            <li><p><FaBootstrap /> BootStrap</p></li>
            <li><p>Tailwind CSS</p></li>
        </ul>
      </div>
      <div className='card right'>
        <h4>Backend Skills</h4>
        <ul>
            <li><p><FaNode /> Node.js</p></li>
            <li><p><FaNodeJs /> Express.js</p></li>
            <li><p><FaBolt /> Socket.io</p></li>
            <li><p><FaEnvelope /> Email.js</p></li>
            <li><p> Mongodb</p></li>
        </ul>
      </div>
    </div>
  )
}

export default Skill