import React, { useState } from 'react';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dk0mq7j', 'template_pa7008i', e.target, 'vh75cQm8rlEtYUyuK')
            .then(() => {
                setModalOpen(true);
                e.target.reset();
            }, () => {
                alert('Failed to send email. Please try again later.');
            });
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <section id="contact" className={styles['contact-section']}>
            <div className={styles['section-header']}>
                <span className={styles['section-title']}>Contact</span>
                <h2 className={styles['section-heading']}>Get In Touch</h2>
            </div>

            <div className={styles['contact-container']}>
                <div className={styles['contact-info']}>
                    <div className={styles['info-item']}>
                        <h3 className={styles['info-title']}>
                            <i className="fas fa-map-marker-alt"></i>
                            Location
                        </h3>
                        <p className={styles['info-content']}>Savar, Dhaka, Bangladesh</p>
                    </div>

                    <div className={styles['info-item']}>
                        <h3 className={styles['info-title']}>
                            <i className="fas fa-envelope"></i>
                            Email Me
                        </h3>
                        <p className={styles['info-content']}>mdmahbubshaun@gmail.com</p>
                    </div>

                    <div className={styles['info-item']}>
                        <h3 className={styles['info-title']}>
                            <i className="fas fa-phone-alt"></i>
                            WhatsApp
                        </h3>
                        <p className={styles['info-content']}>+8801782599354</p>
                    </div>

                    <div className={styles['info-item']}>
                        <h3 className={styles['info-title']}>
                            <i className="fas fa-share-alt"></i>
                            Social Media
                        </h3>
                        <div className={styles['social-links']}>
                            <a href="https://github.com/mahbubshaun" className={styles['social-link']}>
                                <i className="fab fa-github"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mdmahbubshaun/"
                                className={styles['social-link']}
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles['contact-form']}>
                    <form id="contactForm" onSubmit={sendEmail}>
                        <div className={styles['form-group']}>
                            <label className={styles['form-label']}>Your Name</label>
                            <input
                                type="text"
                                name="name"
                                className={styles['form-control']}
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div className={styles['form-group']}>
                            <label className={styles['form-label']}>Your Email</label>
                            <input
                                type="email"
                                name="email"
                                className={styles['form-control']}
                                placeholder="john@example.com"
                                required
                            />
                        </div>

                        <div className={styles['form-group']}>
                            <label className={styles['form-label']}>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                className={styles['form-control']}
                                placeholder="Project Inquiry"
                                required
                            />
                        </div>

                        <div className={styles['form-group']}>
                            <label className={styles['form-label']}>Your Message</label>
                            <textarea
                                className={styles['form-control']}
                                name="message"
                                placeholder="Write your message here..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className={styles['submit-btn']}>
                            <i className="fas fa-paper-plane"></i>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {modalOpen && (
                <div id="successModal" className={styles.modal} onClick={closeModal}>
                    <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
                        <span className={styles['close-btn']} onClick={closeModal}>×</span>
                        <h2>Email Sent Successfully!</h2>
                        <p>Thank you for reaching out. I will get back to you soon.</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
