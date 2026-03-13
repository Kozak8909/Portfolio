import React from 'react';
import styles from './footer.module.scss';
import { ReactComponent as FooterIcon } from '../../img/svg/Header-Icon.svg';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer__container}>
                    <FooterIcon fill="#13EC5B" className={styles.footer__icon} />
                    <h1 className={styles.footer__title}><a href="/home">Portfolio</a></h1>
                </div>
                <nav className={styles.footer__nav}>
                    <ul className={styles.footer__list}>
                        <li><a href={process.env.REACT_APP_GITHUB_URL}>GitHub</a></li>
                        <li><a href={process.env.REACT_APP_LINKEDIN_URL}>LinkedIn</a></li>
                    </ul>
                </nav>
                <p className={styles.footer__text}>© {new Date().getFullYear()} Portfolio. Built with React and SCSS.</p>
            </footer>
        </>
    );
};

export default Footer;