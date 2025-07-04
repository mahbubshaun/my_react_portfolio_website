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

   useEffect(() => {
    const keepAlive = () => {
      fetch('https://your-backend-url.onrender.com/keep-alive') // Replace with your actual backend URL
        .then(res => {
          if (res.ok) {
            console.log('Backend kept alive.');
          } else {
            console.error('Failed to keep backend alive.');
          }
        })
        .catch(err => {
          console.error('Error keeping backend alive:', err);
        });
    };

    const intervalId = setInterval(keepAlive, 14 * 60 * 1000); // Every 14 minutes

    return () => clearInterval(intervalId);
  }, []);

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
    </>
  );
}

export default App;
