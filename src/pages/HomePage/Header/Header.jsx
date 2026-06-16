import { useState } from 'react';

import styles from './Header.module.css';
import profile from '../../../assets/profile.jpg';
import hoveredProfile from '../../../assets/hoveredProfile.png';
import activeProfile from '../../../assets/activeProfile.png';

function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    return (
        <header className={styles.headerContainer}>
            <img className={styles.headerProfile} 
                onMouseEnter={() => setIsHovered(true)}
                onMouseDown={() => setIsClicked(true)}
                onMouseLeave={() => {
                    setIsClicked(false);
                    setIsHovered(false);
                }}
                src={ isClicked ? activeProfile : isHovered ? hoveredProfile : profile }
            />
            <div className={styles.headerInfoContainer}>
                <h1 className={styles.headerInfoName}>Jay Lawrence Santiago De Luna</h1>
                <a className={styles.headerInfoLocation} href='https://maps.app.goo.gl/B7nc9z6LreuLSuuJ8' target='_blank'>Lives in Olongapo City, Philippines.</a>
                <h2 className={styles.headerInfoCareer}>Full Stack AI Engineer.</h2>
                <ul className={styles.headerLinkContainer}>
                    <li>
                        <button className={`${styles.headerLink} ${styles.headerHighlightedLink}`}>Download CV.</button>
                    </li>
                    <li>
                        <button className={styles.headerLink}>Contact Information.</button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header