import React from 'react';
import styles from './Testimonials.module.css';
import avatar from '../../assets/images/avater.svg';

const testimonials = [
    {
        text: "I've used Shaun before but this job WOW! I'd Kiss this man if he was front of me. The job he did has blown my expectations away. Great Job my friend can't wait to come up with something else for you to build for me soon. God Bless.",
        author: 'Refionce',
        position: 'Client @ Fiverr'
    },
    {
        text: 'He was outstanding. Did the project fast and perfectly. would recommend him to anyone, can trust him with anything computer related.',
        author: 'Fatmirderv',
        position: 'Client @ Fiverr'
    },
    {
        text: "Super happy with Shaun. He delivered our project fast and it was spot-on. Great at listening and adding cool improvements I hadn't even thought of. Communication was easy and the end result was awesome. Highly recommend for top quality software work.",
        author: 'Daviddavies422',
        position: 'Client @ Fiverr'
    }
];

const stats = [
    { number: '200+', label: 'Projects Completed' },
    { number: '90+', label: 'Happy Clients' },
    { number: '4+', label: 'Years Experience' }
];

const Testimonials = () => {
    return (
        <section id="clients" className={styles['clients-section']}>
            <div className={styles.testimonials}>
                <div className={styles['section-header']}>
                    <span className={styles['section-title']}>Testimonials</span>
                    <h2 className={styles['section-heading']}>What Clients Say</h2>
                </div>

                <div className={styles['testimonial-grid']}>
                    {testimonials.map((testimonial, index) => (
                        <div className={styles['testimonial-card']} key={index}>
                            <i className={`fas fa-quote-right ${styles['quote-icon']}`}></i>
                            <p className={styles['testimonial-text']}>{testimonial.text}</p>
                            <div className={styles['testimonial-author']}>
                                <img
                                    src={avatar}
                                    alt="Client headshot"
                                    className={styles['author-avatar']}
                                />
                                <div className={styles['author-info']}>
                                    <h4 className={styles['author-name']}>{testimonial.author}</h4>
                                    <p className={styles['author-position']}>{testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles['stats-container']}>
                {stats.map((stat, index) => (
                    <div className={styles['stat-card']} key={index}>
                        <div className={styles['stat-number']}>{stat.number}</div>
                        <div className={styles['stat-label']}>{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
