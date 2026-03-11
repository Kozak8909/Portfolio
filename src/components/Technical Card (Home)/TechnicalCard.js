import React from "react";
import styles from "./technical_card.module.scss";
import { ReactComponent as FrontendIcon } from "../../img/svg/Frontend-Icon.svg";
import { ReactComponent as BackendIcon } from "../../img/svg/Backend-Icon.svg";
import { ReactComponent as MobileIcon } from "../../img/svg/Mobile-Icon-Filled.svg";
import { ReactComponent as DatabaseIcon } from "../../img/svg/Database-Icon.svg";
import { ReactComponent as WebDevelopmentIcon } from "../../img/svg/WebDev-Icon.svg";
import { ReactComponent as DevOpsIcon } from "../../img/svg/DevOps-Icon.svg";

const TechnicalCard = ({ title, listItems }) => {
    return (
        <div className={styles.technical_card}>
            <div className={styles.technical_card__header}>
                {title === "Frontend" ? <FrontendIcon fill="#13EC5B" />
                    : title === "Backend" ? <BackendIcon fill="#13EC5B" />
                        : title === "Mobile" ? <MobileIcon fill="#13EC5B" />
                            : title === "Web Development" ? <WebDevelopmentIcon fill="#13EC5B" />
                                : title === "Databases" ? <DatabaseIcon fill="#13EC5B" />
                                    : title === "DevOps" ? <DevOpsIcon fill="#13EC5B" />
                                        : null}
                <h1 className={styles.technical_card__title}>{title}</h1>
            </div>
            <ul className={styles.technical_card__list}>
                {listItems.map((item, index) => (
                    <li className={styles.technical_card__list__item} key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default TechnicalCard;
