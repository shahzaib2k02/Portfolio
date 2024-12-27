import './Procard.css'
import React from 'react'
import { FaGithub } from 'react-icons/fa';

const Procard = (props) => {
    const { 
        imgsrc, 
        title, 
        description, 
        technologies = [], 
        github
    } = props;

    return (
        <div className='project-card'>
            <img src={imgsrc} alt={title} />
            <h2 className='project-title'>{title}</h2>
            <div className='project-content'>
                <p className='project-description'>{description}</p>
                <div className='project-tech'>
                    {technologies.map((tech, index) => (
                        <span key={index} className='tech-tag'>{tech}</span>
                    ))}
                </div>
                <div className='project-links'>
                    {github && (
                        <a 
                            href={github}
                            className='project-link'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaGithub /> Source Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Procard