import React from 'react';
import styles from './Hero.module.css';
import heroImg from '../../assets/images/hero-img.svg';

const Hero = () => {
  return (
    <div id="home" className={styles['main-content']}>
      <div className={styles['content-left']}>
        <p className={styles['welcome-text']}>Welcome to my World</p>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.name}>Mahbub Islam Shaun</span><br />a Full Stack
          AI Agent Developer.
        </h1>
        <p className={styles.description}>
          Welcome to my portfolio! I build intelligent AI agents that can reason,
          learn, and interact with the world. Explore my projects and see how I'm
          shaping the future of AI.
        </p>

        <div className={styles['social-section']}>
          <p className={styles['social-title']}>// find_me_on</p>
          <div className={styles['social-icons']}>
            <div className={styles['social-icon']}>
              <a href="https://github.com/mahbubshaun" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className={styles['social-icon']}>
              <a
                href="https://www.linkedin.com/in/mdmahbubshaun/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={styles['tech-stack-section']}>
          <p className={styles['tech-stack-title']}>// ai_agent_tech_stack</p>
          <div className={styles.skills}>
            <div className={`${styles['skill-icon']} ${styles['ai-highlight']}`} title="Python - AI/ML Development">
              <i className="fab fa-python"></i>
            </div>
            <div className={`${styles['skill-icon']} ${styles['ai-highlight']}`} title="LangChain - AI Agent Framework">
              <span className={styles['custom-icon']}>LC</span>
            </div>
            <div className={`${styles['skill-icon']} ${styles['ai-highlight']}`} title="OpenAI - GPT & AI Models">
              <span className={styles['custom-icon']}>GPT</span>
            </div>
            <div className={`${styles['skill-icon']} ${styles['ai-highlight']}`} title="AI Agents - Autonomous Systems">
              <i className="fas fa-robot"></i>
            </div>
            <div className={styles['skill-icon']} title="Node.js - Backend Development">
              <i className="fab fa-node"></i>
            </div>
            <div className={styles['skill-icon']} title="React - Frontend Development">
              <i className="fab fa-react"></i>
            </div>
            <div className={styles['skill-icon']} title="JavaScript - Programming">
              <i className="fab fa-js"></i>
            </div>
            <div className={styles['skill-icon']} title="Database Management">
              <i className="fas fa-database"></i>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['hero-image']}>
        <span className={`${styles['code-element']} ${styles['code-element-1']}`}></span>
        <span className={`${styles['code-element']} ${styles['code-element-2']}`}>&#123;code&#125;</span>

        <img src={heroImg} alt="hero img" />
      </div>
    </div>
  );
};

export default Hero;
