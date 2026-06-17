import styles from '../../../components/ListStyle.module.css';

function EducationSection() {
    return (
        <section>
            <h3 className={styles.sectionTitle}>Education</h3>
            <ul className={styles.listContainer}>
                <li className={styles.list}>
                    <h4 className={styles.listTitle}>BS in Computer Science</h4>
                    <div className={styles.listInfoContainer}>
                        <h5 className={styles.listOrganization}>GORDON COLLEGE</h5>
                        <h5 className={styles.listDate}>August 2025 - Expected: May 2028</h5>
                    </div>
                </li>
                <li className={styles.list}>
                    <h4 className={styles.listTitle}>STEM Graduate</h4>
                    <div className={styles.listInfoContainer}>
                        <h5 className={styles.listOrganization}>St. Joseph College Olongapo Inc.</h5>
                        <h5 className={styles.listDate}>2023 - 2025</h5>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default EducationSection;