import './Procard.css'
import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Procard = (props) => {
    return (
        <div className='project-card'>
            <img src={props.imgsrc} alt='project' />
            <h2 className='project-title'>{props.title}</h2>
            <div className='pro-details'>
                <p>{props.text}</p>
                <div className='technologies'>
                    {props.technologies && props.technologies.map((tech, index) => (
                        <span key={index} className='tech-tag'>{tech}</span>
                    ))}
                </div>
                <div className='pro-btns'>
                    <a 
                        href={props.view} 
                        className='btn'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FaGithub /> Source Code
                    </a>
                    {props.demo && (
                        <a 
                            href={props.demo} 
                            className='btn btn-light'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaExternalLinkAlt /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Procard