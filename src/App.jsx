import styles from './App.module.css';
import Header from './pages/HomePage/Header/Header.jsx';
import AboutMe from './pages/HomePage/AboutMeSection/AboutMeSection.jsx';
import Education from './pages/HomePage/EducationSection/EducationSection.jsx';

function App() {
  return (
    <div className={styles.pageLayout}>
      <Header />
      <div className={styles.sectionLayout}>
        <AboutMe />
        <Education />
      </div>
    </div>
  )
}

export default App
