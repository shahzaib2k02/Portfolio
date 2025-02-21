import './Procard.css'
import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { Card, CardContent, Typography, Button } from '@mui/material';

const Procard = ({ imgsrc, title, description, technologies, github }) => (
    <Card className="project-card" elevation={3}>
        <img src={imgsrc} alt={title} className="project-image" />
        <CardContent>
            <Typography variant="h5" className="project-title">{title}</Typography>
            <Typography variant="body2" className="project-description">{description}</Typography>
            <div className="project-tech">
                {technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                ))}
            </div>
            <Button variant="contained" color="primary" href={github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> Source Code
            </Button>
        </CardContent>
    </Card>
);

export default Procard