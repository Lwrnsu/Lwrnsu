import styles from '../../../components/ListStyle.module.css';

function CertificationSection() {
    return (
        <section>
            <h3 className={styles.sectionTitle}>Certification</h3>
            <ul className={styles.listContainer}>
                <li className={styles.list}>
                    <h4 className={styles.listTitle}>Certification coming soon.</h4>
                    <div className={styles.listInfoContainer}>
                        <h5 className={styles.listOrganization}>Upcoming soon.</h5>
                        <h5 className={styles.listDate}>No date expected.</h5>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default CertificationSection;