import styles from './App.module.css';
import Header from './pages/HomePage/Header/Header.jsx';
import AboutMe from './pages/HomePage/AboutMeSection/AboutMeSection.jsx';
import Education from './pages/HomePage/EducationSection/EducationSection.jsx';
import Experience from './pages/HomePage/ExperienceSection/ExperienceSection.jsx';
import Certification from './pages/HomePage/CertificationSection/CertificationSection.jsx';
import Project from './pages/HomePage/ProjectSection/ProjectSection.jsx';
import TechStack from './pages/HomePage/TechStackSection/TechStackSection.jsx';
import ContactInfo from './pages/HomePage/ContactInfoSection/ContactInfoSection.jsx';
import Footer from './pages/HomePage/Footer/Footer.jsx';

function App() {
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

export default App
