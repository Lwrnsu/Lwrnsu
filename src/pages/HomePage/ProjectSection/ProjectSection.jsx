import styles from './ProjectSection.module.css';

import useGetRepositories from '../../../hooks/useGetRepositories.js';
import Notification from '../../../components/Notification/Notification.jsx';
import { Link } from 'react-router-dom';

function ProjectSection() {
    const { status, repo, isLoading, error } = useGetRepositories();
    const dateFormat = { year: "numeric", month: "long", day: "numeric" };
    if (!isLoading && status === 200) repo.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    const loadingState = (<ul className={styles.listContainer}>
                    <li className={styles.list}>
                        <h4 className={styles.listTitleLoading}></h4>
                        <p className={styles.listDescriptionLoading}></p>
                        <div className={styles.listDateContainer}>
                            <h5 className={styles.listDateLoading}></h5>
                            <h5 className={styles.listDateLoading}></h5>
                        </div>
                    </li>
                    <li className={styles.list}>
                        <h4 className={styles.listTitleLoading}></h4>
                        <p className={styles.listDescriptionLoading}></p>
                        <div className={styles.listDateContainer}>
                            <h5 className={styles.listDateLoading}></h5>
                            <h5 className={styles.listDateLoading}></h5>
                        </div>
                    </li>
                    <li className={styles.list}>
                        <h4 className={styles.listTitleLoading}></h4>
                        <p className={styles.listDescriptionLoading}></p>
                        <div className={styles.listDateContainer}>
                            <h5 className={styles.listDateLoading}></h5>
                            <h5 className={styles.listDateLoading}></h5>
                        </div>
                    </li>
                </ul>);

    return (
        <section className={styles.sectionLayout}>
            <div className={styles.sectionTitleContainer}>
                <h3 className={styles.sectionTitle}>Recent Projects</h3>
                <Link to="/projects" className={styles.sectionSubTitle}>View more</Link>
            </div>
            { isLoading ? loadingState : status === 200 ?
                <ul className={styles.listContainer}>
                    {
                        repo.slice(0, 3).map((e, index) =>
                            <li className={styles.list} key={index}>
                                <h4 className={styles.listTitle}>{e.name}</h4>
                                <p className={styles.listDescription}>{e.description ? e.description : "No description available."}</p>
                                <div className={styles.listDateContainer}>
                                    <h5 className={styles.listDate}>Created at: {new Date(e.created_at).toLocaleDateString('en-US', dateFormat)}</h5>
                                    <h5 className={styles.listDate}>Last update: {new Date(e.updated_at).toLocaleDateString('en-US', dateFormat)}</h5>
                                </div>
                            </li>
                        )
                    }
                </ul> : (loadingState, <Notification status={status} error={error}/>)
            }
        </section>
    )
}

export default ProjectSection;