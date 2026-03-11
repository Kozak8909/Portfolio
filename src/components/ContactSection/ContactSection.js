import React from 'react';
import styles from './contact_section.module.scss';
import { ReactComponent as LetterIcon } from '../../img/svg/Letter-Icon.svg';
import { useNavigate } from 'react-router';

const ContactSection = ({ title, text }) => {
    const navigate = useNavigate();
    return (
        <section className={styles.contact_section}>
            <div className={styles.contact_section__container}>
                <h1 className={`section-title ${styles.contact_section__title}`}>{title}</h1>
                <p className={styles.contact_section__text}>
                    {text}
                </p>
                <button className="button button__filled" onClick={() => navigate("/contact")}>
                    <div className={styles.contact_section__button_content}>
                        <LetterIcon fill="currentColor" />
                        Get In Touch
                    </div>
                </button>
            </div>
        </section>
    );
};

export default ContactSection;
