import { useState, useEffect } from 'react';
import getRepository from './api/getRepository.js';

import styles from './App.module.css';
import Header from './pages/HomePage/Header/Header.jsx';
import AboutMe from './pages/HomePage/AboutMeSection/AboutMeSection.jsx';
import Education from './pages/HomePage/EducationSection/EducationSection.jsx';
import Experience from './pages/HomePage/ExperienceSection/ExperienceSection.jsx';
import Certification from './pages/HomePage/CertificationSection/CertificationSection.jsx';
import Project from './pages/HomePage/ProjectSection/ProjectSection.jsx';

function App() {

  const [repo, setRepo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


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
    </div>
  )
}

export default App
