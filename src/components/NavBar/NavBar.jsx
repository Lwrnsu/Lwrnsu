import styles from './NavBar.module.css'

export function NavBar() {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigation__container}>
                <li className={styles.navigation__link, styles.active}>Home</li>
                <li className={styles.navigation__link}>Overview</li>
                <li className={styles.navigation__link}>Skills</li>
                <li className={styles.navigation__link}>Projects</li>
                <li className={styles.navigation__link}>Contact</li>
            </ul>
        </nav>
    )
}