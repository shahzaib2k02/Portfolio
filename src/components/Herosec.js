import './Herosec.css'

import React from 'react'
import introimg from '../assets/pic5.jpg';
import { Link } from 'react-router-dom';

const Herosec = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={introimg} alt="introimg" />
            </div>
            <div className='content'>
                <p>HI I'M SHAHZAIB.</p>
                <h1>MERN STACK DEVELOPER</h1>
                <div>
                    <Link to='/project' className='btn'>Projects</Link>
                    <Link to='/contact' className='btn btn-light'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Herosec