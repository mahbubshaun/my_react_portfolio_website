import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles['nav-content']}>
        <div className={styles.logo}>
          <span className={styles['logo-text']}>Shaun</span>
        </div>
        <div className={`${styles['nav-links']} ${isOpen ? styles.responsive : ''}`} id="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#resume">Resume</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="javascript:void(0);" className={styles.icon} onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
