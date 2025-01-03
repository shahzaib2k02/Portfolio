import './Herosec.css';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import introimg from '../assets/pic5.jpg';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Herosec = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = useMemo(() => [
        "MERN Stack Developer",
        "Frontend Developer",
        "Backend Developer"
    ], []);

    const tick = useCallback(() => {
        let i = loopNum % words.length;
        let fullText = words[i];
        let updatedText = isDeleting 
            ? fullText.substring(0, text.length - 1) 
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setTypingSpeed(prevSpeed => prevSpeed / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setTypingSpeed(150);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setTypingSpeed(150);
        }
    }, [isDeleting, loopNum, text.length, words]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, typingSpeed);

        return () => clearInterval(ticker);
    }, [text, isDeleting, typingSpeed, tick]);

    return (
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={introimg} alt="introimg" />
                <div className='overlay'></div>
            </div>
            <div className='content'>
                <p className='greeting'>HI, I'M SHAHZAIB</p>
                <h1 className='typing-text'>{text}</h1>
                <p className='intro-text'>
                    Passionate about creating robust and scalable web applications
                    <br />with modern technologies and best practices.
                </p>
                <div className='hero-btns'>
                    <Link to='/project' className='btn'>View Work</Link>
                    <Link to='/contact' className='btn btn-light'>Hire Me</Link>
                </div>
                <div className='social-links'>
                    <a href="https://github.com/shahzaib2k02" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/shahzaib-mirza/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Herosec;
