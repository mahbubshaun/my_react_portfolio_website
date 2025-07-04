import React from 'react';
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
