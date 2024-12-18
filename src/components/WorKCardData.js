import pro1 from '../assets/pro1.jpeg';
import pro2 from '../assets/pro2.png';
import pro3 from '../assets/pro3.jpg';

export const ProjectCardData = [
    {
        title: "Project Name",
        description: "Detailed project description",
        technologies: ["React", "Node.js", "MongoDB"],
        liveDemo: "https://demo-link.com",
        sourceCode: "https://github.com/your-username/project",
        image: "./project-image.jpg",
        highlights: [
            "Key achievement 1",
            "Key achievement 2",
            "Key achievement 3"
        ],
        role: "Lead Developer",
        duration: "3 months"
    },
    {
        imgsrc: pro1,
        title: 'Matrimonial Website',
        text: 'A dating website offering you live chat and profile serach functionalities. You can view matching compatibility, views on your profiles and save profiles.',
        view: 'https://github.com/k213819/Mern-projects'
    },
    {
        imgsrc: pro2,
        title: 'Meeting App',
        text: 'A Meeting app design to manage all your meetings schedules, provide you with notes, providing notification bell and updates on missed meetings.',
        view: 'https://github.com/k213819/Mern-projects'
    },
    {
        imgsrc: pro3,
        title: 'Tour and travel app',
        text: 'Travelling booking app where you view tours, search on preference, book your favourties one.',
        view: 'https://github.com/k213819/Mern-projects'
    }
]

export default ProjectCardData