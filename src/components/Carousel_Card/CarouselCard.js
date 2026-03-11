import React from 'react';
import styles from './carousel_card.module.scss';
import { ReactComponent as LinkIcon } from '../../img/svg/Link-Icon.svg';

const CarouselCard = ({ title, description, badge, image, link, techStack = [] }) => {
    return (
        <div className={`${styles.card} embla__slide`}>
            <div className={styles.card__imageContainer}>
                <img className={styles.card__image} src={image} alt={title} />
            </div>
            <div className={styles.card__content}>
                <div className={styles.card__header_container}>
                    <h3 className={styles.card__title}>{title}</h3>
                    <p className={styles.card__badge}>{badge}</p>
                    <a href={link} className={styles.card__link}>
                        <LinkIcon fill="#6B7280" className={styles.card__linkIcon} />
                    </a>
                </div>
                <p className={styles.card__description}>{description}</p>

                {techStack.length > 0 && (
                    <ul className='tech_pills'>
                        {techStack.map((tech, index) => (
                            <li key={index} className='tech_pills__pill'>
                                {tech}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default CarouselCard;
