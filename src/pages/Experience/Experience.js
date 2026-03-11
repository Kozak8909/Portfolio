import { useNavigate } from 'react-router';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TechnicalCard from '../../components/Technical Card (Experience)/TechnicalCard';
import ExperienceCard from '../../components/Experience Card/ExperienceCard';
import { ReactComponent as LetterIcon } from '../../img/svg/Letter-Icon.svg';
import { ReactComponent as ExpIcon } from '../../img/svg/Exp-Icon.svg';
import { ReactComponent as TechIcon } from '../../img/svg/Console-Icon.svg';
import styles from './experience.module.scss';

const Experience = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header isHome={false} />
            <main>
                <div className="page-container">
                    <section className={styles.hero}>
                        <div className={styles.hero__content}>
                            <h1 className={`section-title ${styles.hero__title}`}>My Journey & <span className='highlight'>Capabilities</span></h1>
                            <p className={styles.hero__subtitle}>A timeline of my professional career, technical skills, and the milestones that have shaped me into the developer I am today.</p>
                        </div>
                        <button className="button button__filled" onClick={() => navigate('/contact')}><span className='nowrap'><LetterIcon fill="currentColor" /> Contact Me</span> </button>
                    </section>
                    <div className={styles.content_container}>
                        <section className={styles.experience}>
                            <div className={styles.experience__header}>
                                <h2 className='section-title'><ExpIcon fill="#13EC5B" width={24} height={24} /> My Path</h2>
                            </div>
                            <div className={styles.timeline}>
                                <ExperienceCard title={'Freelance Web Developer'} company={'Self-Employed'} date={'2025 - Present'} description={'Work on e-commerce platforms using Shopify, Liquid, JS, and CSS. Successfully developed custom web experiences for clients across various industries. Focused on building scalable, user-centric solutions that drive business growth.'} stack={['Shopify', 'Liquid', 'CSS', 'JavaScript']} />
                                <ExperienceCard title={'Full-Stack Developer'} company={'Self-Studied'} date={'2024 - Present'} description={'Work on various projects ranging from web applications to mobile applications. Focused on building scalable, responsive, and user-centric solutions. Working to develop my skills with passion and dedication.'} stack={['HTML', 'CSS', 'SCSS', 'Tailwind CSS', 'JavaScript', 'React', 'React Native', 'Node.js', 'Express', 'C#', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Git', 'Figma']} />
                                <ExperienceCard title={'University Student'} company={'Collegium Da Vinci'} date={'2024 - Present'} description={'Currently pursuing a Bachelor of Science in Computer Science, specializing in Frontend and Backend Development. A path of self-discovery and growth. Starting from scratch and C++ to React, from game development, software engineering to Web/Mobile Development. I found my passion and perfecting myself every day.'} stack={['C++', 'C#', 'Python', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 'React', 'Git', 'Figma', 'PostgreSQL', 'MongoDB']} />
                            </div>
                        </section>
                        <section className={styles.stack}>
                            <div className={styles.stack__header}>
                                <h2 className='section-title'><TechIcon fill="#13EC5B" width={24} height={24} /> Tech Stack</h2>
                            </div>
                            <div className={styles.stack__content}>
                                <TechnicalCard title={'Frontend'} items={['HTML', 'CSS', 'SCSS', 'Tailwind CSS', 'JavaScript', 'React', 'React Native', 'Next.js']} />
                                <TechnicalCard title={'Backend'} items={['Node.js', 'Express', 'Python', 'Django', 'C#', 'PostgreSQL', 'MongoDB']} />
                                <TechnicalCard title={'DevOps & Tools'} items={['Git', 'Docker', 'Figma']} />
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Experience;
