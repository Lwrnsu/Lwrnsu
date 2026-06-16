import styles from './AboutMeSection.module.css';

function AboutMeSection() {
    return (
        <section>
            <h3 className={styles.sectionTitle}>About Me</h3>
            <div className={styles.sectionParagraphContainer}>
                <p className={styles.sectionParagraph}>
                    Hello Visitors! I am Jay Lawrence Santiago De Luna, aspiring Full Stack AI Engineer. 
                    I'm currently studying at Gordon College as Bachelor of Science in Computer Science. 
                    As someone that is an aspiring Full Stack AI Engineer, I'm eager to learn everything that it takes to 
                    achieve the career that I want. I started learning programming in my high school days—Grade 10 to be precised. 
                    During those days, I didn't understand programming that much. I started learning using youtube tutorials as my resources. 
                    I fell into tutorial hell that led me into hiatus in learning programming. Later on I learned project based learning and AI, 
                    this led me into exponential growth in learning programming. With the use of AI, I boost my programming learning efficiently. 
                    With project based learning, I learned to build what I wanted to build for myself and for experiences.
                </p>
                <p className={styles.sectionParagraph}>
                    About myself, I have hobbies that always my routine in my daily life. My hobbies includes learning, playing games, 
                    watching movies and series, scrolling through social medias, and going out to feel the air. I made learning as my hobby 
                    so I have reasons to learn programming, this made me more knowledgeable in it. When I'm exhausted learning programming, I 
                    play games such as Mobile Legends: Bang Bang, Valorant, etc.. I also watch movies that I didn't yet watched or series that I'm deeply invested with. 
                    My genres are diverse as I wanted to watch different kinds of movies and series such as romance, thrill, etc.. 
                </p>
                <p className={styles.sectionParagraph}>
                    About my personality, I'm ambivert. When I interact with something new, I'm shy and more like professional. 
                    When I knew someone completely, I tend to become more extrovert when I'm around them. In terms of works and activities, 
                    I work more productive when there's pressure such as deadlines. I'm more a logical person rather than creative person, so 
                    in projects that includes art, I'm not that great. Lastly, I chose to become aspiring Full Stack AI Engineer mostly because 
                    of high-paying salary, always curious, and always trying to figure out things. 
                </p>
            </div>
        </section>
    )
}

export default AboutMeSection;