import styles from './EducationSection.module.css';

function EducationSection() {
    return (
        <section>
            <h3 className={styles.sectionTitle}>Education</h3>
            <ul className={styles.listContainer}>
                <li className={styles.list}>
                    <h4 className={styles.educationTitle}>BS in Computer Science</h4>
                    <div className={styles.educationInfoContainer}>
                        <h5 className={styles.educationCollege}>GORDON COLLEGE</h5>
                        <h5 className={styles.educationDate}>August 2025 - Expected: May 2028</h5>
                    </div>
                </li>
                <li className={styles.list}>
                    <h4 className={styles.educationTitle}>STEM Graduate</h4>
                    <div className={styles.educationInfoContainer}>
                        <h5 className={styles.educationCollege}>St. Joseph College Olongapo Inc.</h5>
                        <h5 className={styles.educationDate}>2023 - 2025</h5>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default EducationSection;