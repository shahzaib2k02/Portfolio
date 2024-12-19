import pro1 from '../assets/pro1.jpeg';
import pro2 from '../assets/pro2.png';
import pro3 from '../assets/pro3.jpg';
import pro4 from '../assets/pro4.png';

const ProjectCardData = [
    {
        imgsrc: pro1,
        title: 'Matrimonial Website',
        text: 'A full-stack MERN matrimonial platform featuring real-time chat integration with Socket.io, advanced profile matching algorithms, and secure authentication. Implements responsive design and MongoDB for efficient data management.',
        view: 'https://github.com/k213819/Mern-projects',
        demo: 'https://your-demo-link.com',
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express']
    },
    {
        imgsrc: pro2,
        title: 'Meeting Scheduler Pro',
        text: 'Smart meeting management application with real-time notifications, calendar integration, and collaborative note-taking features. Built with React for the frontend and Node.js/Express backend with MongoDB database.',
        view: 'https://github.com/k213819/Mern-projects',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'WebRTC']
    },
    {
        imgsrc: pro3,
        title: 'TravelBuddy - Tour Booking Platform',
        text: 'Feature-rich travel booking platform with personalized tour recommendations, secure payment integration, and interactive trip planning tools. Implements JWT authentication and Redux for state management.',
        view: 'https://github.com/k213819/Mern-projects',
        technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
        imgsrc: pro4,
        title: 'StudyMateAI - AI Tools for Students',
        text: 'A comprehensive AI-powered study assistant with personalized tools like automated quiz generation, notes summarization and video summarization.',
        view: 'https://github.com/MuhdDaniyal/FYP',
        technologies: ['Next.js', 'Tailwind CSS','LLM','NLP','Gemeni API', 'OpenAI', 'Flask']
    }
];

export default ProjectCardData;