import React from 'react';
import { useNavigate } from 'react-router';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './home.module.scss';
import MyImage from '../../img/MyImage.jpg';
import EmblaCarousel from '../../components/Carousel/Carousel';
import TechnicalCard from '../../components/Technical Card (Home)/TechnicalCard';
import ContactSection from '../../components/ContactSection/ContactSection';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header isHome={true} />
            <main>
                <section className={styles.hero}>
                    <div className={styles.hero__content}>
                        <h1 className={styles.hero__title}>Building Digital <span className='highlight'>Experiences</span> that Matter.</h1>
                        <p className={styles.hero__text}>Full-Stack Web & Mobile Developer specializing in React, Node, and other languages. Driven by passion and curiosity, I turn complex problems into elegant, scalable solutions. </p>
                        <div className={styles.hero__button_container}>
                            <button className="button button__filled" onClick={() => { navigate('/projects') }}>View My Work</button>
                            <button className="button button__outlined" onClick={() => { navigate('/contact') }}>Contact Me</button>
                        </div>
                    </div>
                    <div className={styles.hero__image}>
                        <img src={MyImage} alt="code" width={620} height={465} />
                    </div>
                </section>
                <section className={styles.projects_section}>
                    <div className={styles.projects_section__header}>
                        <h1 className={"section-title"}>Featured Projects</h1>
                        <p className={styles.projects_section__text}>A collection of my recent work, showcasing my skills in web and mobile development.</p>
                    </div>
                    <EmblaCarousel />
                </section>
                <section className={styles.technical_section}>
                    <h1 className={"section-title"}>Technical Expertise</h1>
                    <div className={styles.technical_section__container}>
                        <TechnicalCard title="Frontend" listItems={["React/Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "SCSS", "Liquid"]} />
                        <TechnicalCard title="Web Development" listItems={["Shopify"]} />
                        <TechnicalCard title="Backend" listItems={["Node.js", "Express.js", "Python", "Django"]} />
                        <TechnicalCard title="Databases" listItems={["PostgreSQL", "MySQL", "SQLite", "MongoDB"]} />
                        <TechnicalCard title="Mobile" listItems={["React Native"]} />
                        <TechnicalCard title="DevOps" listItems={["Docker", "CI/CD", "Git"]} />
                    </div>
                </section>
                <ContactSection
                    title="Ready to start your next project?"
                    text={<>Let's build something amazing together.</>}
                />
            </main>
            <Footer />
        </>
    );
};

export default Home;