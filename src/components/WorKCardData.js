import pro1 from '../assets/pro1.jpeg';
import pro2 from '../assets/pro2.png';
import pro3 from '../assets/pro3.jpg';
import pro4 from '../assets/pro4.png';
import pro5 from '../assets/pro5.png';

const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "Matrimonial Platform",
        description: "A full-stack matrimonial website with real-time chat functionality using Socket.io. Features include user authentication, profile matching, and direct messaging.",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
        github: "https://github.com/k213819/Mern-projects",
        liveDemo: "https://your-demo-link.com",
        featured: true
    },
    {
        imgsrc: pro2,
        title: "Meeting Scheduler Pro",
        description: "Smart meeting management application with real-time notifications, calendar integration, and collaborative note-taking features.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "WebRTC"],
        github: "https://github.com/k213819/Mern-projects",
        featured: false
    },
    {
        imgsrc: pro3,
        title: "TravelBuddy",
        description: "Feature-rich travel booking platform with personalized tour recommendations, secure payment integration, and interactive trip planning tools.",
        technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/k213819/Mern-projects",
        featured: false
    },
    {
        imgsrc: pro4,
        title: "StudyMateAI",
        description: "A comprehensive AI-powered study assistant with personalized tools like automated quiz generation, notes summarization and video summarization.",
        technologies: ["Next.js", "Tailwind CSS", "LLM", "NLP", "Gemeni API", "OpenAI", "Flask"],
        github: "https://github.com/MuhdDaniyal/FYP",
        featured: false
    },
    {
        imgsrc: pro5,
        title: "Game-Boy-Evolved",
        description: "Game Boy having multiple games and a custom games like tic-tac-toe, rock-paper-scissors, and hangman. Calendar, Digital clock and Covid tracker",
        technologies: ["C"],
        github: "https://github.com/shahzaib2k02/GameBoyEvolved.git",
        featured: false
    }
];

export default ProjectCardData;