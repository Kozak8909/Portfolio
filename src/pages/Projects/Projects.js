import React, { useState } from 'react';
import styles from './projects.module.scss';
import ProjectCard from '../../components/Project Card/ProjectCard';
import ContactSection from '../../components/ContactSection/ContactSection';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ReactComponent as MobileIcon } from '../../img/svg/Mobile-Icon-Outlined.svg';
import { ReactComponent as WebIcon } from '../../img/svg/Web-Icon.svg';
import { projectsData } from '../../projects/projects';

const Projects = () => {
    const [filter, setFilter] = useState('All Projects');

    const filteredProjects = projectsData.filter(project =>
        filter === 'All Projects' || project.category === filter
    );

    return (
        <>
            <Header />
            <main className={`page-container ${styles.projects}`}>
                <section className={styles.projects__hero}>
                    <h1 className={`section-title ${styles.projects__title}`}>Selected <span className='highlight'>Work</span></h1>
                    <p className={styles.projects__subtitle}>
                        A curated collection of projects exploring web development and mobile apps. Each piece represents a unique challenge and
                        solution.
                    </p>
                </section>
                <section className={styles.projects__content}>
                    <div className={styles.projects__filter}>
                        <button className={`${styles.projects__filter__btn} ${filter === 'All Projects' ? styles.active : ''}`} onClick={() => setFilter('All Projects')}>All Projects</button>
                        <button className={`${styles.projects__filter__btn} ${filter === 'Web Dev' ? styles.active : ''}`} onClick={() => setFilter('Web Dev')}><WebIcon fill="#CBD5E1" width="16" height="16" />Web Dev</button>
                        <button className={`${styles.projects__filter__btn} ${filter === 'Mobile Apps' ? styles.active : ''}`} onClick={() => setFilter('Mobile Apps')}><MobileIcon fill="#CBD5E1" width="16" height="16" />Mobile Apps</button>
                    </div>
                    <div className={styles.projects__cards}>
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                image={project.image}
                                tags={project.tags}
                                title={project.title}
                                techStack={project.techStackShort}
                                description={project.description}
                                link={project.link}
                            />
                        ))}
                    </div>
                </section>
                <ContactSection
                    title="Have a project in mind?"
                    text={<>I'm currently available for freelance work and open to full-time opportunities.
                        <br /> Let's build something amazing together.</>}
                />
            </main >
            <Footer />
        </>
    );
};

export default Projects;