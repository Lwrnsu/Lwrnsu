import styles from '../../../components/ListStyle.module.css';
//TO BE IMPROVE: USE JSON FILE??? OR JS FILE WITH ARRAY AND OBJECT TO MAKE THIS EASY TO ADD DATA.
function ExperienceSection() {
    return (
        <section>
            <h3 className={styles.sectionTitle}>Experience</h3>
            <ul className={styles.listContainer}>
                <li className={styles.list}>
                    <h4 className={styles.listTitle}>Internship coming soon.</h4>
                    <div className={styles.listInfoContainer}>
                        <h5 className={styles.listOrganization}>Upcoming soon.</h5>
                        <h5 className={styles.listDate}>Expected: May 2027</h5>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default ExperienceSection;