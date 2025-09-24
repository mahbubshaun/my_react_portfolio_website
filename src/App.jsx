import React from 'react';
import { useEffect } from 'react'
import styles from './Portfolio.module.css';
import './index.css';

//- Sections
import Hero from './sections/Hero/Hero';
import Features from './sections/Features/Features';
import Portfolio from './sections/Portfolio/Portfolio';
import Resume from './sections/Resume/Resume';
import Testimonials from './sections/Testimonials/Testimonials';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import ChatWidget from './sections/ChatWidget/ChatWidget';

//- Components
import Navbar from './components/Navbar/Navbar';

function App() {
  const [showFloatingCTA, setShowFloatingCTA] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling past hero section
      setShowFloatingCTA(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className={styles['matrix-bg']}></div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Portfolio />
        <Resume />
        <Testimonials />
        <Contact />
        <ChatWidget />
      </main>
      <Footer />

      {/* Floating CTA Button */}
      {showFloatingCTA && (
        <button
          className={styles['floating-cta']}
          onClick={scrollToContact}
          aria-label="Get Free AI Assessment"
        >
          <i className="fas fa-rocket"></i>
          <span>Get Free AI Assessment</span>
        </button>
      )}
    </>
  );
}

export default App;
