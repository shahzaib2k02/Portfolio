import './Skill.css'
import React from 'react'
import { 
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, 
    FaBootstrap, FaGitAlt, FaDatabase, 
    FaDocker, FaAws, FaGithub, FaPython,
    FaFigma
} from 'react-icons/fa';
import { 
    SiMongodb, SiExpress, SiRedux, 
    SiTypescript, SiTailwindcss, SiPostman,
    SiWebpack, SiJest, SiJavascript,
    SiNextdotjs, SiMysql, SiFlask,
    SiOpenai, SiTensorflow
} from 'react-icons/si';

const Skill = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: [
                { name: "React.js", icon: <FaReact className="react-icon" /> },
                { name: "Next.js", icon: <SiNextdotjs className="next-icon" /> },
                { name: "JavaScript", icon: <SiJavascript className="js-icon" /> },
                { name: "TypeScript", icon: <SiTypescript className="ts-icon" /> },
                { name: "Redux", icon: <SiRedux className="redux-icon" /> },
                { name: "HTML5", icon: <FaHtml5 className="html-icon" /> },
                { name: "CSS3", icon: <FaCss3Alt className="css-icon" /> },
                { name: "Tailwind", icon: <SiTailwindcss className="tailwind-icon" /> },
                { name: "Bootstrap", icon: <FaBootstrap className="bootstrap-icon" /> }
            ]
        },
        {
            title: "Backend Development",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="node-icon" /> },
                { name: "Express.js", icon: <SiExpress className="express-icon" /> },
                { name: "Python", icon: <FaPython className="python-icon" /> },
                { name: "Flask", icon: <SiFlask className="flask-icon" /> },
                { name: "MongoDB", icon: <SiMongodb className="mongo-icon" /> },
                { name: "MySQL", icon: <SiMysql className="mysql-icon" /> },
                { name: "SQL", icon: <FaDatabase className="sql-icon" /> }
            ]
        },
        {
            title: "AI & Machine Learning",
            skills: [
                { name: "OpenAI", icon: <SiOpenai className="openai-icon" /> },
                { name: "TensorFlow", icon: <SiTensorflow className="tensorflow-icon" /> },
                { name: "NLP", icon: <FaDatabase className="nlp-icon" /> },
                { name: "LLMs", icon: <SiOpenai className="llm-icon" /> }
            ]
        },
        {
            title: "Tools & DevOps",
            skills: [
                { name: "Git", icon: <FaGitAlt className="git-icon" /> },
                { name: "GitHub", icon: <FaGithub className="github-icon" /> },
                { name: "Postman", icon: <SiPostman className="postman-icon" /> },
                { name: "Docker", icon: <FaDocker className="docker-icon" /> },
                { name: "Webpack", icon: <SiWebpack className="webpack-icon" /> },
                { name: "Jest", icon: <SiJest className="jest-icon" /> },
                { name: "AWS", icon: <FaAws className="aws-icon" /> },
                { name: "Figma", icon: <FaFigma className="figma-icon" /> }
            ]
        }
    ];

    return (
        <div className='skills-container'>
            <h2 className='skills-heading'>Technical Expertise</h2>
            <div className='skills-content'>
                {skillCategories.map((category, idx) => (
                    <div key={idx} className='skill-category'>
                        <h3 className='category-title'>{category.title}</h3>
                        <div className='skills-grid'>
                            {category.skills.map((skill, index) => (
                                <div key={index} className='skill-item'>
                                    <div className='skill-icon'>
                                        {skill.icon}
                                    </div>
                                    <span className='skill-name'>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skill