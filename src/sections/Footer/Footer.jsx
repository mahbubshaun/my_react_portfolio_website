import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles['copyright-text']}>
                    © Copyright 2025 Mahbub Shaun - All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
