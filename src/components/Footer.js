import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';
import './Footer.css';

import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                        <div>
                            <p>Safari Boulevard, Gulistane Johar</p>
                            <p>Karachi, Pakistan</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            0315-1173672</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            shahzaib.mirza2k02@gmail.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>Current Position</h4>
                    <p>BS-SE Student at FAST</p>
                    <div className='social'>
                        <a href='https://www.facebook.com/profile.php?id=100010512607503' target='_blank' rel='noopener noreferrer'>
                            <FaFacebook size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                        </a>
                        <a href='https://www.instagram.com/shaggy__mirza/' target='_blank' rel='noopener noreferrer'>
                            <FaInstagram size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                        </a>
                        <a href='https://www.linkedin.com/in/shahzaib-mirza/' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <p>&copy; SHM 2024. All rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer