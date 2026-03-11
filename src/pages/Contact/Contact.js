import React, { useState } from 'react';
import { useFormik } from 'formik';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './contact.module.scss';
import { ReactComponent as MessageIcon } from '../../img/svg/Message-Icon.svg';
import { ReactComponent as GitHubIcon } from '../../img/svg/GitHub_Invertocat_Black.svg';
import { ReactComponent as ArrowIcon } from '../../img/svg/Arrow-Right.svg';
import { ReactComponent as FileIcon } from '../../img/svg/File-Icon.svg';
import { ReactComponent as MailIcon } from '../../img/svg/Mail-Icon.svg';
import { ReactComponent as LocationIcon } from '../../img/svg/Location-Icon.svg';
import LinkedInicon from '../../img/LI-In-Bug.png';

const socialLinks = [
    {
        id: 'github',
        title: 'GitHub',
        subtitle: 'Check out my repos',
        url: process.env.REACT_APP_GITHUB_URL,
        iconClass: 'button__social-icon--github',
        icon: <GitHubIcon fill="currentColor" width={24} height={24} />
    },
    {
        id: 'linkedin',
        title: 'LinkedIn',
        subtitle: 'Connect professionally',
        url: process.env.REACT_APP_LINKEDIN_URL,
        iconClass: 'button__social-icon--linkedin',
        icon: <img src={LinkedInicon} alt="LinkedIn" />
    }
];

const Contact = () => {
    const [statusMessage, setStatusMessage] = useState(null);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        onSubmit: async (values, { resetForm }) => {
            setStatusMessage(null);
            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        access_key: process.env.REACT_APP_FORM_ACCESS_KEY,
                        ...values,
                    }),
                });

                if (response.ok) {
                    resetForm();
                    setStatusMessage({ type: 'success', text: 'Message sent successfully!' });
                } else {
                    setStatusMessage({ type: 'error', text: 'Failed to send message. Please try again later.' });
                }
            } catch (error) {
                setStatusMessage({ type: 'error', text: 'An error occurred. Please try again.' });
            }
        },
    });

    return (
        <>
            <Header isHome={false} />
            <main>
                <div className="page-container">
                    <section className={styles.hero}>
                        <h1 className={`section-title ${styles.hero__title}`}>Let's Build Something <span className='highlight'>Together</span>.</h1>
                        <p className={styles.hero__subtitle}>Have a project in mind or just want to say hi? I'm always open to discussing new ideas, opportunities, and collaborations.</p>
                    </section>
                    <section className={styles.contact}>
                        <form className={styles.form} onSubmit={formik.handleSubmit}>
                            <div className={styles.form__personal}>
                                <div className={styles.form__item}>
                                    <label htmlFor="name">Name</label>
                                    <input className={styles.form__input} type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} placeholder="John Doe" required />
                                </div>
                                <div className={styles.form__item}>
                                    <label htmlFor="email">Email</label>
                                    <input className={styles.form__input} type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="john@example.com" required />
                                </div>
                            </div>
                            <div className={styles.form__item}>
                                <label htmlFor="subject">Subject</label>
                                <input className={styles.form__input} type="text" id="subject" name="subject" onChange={formik.handleChange} value={formik.values.subject} placeholder="Project Inquiry" required />
                            </div>
                            <div className={styles.form__item}>
                                <label htmlFor="message">Message</label>
                                <textarea className={styles.form__textarea} id="message" name="message" onChange={formik.handleChange} value={formik.values.message} placeholder="Your message to me..." required></textarea>
                            </div>
                            <button type="submit" className="button button__filled" disabled={formik.isSubmitting}>
                                {formik.isSubmitting ? 'Sending...' : <>Send Message <MessageIcon fill="currentColor" /></>}
                            </button>
                            {statusMessage && (
                                <div className={`${styles.status_message} ${styles[`status_message__${statusMessage.type}`]}`}>
                                    {statusMessage.text}
                                </div>
                            )}
                        </form>
                        <div className={styles.details}>
                            <address className={styles.details__info}>
                                <div className={styles.details__info_header}>
                                    <FileIcon fill="#13EC5B" />
                                    <h2 className={styles.details__title}>Contact details</h2>
                                </div>
                                <dl className={styles.details__list}>
                                    <div className={styles.details__list_item}>
                                        <MailIcon fill="#6B7280" />
                                        <div>
                                            <dt>Email</dt>
                                            <dd><a href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL}`}>{process.env.REACT_APP_CONTACT_EMAIL}</a></dd>
                                        </div>
                                    </div>
                                    <div className={styles.details__list_item}>
                                        <LocationIcon fill="#6B7280" />
                                        <div>
                                            <dt>Location</dt>
                                            <dd>Poznań, Poland (Available for remote work)</dd>
                                        </div>
                                    </div>
                                </dl>
                            </address>
                            <div className={styles.details__social}>
                                <h2 className={styles.details__title}>Connect</h2>
                                {socialLinks.map((link) => (
                                    <a key={link.id} href={link.url} target="_blank" rel="noreferrer" className="button button__social">
                                        <div className={`button__social-icon ${link.iconClass}`}>
                                            {link.icon}
                                        </div>
                                        <div className="button__social-content">
                                            <span className="button__social-title">{link.title}</span>
                                            <span className="button__social-subtitle">{link.subtitle}</span>
                                        </div>
                                        <ArrowIcon fill="currentColor" className="button__social-arrow" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main >
            <Footer />
        </>
    );
};

export default Contact;
