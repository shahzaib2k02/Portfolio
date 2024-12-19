import './Skill.css'
import React from 'react'
import { 
    FaReact, 
    FaJs, 
    FaHtml5, 
    FaCss3, 
    FaBootstrap, 
    FaNode, 
    FaGitAlt,
    FaDatabase,
    FaDocker,
    FaAws
} from 'react-icons/fa';
import { 
    SiMongodb, 
    SiExpress, 
    SiRedux, 
    SiTypescript,
    SiTailwindcss,
    SiPostman,
    SiWebpack,
    SiJest
} from 'react-icons/si';

const Skill = () => {
  return (
    <div className='skills-container'>
      <h2 className='skills-heading'>Technical Expertise</h2>
      <div className='skill-section'>
        <div className='card left'>
          <h4>Frontend Development</h4>
          <ul>
            <li><p><FaReact /> React.js</p><span>Advanced</span></li>
            <li><p><SiRedux /> Redux</p><span>Intermediate</span></li>
            <li><p><FaJs /> JavaScript (ES6+)</p><span>Advanced</span></li>
            <li><p><SiTypescript /> TypeScript</p><span>Intermediate</span></li>
            <li><p><FaHtml5 /> HTML5</p><span>Advanced</span></li>
            <li><p><FaCss3 /> CSS3/SASS</p><span>Advanced</span></li>
            <li><p><SiTailwindcss /> Tailwind CSS</p><span>Intermediate</span></li>
            <li><p><FaBootstrap /> Bootstrap</p><span>Advanced</span></li>
          </ul>
        </div>
        <div className='card center'>
          <h4>Backend Development</h4>
          <ul>
            <li><p><FaNode /> Node.js</p><span>Advanced</span></li>
            <li><p><SiExpress /> Express.js</p><span>Advanced</span></li>
            <li><p><SiMongodb /> MongoDB</p><span>Advanced</span></li>
            <li><p><FaDatabase /> SQL</p><span>Intermediate</span></li>
            <li><p><FaAws /> AWS Basics</p><span>Intermediate</span></li>
          </ul>
        </div>
        <div className='card right'>
          <h4>Tools & Technologies</h4>
          <ul>
            <li><p><FaGitAlt /> Git & GitHub</p><span>Advanced</span></li>
            <li><p><SiPostman /> Postman</p><span>Advanced</span></li>
            <li><p><FaDocker /> Docker</p><span>Intermediate</span></li>
            <li><p><SiWebpack /> Webpack</p><span>Intermediate</span></li>
            <li><p><SiJest /> Jest/Testing</p><span>Intermediate</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skill