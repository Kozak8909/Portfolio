import React from "react";
import styles from "./technical_card.module.scss";

const TechnicalCard = ({ title, items }) => {
    return (
        <div className={styles.technical_card}>
            <div className={styles.technical_card__header}>
                <h3 className={styles.technical_card__title}>{title}</h3>
            </div>
            <ul className='tech_pills'>
                {items.map((item) => (
                    <li className={`${styles.technical_card__pill} tech_pills__pill`} key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default TechnicalCard;