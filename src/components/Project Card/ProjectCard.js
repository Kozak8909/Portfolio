import React, { useState } from 'react';
import styles from './project_card.module.scss';
import { ReactComponent as LinkIcon } from '../../img/svg/Link-Icon.svg';

const CodeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" fill="currentColor" />
    </svg>
);

const ProjectCard = ({ image, tags, title, description, techStack, link }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={styles.projectCard}>
            <img src={image} alt={title} className={styles.projectCard__image} />
            <div className={styles.projectCard__content}>
                <div className={styles.projectCard__tags}>
                    {tags.map((tag, index) => (
                        <span key={index} className={`${styles.projectCard__tag} ${index === 0 ? styles['projectCard__tag--primary'] : styles['projectCard__tag--secondary']}`}>
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className={styles.projectCard__title}>{title}</h3>
                <div className={styles.projectCard__descriptionWrapper}>
                    <p className={`${styles.projectCard__description} ${isExpanded ? styles.expanded : ''}`}>{description}</p>
                    {description.length > 100 && (
                        <button
                            className={styles.projectCard__readMore}
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    )}
                </div>
                <div className={styles.projectCard__footer}>
                    <div className={styles.projectCard__tech_stack}>
                        {techStack.map((tech, index) => (
                            <div key={index} className={styles.projectCard__tech_circle}>
                                {tech.toUpperCase()}
                            </div>
                        ))}
                    </div>
                    <div className={styles.projectCard__actions}>
                        <CodeIcon />
                        <a href={link} className={styles.projectCard__link}><LinkIcon fill="#6B7280" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
