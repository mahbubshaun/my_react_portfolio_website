import React from 'react';
import styles from './Resume.module.css';

const education = [
    {
        date: '2025 - Present',
        title: 'Master in Web & Data Science',
        company: 'University Of Koblenz',
        description: 'Specializing in Artificial Intelligence and Machine Learning with focus on practical applications in software development.',
        skills: ['Machine Learning', 'AI', 'Data Structures']
    },
    {
        date: '2016 - 2020',
        title: 'Bachelor in Computer Science & Engineering (major in Software Engineering)',
        company: 'City University',
        description: 'Fundamental software engineering principles with emphasis on web technologies and system design.',
        skills: ['Web Development', 'Algorithms', 'System Design']
    }
];

const experience = [
    {
        date: '2021 - Present',
        title: 'SDET',
        company: 'Augmedix',
        description: 'Working as a Software Development Engineer in Test, focusing on test automation and quality assurance for AI-driven healthcare applications. Gaining extensive experience in Python and test automation frameworks.',
        skills: ['Python', 'Selenium', 'Appium', 'API Automation', 'UI Automation']
    },
    {
        date: '2020 - Present',
        title: 'Full Stack & RPA Developer',
        company: 'Freelance',
        description: 'Providing full-stack development services with React and Node.js, while also offering RPA solutions to automate business processes for clients on platforms like Upwork and Fiverr.',
        skills: ['React', 'Node.js', 'RPA', 'Selenium', 'Python']
    }
];

const Resume = () => {
    return (
        <section id="resume" className={styles['resume-section']}>
            <div className={styles['section-header']}>
                <span className={styles['section-title']}>Resume</span>
                <h2 className={styles['section-heading']}>My Experience</h2>
            </div>

            <div className={styles['resume-grid']}>
                <div className={styles['resume-column']}>
                    <h3 className={styles['column-title']}>Education</h3>
                    {education.map((item, index) => (
                        <div className={styles['timeline-item']} key={index}>
                            <span className={styles['timeline-date']}>{item.date}</span>
                            <h4 className={styles['timeline-title']}>{item.title}</h4>
                            <div className={styles['timeline-company']}>
                                <i className="fas fa-university"></i>
                                {item.company}
                            </div>
                            <p className={styles['timeline-description']}>{item.description}</p>
                            <div className={styles['skills-list']}>
                                {item.skills.map((skill, i) => (
                                    <span className={styles['skill-tag']} key={i}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles['resume-column']}>
                    <h3 className={styles['column-title']}>Experience</h3>
                    {experience.map((item, index) => (
                        <div className={styles['timeline-item']} key={index}>
                            <span className={styles['timeline-date']}>{item.date}</span>
                            <h4 className={styles['timeline-title']}>{item.title}</h4>
                            <div className={styles['timeline-company']}>
                                <i className="fas fa-building"></i>
                                {item.company}
                            </div>
                            <p className={styles['timeline-description']}>{item.description}</p>
                            <div className={styles['skills-list']}>
                                {item.skills.map((skill, i) => (
                                    <span className={styles['skill-tag']} key={i}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles['download-cv']}>
                <button className={styles['download-button']}>
                    <i className="fas fa-download"></i>
                    Download Resume
                </button>
            </div>
        </section>
    );
};

export default Resume;
