import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  return (
    <section id="features" className={styles['features-section']}>
      <div className={styles['section-header']}>
        <span className={styles['section-title']}>Features</span>
        <h2 className={styles['section-heading']}>What I Do</h2>
        <p className={styles['section-description']}>
          I leverage my full-stack expertise to build and deploy intelligent AI agents. 
          From front-end interfaces with React to back-end systems, 
          I create end-to-end solutions that integrate powerful AI capabilities.
        </p>
      </div>

      <div className={styles['features-grid']}>
        <div className={styles['feature-card']}>
          <span className={styles['feature-number']}>01</span>
          <div className={styles['feature-icon']}>
            <i className="fas fa-robot"></i>
          </div>
          <h3 className={styles['feature-title']}>AI Agent Development</h3>
          <p className={styles['feature-description']}>
            I specialize in creating intelligent agents that can automate complex tasks, 
            understand natural language, and make data-driven decisions.
          </p>
        </div>

        <div className={styles['feature-card']}>
          <span className={styles['feature-number']}>02</span>
          <div className={styles['feature-icon']}>
            <i className="fab fa-react"></i>
          </div>
          <h3 className={styles['feature-title']}>Front-End Development</h3>
          <p className={styles['feature-description']}>
            I build responsive and intuitive user interfaces with React, 
            ensuring a seamless user experience for interacting with AI agents.
          </p>
        </div>

        <div className={styles['feature-card']}>
          <span className={styles['feature-number']}>03</span>
          <div className={styles['feature-icon']}>
            <i className="fab fa-python"></i>
          </div>
          <h3 className={styles['feature-title']}>Back-End Development</h3>
          <p className={styles['feature-description']}>
            I develop robust and scalable back-end systems with Python & Node.js to power 
            AI applications and manage data effectively.
          </p>
        </div>

        <div className={styles['feature-card']}>
          <span className={styles['feature-number']}>04</span>
          <div className={styles['feature-icon']}>
            <i className="fas fa-cogs"></i>
          </div>
          <h3 className={styles['feature-title']}>RPA & Automation</h3>
          <p className={styles['feature-description']}>
            With a background in RPA, I excel at identifying and automating 
            repetitive tasks to improve efficiency and reduce operational costs.
          </p>
        </div>

        <div className={styles['feature-card']}>
          <span className={styles['feature-number']}>05</span>
          <div className={styles['feature-icon']}>
            <i className="fas fa-check-circle"></i>
          </div>
          <h3 className={styles['feature-title']}>Quality Assurance</h3>
          <p className={styles['feature-description']}>
            As an experienced SDET, I ensure the quality and reliability of AI systems 
            through rigorous automated testing and quality assurance processes.
          </p>
        </div>

        <div className={styles['feature-card']}>
          <span className={styles['feature-number']}>06</span>
          <div className={styles['feature-icon']}>
            <i className="fas fa-lightbulb"></i>
          </div>
          <h3 className={styles['feature-title']}>Innovative Solutions</h3>
          <p className={styles['feature-description']}>
            I am passionate about exploring new technologies and developing innovative 
            solutions that push the boundaries of what AI can achieve.
          </p>
        </div>
      </div>

      <span className={`${styles['code-decoration']} ${styles['code-left']}`}>&#123;</span>
      <span className={`${styles['code-decoration']} ${styles['code-right']}`}>&#125;</span>
    </section>
  );
};

export default Features;
