import React, { useState } from 'react';
import styles from './experience_card.module.scss';

const ExperienceCard = ({ title, company, date, description, stack }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={styles.experience_card}>
            <div className={styles.experience_card__header}>
                <div className={styles.experience_card__header_main}>
                    <h3 className={styles.experience_card__title}>{title}</h3>
                    <p>{company}</p>
                </div>
                <div className={styles.experience_card__date}>{date}</div>
            </div>

            <div className={styles.experience_card__descriptionWrapper}>
                <p className={`${styles.experience_card__description} ${isExpanded ? styles.expanded : ''}`}>
                    {description}
                </p>
                {description && description.length > 100 && (
                    <button
                        className={styles.experience_card__readMore}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                )}
            </div>

            <ul className='tech_pills'>
                {stack.map((item) => (
                    <li className='tech_pills__pill' key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceCard;