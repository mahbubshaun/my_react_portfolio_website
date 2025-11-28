import React, { useEffect } from 'react';
import styles from './Hero.module.css';
import heroImg from '../../assets/images/hero.png';

const Hero = () => {
  const [welcomeText, setWelcomeText] = React.useState('');
  const [name, setName] = React.useState('');
  useEffect(() => {
    //call strapi api to get the hero data
    const fetchHeroData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/hero-section', {
            method: "GET",
            headers: {
              'Authorization': `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`, // Use your Strapi API token 
            }

          }
          
          ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        let welcomeText = data.data.welcome_text; // Adjust based on your API response structure
        setWelcomeText(welcomeText);
        setName(data.data.name); // Set the name from the API response
   
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    }
    fetchHeroData();
  }, []);

  return (
    <div id="home" className={styles['main-content']}>
      <div className={styles['content-left']}>
        <p className={styles['welcome-text']}>{welcomeText}</p>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.name}>Md Mahbub Islam Shaun</span><br />a Full Stack
          AI Engineer
        </h1>
        <p className={styles.description}>
            I develop <span className={styles.highlight}> scalable AI SaaS platforms </span>  and  sophisticated <span className={styles.highlight}>AI Automation systems </span> that transform complex workflows into automated, intelligent processes. Your custom AI platform or agent will  <span className={styles.highlight}> think, remember, and act autonomously using cutting-edge technologies like OpenAI, Claude, Gemini, Grok, Python, LangChain, N8N, AutoGen, FastAPI, Node.js, React, and vector databases (Pinecone/FAISS), Supabase </span>.
        </p>

        <div className={styles['cta-section']}>
          <a href="#contact" className={styles['primary-cta']}>
            <i className="fas fa-calendar-alt"></i>
            Schedule Free AI Consultation
          </a>
          <a href="#portfolio" className={styles['primary-cta']}>
            <i className="fas fa-eye"></i>
            View Success Stories
          </a>
        </div>

        <div className={styles['trust-metrics']}>
          <div className={styles['metric']}>
            <span className={styles['metric-number']}>200+</span>
            <span className={styles['metric-label']}>Projects Delivered</span>
          </div>
          <div className={styles['metric']}>
            <span className={styles['metric-number']}>90+</span>
            <span className={styles['metric-label']}>Happy Clients</span>
          </div>
          <div className={styles['metric']}>
            <span className={styles['metric-number']}>5+</span>
            <span className={styles['metric-label']}>Years Experience</span>
          </div>
        </div>

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
