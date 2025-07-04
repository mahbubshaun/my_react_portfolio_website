import React, { useState } from 'react';
import styles from './Portfolio.module.css';

import chatAppCover from '../../assets/images/chat_app_cover.png';
import pricescout from '../../assets/images/pricescout.png';
import geekoutDashboard from '../../assets/images/GEEKOUT-DASHBOARD.png';
import weatherapp from '../../assets/images/weatherapp.png';
import todolist from '../../assets/images/todlist.png';
import calculator from '../../assets/images/calculator.png';
import tictac from '../../assets/images/Tictac.png';
import rfq from '../../assets/images/rfq.png';
import bulkEmailingApp from '../../assets/images/bulk_emailing_app.png';
import speechToText from '../../assets/images/speech-to-text.png';
import emailAgent from '../../assets/images/email_agent.png';
import ragAgent from '../../assets/images/rag_agent.png';

const portfolioItems = [
      {
        imgSrc: emailAgent,
        category: 'AI Agents',
        title: 'AI Email Agent',
        codeLink: 'https://github.com/mahbubshaun/example-llm-emails',
        liveLink: 'https://github.com/mahbubshaun/example-llm-emails',
        tech: ['Python', 'Pytorch', 'Flask']
    },

       {
        imgSrc: speechToText,
        category: 'AI Agents',
        title: 'Speech-to-text AI Agent',
        codeLink: 'https://github.com/mahbubshaun/Speech-to-text-AI-Examples',
        liveLink: 'https://github.com/mahbubshaun/Speech-to-text-AI-Examples',
        tech: ['Python', 'TensorFlow', 'FastAPI']
    },

    {
        imgSrc: ragAgent,
        category: 'AI Agents',
        title: 'Simple RAG with Llamaindex, OpenAI and Robocorp',
        codeLink: 'https://github.com/mahbubshaun/example-llamaindex-email',
        liveLink: 'https://github.com/mahbubshaun/example-llamaindex-email',
        tech: ['Python', 'TensorFlow', 'FastAPI']
    },
 
  
    // {
    //     imgSrc: 'https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     category: 'AI Agents',
    //     title: 'AI Image Recognition',
    //     codeLink: 'https://github.com/mahbubshaun/chatapp',
    //     liveLink: 'https://chatapp-o1wz.vercel.app/',
    //     tech: ['Python', 'OpenCV', 'Django']
    // },
    {
        imgSrc: chatAppCover,
        category: 'Web Development',
        title: 'Chat App',
        codeLink: 'https://github.com/mahbubshaun/chatapp',
        liveLink: 'https://chatapp-o1wz.vercel.app/',
        tech: ['React', 'Node.js', 'MongoDB']
    },
    {
        imgSrc: pricescout,
        category: 'Web Development',
        title: 'PriceScout - Search and Compare Drones',
        codeLink: 'https://github.com/mahbubshaun/comic_reader',
        liveLink: 'https://mahbubshaun.github.io/price_comparison_website/',
        tech: ['React', 'Node.js', 'MongoDB']
    },
    {
        imgSrc: geekoutDashboard,
        category: 'Web Development',
        title: 'Geekout - Comic Reader',
        codeLink: 'https://github.com/mahbubshaun/comic_reader',
        liveLink: 'https://mahbubshaun.github.io/comic_reader/',
        tech: ['React', 'Node.js', 'MongoDB']
    },
    {
        imgSrc: weatherapp,
        category: 'Web Development',
        title: 'A Weather App',
        codeLink: 'https://github.com/mahbubshaun/the_odin_project_full_stack_learning/tree/main/weather_app',
        liveLink: 'https://mahbubshaun.github.io/the_odin_project_full_stack_learning/weather_app',
        tech: ['React', 'Node.js', 'MongoDB']
    },
    {
        imgSrc: todolist,
        category: 'Web Development',
        title: 'Todo List App',
        codeLink: 'https://github.com/mahbubshaun/the_odin_project_full_stack_learning/tree/main/weather_app',
        liveLink: 'https://mahbubshaun.github.io/the_odin_project_full_stack_learning/todoapp/dist/index.html',
        tech: ['React', 'Node.js', 'MongoDB']
    },
    {
        imgSrc: calculator,
        category: 'Web Development',
        title: 'Calculator',
        codeLink: 'https://github.com/mahbubshaun/the_odin_project_full_stack_learning/tree/main/calculator',
        liveLink: 'https://mahbubshaun.github.io/the_odin_project_full_stack_learning/calculator/',
        tech: ['React', 'Node.js', 'MongoDB']
    },
    {
        imgSrc: tictac,
        category: 'Web Development',
        title: 'Tic Tac Toe Game App',
        codeLink: 'https://github.com/mahbubshaun/the_odin_project_full_stack_learning/tree/main/project_tic_tac_toe',
        liveLink: 'https://mahbubshaun.github.io/the_odin_project_full_stack_learning/project_tic_tac_toe/',
        tech: ['React', 'Node.js', 'MongoDB']
    },
    {
        imgSrc: rfq,
        category: 'Web App',
        title: 'RFQ Tracker System',
        codeLink: 'https://github.com/mahbubshaun/the_odin_project_full_stack_learning/tree/main/webpack-demo',
        liveLink: 'https://mahbubshaun.github.io/the_odin_project_full_stack_learning/webpack-demo/rft.html',
        tech: ['Flutter', 'Firebase']
    },
    {
        imgSrc: bulkEmailingApp,
        category: 'Desktop App',
        title: 'Bulk Email Automation App',
        codeLink: 'https://github.com/mahbubshaun/email_automation?tab=readme-ov-file',
        liveLink: 'https://youtu.be/D0qItr8IJKU',
        tech: ['Flutter', 'Firebase']
    }
];

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredItems = selectedCategory === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === selectedCategory);

    return (
        <section id="portfolio" className={styles['portfolio-section']}>
            <div className={styles['section-header']}>
                <span className={styles['section-title']}>Portfolio</span>
                <h2 className={styles['section-heading']}>Featured Projects</h2>
            </div>

            <div className={styles['portfolio-categories']}>
                <button onClick={() => handleCategoryClick('All')} className={selectedCategory === 'All' ? styles.active : ''}>All</button>
                <button onClick={() => handleCategoryClick('AI Agents')} className={selectedCategory === 'AI Agents' ? styles.active : ''}>AI Agents</button>
                <button onClick={() => handleCategoryClick('Web Development')} className={selectedCategory === 'Web Development' ? styles.active : ''}>Web Development</button>
            </div>

            <div className={styles['portfolio-grid']}>
                {filteredItems.map((item, index) => (
                    <div className={styles['portfolio-item']} key={index}>
                        <img
                            src={item.imgSrc}
                            alt={item.title}
                            className={styles['portfolio-image']}
                        />
                        <div className={styles['tech-stack']}>
                            {item.tech.map((tech, i) => (
                                <i key={i} className={`fab fa-${tech.toLowerCase().replace('.', '-js')} ${styles['tech-icon']}`} title={tech}></i>
                            ))}
                        </div>
                        <div className={styles['portfolio-overlay']}>
                            <span className={styles['portfolio-category']}>{item.category}</span>
                            <h3 className={styles['portfolio-title']}>{item.title}</h3>
                            <div className={styles['portfolio-links']}>
                                <a
                                    href={item.codeLink}
                                    className={styles['portfolio-link']}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-code"></i>
                                    View Code
                                </a>
                                <a
                                    href={item.liveLink}
                                    className={styles['portfolio-link']}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-external-link-alt"></i>
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
