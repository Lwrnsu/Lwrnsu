import styles from './ProjectSection.module.css';

function ProjectSection() {
    return (
        <section className={styles.sectionLayout}>
            <h3 className={styles.sectionTitle}>Projects</h3>
            <ul className={styles.listContainer}>
                <li className={styles.list}>
                    <div className={styles.listImg}></div>
                    <div className={styles.listInfoContainer}>
                        <h4 className={styles.listTitle}>Project Title.</h4>
                        <p className={styles.listDescription}>This is the description of the project. It contains the description that was inserted into Github Repository. Well, this sentence is just to make it overflow to check the text style.</p>
                        <div className={styles.listDateContainer}>
                            <h5 className={styles.listDate}>Created at: June 17, 2026</h5>
                        <h5 className={styles.listDate}>Last update: June 17, 2026</h5>
                        </div>
                    </div>
                </li>
                <li className={styles.list}>
                    <div className={styles.listImg}></div>
                    <div className={styles.listInfoContainer}>
                        <h4 className={styles.listTitle}>Project Title.</h4>
                        <p className={styles.listDescription}>This is the description of the project. It contains the description that was inserted into Github Repository.</p>
                        <div className={styles.listDateContainer}>
                            <h5 className={styles.listDate}>Created at: June 17, 2026</h5>
                            <h5 className={styles.listDate}>Last update: June 17, 2026</h5>
                        </div>
                    </div>
                </li>
                <li className={styles.list}>
                    <div className={styles.listImg}></div>
                    <div className={styles.listInfoContainer}>
                        <h4 className={styles.listTitle}>Project Title.</h4>
                        <p className={styles.listDescription}>This is the description of the project. It contains the description that was inserted into Github Repository.</p>
                        <div className={styles.listDateContainer}>
                            <h5 className={styles.listDate}>Created at: June 17, 2026</h5>
                        <h5 className={styles.listDate}>Last update: June 17, 2026</h5>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default ProjectSection;