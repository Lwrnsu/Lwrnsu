import styles from './ContactInfoSection.module.css';

function ContactInfoSection() {
    return (
        <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Contact</h3>
            <ul className={styles.listContainer}>
                <li>
                    <a className={styles.list} href="mailto:jaylawrencedeluna.2007@gmail.com">Email</a>
                </li>
                <li>
                    <a className={styles.list} href="https://www.facebook.com/delunajaylawrence" target='_blank'>Facebook</a>
                </li>
                <li>
                    <a className={styles.list} href="https://www.instagram.com/https.lwrnsu" target='_blank'>Instagram</a>
                </li>
                <li>
                    <a className={styles.list} href="https://www.linkedin.com/in/delunajaylawrence" target='_blank'>LinkedIn</a>
                </li>
                <li>
                    <a className={styles.list} href="https://www.github.com/lwrnsu" target='_blank'>GitHub</a>
                </li>
            </ul>
        </section>
    )
}

export default ContactInfoSection;