import styles from './TechStackSection.module.css';

function TechStackSection() {
    const data = [
        {
            name: "Languages & Frameworks",
            list: ["HTML", "CSS", "JavaScript", "React", "Java", "Spring", "SQL"]
        },
        {
            name: "Database",
            list: ["MySQL", "SQLite"]
        },
        {
            name: "Tools",
            list: ["Git", "Vercel", "VSCode", "IntelliJ IDEA Ultimate"]
        },
        {
            name: "Soft Skills",
            list: ["Fast Learner", "Adaptability"]
        }
    ];

    return (
        <section>
            <h3 className={styles.sectionTitle}>Skills</h3>
            <div className={styles.sectionContentContainer}>
                {
                    data.map((e, index) => (
                        <div className={styles.sectionContent} key={index}>
                            <h4 className={styles.sectionContentTitle}>{e.name}</h4>
                            <ul className={styles.listContainer}>
                                {e.list.map((f, index) => (
                                    <li className={styles.list} key={index}>{f}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default TechStackSection;