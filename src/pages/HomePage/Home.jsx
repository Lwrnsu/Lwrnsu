import styles from './Home.module.css';
import Header from './Header/Header.jsx';
import AboutMe from './AboutMeSection/AboutMeSection.jsx';
import Education from './EducationSection/EducationSection.jsx';
import Experience from './ExperienceSection/ExperienceSection.jsx';
import Certification from './CertificationSection/CertificationSection.jsx';
import Project from './ProjectSection/ProjectSection.jsx';
import TechStack from './TechStackSection/TechStackSection.jsx';
import ContactInfo from './ContactInfoSection/ContactInfoSection.jsx';
import Footer from './Footer/Footer.jsx';

function Home() {
    return (
        <div className={styles.pageLayout}>
            <Header />
            <div className={styles.sectionLayout}>
                <AboutMe />
                <div className={styles.innerSectionLayout}>
                    <Education />
                    <Experience />
                    <Certification />
                </div>
            </div>
            <Project />
            <div className={styles.sectionLayout}>
                <TechStack />
                <ContactInfo />
            </div>
            <Footer />
        </div>
    )
}

export default Home