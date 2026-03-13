import React, { useState } from 'react';
import { NavLink } from 'react-router';
import styles from './header.module.scss';
import { ReactComponent as HeaderIcon } from '../../img/svg/Header-Icon.svg';
import { ReactComponent as ArrowRightIcon } from '../../img/svg/Arrow-Right.svg';
import { ReactComponent as HeaderIconMenu } from '../../img/svg/HeaderIconMenu.svg';
import { ReactComponent as HeaderIconClose } from '../../img/svg/HeaderIconClose.svg';

const Header = ({ isHome }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const onClickButton = () => {
        window.open('https://drive.google.com/file/d/1E7W4Gu9nXeaRv5XlvnLUXFZc5761Ithn/view?usp=sharing');
    }

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__container}>
                    <HeaderIcon fill="#13EC5B" className={styles.header__icon} />
                    <h1 className={styles.header__title}><NavLink to="/home">Portfolio</NavLink></h1>
                </div>
                <button className={styles.header__toggle} onClick={toggleMenu} aria-label="Toggle menu">
                    {isMobileMenuOpen ? <HeaderIconClose /> : <HeaderIconMenu />}
                </button>
                <nav className={`${styles.header__nav} ${isMobileMenuOpen ? styles['header__nav--open'] : ''}`}>
                    <ul className={styles.header__list}>
                        {isHome ?
                            <>
                                <li><NavLink to="/experience" onClick={(event) => { event.target.classList.toggle(styles.active); closeMenu(); }}>Experience</NavLink></li>
                                <li><NavLink to="/projects" onClick={(event) => { event.target.classList.toggle(styles.active); closeMenu(); }}>Projects</NavLink></li>
                                <li><NavLink to="/contact" onClick={(event) => { event.target.classList.toggle(styles.active); closeMenu(); }}>Contact</NavLink></li>
                            </> : <>
                                <li><NavLink to="/home" onClick={(event) => { event.target.classList.toggle(styles.active); closeMenu(); }}>Home</NavLink></li>
                                <li><NavLink to="/experience" onClick={(event) => { event.target.classList.toggle(styles.active); closeMenu(); }}>Experience</NavLink></li>
                                <li><NavLink to="/projects" onClick={(event) => { event.target.classList.toggle(styles.active); closeMenu(); }}>Projects</NavLink></li>
                                <li><NavLink to="/contact" onClick={(event) => { event.target.classList.toggle(styles.active); closeMenu(); }}>Contact</NavLink></li>
                            </>
                        }
                    </ul>
                    <button className={`${styles.button} ${styles.button__filled}`} type="button" onClick={onClickButton}>
                        <div className={styles.button__content}>
                            View Resume
                            <ArrowRightIcon fill="currentColor" />
                        </div>
                    </button>
                </nav>
            </header>
        </>
    );
};

export default Header;