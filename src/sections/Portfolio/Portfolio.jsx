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
        title: 'Intelligent Email Processing Agent',
        description: 'Advanced AI system that automates email classification, response generation, and workflow optimization using LLM technology.',
        codeLink: 'https://github.com/mahbubshaun/example-llm-emails',
        liveLink: 'https://github.com/mahbubshaun/example-llm-emails',
        tech: ['Python', 'OpenAI', 'LangChain', 'PyTorch'],
        duration: '3 weeks',
        teamSize: 'Solo Project',
        complexity: 'Advanced',
        metrics: {
            performance: '95% accuracy in email classification',
            impact: 'Reduces manual email processing time by 80%',
            scale: 'Processes 1000+ emails per hour'
        },
        challenges: 'Implementing context-aware response generation with multi-language support',
        results: 'Successfully deployed for small business automation, achieving 4.5x faster email response times',
        businessValue: 'Enables businesses to handle customer inquiries 24/7 with consistent, professional responses'
    },
    {
        imgSrc: speechToText,
        category: 'AI Agents',
        title: 'Real-time Speech Recognition Agent',
        description: 'High-performance speech-to-text system with custom AI models for accurate transcription and voice command processing.',
        codeLink: 'https://github.com/mahbubshaun/Speech-to-text-AI-Examples',
        liveLink: 'https://github.com/mahbubshaun/Speech-to-text-AI-Examples',
        tech: ['Python', 'TensorFlow', 'FastAPI', 'WebRTC'],
        duration: '4 weeks',
        teamSize: 'Solo Project',
        complexity: 'Expert',
        metrics: {
            performance: '98.5% word accuracy rate',
            impact: 'Real-time processing with <200ms latency',
            scale: 'Supports 50+ concurrent users'
        },
        challenges: 'Optimizing model performance for real-time processing while maintaining accuracy across accents',
        results: 'Deployed production-ready API serving multiple client applications',
        businessValue: 'Enables accessibility features and voice-controlled interfaces for modern applications'
    },
    {
        imgSrc: ragAgent,
        category: 'AI Agents',
        title: 'Enterprise RAG Knowledge Assistant',
        description: 'Sophisticated retrieval-augmented generation system that transforms document repositories into intelligent Q&A assistants.',
        codeLink: 'https://github.com/mahbubshaun/example-llamaindex-email',
        liveLink: 'https://github.com/mahbubshaun/example-llamaindex-email',
        tech: ['Python', 'LlamaIndex', 'OpenAI', 'ChromaDB', 'FastAPI'],
        duration: '5 weeks',
        teamSize: 'Solo Project',
        complexity: 'Expert',
        metrics: {
            performance: '92% relevance score in document retrieval',
            impact: 'Reduces information search time by 70%',
            scale: 'Indexes 10,000+ documents across multiple formats'
        },
        challenges: 'Building scalable vector embeddings with semantic search across diverse document types',
        results: 'Created enterprise-ready knowledge base that serves accurate, contextual responses',
        businessValue: 'Transforms static documentation into interactive knowledge systems, improving team productivity'
    },
    {
        imgSrc: chatAppCover,
        category: 'Full-Stack Development',
        title: 'Real-time Collaborative Chat Platform',
        description: 'Modern chat application with real-time messaging, file sharing, and advanced user management features.',
        codeLink: 'https://github.com/mahbubshaun/chatapp',
        liveLink: 'https://chatapp-o1wz.vercel.app/',
        tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
        duration: '6 weeks',
        teamSize: 'Solo Project',
        complexity: 'Intermediate',
        metrics: {
            performance: 'Handles 500+ concurrent users',
            impact: 'Real-time message delivery <50ms latency',
            scale: 'Deployed on AWS with auto-scaling'
        },
        challenges: 'Implementing secure real-time communication with scalable architecture',
        results: 'Production-ready chat platform with 99.9% uptime and positive user feedback',
        businessValue: 'Provides businesses with custom communication solutions, reducing dependency on third-party platforms'
    },
    {
        imgSrc: pricescout,
        category: 'E-commerce Solutions',
        title: 'PriceScout - AI-Powered Price Comparison Engine',
        description: 'Intelligent price comparison platform that aggregates drone prices across multiple retailers with trend analysis.',
        codeLink: 'https://github.com/mahbubshaun/price_comparison_website',
        liveLink: 'https://mahbubshaun.github.io/price_comparison_website/',
        tech: ['JavaScript', 'Web Scraping APIs', 'Chart.js', 'Bootstrap'],
        duration: '4 weeks',
        teamSize: 'Solo Project',
        complexity: 'Intermediate',
        metrics: {
            performance: 'Compares prices from 15+ retailers',
            impact: 'Users save average of 25% on purchases',
            scale: 'Tracks 500+ drone models'
        },
        challenges: 'Building robust web scraping system that adapts to changing retailer websites',
        results: 'Created comprehensive price tracking system with historical data visualization',
        businessValue: 'Helps consumers make informed purchasing decisions while providing market insights'
    },
    {
        imgSrc: geekoutDashboard,
        category: 'Content Management',
        title: 'Geekout - Progressive Web Comic Reader',
        description: 'Feature-rich comic reading platform with offline capabilities, bookmark management, and responsive design.',
        codeLink: 'https://github.com/mahbubshaun/comic_reader',
        liveLink: 'https://mahbubshaun.github.io/comic_reader/',
        tech: ['React', 'PWA', 'Local Storage', 'Service Workers'],
        duration: '3 weeks',
        teamSize: 'Solo Project',
        complexity: 'Intermediate',
        metrics: {
            performance: 'Works offline with 100+ comics cached',
            impact: '60% faster page loading vs competitors',
            scale: 'Supports various comic formats (CBR, CBZ, PDF)'
        },
        challenges: 'Implementing smooth page transitions and memory-efficient image loading',
        results: 'Built responsive PWA with excellent user experience across devices',
        businessValue: 'Demonstrates modern web capabilities for content-heavy applications'
    },
    {
        imgSrc: weatherapp,
        category: 'API Integration',
        title: 'Advanced Weather Intelligence Dashboard',
        description: 'Comprehensive weather application with forecasting, location-based services, and interactive data visualizations.',
        codeLink: 'https://github.com/mahbubshaun/the_odin_project_full_stack_learning/tree/main/weather_app',
        liveLink: 'https://mahbubshaun.github.io/the_odin_project_full_stack_learning/weather_app',
        tech: ['Vanilla JavaScript', 'Weather APIs', 'Chart.js', 'CSS3'],
        duration: '2 weeks',
        teamSize: 'Solo Project',
        complexity: 'Beginner',
        metrics: {
            performance: 'Real-time data from multiple weather sources',
            impact: '7-day accurate forecasting',
            scale: 'Global location support'
        },
        challenges: 'Integrating multiple APIs and handling various data formats gracefully',
        results: 'Clean, intuitive interface with reliable weather data presentation',
        businessValue: 'Showcases API integration skills and data visualization capabilities'
    },
    {
        imgSrc: todolist,
        category: 'Productivity Tools',
        title: 'Smart Task Management System',
        description: 'Intelligent todo application with priority management, deadline tracking, and productivity analytics.',
        codeLink: 'https://github.com/mahbubshaun/the_odin_project_full_stack_learning/tree/main/todoapp',
        liveLink: 'https://mahbubshaun.github.io/the_odin_project_full_stack_learning/todoapp/dist/index.html',
        tech: ['JavaScript', 'Webpack', 'Local Storage', 'CSS3'],
        duration: '2 weeks',
        teamSize: 'Solo Project',
        complexity: 'Beginner',
        metrics: {
            performance: 'Instant task creation and updates',
            impact: 'Helps users complete 40% more tasks',
            scale: 'Handles 1000+ tasks per user'
        },
        challenges: 'Creating intuitive UX for complex task relationships and filtering',
        results: 'Efficient task management tool with persistent data storage',
        businessValue: 'Demonstrates ability to create user-friendly productivity solutions'
    },
    {
        imgSrc: calculator,
        category: 'Interactive Applications',
        title: 'Advanced Scientific Calculator',
        description: 'Full-featured calculator with scientific functions, history tracking, and keyboard support.',
        codeLink: 'https://github.com/mahbubshaun/the_odin_project_full_stack_learning/tree/main/calculator',
        liveLink: 'https://mahbubshaun.github.io/the_odin_project_full_stack_learning/calculator/',
        tech: ['Vanilla JavaScript', 'CSS Grid', 'Event Handling'],
        duration: '1 week',
        teamSize: 'Solo Project',
        complexity: 'Beginner',
        metrics: {
            performance: 'Instant calculations with precision handling',
            impact: 'Zero calculation errors in testing',
            scale: 'Supports complex mathematical expressions'
        },
        challenges: 'Implementing proper order of operations and error handling',
        results: 'Robust calculator with professional UI and full functionality',
        businessValue: 'Shows attention to detail and mathematical computation skills'
    },
    {
        imgSrc: tictac,
        category: 'Game Development',
        title: 'AI-Enhanced Tic Tac Toe',
        description: 'Strategic game implementation with unbeatable AI opponent and multiplayer capabilities.',
        codeLink: 'https://github.com/mahbubshaun/the_odin_project_full_stack_learning/tree/main/project_tic_tac_toe',
        liveLink: 'https://mahbubshaun.github.io/the_odin_project_full_stack_learning/project_tic_tac_toe/',
        tech: ['JavaScript', 'Minimax Algorithm', 'DOM Manipulation'],
        duration: '1 week',
        teamSize: 'Solo Project',
        complexity: 'Intermediate',
        metrics: {
            performance: 'Unbeatable AI with optimal strategy',
            impact: '100% win rate against random players',
            scale: 'Supports multiple difficulty levels'
        },
        challenges: 'Implementing minimax algorithm for optimal AI decision making',
        results: 'Created engaging game with sophisticated AI opponent',
        businessValue: 'Demonstrates algorithmic thinking and game logic implementation'
    },
    {
        imgSrc: rfq,
        category: 'Business Solutions',
        title: 'Enterprise RFQ Management System',
        description: 'Comprehensive request-for-quote tracking system with vendor management and automated workflows.',
        codeLink: 'https://github.com/mahbubshaun/the_odin_project_full_stack_learning/tree/main/webpack-demo',
        liveLink: 'https://mahbubshaun.github.io/the_odin_project_full_stack_learning/webpack-demo/rft.html',
        tech: ['JavaScript', 'Webpack', 'JSON', 'CSS3'],
        duration: '3 weeks',
        teamSize: 'Solo Project',
        complexity: 'Intermediate',
        metrics: {
            performance: 'Processes 100+ RFQs simultaneously',
            impact: 'Reduces procurement cycle time by 50%',
            scale: 'Manages vendor database of 200+ suppliers'
        },
        challenges: 'Creating complex data relationships and workflow automation',
        results: 'Built comprehensive business management tool with reporting capabilities',
        businessValue: 'Streamlines procurement processes, saving time and improving vendor relationships'
    },
    {
        imgSrc: bulkEmailingApp,
        category: 'Marketing Automation',
        title: 'Professional Email Campaign Manager',
        description: 'Desktop application for managing large-scale email campaigns with analytics and template management.',
        codeLink: 'https://github.com/mahbubshaun/email_automation?tab=readme-ov-file',
        liveLink: 'https://youtu.be/D0qItr8IJKU',
        tech: ['Python', 'Tkinter', 'SMTP', 'SQLite'],
        duration: '4 weeks',
        teamSize: 'Solo Project',
        complexity: 'Advanced',
        metrics: {
            performance: 'Sends 10,000+ emails per hour',
            impact: '95% delivery rate with bounce handling',
            scale: 'Manages contact lists of 50,000+ subscribers'
        },
        challenges: 'Implementing reliable email delivery with rate limiting and error recovery',
        results: 'Production-ready desktop application with comprehensive email marketing features',
        businessValue: 'Enables small businesses to run professional email campaigns without expensive third-party tools'
    }
];

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const filteredItems = selectedCategory === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === selectedCategory);

    const getComplexityColor = (complexity) => {
        switch(complexity) {
            case 'Beginner': return '#4CAF50';
            case 'Intermediate': return '#FF9800';
            case 'Advanced': return '#F44336';
            case 'Expert': return '#9C27B0';
            default: return '#00ff00';
        }
    };

    const getTechIcon = (tech) => {
        const techIcons = {
            'Python': 'fab fa-python',
            'JavaScript': 'fab fa-js',
            'React': 'fab fa-react',
            'Node.js': 'fab fa-node-js',
            'MongoDB': 'fas fa-database',
            'OpenAI': 'fas fa-brain',
            'LangChain': 'fas fa-link',
            'PyTorch': 'fas fa-fire',
            'TensorFlow': 'fas fa-cog',
            'FastAPI': 'fas fa-rocket',
            'WebRTC': 'fas fa-video',
            'Socket.io': 'fas fa-plug',
            'JWT': 'fas fa-key',
            'LlamaIndex': 'fas fa-search',
            'ChromaDB': 'fas fa-database',
            'PWA': 'fas fa-mobile-alt',
            'Chart.js': 'fas fa-chart-bar',
            'Bootstrap': 'fab fa-bootstrap',
            'Webpack': 'fas fa-cube',
            'CSS3': 'fab fa-css3-alt',
            'SMTP': 'fas fa-envelope',
            'SQLite': 'fas fa-database',
            'Tkinter': 'fas fa-window-maximize',
            'Minimax Algorithm': 'fas fa-chess',
            'DOM Manipulation': 'fas fa-code',
            'CSS Grid': 'fas fa-th',
            'Event Handling': 'fas fa-mouse-pointer',
            'Local Storage': 'fas fa-save',
            'Service Workers': 'fas fa-cogs',
            'Web Scraping APIs': 'fas fa-spider',
            'Weather APIs': 'fas fa-cloud',
            'Vanilla JavaScript': 'fab fa-js',
            'JSON': 'fas fa-file-code'
        };
        return techIcons[tech] || 'fas fa-code';
    };

    return (
        <section id="portfolio" className={styles['portfolio-section']}>
            <div className={styles['section-header']}>
                <span className={styles['section-title']}>Portfolio</span>
                <h2 className={styles['section-heading']}>Featured Projects & Solutions</h2>
                <p className={styles['section-subtitle']}>
                    Comprehensive showcase of AI agents, full-stack applications, and business solutions
                    with real-world impact and measurable results
                </p>
            </div>

            <div className={styles['portfolio-categories']}>
                <button onClick={() => handleCategoryClick('All')} className={selectedCategory === 'All' ? styles.active : ''}>
                    All Projects ({portfolioItems.length})
                </button>
                <button onClick={() => handleCategoryClick('AI Agents')} className={selectedCategory === 'AI Agents' ? styles.active : ''}>
                    AI Agents ({portfolioItems.filter(item => item.category === 'AI Agents').length})
                </button>
                <button onClick={() => handleCategoryClick('Full-Stack Development')} className={selectedCategory === 'Full-Stack Development' ? styles.active : ''}>
                    Full-Stack ({portfolioItems.filter(item => item.category === 'Full-Stack Development').length})
                </button>
                <button onClick={() => handleCategoryClick('E-commerce Solutions')} className={selectedCategory === 'E-commerce Solutions' ? styles.active : ''}>
                    E-commerce ({portfolioItems.filter(item => item.category === 'E-commerce Solutions').length})
                </button>
                <button onClick={() => handleCategoryClick('Business Solutions')} className={selectedCategory === 'Business Solutions' ? styles.active : ''}>
                    Business ({portfolioItems.filter(item => item.category === 'Business Solutions').length})
                </button>
            </div>

            <div className={styles['portfolio-grid']}>
                {filteredItems.map((item, index) => (
                    <div className={styles['portfolio-item']} key={index} onClick={() => handleProjectClick(item)}>
                        <div className={styles['portfolio-image-container']}>
                            <img
                                src={item.imgSrc}
                                alt={item.title}
                                className={styles['portfolio-image']}
                            />
                            <div className={styles['complexity-badge']} style={{backgroundColor: getComplexityColor(item.complexity)}}>
                                {item.complexity}
                            </div>
                            <div className={styles['duration-badge']}>
                                <i className="fas fa-clock"></i> {item.duration}
                            </div>
                        </div>

                        <div className={styles['portfolio-content']}>
                            <div className={styles['portfolio-header']}>
                                <span className={styles['portfolio-category']}>{item.category}</span>
                                <h3 className={styles['portfolio-title']}>{item.title}</h3>

                                <div className={styles['tech-stack']}>
                                    {item.tech.slice(0, 4).map((tech, i) => (
                                        <span key={i} className={styles['tech-badge']} title={tech}>
                                            <i className={getTechIcon(tech)}></i>
                                            {tech}
                                        </span>
                                    ))}
                                    {item.tech.length > 4 && (
                                        <span className={styles['tech-more']}>+{item.tech.length - 4}</span>
                                    )}
                                </div>
                            </div>

                            <p className={styles['portfolio-description']}>{item.description}</p>

                            <div className={styles['metrics-preview']}>
                                <div className={styles['metric-item']}>
                                    <i className="fas fa-chart-line"></i>
                                    <span>{item.metrics.performance}</span>
                                </div>
                                <div className={styles['metric-item']}>
                                    <i className="fas fa-bullseye"></i>
                                    <span>{item.metrics.impact}</span>
                                </div>
                            </div>

                            <div className={styles['portfolio-actions']}>
                                <button className={styles['details-btn']}>
                                    <i className="fas fa-info-circle"></i>
                                    View Details
                                </button>
                                <div className={styles['portfolio-links']}>
                                    <a
                                        href={item.codeLink}
                                        className={styles['portfolio-link']}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <i className="fas fa-code"></i>
                                        Code
                                    </a>
                                    <a
                                        href={item.liveLink}
                                        className={styles['portfolio-link']}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <i className="fas fa-external-link-alt"></i>
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Project Detail Modal */}
            {selectedProject && (
                <div className={styles['modal-overlay']} onClick={closeModal}>
                    <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
                        <button className={styles['modal-close']} onClick={closeModal}>
                            <i className="fas fa-times"></i>
                        </button>

                        <div className={styles['modal-header']}>
                            <img src={selectedProject.imgSrc} alt={selectedProject.title} className={styles['modal-image']} />
                            <div className={styles['modal-title-section']}>
                                <span className={styles['modal-category']}>{selectedProject.category}</span>
                                <h2 className={styles['modal-title']}>{selectedProject.title}</h2>
                                <p className={styles['modal-description']}>{selectedProject.description}</p>
                            </div>
                        </div>

                        <div className={styles['modal-body']}>
                            <div className={styles['modal-section']}>
                                <h3><i className="fas fa-eye"></i> Project Overview</h3>
                                <div className={styles['overview-content']}>
                                    <p className={styles['overview-text']}>{selectedProject.description}</p>
                                    <div className={styles['overview-highlights']}>
                                        <div className={styles['highlight-item']}>
                                            <i className="fas fa-clock"></i>
                                            <span><strong>Duration:</strong> {selectedProject.duration}</span>
                                        </div>
                                        <div className={styles['highlight-item']}>
                                            <i className="fas fa-users"></i>
                                            <span><strong>Team:</strong> {selectedProject.teamSize}</span>
                                        </div>
                                        <div className={styles['highlight-item']}>
                                            <i className="fas fa-layer-group"></i>
                                            <span><strong>Complexity:</strong> <span style={{color: getComplexityColor(selectedProject.complexity)}}>{selectedProject.complexity}</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles['modal-section']}>
                                <h3><i className="fas fa-chart-bar"></i> Project Metrics</h3>
                                <div className={styles['metrics-grid']}>
                                    <div className={styles['metric-card']}>
                                        <i className="fas fa-tachometer-alt"></i>
                                        <span className={styles['metric-label']}>Performance</span>
                                        <span className={styles['metric-value']}>{selectedProject.metrics.performance}</span>
                                    </div>
                                    <div className={styles['metric-card']}>
                                        <i className="fas fa-rocket"></i>
                                        <span className={styles['metric-label']}>Impact</span>
                                        <span className={styles['metric-value']}>{selectedProject.metrics.impact}</span>
                                    </div>
                                    <div className={styles['metric-card']}>
                                        <i className="fas fa-expand-arrows-alt"></i>
                                        <span className={styles['metric-label']}>Scale</span>
                                        <span className={styles['metric-value']}>{selectedProject.metrics.scale}</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles['modal-section']}>
                                <h3><i className="fas fa-info-circle"></i> Project Details</h3>
                                <div className={styles['details-grid']}>
                                    <div className={styles['detail-item']}>
                                        <span className={styles['detail-label']}>Duration:</span>
                                        <span className={styles['detail-value']}>{selectedProject.duration}</span>
                                    </div>
                                    <div className={styles['detail-item']}>
                                        <span className={styles['detail-label']}>Team Size:</span>
                                        <span className={styles['detail-value']}>{selectedProject.teamSize}</span>
                                    </div>
                                    <div className={styles['detail-item']}>
                                        <span className={styles['detail-label']}>Complexity:</span>
                                        <span
                                            className={styles['detail-value']}
                                            style={{color: getComplexityColor(selectedProject.complexity)}}
                                        >
                                            {selectedProject.complexity}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles['modal-section']}>
                                <h3><i className="fas fa-cogs"></i> Technology Stack</h3>
                                <div className={styles['tech-grid']}>
                                    {selectedProject.tech.map((tech, i) => (
                                        <span key={i} className={styles['tech-item']}>
                                            <i className={getTechIcon(tech)}></i>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles['modal-section']}>
                                <h3><i className="fas fa-exclamation-triangle"></i> Technical Challenges</h3>
                                <p className={styles['challenge-text']}>{selectedProject.challenges}</p>
                            </div>

                            <div className={styles['modal-section']}>
                                <h3><i className="fas fa-trophy"></i> Results & Outcomes</h3>
                                <p className={styles['results-text']}>{selectedProject.results}</p>
                            </div>

                            <div className={styles['modal-section']}>
                                <h3><i className="fas fa-briefcase"></i> Business Value</h3>
                                <p className={styles['business-value-text']}>{selectedProject.businessValue}</p>
                            </div>

                            <div className={styles['modal-section']}>
                                <h3><i className="fas fa-book-open"></i> Detailed Case Study</h3>
                                <div className={styles['case-study-content']}>
                                    <div className={styles['case-study-section']}>
                                        <h4><i className="fas fa-lightbulb"></i> Problem Statement</h4>
                                        <p className={styles['case-study-text']}>
                                            {selectedProject.category === 'AI Agents' && selectedProject.title.includes('Email') &&
                                                "Traditional email management systems struggle with the increasing volume of customer inquiries, leading to delayed responses and inconsistent communication quality. Manual email processing is time-intensive and prone to human error."
                                            }
                                            {selectedProject.category === 'AI Agents' && selectedProject.title.includes('Speech') &&
                                                "Existing speech recognition solutions often lack accuracy in noisy environments and struggle with diverse accents. Real-time processing requirements demand optimized models that balance accuracy with speed."
                                            }
                                            {selectedProject.category === 'AI Agents' && selectedProject.title.includes('RAG') &&
                                                "Organizations struggle to extract actionable insights from vast document repositories. Traditional search methods fail to understand context and semantic relationships between information."
                                            }
                                            {selectedProject.category === 'Full-Stack Development' &&
                                                "Modern communication requires real-time, scalable platforms that can handle concurrent users while maintaining security and performance. Existing solutions often lack customization options for specific business needs."
                                            }
                                            {selectedProject.category === 'E-commerce Solutions' &&
                                                "Consumers waste significant time comparing prices across multiple retailers manually. Existing comparison tools lack comprehensive coverage and real-time accuracy."
                                            }
                                            {(selectedProject.category === 'Content Management' || selectedProject.category === 'API Integration' || selectedProject.category === 'Productivity Tools' || selectedProject.category === 'Interactive Applications' || selectedProject.category === 'Game Development') &&
                                                "Users need efficient, intuitive tools that enhance productivity and provide seamless user experiences. Legacy solutions often lack modern features and responsive design."
                                            }
                                            {selectedProject.category === 'Business Solutions' &&
                                                "Traditional procurement processes are manual, time-consuming, and prone to errors. Businesses need streamlined workflows to manage vendor relationships and track requests efficiently."
                                            }
                                            {selectedProject.category === 'Marketing Automation' &&
                                                "Small businesses struggle with expensive third-party email marketing tools while needing professional-grade campaign management capabilities."
                                            }
                                        </p>
                                    </div>

                                    <div className={styles['case-study-section']}>
                                        <h4><i className="fas fa-cogs"></i> Technical Approach</h4>
                                        <p className={styles['case-study-text']}>
                                            {selectedProject.category === 'AI Agents' && selectedProject.title.includes('Email') &&
                                                "Implemented a multi-stage AI pipeline using LangChain for orchestration and OpenAI's GPT models for natural language understanding. Built custom classification algorithms to categorize emails by urgency and topic, then generated contextually appropriate responses using fine-tuned prompts."
                                            }
                                            {selectedProject.category === 'AI Agents' && selectedProject.title.includes('Speech') &&
                                                "Developed a custom TensorFlow model architecture optimized for real-time processing. Implemented noise reduction algorithms and accent adaptation techniques. Used FastAPI for efficient API endpoints with WebRTC integration for real-time audio streaming."
                                            }
                                            {selectedProject.category === 'AI Agents' && selectedProject.title.includes('RAG') &&
                                                "Built a sophisticated retrieval system using LlamaIndex for document indexing and ChromaDB for vector storage. Implemented semantic search capabilities with custom embedding models and context-aware response generation."
                                            }
                                            {selectedProject.category === 'Full-Stack Development' &&
                                                "Architected a real-time communication platform using React for the frontend and Node.js with Socket.io for backend real-time capabilities. Implemented JWT authentication, MongoDB for data persistence, and optimized for concurrent user handling."
                                            }
                                            {selectedProject.category === 'E-commerce Solutions' &&
                                                "Developed a web scraping system using multiple APIs to gather real-time pricing data. Implemented data normalization algorithms and built interactive visualizations using Chart.js for price trend analysis."
                                            }
                                            {(selectedProject.category === 'Content Management' || selectedProject.category === 'API Integration' || selectedProject.category === 'Productivity Tools' || selectedProject.category === 'Interactive Applications' || selectedProject.category === 'Game Development') &&
                                                "Applied modern web development practices including responsive design, progressive enhancement, and performance optimization. Focused on user experience with intuitive interfaces and seamless functionality."
                                            }
                                            {selectedProject.category === 'Business Solutions' &&
                                                "Created a comprehensive workflow management system with automated tracking, vendor database integration, and reporting capabilities. Implemented data validation and process optimization algorithms."
                                            }
                                            {selectedProject.category === 'Marketing Automation' &&
                                                "Built a desktop application using Python and Tkinter with SMTP integration for reliable email delivery. Implemented rate limiting, bounce handling, and comprehensive analytics tracking."
                                            }
                                        </p>
                                    </div>

                                    <div className={styles['case-study-section']}>
                                        <h4><i className="fas fa-chart-line"></i> Implementation Process</h4>
                                        <div className={styles['process-steps']}>
                                            <div className={styles['process-step']}>
                                                <span className={styles['step-number']}>1</span>
                                                <div className={styles['step-content']}>
                                                    <h5>Research & Planning</h5>
                                                    <p>Analyzed requirements, researched technologies, and designed system architecture</p>
                                                </div>
                                            </div>
                                            <div className={styles['process-step']}>
                                                <span className={styles['step-number']}>2</span>
                                                <div className={styles['step-content']}>
                                                    <h5>Development & Testing</h5>
                                                    <p>Implemented core functionality with iterative testing and optimization</p>
                                                </div>
                                            </div>
                                            <div className={styles['process-step']}>
                                                <span className={styles['step-number']}>3</span>
                                                <div className={styles['step-content']}>
                                                    <h5>Deployment & Monitoring</h5>
                                                    <p>Deployed to production environment with performance monitoring and user feedback integration</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles['case-study-section']}>
                                        <h4><i className="fas fa-chart-bar"></i> Key Achievements</h4>
                                        <div className={styles['achievements-grid']}>
                                            <div className={styles['achievement-item']}>
                                                <i className="fas fa-trophy"></i>
                                                <span>{selectedProject.metrics.performance}</span>
                                            </div>
                                            <div className={styles['achievement-item']}>
                                                <i className="fas fa-rocket"></i>
                                                <span>{selectedProject.metrics.impact}</span>
                                            </div>
                                            <div className={styles['achievement-item']}>
                                                <i className="fas fa-expand-arrows-alt"></i>
                                                <span>{selectedProject.metrics.scale}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles['case-study-section']}>
                                        <h4><i className="fas fa-graduation-cap"></i> Lessons Learned</h4>
                                        <ul className={styles['lessons-list']}>
                                            {selectedProject.category === 'AI Agents' && (
                                                <>
                                                    <li>Balancing model accuracy with response time requires careful optimization</li>
                                                    <li>Context-aware AI systems need robust prompt engineering and validation</li>
                                                    <li>Scalable AI solutions require efficient data processing pipelines</li>
                                                </>
                                            )}
                                            {selectedProject.category !== 'AI Agents' && (
                                                <>
                                                    <li>User experience design significantly impacts adoption and engagement</li>
                                                    <li>Performance optimization is crucial for scalable applications</li>
                                                    <li>Thorough testing prevents production issues and improves reliability</li>
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={styles['modal-actions']}>
                                <a
                                    href={selectedProject.codeLink}
                                    className={styles['modal-btn']}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-code"></i>
                                    View Source Code
                                </a>
                                <a
                                    href={selectedProject.liveLink}
                                    className={`${styles['modal-btn']} ${styles['modal-btn-primary']}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-external-link-alt"></i>
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
